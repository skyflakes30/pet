# Master implementation checklist

- COMPLETE: existing repository inspection, production baseline preserved, dedicated development branch.
- COMPLETE: additive save migration, collision/path rules, six connected real-time 3D areas, first dungeon puzzle/checkpoint.
- COMPLETE: existing ranch loop integrated into 2.5D; nine-species collection, stats, basic items/economy, training, breeding and farming rules retained.
- COMPLETE: 23 missions, opening ten short chapter quests, quest journal/tracker, nine companion objectives.
- COMPLETE: Hollow Herald three-phase mechanics and original procedural model, unique skill and one-time rewards.
- COMPLETE: automated regression suite, syntax checks and production asset build.
- PARTIALLY IMPLEMENTED: final visual polish, complete animation/expression library, cinematic conversations, original music coverage, mobile performance QA.
- PARTIALLY IMPLEMENTED: 50-chapter catalogue; only chapters 1–10 have playable opening objectives.
- PARTIALLY IMPLEMENTED: original monster roster (9 collectible species; target150).
- NOT STARTED: chapters11–50 content, remaining15major dungeons,600+missions,regional bosses,Nihiloth,Nythera final dungeon/five-phase finale/multiple endings.
- NOT STARTED: secure accounts/cloud backend,online PvP,clans/friends/chat/co-op/leaderboards,server-validated earned-ticket gacha.
- NOT STARTED: current-release native Android/iOS widget integration and signed device builds.
- BLOCKED: production release pending explicit approval; no production push or merge authorized.
- DISABLED: equipment gameplay.

See REALTIME_25D.md for validation boundaries and next milestone.

Continuation: COMPLETE prototype sixteen-pose creature controller, event reactions, nine refined procedural rigs, camera zoom, objective navigation and one-time Guardian dialogue choice. PARTIALLY IMPLEMENTED final animation/art polish and main campaign branching; the final endings are not implemented. Test suite now96; build33assets. Backend/online/final-story targets remain pending.

Camera follow-up: COMPLETE shared rig, three angle presets, closer default framing, Reset view, camera preference persistence, line-of-sight building fade and original environment detail pass.102 tests/34 build assets. PARTIALLY IMPLEMENTED final art polish and physical mobile/WebGL QA. PR9 was released with explicit approval; previous production-blocked status is historical.

### Character appearance update
- [x] Male/female first-play selection with original portraits.
- [x] Additive appearance metadata; old saves, pets, gold and quests preserved.
- [x] Detailed player / Mara / Tobin / Seren / Vey procedural rigs, movement facing and dialogue expressions.
- [x] Existing collectible species, Hollowyrm and Hollow Herald model details.
- [x] GPU smooth normals and bounded software detail; no equipment or stat advantage.
- [x] 107 automated tests, syntax checks and 35-asset production build.
- [x] Browser save/reload checks for both choices and old-save progression.
- [ ] Physical Android/iPhone and hardware WebGL performance measurement.

### Kat and controls follow-up
- [x] World-lit Kat model in village and dialogue; established identity/portrait retained.
- [x] Contact shadows, anchored idle feet and smooth guide orientation.
- [x] Clear stale routes on manual input, transitions and UI interruptions.
- [x] Independent key/finger ownership and camera-relative short taps.
- [x] 112 tests, syntax checks, 36-asset build; software browser interaction checks.
- [ ] Physical Android/iPhone multitouch and hardware WebGL verification.

### Phone playability
- [x] Expanded phone viewport, visible toolbar, thumb joystick, large interaction button and Run toggle.
- [x] Analog direction/dead zone and release handling; preserved desktop controls.
- [x] Ranch Kat NPC and direct Kat navigation in both home regions.
- [x] Cached sphere geometry topology with regression tests.
- [x] 115 tests, syntax checks, production build; 390×740 browser layout and guide interaction QA.
- [ ] Physical iPhone/Android multitouch and GPU FPS validation.
