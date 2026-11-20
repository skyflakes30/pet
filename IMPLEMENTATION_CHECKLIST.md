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
