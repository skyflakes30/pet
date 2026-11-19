# Ghost Pocket: Aetheria

Development upgrade of the existing **Pet** game. Cute original creatures, a playable monster ranch, targeted training, crops, breeding, basic consumables, and the existing turn-based adventure.

**Development branch only. Production is not changed until the owner approves a merge.**

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
- `ranch-ui.js`, `ranch.css`: illustrated ranch and playable interfaces.
- `*.test.cjs`: legacy regression and new progression tests.
- `build.cjs`: copies the complete browser release to `dist/`.

`Pet-Source.zip` is the preserved earlier native/app source archive. It is a **legacy snapshot**, not the current ranch browser release. Android/iOS widgets still require native updates, building, signing and device tests. They do not automatically synchronize browser saves.

All creature artwork is original. This increment adds an original SVG ranch scene and reuses existing creature rigs. There are nine collectible species and one additional wild boss, not 150 completed species.
