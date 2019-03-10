import React from 'react';
import Analyzer, { SELECTED_PLAYER } from 'parser/core/Analyzer';
import { formatNumber } from 'common/format';
import SPELLS from 'common/SPELLS/index';
import TraitStatisticBox, { STATISTIC_ORDER } from 'interface/others/TraitStatisticBox';
import ItemHealingDone from 'interface/others/ItemHealingDone';
import Events from 'parser/core/Events';



/**
 * Grace of the Justicar
 * Judging a foe heals up to 10 allies within 8 yards of that enemy for 899. (@iLvl 400)
 * Example Log: https://www.warcraftlogs.com/reports/kMbVanmJwCg7WrAz#fight=last&type=summary&source=2
 */
class GraceOfTheJusticar extends Analyzer {
  healing = 0;
  targetsHit = 0;
  beaconTransfer = 0;
  casts = 0;

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasTrait(SPELLS.GRACE_OF_THE_JUSTICAR_TRAIT.id);
    if (!this.active) {
      return;
    }
    this.addEventListener(Events.cast.by(SELECTED_PLAYER).spell(SPELLS.JUDGMENT_CAST_ALT), this.onCast);
    this.addEventListener(Events.heal.by(SELECTED_PLAYER).spell(SPELLS.GRACE_OF_THE_JUSTICAR), this.onHeal);
    //this.addEventListener(Events.beacontransfer.by(SELECTED_PLAYER).originalHeal(SPELLS.GRACE_OF_THE_JUSTICAR), this.onBeaconTransfer);
  }

  onBeaconTransfer(event) {
    const spellId = event.originalHeal.ability.guid;
    if (spellId !== SPELLS.GRACE_OF_THE_JUSTICAR.id) {
      return;
    }
    this.beaconTransfer += event.amount + (event.absorbed || 0);
  }

  onCast(event) {
    this.casts += 1;
  }

  onHeal(event) {
    this.healing += event.amount + (event.absorbed || 0);
    this.targetsHit += 1;
  }

  get playersHitPerCast() {
    return (this.targetsHit / this.casts) || 0;
  }
  get totalHealing() {
    return this.healing + this.beaconTransfer;
  }

  statistic() {
    return (
      <TraitStatisticBox
        position={STATISTIC_ORDER.OPTIONAL()}
        trait={SPELLS.GRACE_OF_THE_JUSTICAR.id}
        value={(
          <>
            <ItemHealingDone amount={this.totalHealing} /><br />
            {this.playersHitPerCast.toFixed(1)} players hit per judgement.
          </>
        )}
        tooltip={`
          Total healing done: <b>${formatNumber(this.totalHealing)}</b><br />
          Becon Transfer: ${formatNumber(this.beaconTransfer)}
        `}
      />
    );
  }
}

export default GraceOfTheJusticar;
