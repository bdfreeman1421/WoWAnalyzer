import Analyzer, { SELECTED_PLAYER, Options } from 'parser/core/Analyzer';
import SPELLS from 'common/SPELLS';
import Events, { CastEvent, EnergizeEvent } from 'parser/core/Events';
import Statistic from 'interface/statistics/Statistic';
import STATISTIC_ORDER from 'interface/STATISTIC_ORDER';
import STATISTIC_CATEGORY from 'interface/STATISTIC_CATEGORY';
import React from 'react';
import BoringSpellValue from 'interface/statistics/BoringSpellValue';
import { formatNumber } from 'common/format';

/**
 * Analyzer to track additional and wasted Holy Power from Sanctified Wrath for Protection Paladins.
 */
class SanctifiedWrathProtJudgement extends Analyzer {
    buffedJudgements: number = 0;
    holyPowerWastes: number[] = [];
    CRIT_NO_HA_CHANGE = 4;
    CRIT_YES_HA_CHANGE = 6;
    MAX_HOLY_POWER = 5;

    constructor(options: Options) {
        super(options);
        this.active = this.selectedCombatant.hasTalent(SPELLS.SANCTIFIED_WRATH_TALENT_PROTECTION.id);
        if (!this.active) {
            return;
        }

        this.addEventListener(Events.cast.by(SELECTED_PLAYER).spell(SPELLS.JUDGMENT_CAST_PROTECTION), this.trackJudgmentCasts);
        this.addEventListener(Events.energize.by(SELECTED_PLAYER), this.trackedWastedJudgmentHP);
    }

    trackJudgmentCasts(event: CastEvent) {
        if (this.selectedCombatant.hasBuff(SPELLS.AVENGING_WRATH.id)) {
            this.buffedJudgements += 1;
        }
    }

    trackedWastedJudgmentHP(event: EnergizeEvent) {
        const hasAW: boolean = this.selectedCombatant.hasBuff(SPELLS.AVENGING_WRATH.id);

        const judgementSource: boolean = event.ability.guid === SPELLS.JUDGMENT_HP_ENERGIZE.id;
        const wastedHolyPower: boolean = event.waste !== null && event.waste !== undefined && event.waste > 0;
        if (hasAW && judgementSource) {
            const wasteDueToSanctifiedWrath: number = this.wasteDueToSanctifiedWrath(event);
            if (wastedHolyPower && wasteDueToSanctifiedWrath !== 0) {
                this.holyPowerWastes.push(wasteDueToSanctifiedWrath);
            }
        }
    }

    /**
     * Judgement can grant any of the following values of HP during Avenging Wrath:
     * 2 - non-crit with no Holy Avenger Buff
     * 4 - crit with no Holy Avenger Buff
     * 3 - non-crit with Holy Avenger Buff
     * 6 - crit with Holy Avenger Buff
     *
     * To consider the wasted holy power generation to be due to a bad Judgement during Avenging Wrath,
     * the spell must not be a crit with HA up (wasted HP no matter what), the cast must not have been made with >3 HP on
     * a non-HA cast (crits are random so we let the wasted HP slide), or the cast must not have been made with >2 HP on a
     * HA cast.
     * @param event
     * @returns Number of wasted Holy Power due to Sanctified Wrath talent.
     */
    wasteDueToSanctifiedWrath(event: EnergizeEvent): number {
        const hasHA: boolean = this.selectedCombatant.hasBuff(SPELLS.HOLY_AVENGER_TALENT.id);
        const hpChange: number = event.resourceChange;
        const preCastHP = this.MAX_HOLY_POWER - (hpChange - event.waste);
        const wasCrit: boolean = (hpChange === this.CRIT_NO_HA_CHANGE || hpChange === this.CRIT_YES_HA_CHANGE);
        if ((hasHA && !wasCrit && preCastHP > 2) || (!hasHA && preCastHP > 3)) {
            return event.waste;
        } else {
            return 0;
        }
    }

    statistic() {
        const totalWastedHP = this.holyPowerWastes.reduce((sum, current) => sum + current, 0);
        const bonusHP = (this.buffedJudgements * 2) - totalWastedHP;
        return (
            <Statistic
                position={STATISTIC_ORDER.DEFAULT}
                size="flexible"
                category={STATISTIC_CATEGORY.TALENTS}
                tooltip={
                    <>
                        <b>{this.buffedJudgements * 2}</b> total additional Holy Power generated by Sanctified Wrath.<br />
                        <b>{totalWastedHP}</b> additional Holy Power wasted by overcapping.
                    </>
                }
            >
                <BoringSpellValue
                    spell={SPELLS.SANCTIFIED_WRATH_TALENT_PROTECTION}
                    value={formatNumber(bonusHP)}
                    label="Extra Holy Power"
                />
            </Statistic>
        );
    }
}

export default SanctifiedWrathProtJudgement;
