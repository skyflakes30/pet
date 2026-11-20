# Ghost Pocket: Aetheria

Development upgrade of the existing **Pet** game. Cute original creatures, a playable monster ranch, targeted training, crops, breeding, basic consumables, and the existing turn-based adventure.

The real-time 2.5D upgrade was approved and published to the existing GitHub Pages game through PR9. The camera/graphics follow-up retains the same deployment and save format. See [REALTIME_25D.md](REALTIME_25D.md) for the current scope, QA limits and continuation plan.

**Canon: Nythera is the Dark Force and ultimate final boss. Theia is the Light Protector. The Dark Protector is a separate Guardian.** This supersedes earlier historical design documents.

Play loop: choose an affinity → incubate and warm a random starter → grow moonberries → feed and train → explore and level → rescue a second pet through the opening story → raise compatible adults → breed new eggs and expand the ranch.

No installation or paid API is needed for solo play. Saves stay on the current browser/device. Accounts, cloud sync and multiplayer are **not implemented**; see [IMPLEMENTATION.md](IMPLEMENTATION.md) for accurate status and backend requirements.

## Development

Node 18+; no npm dependencies.

```sh
npm run check
npm test
npm run build
```

Serve the repository root or the generated `dist/` with a static server. GitHub Pages continues serving repository-root files with relative `/pet/` paths. No deployment settings were changed.

- `engine.js`: preserved adventure and battle rules; save schema remains compatible.
- `ranch.js`: validated ranch state and progression rules, usable in browser or Node.
- `ranch-ui.js`, `ranch.css`: ranch and playable interfaces.
- `world2d.js`, `world2d.css`: original 2D farm/world scenery, map hotspots and mobile panning. See [WORLD2D_UPDATE.md](WORLD2D_UPDATE.md).
- `*.test.cjs`: legacy regression and new progression tests.
- `build.cjs`: copies the complete browser release to `dist/`.

`Pet-Source.zip` is the preserved earlier native/app source archive. It is a **legacy snapshot**, not the current ranch browser release. Android/iOS widgets still require native updates, building, signing and device tests. They do not automatically synchronize browser saves.

All creature artwork is original. This increment adds an original SVG ranch scene and reuses existing creature rigs. There are nine collectible species, the legacy Hollowyrm boss and the new Hollow Herald; not 150 completed species.

Current battle expansion: every existing monster has a signature skill with elemental bonuses. New wild companions require weakening and capturing with Aether Snares; knockouts no longer auto-recruit. See MONSTER_SKILLS.md and CAPTURE_UPDATE.md.

The current development branch also includes expressive procedural creature rigs, sixteen prototype animation poses, camera zoom, objective routing and a saved Guardian dialogue choice. See REALTIME_25D.md for honest scope and QA limits. Nythera's finale remains planned. The current camera correction adds three angle presets, stable closer framing and visibility fades.

### Adventurer selection (v17)
Choose **Lalaki / Male** or **Babae / Female** before entering your adventure. Existing saves also receive this one-time appearance choice, without losing progression. The choice travels with exported/imported saves. Both characters have the same gameplay abilities. Detailed procedural village characters and species-specific creature accents render in the existing 2.5D world; established cinematic portrait artwork is retained. Hardware WebGL adds smooth actor normals while the software fallback keeps a limited geometry budget.
