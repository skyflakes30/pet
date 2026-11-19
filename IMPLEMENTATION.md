# Ghost Pocket: Aetheria — Phase 1 development delivery

Repository: skyflakes30/pet. Base: 7e9adc544aeb8c3c4e86d2ff100bd3efb89e67db.
Branch: dev/aetheria-ranch-phase1. Production Pages stays on main; merge requires owner approval.

## COMPLETE — implemented and tested in this increment
- Retained static HTML/CSS/JavaScript stack, relative asset paths, original nine wild creatures, three regions, battle FX and original evolution line.
- Ranch replaces the cottage as main screen: original vector landscape, roaming active pet and up to three visible collected pets, hatchery/nursery, crop fields, training grove, recovery/rest, market, inventory, storage and expansion.
- Ten starter affinities; two eligible species per affinity at 50/50. Species may share elemental affinities. Choice commits the egg immediately, with five warming interactions and ten-second incubation. Legendary/Mythic/rare elements excluded.
- Nine collectible species use existing original articulated SVG artwork: Wicklet, Twiggle, Pebblit, Dewbell, Cindillo, Thornox, Sparkip, Mirejaw and Frostloom. Existing Hollowyrm stays a wild boss. No claim of 150 finished species.
- Individual pet collection (24 maximum): IDs, personalities, training, growth potential, needs, levels, EXP, bond, breeding cooldown and history; safe switching. Level cap 50. Level curve retains existing level*30 progression for save compatibility.
- Seven targeted drills, shared 30-second cooldown, resource costs, decreasing points per session across five tiers, level locks 10/20/30 and 120-point cap. Training changes derived stats; every fifth session grants 10 EXP.
- Basic item inventory, atomic buy/sell validation, consumables with actual effects, seeds, fuel, breeding treats and expansion materials. No equipment controls or active equipment modifiers.
- Plant/water/harvest loop: 60-second crops, three food and one seed per harvest, five EXP, one material each third harvest. Active pet helper reduces growth time by affinity and bond. Up to nine fields through three expansions.
- Initial breeding: two awake compatible adults (level 5, 30 bond, 30 energy), treat cost, ten-minute parent cooldown, 60-second egg timer, inherited species/element and bounded growth potentials. Parents retained. One percent moonlit variation metadata; visual color rendering is pending.
- Save compatibility: existing key and version retained; additive ranch schema validated; first pre-Aetheria device save copied to a separate local backup key. Existing resources, furniture and quests retained. Expansion also fulfills the old furniture quest.
- Element matchups in combat; trained ATK/SP. ATK affect damage, DEF affects incoming damage. Existing turn/focus/guard and victory protections retained.

## PARTIALLY IMPLEMENTED
- Story: original Aetheria lore, Keeper Luma dialogue, five objectives, restore/investigate branch, differing opening conclusion and rescue egg after first training objective. Nine species-specific story titles; full separate narrative arcs, NPC networks, regions and different campaign endings remain pending.
- Stats: all requested core stats calculated and persistent where applicable. SPD, SP. DEF, CRIT, EVA and STAMINA do not yet modify combat turn order, critical/evasion rolls or resource caps. Competitive balancing remains pending.
- Pet art: original existing species reused; non-lantern growth stages currently retain their species artwork. New evolution art, elemental visual variants and inherited color visuals remain pending.
- Farm helpers affect crop growth; separate machinery/processing/preservation minigames and multiple habitat upgrades remain pending.
- Animation: existing articulated rigs and battle FX retained, plus ranch walking; separate farming/eating/training animation clips remain pending.
- Fullscreen toggle and SFX volume provided. Desktop fullscreen behavior is browser-dependent; iPhone browser fullscreen and native app installation require device QA. Background music not included.
- PWA shell/cache updated; native widget source is preserved in the existing archive, but not upgraded, compiled or tested for the ranch schema.

## BLOCKED — backend provisioning
No database, auth provider or server currently exists in this GitHub Pages project. Device saves and offline rules are not secure competitive authority.
Needed next: owner-provisioned Supabase project (Postgres, Auth, RLS, Realtime and server functions), approved project URL and public publishable key, server-side credentials managed only as backend secrets; email configuration; Google OAuth client configuration; Apple developer/service identifier and callback configuration if Apple login is required. Never send private keys into frontend files.
Auth/cloud saves, online validation and any competitive rewards must be implemented and tested against that backend before enabling online modes. No paid service or account was created in this increment.

## NOT STARTED in this increment
Ranked/friendly PvP, co-op, friends, chat/moderation, clans, raids, rankings, online accounts/cloud saves, ticket summon/history/pity, legendary discoveries, seasonal events, full soundtrack, 150-species expansion, native app/widget builds. Equipment remains disabled.

## Validation
`npm run check`, `npm test` (22 tests) and `npm run build` pass. Tests cover legacy save/battle rules, all starter pools, timer/claim duplication, formulas, training/resource tiers, transactions, consumables, farming, expansion, breeding/inheritance, pet switching, story gates and the full elemental matrix. Browser QA: starter choice and hatching, plant/water/harvest, training result, market purchase and feeding, story objective claim, battle victory/level-up, and save reload verified. A 390x844 iframe viewport was checked; horizontal overflow was corrected and body scroll/client widths both measured 375px (390px including its scrollbar). Desktop fullscreen invocation returned the expected unavailable fallback in this browser; fullscreen success on physical desktop/mobile devices remains unverified. No login/logout test is claimed because accounts do not exist. No production release has occurred.

## Element chart
All unlisted pairs: 1.0. Listed attacker advantages: 1.5. Reverse direction: 0.75. Same-element: 1.0. Legacy aliases Ember/Fire, Mist/Water, Frost/Ice, Spark/Lightning, Stone/Earth, Leaf/Nature, Shade/Shadow are normalized.

| Attacker | Strong against |
| --- | --- |
| Fire | Nature, Ice |
| Water | Fire, Earth |
| Ice | Nature, Mud |
| Lightning | Water, Spirit |
| Earth | Lightning, Fire |
| Mud | Lightning, Earth |
| Nature | Water, Mud |
| Spirit | Earth |
| Shadow | Spirit |
| Light | Shadow, Ice |
| Celestial | Void |
| Void | Ancient |
| Ancient | Celestial |

## Continuation milestone
Provision backend, then move the tested action rules into authenticated server transactions with revision/idempotency checks and row-level save ownership. Add auth/session tests, reconcile existing local saves through an explicit import flow, and only then begin online systems. Expand original species artwork and starter-specific narrative content alongside that work.
