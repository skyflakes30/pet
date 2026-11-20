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

## Camera and environment polish — after approved PR9 release

PR9 was explicitly approved for production by the user and merged as f425dab; GitHub Pages run13 succeeded. This follow-up branch starts from that released main revision.

Replaced duplicate renderer camera math with a shared rig: a closer32-degree Adventure view,48-degree Tactical and24-degree Low angle presets, shortest-arc rotation, immediate initial framing, smoother following to the actual map boundary, portrait-aware horizontal coverage and cinematic/battle screen offsets. Added Reset view and separate local camera preferences; camera choices do not alter player saves. Normal touch dragging no longer rotates the world accidentally; explicit rotation and Alt-drag remain available.

Added ray/box visibility detection and grouped building rendering. Blocking structures fade in the GPU path after actors without depth writes; software triangles use matching transparency. Added original roof tiling, timber framing, window boxes, doorsteps, chimneys, shop awnings, stone paving, layered trees/shadows, shrubs and a continuous terrain apron. The original collision maps, monsters, quests and player progression are unchanged. This is procedural low-poly art, not a claim of final hand-painted/AAA quality.

Validation:102 tests pass, syntax checks pass,34-asset build passes. New tests cover portrait/landscape framing, ground-picking inversion at every angle, shortest rotation, boundary following, true line-of-sight blockers, group ranges/collision preservation and preference persistence. Browser software-renderer QA verified close framing, Tactical preference after reload, reset, and the player visible behind a fading nursery. Physical Android/iPhone and hardware WebGL performance are not verified.

## Adventurers and creature detail release — 2026-11-19
- Added an original male/female adventurer selection before play. Appearance lives in optional `character: {version: 1, gender}` metadata; legacy saves receive a choice without resetting anything. Both appearances have identical gameplay rules.
- Rebuilt the procedural player and village NPCs with articulated boots/limbs, expressive faces, layered hair, scarves, clothing details and role-specific accessories. Player models turn with travel; NPC speaking poses follow dialogue moods. Established Theia/Dark Protector/Traveling Guide portrait atlases are preserved.
- Added species-specific details across the existing nine collectible rigs plus Hollowyrm, and crown/armor/rune details on Hollow Herald. This is a procedural model quality update, not a claim of new species or finished high-resolution character art.
- GPU actor spheres now use smooth normals; the software renderer retains a strict under-600-triangle collectible budget for all sixteen actions including care effects. Static environments retain their existing detail.
- Version 17 asset cache includes the character module. Build contains 35 assets.
- Validation: 107 tests pass; all JavaScript syntax checks pass. Browser QA verified legacy progression retained after selecting female, female choice retained on reload, fresh-save initial picker, male choice retained on reload, and rendered upgraded ranch actors. Preview uses the software renderer; physical mobile performance and hardware WebGL were not verified.

## Kat world integration and controls — 2026-11-20
- Replaced Kat's in-world billboard with a procedural character sharing the environment's light, depth and occlusion in exploration and cinematic conversations. Preserved blonde hair, square glasses, navy/fur-trim jacket and BAD cap; existing dialogue portrait remains intact.
- Added layered ground contact shadows for staged world actors, anchored idle feet, smooth guide turning toward nearby players, and talking/mood poses. No character/save/story identity was changed.
- Fixed manual input leaving old route objectives active; area changes, menus, dialogue, blur and hidden pages now clear movement. Added source-owned keyboard/touch input, consistent camera-relative accessible button steps, quick tap response and normalized directions based on the rendered camera.
- Validation: 112 tests pass; syntax checks and 36-asset build pass. Software-browser QA verified Kat's four dialogue frames and model routing, manual route cancellation, zero held inputs after release, touch movement after camera rotation, and menu cancellation that stays cancelled when closed. Physical multitouch/mobile hardware and hardware WebGL remain unverified.

## Phone playability and ranch guide — 2026-11-20
- Phone/narrow screens open the game in an expanded browser viewport with a compact two-row toolbar, safe-area padding, a 116px analog thumb joystick, large Interact action and visible Run toggle. Camera controls move into an explicit Camera tray. Desktop keyboard and directional buttons remain available.
- Analog input supports dead zone, proportional movement, camera-relative direction, capture/cancel/blur release, short-step fallback and arrow-key accessibility. Rendering dt now tolerates a slower frame without unnecessarily slowing traversal; swept map collision remains in use.
- Kat now has an ungated physical NPC spot at the ranch as well as Mossbell Village. A Kat toolbar action walks the player to the actual guide; dungeon guidance explains where Kat waits rather than spawning an unrelated cutscene.
- Sphere topology templates are cached and reused across characters/environment meshes. World geometry, smooth GPU normals, effects, lighting and save compatibility remain intact. This reduces repeated trigonometry and face construction; no physical-phone FPS claim is made.
- Validation: 115 automated tests, syntax checks and 36-asset build passed. Browser QA used a 390×740 same-origin iframe viewport, verified all toolbar controls fit, arrow-key joystick movement changes position and releases to zero, and Kat routing/dialogue in both village and ranch. Pointer hold was exercised but physical multitouch and device GPU performance remain unverified.

## Illustrated UI release — 2026-11-20
- Added six original NPC portrait sets with four expressions each (24 usable crops), plus twelve original supply/harvest illustrations. Two WebP atlases total 439,580 bytes; no per-frame image rendering or new dependency.
- Replaced generic letter seals for Mara/Tobin/Seren/Vey dialogue with their own expression portraits. Prepared Elian/Rovan portraits do not imply new story missions. Canonical Kat/Guardian artwork and in-world models remain intact.
- Illustrated both markets, all eleven supply inventory entries, training/nursery headers and seed/harvest cards. Non-consumable bag items show their real usage location; existing purchase/use validation remains authoritative.
- Validation: 118 tests, syntax checks and 39-asset build pass. Browser QA confirmed market icon crops, food purchase (30→22 gold), and Mara's illustrated dialogue. A 390×740 browser inventory check confirmed all eleven item icons, usage hints and scrollable controls fit. See ART_ASSETS.md for source briefs, mappings and scope.

## 2026-11-20 — cohesive world identities and English interface

Applied the six new portrait identities to actual procedural 3D rigs: Mara's curls/apron, Tobin's vest/egg pin, Seren's ponytail/sash, Vey's bob/cloak, Elian's spectacles/coat, and Rovan's beard/leather shoulder. Elian and Rovan models are prepared for future scenes, not newly spawned quest NPCs. Retained Kat's BAD cap, glasses and blonde hair. Added adventurer cape panels and female ribbon without touching character selection or saves.

Softer vertex normals and hemisphere fill lighting in WebGL/software renderers, enlarged expressive species-colored monster eyes, and individual crest/tail sway improve the existing roster. This is an incremental procedural-model upgrade; it does not claim portrait-level sculpted characters or new species. The shared visual catalog does not alter monster stats or progress.

Compacted the desktop exploration shell, refined fantasy panels/buttons, preserved the mobile joystick and all eight toolbar controls. Replaced the remaining Filipino character-picker copy with English; runtime copy audit passes. Cache version 21 includes the new visual catalog.

Validation: 121 automated tests pass, syntax checks and 40-asset production build pass. Desktop village and Mara conversation render correctly. 390×740 phone layout retains every toolbar control and joystick; keyboard-accessible joystick changes world position. Physical iOS/Android hardware performance is not measured. Existing save import/export, collision, animation and economy regression tests pass. No backend or equipment changes.

## 2026-11-20 — dungeon interaction and battle recovery

Reproduced basic wild combat in the browser, then corrected concrete dungeon UI defects: cleared enemies remained in the destination dropdown after victory, tapping actors only selected the floor rather than approaching/interacting, failed encounter reasons were outside the expanded mobile viewport, and importing a dungeon save forcibly opened the ranch. Shared available-spot filtering now drives all interaction sources; screen-space actor picking approaches the authored target with normal collision; imports preserve the saved area. Enemy line-of-sight participates in obstacle fading.

Battle mode removes the unused walking pad, keeps controls scrollable/tappable on short screens, visibly locks inputs while effects resolve, then releases that lock. Boss entrance locks expire normally, and remounting clears old UI timers. Empty potion, focus and careful-strike actions expose disabled controls. Starting encounters cancels held movement and pending routes. Blocked encounters offer real care/supplies and quest reward panels; status feedback is visible in expanded exploration. Bag no longer obscures an active battle with unusable field items. No costs, rewards, rarity or progression gates bypassed.

Validation: 127 automated tests, syntax checks and 40-asset build passed. New tests cover all four rooms' authored encounters, resumed battles, unique rewards, readiness, target picking, collision-safe routes and retreat. Browser QA: wild attack/victory; actual Hollow Herald entrance unlock; skill, guard, potion, three phases and victory on 390×740 viewport; cleared boss removed from Places; low-energy refusal followed by Energy Snack and a successfully started encounter; dungeon import retains location. These are browser viewport tests, not physical phone performance measurements. Existing saves remain compatible.

## 2026-11-20 — player equipment and interface

The user explicitly approved equipment for their own adventurer, superseding the earlier equipment-disabled restriction for this player system. Monster equipment remains disabled. Added an additive root `loadout` record: six owned starter pieces, six slots (focus/outfit/headwear/charm/boots/pack), six purchasable upgrades, equip/unequip, slot filtering and an earned-gold Outfitter. Ownership, slot compatibility, rank gates, duplicate purchases, currency and battle locks are validated. Explorer Rank follows completed main chapters; no paid items or new services.

Equipped player gear has visible world geometry/colors. Active upgrades add bounded support to the existing solo companion combat (maximum +4 attack and +5 guard) and up to 5% exploration speed, without altering pet base stats/training. Character choices, pet saves and previously cleared dungeon flags remain compatible. Current combat is still companion combat, not a new independent human battle mode.

Added a broader illustrated equipment journal with original inline vector icons, readable effects/rarity/prices, owned/equipped/locked states, mobile scrolling and large controls. Character is directly available in the world toolbar; Follow quest moves to a Track button beside the objective. Menus reclaim joystick space on phones and currency updates immediately. The game remains English.

Validation: 134 automated tests, syntax checks and 42-asset build passed. Tests cover additive migration, purchases, duplicates, malformed imports, save round trips, battle locks, actual damage/guard, bounded movement bonus and equipped male/female geometry. Browser QA at desktop and 390×740: buy Aetherglass Focus and Windstep Boots with test-save earned gold, equip, filter, see +3 attack/+5% travel and updated wallet, verify loadout after reload and on the phone viewport. Physical mobile GPU/touch performance remains unmeasured.

## 2026-11-20 — inviting adventurers and optional local profile photos

Created an original painted 2×2 atlas for male/female calm/happy portraits; character selection, gear header and Profile world-character cards now use that art. Updated the actual procedural player rigs: chestnut/emerald boy identity, auburn/periwinkle girl identity, ivory scarves, brighter eyes, a side ponytail/ribbon and compatible equipment colors. NPC designs and monster progression remain intact. Both equipped rigs stay within prior geometry budgets.

Added Character → Profile with four preset avatars, preview-before-save photo selection, explicit Save/Cancel, removal and changeable male/female appearance. JPEG/PNG/WebP inputs have 5 MB byte and 4096px dimension limits and signature checks. A center-cropped 256px JPEG copy is stored separately in browser storage, never in the adventure JSON or on a server. Uploaded photos are UI avatars, not world textures. This is not an account/cloud/public-profile system. Storage/decode errors are surfaced; stale asynchronous previews are ignored.

Validation: 139 tests, syntax checks and 44-asset build passed. Browser tests cover uploading a synthetic PNG, previewing a 41,831-character JPEG data URL, saving and reloading, removing, changing world character without losing +3 attack/+5% gear, preset selection and the 390×740 phone layout. No actual user photo was used in QA. Physical iOS/Android upload formats and GPU performance remain unverified.
