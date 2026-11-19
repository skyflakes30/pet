# Development log

## 2026-11-19 — real-time 2.5D foundation

Inspected skyflakes30/pet at cbcc273 (production after PR8). Existing stack is buildless JavaScript with device-local saves and nine collectible species. The existing ranch story has five objectives; it was not already a completed 50-chapter campaign.

Implemented modular additive campaign rules, real geometry camera/renderers, collision and route finding, village/ranch/four dungeon rooms, ranch interaction panels, NPC conversation cameras, first ten short chapter objectives and nine companion quests. Added Hollow Herald as a separate multi-phase boss with a distinct original model and unique Oathfall skill. Preserved all legacy data and original NPC atlases.

Applied latest canon: Nythera is the Dark Force/ultimate final boss; Theia is Light Protector; Dark Protector is separate. Nythera's actual finale is pending, clearly marked planned in journal/catalogue.

Browser QA found WebGL unavailable in cloud: added a software 3D mesh fallback with mobile-oriented LOD. Fixed route follower prematurely declaring its starting waypoint blocked, overshoot, inaccessible expanded-view navigation and full-collection rescue progression. Added Places routes to crop plots. Preserve the saved exploration area on initial load instead of silently returning to the ranch.

Validation: 87 automated tests pass, syntax checks pass, 31-asset build passes. Browser checks use isolated preview saves; no live player saves were modified. Hardware WebGL and physical mobile performance remain unverified. Production remains unchanged pending approval.

GitHub connector writes returned403 (resource inaccessible to integration), Git CLI lacked credentials. Use signed-in GitHub website branch uploads for logical commits and draft PR; do not merge.
