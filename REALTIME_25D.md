# Real-time 2.5D development release

This is an incremental upgrade to skyflakes30/pet, based on production cbcc273. Production has not been changed. Review the development branch before approving release.

## Canon

Nythera is the Dark Force and canonical ultimate final boss, retaining the corrupted orange-haired, covered-eye design direction. Theia is the Light Protector. The Dark Protector is a separate, morally complex Guardian. Kat retains the established blonde hair, glasses, navy BAD cap and coat. Earlier design documents are historical; this canon supersedes conflicting final-boss descriptions.

## Actual playable scope

- Real 3D meshes under an angled orthographic camera, smooth following, ground picking, camera rotation, swept collisions and route finding. WebGL depth testing; software projected-triangle fallback uses the same meshes.
- Mossbell Village, Monster Ranch and four connected Whispering Ruins rooms: Lantern Hall, Rootwater Cistern, Memory Archive and Hollow Sanctum.
- Interactive Mara, Kat, Tobin, Seren, Vey and a cinematic Guardian memory with Theia and the Dark Protector. Dialogue close-ups, changing expressions from the preserved original atlases, and participant-only Guardian appearances.
- Ranch hatchery, targeted training, basic supply shop, care, naming, crops, nursery and expansion connected to the existing validated systems. Walking pets and procedural elemental creature models.
- Ten short chapter quests, four side quests and nine species companion objectives (23 missions). The 50 chapter titles are catalogued; chapters 11–50 are explicitly planned and locked. These ten short quests are an opening implementation, not the final 300–450 main missions.
- Four dungeon encounters including three-phase Hollow Herald, a distinct original floating crown/armor/shard boss model, Oathfall skill, phase stat changes, telegraphed counters, animated entrance, spell particles, damage numbers, defeat and one-time rewards.
- All ten starter affinities can solve the waterwheel. One-time cache, elite rescue, gated passages and checkpoint retreat. Aether Snares retain weakening/odds/escape rules; bosses cannot be captured or bred.
- Original synthesized village/ranch/dungeon/battle/boss/victory motifs, user-gesture start and separate BGM/SFX controls.

## Architecture and saves

Buildless JS/CSS, no external runtime dependencies or new secrets. `world-engine.js` contains deterministic rules and modular quests. `webgl-world.js` owns rendering, `realtime-world.js` input and interaction, `game-audio.js` procedural sound. Existing `engine.js`, `ranch.js` and `skills.js` remain the source of progression and economy.

New `adventure` state is additive; the old ranch story step/choice, owned pets, training, currency, inventory and legacy battle progression remain. Old saves acquire a separate new-campaign journal; they are not reset or presented as having completed new objectives. Full old collections can finish the new rescue without duplicating species. Import/export and device-local storage remain; this is not cloud storage.

The old painted story module/assets are retained for compatibility/history, but are not the active exploration renderer. GitHub Pages relative /pet/ paths remain supported. Cache v14 contains the new modules. Equipment remains disabled.

## Validation

`npm run check`, `npm test` (88 passed), `npm run build` (31 browser assets).

Automated coverage includes existing ranch/economy/breeding/element/capture regressions plus save migration, camera projection inversion, finite mesh geometry, swept collisions, path routing, all-element puzzle, duplicate claims, old full-collection rescue, first ten quest prerequisites, actual breeding flags and boss phase/capture rules.

Browser QA on the managed development preview: old-save load, fresh affinity selection, incubation/warm hatching, naming/care, route to hatchery, camera rotation, boss signature attack, guard, potion, phases 1–3, victory/level rewards and reload persistence. Boss QA uses an isolated level-3 fixture, not a claimed complete manual campaign playthrough. Cloud browser has no WebGL; software fallback was exercised. Observed fallback render work roughly 23–29ms per frame; this is not a physical-device FPS guarantee.

## Known limits and next milestone

Graphics are an original low-poly playable foundation, not final Digimon World 3-equivalent art quality. All sixteen requested animation states, nuanced face animation for every model, proper real-time shadow maps, sophisticated lighting/weather and camera-wall clipping are not finished. Existing shadows are simple projected meshes. Software fallback uses approximate triangle depth sorting; WebGL uses the depth buffer. Physical Android/iPhone and hardware WebGL verification remain outstanding.

Nine collectible species are usable; 150 are not complete. Eleven enemy entries include the legacy Hollowyrm and new Herald, not eleven collectibles. Personal quests are short distinct objectives, not full branching companion campaigns. Theia/Nythera final-dungeon scenes and Nythera's five phases remain planned metadata. No claims are made for 600 missions, 16 completed dungeons or full 50-chapter playability.

No backend/database changes. Secure login, cloud saves, ranked/friendly online PvP, clans, chat, co-op and server-validated summoning are NOT STARTED and require a selected backend, hosting configuration and credentials/permissions. No client-only mock multiplayer was added. Native Android/iOS widgets remain legacy source only; signing/build/device integration is pending.

Next: complete manual traversal of chapters 1–10, GPU and physical mobile QA, improve original character silhouettes/animation states and story beats, then expand regional content. Production deployment is blocked pending explicit approval. Current preview is internal Work Mode QA, not a public phone-accessible URL; no new public deployment has been created.

Final browser polish: software fallback ground triangles render before actors; NPC sprite occlusion clips against the actual depth plane to avoid floor triangles cutting across faces. Added a regression for the clipping calculation.

## Expressive creatures continuation

The current development increment adds sixteen **prototype** rig poses for the nine existing collectible species: idle, walking, running, talking, happy, sad, angry, surprised, hurt, attack, victory, defeat, sleeping, eating, training and farming. Care/training/farm/battle events drive the relevant poses; a companion-talk interaction and sleeping/needs states provide further reactions. This is procedural geometry, not sixteen fully hand-authored sprite animations per monster. Important NPCs retain the established atlases, with alternating speakers and portrait moods in the Guardian scene.

Follow quest navigates through the real world toward the next opening objective or opens a ready reward/care panel. Camera zoom supports a closer view. Guardian choice flags are additive and one-time; they change follow-up dialogue, not completed endings. No new species or missions were added in this increment (9 collectibles,23 missions,10 short opening chapter quests remain).

Current checks: **96 tests passed**, syntax checks passed, build packages **33 assets**. GPU/mobile device verification, final-quality art, later content and online/backend functionality remain pending. Nythera is still the ultimate final boss; her actual final encounter remains unimplemented. No database/backend migration or production deployment was performed.
