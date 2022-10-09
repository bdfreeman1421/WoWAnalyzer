import { change, date } from 'common/changelog';
import { Sref } from 'CONTRIBUTORS';
import { SpellLink } from 'interface';
import SPELLS from 'common/SPELLS';
import { TALENTS_DRUID } from 'common/TALENTS/druid';

export default [
  change(date(2022, 10, 8), <>Made Guide default (Checklist removed), and filled in sections for <SpellLink id={SPELLS.RAKE.id} /> and <SpellLink id={SPELLS.RIP.id} />. Fixed duration tracking for DoTs when <SpellLink id={TALENTS_DRUID.CIRCLE_OF_LIFE_AND_DEATH_SHARED_TALENT.id} /> or <SpellLink id={TALENTS_DRUID.VEINRIPPER_TALENT.id} /> is talented.</>, Sref),
  change(date(2022, 10, 1), <>Fixed inaccuracies in Energy cap tracking. Added rough outline for Guide.</>, Sref),
  change(date(2022, 9, 23), <>Updates for this week's Beta build.</>, Sref),
  change(date(2022, 9, 16), <>Initial updates for Dragonflight Talent system.</>, Sref),
];