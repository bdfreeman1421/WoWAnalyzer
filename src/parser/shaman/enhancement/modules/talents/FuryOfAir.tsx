import React from 'react';
import SPELLS from 'common/SPELLS/index';
import { formatPercentage } from 'common/format';

import Analyzer from 'parser/core/Analyzer';

import Statistic from 'interface/statistics/Statistic';
import { Trans } from '@lingui/macro';
import STATISTIC_ORDER from 'interface/others/STATISTIC_ORDER';
import BoringSpellValue
  from 'interface/statistics/components/BoringSpellValue';
import STATISTIC_CATEGORY
  from '../../../../../interface/others/STATISTIC_CATEGORY';
import SpellIcon from '../../../../../common/SpellIcon';
import BoringSpellValueText
  from '../../../../../interface/statistics/components/BoringSpellValueText';

class FuryOfAir extends Analyzer {

  /**
   *  Creates a vortex of wind 8 yards around you, dealing
   *  [(5.25% of Attack power) * ((Attack power + Offhand attack power)
   *  * 2 / 3) / Attack power] Nature damage every 1 sec to enemies caught
   *  in the storm, and slowing them by 30% for 3 sec.
   *
   *  Example Log: https://www.warcraftlogs.com/reports/Qy6L32Jjxtqvpf7r/#fight=18&source=17
   */

  constructor(options: any) {
    super(options);
    this.active
      = this.selectedCombatant.hasTalent(SPELLS.FURY_OF_AIR_TALENT.id);
  }

  get furyOfAirUptime() {
    return this.selectedCombatant.getBuffUptime(SPELLS.FURY_OF_AIR_TALENT.id) /
      this.owner.fightDuration;

  }

  get furyOfAirTresholds() {
    return {
      actual:
      this.furyOfAirUptime,
      isLessThan: {
        minor: 0.95,
        average: 0.95,
        major: 0.9,
      },
      style: 'number',
    };
  }

  suggestions(when: any) {
    when(this.furyOfAirTresholds)
      .addSuggestion(
        (suggest: any, actual: any, recommended: any) => {
          return suggest(
            <Trans>
              Try to make sure the Fury of Air is always up, when it drops you should refresh it as soon as possible
            </Trans>,
          )
            .icon(SPELLS.FURY_OF_AIR_TALENT.icon)
            .actual(
              <Trans>
                {formatPercentage(actual)}% uptime
              </Trans>,
            )
            .recommended(
              <Trans>
                {formatPercentage(recommended, 0)}% is recommended
              </Trans>,
            );
        },
      );
  }

  statistic() {
    return (
      <Statistic
        position={STATISTIC_ORDER.OPTIONAL(15)}
        size="flexible"
        icon={<SpellIcon id={SPELLS.FURY_OF_AIR_TALENT.id} />}
        category={STATISTIC_CATEGORY.TALENTS}
        label="Fury Of Air"
      >
        <BoringSpellValueText spell={SPELLS.FURY_OF_AIR_TALENT}>
          <>
            {formatPercentage(this.furyOfAirUptime)}% uptime
          </>
        </BoringSpellValueText>
      </Statistic>
    );
  }
}

export default FuryOfAir;
