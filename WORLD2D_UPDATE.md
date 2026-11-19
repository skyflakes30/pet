# 2D farm and area update

The farm and adventure selector now use original 2D top-down tile scenery: grass, paths, border trees, buildings, fields, pond, bridge and distinct forest/ember/moonwell areas. Existing articulated monster artwork is retained.

## Implemented
- Farm map building hotspots open the working hatchery/nursery, pet collection, training and market panels.
- Map crop plots display saved crop state and call the same validated plant, water and harvest rules as the existing field cards. Expanded fields appear automatically (up to nine).
- Collected pets visibly roam the meadow; the active companion can still be petted or warmed.
- Adventure region markers retain existing level, hatch and sleep gates and start the existing battles. The map is a region selector, not free-walking exploration.
- Mobile maps scroll sideways with touch, mouse/trackpad and keyboard focus. Scroll position survives UI refreshes during the session. The page itself has no horizontal overflow.
- Reduced-motion preferences apply to scenery and creatures. No animation frame loop or new dependency is introduced.
- Service worker cache and static build include both new world files.

## Validation
- 23/23 existing regression tests passed; gameplay engine, ranch progression and save schemas were not changed.
- Syntax checks and static build passed (18 assets).
- Browser verified map planting, watering, building-to-training navigation, region-to-battle navigation and safe retreat.
- Narrow viewport QA: 390x844 embedded viewport; body client/scroll widths both 375px. Map is 660px wide inside its 341px viewport. Map action preserved its horizontal position (179px) after render.
- No real Android/iOS hardware test is claimed.

Save key, existing pet IDs, inventory, crops, breeding, story progression and battle rules stay compatible. Accounts, multiplayer, 150 species and native widgets remain outside this visual increment. No credentials or external services were added.
