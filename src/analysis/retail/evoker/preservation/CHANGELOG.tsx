import { change, date } from 'common/changelog';
import SPELLS from 'common/SPELLS';
import { TALENTS_EVOKER } from 'common/TALENTS';
import { ToppleTheNun, Trevor, Tyndi, Vohrr } from 'CONTRIBUTORS';
import { SpellLink } from 'interface';

export default [
  change(date(2023, 7, 11), <>Fix <SpellLink spell={TALENTS_EVOKER.REGENERATIVE_MAGIC_TALENT}/></>, Trevor),
  change(date(2023, 7, 11), <>Update modules for 10.1.5</>, Trevor),
  change(date(2023, 7, 3), 'Update SpellLink usage.', ToppleTheNun),
  change(date(2023, 6, 9), <>Add Cooldowns tab</>, Trevor),
  change(date(2023, 5, 24), <>Add <SpellLink spell={TALENTS_EVOKER.NOZDORMUS_TEACHINGS_TALENT}/> module</>, Trevor),
  change(date(2023, 5, 23), <>Improve accuracy of 4 piece module</>, Trevor),
  change(date(2023, 5, 19), <>Fix mana cost for <SpellLink spell={TALENTS_EVOKER.ECHO_TALENT}/></>, Trevor),
  change(date(2023, 5, 12), <>Fix bug in guide for <SpellLink spell={TALENTS_EVOKER.LIFEBIND_TALENT}/> checks</>, Trevor),
  change(date(2023, 5, 11), <>Fix <SpellLink spell={TALENTS_EVOKER.DREAM_BREATH_TALENT}/> and <SpellLink spell={TALENTS_EVOKER.SPIRITBLOOM_TALENT}/> modules</>, Trevor),
  change(date(2023, 5, 8), <>Fix bug in guide for <SpellLink spell={TALENTS_EVOKER.EMERALD_COMMUNION_TALENT}/> checks</>, Trevor),
  change(date(2023, 5, 6), <>Add complete version of guide</>, Trevor),
  change(date(2023, 5, 6), <>Add basic guide</>, Trevor),
  change(date(2023, 4, 27), <>Change load conditions for <SpellLink spell={TALENTS_EVOKER.REVERSION_TALENT}/> efficiency bar</>, Trevor),
  change(date(2023, 4, 14), <>Add T30 tier set module</>, Trevor),
  change(date(2023, 3, 24), <>Disable <SpellLink spell={TALENTS_EVOKER.ECHO_TALENT}/> statistics when no casts</>, Trevor),
  change(date(2023, 3, 23), <>Fix bug in <SpellLink spell={TALENTS_EVOKER.STASIS_TALENT}/> due to poor logging</>, Trevor),
  change(date(2023, 3, 22), <>Update average stacks in <SpellLink spell={TALENTS_EVOKER.OUROBOROS_TALENT}/> module</>, Trevor),
  change(date(2023, 3, 22), <>Add average stacks to <SpellLink spell={TALENTS_EVOKER.OUROBOROS_TALENT}/> module</>, Trevor),
  change(date(2023, 3, 22), <>Update <SpellLink spell={TALENTS_EVOKER.LIFEBIND_TALENT}/> suggestions based on nerfs</>, Trevor),
  change(date(2023, 3, 21), <>Add <SpellLink spell={SPELLS.EMERALD_BLOSSOM_CAST}/> healing to <SpellLink spell={TALENTS_EVOKER.OUROBOROS_TALENT}/> module</>, Trevor),
  change(date(2023, 3, 21), <>Bump support to 10.0.7</>, Trevor),
  change(date(2023, 3, 21), <>Add <SpellLink spell={TALENTS_EVOKER.OUROBOROS_TALENT}/> talent</>, Trevor),
  change(date(2023, 3, 17), <>Fix prepull <SpellLink spell={TALENTS_EVOKER.STASIS_TALENT}/> logic</>, Trevor),
  change(date(2023, 3, 15), <>Add cast efficiency suggestion for <SpellLink spell={TALENTS_EVOKER.STASIS_TALENT}/></>, Trevor),
  change(date(2023, 3, 11), <>Improve <SpellLink spell={TALENTS_EVOKER.ECHO_TALENT}/> breakdown chart</>, Trevor),
  change(date(2023, 2, 14), <>Fix <SpellLink spell={TALENTS_EVOKER.CALL_OF_YSERA_TALENT}/> module when talented into <SpellLink spell={TALENTS_EVOKER.FONT_OF_MAGIC_PRESERVATION_TALENT}/></>, Trevor),
  change(date(2023, 2, 9), <>Fix <SpellLink spell={TALENTS_EVOKER.EMERALD_COMMUNION_TALENT}/> analysis breaking.</>, ToppleTheNun),
  change(date(2023, 2, 3), <>Change <SpellLink spell={TALENTS_EVOKER.EMERALD_COMMUNION_TALENT}/> module to only count missing <SpellLink spell={TALENTS_EVOKER.LIFEBIND_TALENT}/> on targets you have healed recently</>, Trevor),
  change(date(2023, 1, 30), <>Fix mana cost for <SpellLink spell={TALENTS_EVOKER.ECHO_TALENT}/></>, Trevor),
  change(date(2023, 1, 29), <>Fix <SpellLink spell={TALENTS_EVOKER.SPARK_OF_INSIGHT_TALENT}/> module</>, Trevor),
  change(date(2023, 1, 29), <>Fix degraded experience</>, Trevor),
  change(date(2023, 1, 28), <>Add <SpellLink spell={TALENTS_EVOKER.SPARK_OF_INSIGHT_TALENT}/> module</>, Trevor),
  change(date(2023, 1, 25), <>Fix an icon and change efficiency recommendation for <SpellLink spell={TALENTS_EVOKER.REVERSION_TALENT}/></>, Trevor),
  change(date(2023, 1, 25), <>Mark Preservation Evoker as up to date for 10.0.5</>, Trevor),
  change(date(2023, 1, 23), <>Add lag tolerance to <SpellLink spell={TALENTS_EVOKER.STASIS_TALENT}/> module</>, Trevor),
  change(date(2023, 1, 23), <>Add <SpellLink spell={TALENTS_EVOKER.EMERALD_COMMUNION_TALENT}/> module for <SpellLink spell={TALENTS_EVOKER.LIFEBIND_TALENT}/> ramp suggestion</>, Trevor),
  change(date(2023, 1, 20), <>Add <SpellLink spell={TALENTS_EVOKER.FONT_OF_MAGIC_PRESERVATION_TALENT}/> module and fix some event linking when it is talented</>, Trevor),
  change(date(2023, 1, 20), <>Fix <SpellLink spell={TALENTS_EVOKER.ENERGY_LOOP_TALENT}/> module</>, Trevor),
  change(date(2023, 1, 20), <>Add <SpellLink spell={TALENTS_EVOKER.ENERGY_LOOP_TALENT}/> module</>, Trevor),
  change(date(2023, 1, 19), <>Add ABC module</>, Trevor),
  change(date(2023, 1, 11), <>Fix <SpellLink spell={SPELLS.MASTERY_LIFEBINDER}/> tooltip</>, Trevor),
  change(date(2023, 1, 11), <>Disable shielding calculation for <SpellLink spell={SPELLS.MASTERY_LIFEBINDER}/> module</>, Trevor),
  change(date(2023, 1, 14), <>Add <SpellLink spell={TALENTS_EVOKER.LIFEBIND_TALENT}/> and <SpellLink spell={TALENTS_EVOKER.GOLDEN_HOUR_TALENT}/> attribution for <SpellLink spell={TALENTS_EVOKER.ECHO_TALENT}/> module</>, Trevor),
  change(date(2023, 1, 11), <>Improve <SpellLink spell={TALENTS_EVOKER.LIFEBIND_TALENT}/> module</>, Trevor),
  change(date(2023, 1, 11), <>Add module for <SpellLink spell={TALENTS_EVOKER.LIFEBIND_TALENT}/></>, Trevor),
  change(date(2023, 1, 8), <>Add checklist items for <SpellLink spell={TALENTS_EVOKER.CALL_OF_YSERA_TALENT}/></>, Trevor),
  change(date(2023, 1, 4), <>Fix modules related to empowered spells when talented into <SpellLink spell={TALENTS_EVOKER.FONT_OF_MAGIC_PRESERVATION_TALENT}/></>, Trevor),
  change(date(2023, 1, 2), <>Fix crash in <SpellLink spell={TALENTS_EVOKER.STASIS_TALENT}/> module when stasis is cast pre-pull</>, Trevor),
  change(date(2022, 12, 30), <>Refactor module for <SpellLink spell={TALENTS_EVOKER.CALL_OF_YSERA_TALENT}/> event linking</>, Trevor),
  change(date(2022, 12, 30), <>Improve accuracy of <SpellLink spell={TALENTS_EVOKER.STASIS_TALENT}/> module</>, Trevor),
  change(date(2022, 12, 30), <>Fix degraded experience in <SpellLink spell={TALENTS_EVOKER.STASIS_TALENT}/> spell breakdown</>, Trevor),
  change(date(2022, 12, 30), <>Add module for <SpellLink spell={TALENTS_EVOKER.STASIS_TALENT}/> spell breakdown</>, Trevor),
  change(date(2022, 12, 28), <>Add module for <SpellLink spell={TALENTS_EVOKER.EXHILARATING_BURST_TALENT}/></>, Trevor),
  change(date(2022, 12, 24), <>Add consumption counts to <SpellLink spell={TALENTS_EVOKER.ECHO_TALENT}/> module</>, Trevor),
  change(date(2022, 12, 24), <>Fix load condition for <SpellLink spell={TALENTS_EVOKER.FIELD_OF_DREAMS_TALENT}/></>, Trevor),
  change(date(2022, 12, 23), <>Fix tooltip for <SpellLink spell={TALENTS_EVOKER.FIELD_OF_DREAMS_TALENT}/></>, Trevor),
  change(date(2022, 12, 21), <>Improved accuracy of <SpellLink spell={TALENTS_EVOKER.BOUNTIFUL_BLOOM_TALENT}/> module</>, Trevor),
  change(date(2022, 12, 14), <>Improved accuracy of <SpellLink spell={TALENTS_EVOKER.ECHO_TALENT}/> module</>, Trevor),
  change(date(2022, 12, 14), <>Updated Mastery Effectiveness to include the value of the healing done in the effectiveness evaluation</>, Vohrr),
  change(date(2022, 12, 7), <>Fix load condition for <SpellLink spell={TALENTS_EVOKER.DREAM_FLIGHT_TALENT}/></>, Trevor),
  change(date(2022, 12, 6), <>Added checklist item for expired <SpellLink spell={TALENTS_EVOKER.ECHO_TALENT}/> buffs</>, Trevor),
  change(date(2022, 12, 6), <>Added suggestion based on average targets hit by <SpellLink spell={TALENTS_EVOKER.DREAM_BREATH_TALENT}/></> ,Trevor),
  change(date(2022, 12, 4), <>Mark Preservation Evoker as fully supported</>, Trevor),
  change(date(2022, 12, 4), <>Added <SpellLink spell={TALENTS_EVOKER.CYCLE_OF_LIFE_TALENT}/> module</>, Trevor),
  change(date(2022, 12, 4), <>Added <SpellLink spell={TALENTS_EVOKER.TIME_LORD_TALENT}/> module</>, Trevor),
  change(date(2022, 12, 4), <>Add <SpellLink spell={TALENTS_EVOKER.DREAM_FLIGHT_TALENT}/> module and update checklist</>, Trevor),
  change(date(2022, 12, 4), <>Add <SpellLink spell={TALENTS_EVOKER.RENEWING_BREATH_TALENT}/> module</>, Trevor),
  change(date(2022, 12, 4), <>Added module for <SpellLink spell={TALENTS_EVOKER.FIELD_OF_DREAMS_TALENT}/></>, Trevor),
  change(date(2022, 12, 4), <>Add suggestion for <SpellLink spell={TALENTS_EVOKER.ESSENCE_BURST_PRESERVATION_TALENT}/> based on buffs consumed</>, Trevor),
  change(date(2022, 12, 3), <>Fixed empty <SpellLink spell={TALENTS_EVOKER.ESSENCE_BURST_PRESERVATION_TALENT}/> chart when player never gains the buff</>, Trevor),
  change(date(2022, 11, 29), <>Added <SpellLink spell={SPELLS.EMERALD_BLOSSOM}/> module</>, Trevor),
  change(date(2022, 11, 27), <>Add modules for <SpellLink spell={TALENTS_EVOKER.ECHO_TALENT}/> and <SpellLink spell={TALENTS_EVOKER.RESONATING_SPHERE_TALENT}/></>, Trevor),
  change(date(2022, 11, 22), 'Cleanup Preservation Evoker files', Trevor),
  change(date(2022, 11, 22), <>Added <SpellLink spell={TALENTS_EVOKER.ESSENCE_BURST_PRESERVATION_TALENT}/> module</>, Trevor),
  change(date(2022, 11, 21), 'Updated contributor and support status for Preservation', Vohrr),
  change(date(2022, 11, 18), <>Added <SpellLink spell={TALENTS_EVOKER.CALL_OF_YSERA_TALENT}/> module.</>, Vohrr),
  change(date(2022, 11, 16), <>Updated removed shields from Mastery Effectiveness for a rework and relabeled and added a tooltip indicating such</>, Vohrr),
  change(date(2022, 11, 16), <>Added <SpellLink spell={TALENTS_EVOKER.GRACE_PERIOD_TALENT}/> module</>, Vohrr),
  change(date(2022, 11, 16), <>Added <SpellLink spell={TALENTS_EVOKER.REVERSION_TALENT}/> module</>, Vohrr),
  change(date(2022, 11, 14), <>Added preliminary hot tracking, cast attributions, & cast normalizers for Echo handling. Updated <SpellLink spell={TALENTS_EVOKER.SPIRITBLOOM_TALENT}/> and <SpellLink spell={TALENTS_EVOKER.DREAM_BREATH_TALENT}/> modules</>, Vohrr),
  change(date(2022, 10, 25), 'Updated abilities list to include all available abilities.', Tyndi),
  change(date(2022, 10, 19), 'Added module tracking healing effected by mastery.', Tyndi),
  change(date(2022, 9, 30), <>First pass at adding initial modules to Preservation</>, Tyndi),
];
