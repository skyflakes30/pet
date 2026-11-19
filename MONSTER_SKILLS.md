# Monster signature skills

Each of the nine current collectible species has one signature move, usable at level 1. Hollowyrm has a boss signature. These reuse original creature art and add elemental projectile colors/glyphs, real combat effects, skill cards, status counters and cooldown feedback. No additional species or backend is included.

| Species | Signature | Species effect before affinity bonuses |
| --- | --- | --- |
| Wicklet / lantern line | Lantern Bloom | Special strike, 4% max HP heal, restore focus |
| Twiggle | Seedstitch | Special strike, 12% max HP heal |
| Pebblit | Riverstone Roll | Physical strike, 35% ward for 2 counters |
| Dewbell | Resonant Ring | Special strike, 22% weaken for 2 attacks |
| Cindillo | Coalwheel | Physical strike, ember mark for 2 ticks |
| Thornox | Grovebreaker | Stronger physical strike, 15% ward |
| Sparkip | Flashbound | Physical dash, 45% ward for 1 counter |
| Mirejaw | Bog Bubble | Special strike, damaging mark for 3 ticks |
| Frostloom | Crystal Bloom | Special strike, 20% ward and 12% weaken |
| Hollowyrm | Hollow Spiral | Special strike, HP drain |

## Affinity bonuses

Fire adds Scorch (damage mark); Water adds healing; Ice adds Chill (weaken); Lightning adds a static ward; Earth adds a stone ward; Mud adds Mire Drag (weaken); Nature adds regeneration; Spirit restores focus; Shadow adds drain; Light adds healing and a ward. Celestial, Void and Ancient have defined bonus data for future use, but no new rare monster acquisition is enabled.

Species defines the signature name, attack stat and core effects. Affinity bonuses are composed from the pet’s actual elements, not the species’ default element. A second element contributes half-strength. Duplicate affinities are deduplicated. Caps: heal 18% max HP, ward 60%, weaken 35%, mark base 9 (+1 per 10 levels, capped at 15 per tick), drain 30%, focus restoration 1. Existing averaged elemental matchup multipliers apply to the strike; mark damage is fixed and ignores wards. Damage is at least 1.

Each player signature costs 1 focus and has a two-other-turn cooldown: cast → other action → other action → ready. Rejected casts consume no focus, HP, RNG or turn. Guard still restores 1 focus and mitigates 65% of incoming damage. A Spirit bonus can refund the skill’s focus, but cannot bypass cooldown.

Wild opponents use their signature every third counter instead of the old generic heavy strike, telegraphed a turn ahead. Their species effects and affinity bonus work too. Mirejaw is consistently Mud in combat. Marks tick immediately after application and then on following turns for the stated total ticks. Wards/weaken decay after the affected action; no crowd-control turn skipping is enabled. All statuses clear on victory, defeat or retreat.

## Saves and validation

Save version/key remain unchanged. Old ongoing battles without `battle.skills` are accepted and gain state on the next accepted action. Optional battle skill state stores cooldown and effects, so reload cannot reset them. Import validates numeric limits and status durations. Pet collection metadata is unchanged; skills are derived from species and elements. No equipment or external services.

## Verification

Automated checks: syntax validation, progression/legacy tests, all species/element combinations, hybrid caps, status durations, heal caps, focus limits, cooldown reload/expiry, denied action atomicity, wild signatures, mark victory single rewards and invalid imports. See skills.test.cjs. Static build includes skills.js and service worker cache version is bumped.
