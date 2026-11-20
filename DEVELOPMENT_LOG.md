# Development log

## 2026-11-19 — real-time 2.5D foundation

Inspected skyflakes30/pet at cbcc273 (production after PR8). Existing stack is buildless JavaScript with device-local saves and nine collectible species. The existing ranch story has five objectives; it was not already a completed 50-chapter campaign.

Implemented modular additive campaign rules, real geometry camera/renderers, collision and route finding, village/ranch/four dungeon rooms, ranch interaction panels, NPC conversation cameras, first ten short chapter objectives and nine companion quests. Added Hollow Herald as a separate multi-phase boss with a distinct original model and unique Oathfall skill. Preserved all legacy data and original NPC atlases.

Applied latest canon: Nythera is the Dark Force/ultimate final boss; Theia is Light Protector; Dark Protector is separate. Nythera's actual finale is pending, clearly marked planned in journal/catalogue.

Browser QA found WebGL unavailable in cloud: added a software 3D mesh fallback with mobile-oriented LOD. Fixed route follower prematurely declaring its starting waypoint blocked, overshoot, inaccessible expanded-view navigation and full-collection rescue progression. Added Places routes to crop plots. Preserve the saved exploration area on initial load instead of silently returning to the ranch.

Validation: 88 automated tests pass, syntax checks pass, 31-asset build passes. Browser checks use isolated preview saves; no live player saves were modified. Hardware WebGL and physical mobile performance remain unverified. Production remains unchanged pending approval.

GitHub connector writes returned403 (resource inaccessible to integration), Git CLI lacked credentials. Use signed-in GitHub website branch uploads for logical commits and draft PR; do not merge.

Final browser polish: software fallback ground triangles render before actors; NPC sprite occlusion clips against the actual depth plane to avoid floor triangles cutting across faces. Added a regression for the clipping calculation.

## 2026-11-19 — expressive creatures and opening story continuity

Continued the same development branch/PR. Added `creature-motion.js`: sixteen deterministic prototype poses shared by all nine collectible creature rigs, blinking and expression geometry, species-specific silhouettes, moonlit coloration, primary/secondary element marks and walking direction. Wired reactions to actual care, feeding, hatching, training, crop work and battle outcomes. Sleeping/needs override idle motion; assigned helpers visibly farm. Added a low-detail creature mesh budget for the software fallback; this remains prototype art, not a finished illustration/animation library.

Added camera zoom and a Follow quest route helper. It uses actual portals, collision and puzzle gates; it does not teleport the player or complete objectives. Companion following now checks world collisions. Autosave uses elapsed time rather than a modulo frame window, avoiding missed saves at irregular frame cadence. Escape restores the expanded-view button label.

Added modular `story-scenes.js` with expanded opening NPC dialogue, alternating Theia/Dark Protector speakers, expression changes, participant-only Guardian staging, and a one-time saved Guardian decision (protect the fragments or seek the full truth). Merchant/breeder/trainer introductions lead into their actual station interfaces. Removed the explicit final-boss spoiler paragraph from the active quest journal; canonical Nythera remains in campaign data.

Validation: 96 automated tests pass, including all nine rigs across sixteen poses, animation/state separation, quest navigation, participating NPC casts and branch persistence. Syntax checks and 33-asset build pass. Browser preview verified pet happiness, attack and victory reactions, close camera, chapter claims, merchant introduction/shop purchase, portal routing, waterwheel and archive battle. QA continued an isolated existing fixture; it is not a full fresh campaign or physical-device performance sign-off. GitHub connector writes still403; development updates use the signed-in GitHub website. Production remains unchanged.

Additional browser QA completed the waterwheel, archive fight, one-time rescue, alternating Guardian speakers and saved Seek the whole truth choice. Fixed cinematic staging near pillars by finding collision-free positions for the entire participating cast; added a regression for all six areas.
