import SPELLS from 'common/SPELLS';
import Analyzer, { Options, SELECTED_PLAYER } from 'parser/core/Analyzer';
import { calculateEffectiveDamage } from 'parser/core/EventCalculateLib';
import Events, { DamageEvent } from 'parser/core/Events';
import Haste from 'parser/shared/modules/Haste';
import SpellUsable from 'parser/shared/modules/SpellUsable';
import BoringSpellValueText from 'parser/ui/BoringSpellValueText';
import ItemDamageDone from 'parser/ui/ItemDamageDone';
import Statistic from 'parser/ui/Statistic';
import STATISTIC_CATEGORY from 'parser/ui/STATISTIC_CATEGORY';
import STATISTIC_ORDER from 'parser/ui/STATISTIC_ORDER';

const HOT_HAND = {
  INCREASE: 1.0,
};

/**
 * Melee auto-attacks with Flametongue Weapon active have a 5% chance to
 * reduce the cooldown of Lava Lash by 75% and increase the damage of
 * Lava Lash by 100% for 8 sec.
 *
 * Example Log:
 *
 */
class HotHand extends Analyzer {
  static dependencies = {
    spellUsable: SpellUsable,
    haste: Haste,
  };
  protected spellUsable!: SpellUsable;
  protected haste!: Haste;

  protected buffedLavaLashDamage: number = 0;

  constructor(options: Options) {
    super(options);

    this.active = this.selectedCombatant.hasTalent(SPELLS.HOT_HAND_TALENT.id);

    this.addEventListener(
      Events.applybuff.by(SELECTED_PLAYER).spell(SPELLS.HOT_HAND_BUFF),
      this.reduceLavaLushCDOnBuff,
    );

    this.addEventListener(
      Events.cast.by(SELECTED_PLAYER).spell(SPELLS.LAVA_LASH),
      this.reduceLavaLushCDOnCast,
    );

    this.addEventListener(
      Events.removebuff.by(SELECTED_PLAYER).spell(SPELLS.HOT_HAND_BUFF),
      this.restoreLavaLushCDRemoveBuff,
    );

    this.addEventListener(
      Events.damage.by(SELECTED_PLAYER).spell(SPELLS.LAVA_LASH),
      this.onLavaLashDamage,
    );
  }

  calcLavaLushCd75pct() {
    return (9 / (1 + this.haste.current)) * 1000;
  }

  reduceLavaLushCDOnBuff() {
    if (this.spellUsable.isOnCooldown(SPELLS.LAVA_LASH.id)) {
      this.spellUsable.reduceCooldown(SPELLS.LAVA_LASH.id, this.calcLavaLushCd75pct());
    }
  }

  reduceLavaLushCDOnCast() {
    if (this.selectedCombatant.hasBuff(SPELLS.HOT_HAND_BUFF.id)) {
      this.reduceLavaLushCDOnBuff();
    }
  }

  restoreLavaLushCDRemoveBuff() {
    if (this.spellUsable.isOnCooldown(SPELLS.LAVA_LASH.id)) {
      this.spellUsable.cooldownRemaining(SPELLS.LAVA_LASH.id);
    }
  }

  onLavaLashDamage(event: DamageEvent) {
    if (!this.selectedCombatant.hasBuff(SPELLS.HOT_HAND_BUFF.id)) {
      return;
    }

    this.buffedLavaLashDamage += calculateEffectiveDamage(event, HOT_HAND.INCREASE);
  }

  statistic() {
    return (
      <Statistic
        position={STATISTIC_ORDER.OPTIONAL()}
        size="flexible"
        category={STATISTIC_CATEGORY.TALENTS}
      >
        <BoringSpellValueText spellId={SPELLS.HOT_HAND_TALENT.id}>
          <>
            <ItemDamageDone amount={this.buffedLavaLashDamage} />
            <br />
          </>
        </BoringSpellValueText>
      </Statistic>
    );
  }
}

export default HotHand;
