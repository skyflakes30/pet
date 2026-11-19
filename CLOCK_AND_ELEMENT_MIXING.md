# Location time and mixed elements

## Local day/night
Farm and adventure maps now show dawn, day, dusk and night lighting. Default time is the browser/device IANA timezone, with an optional location timezone in Settings. Toronto and Manila may show different phases at the same instant; the clock uses Intl timezone/DST rules and updates during normal 15-second UI refreshes. No GPS, external API or precise location is collected.

Local schedule: dawn 05:00–06:59, day 07:00–16:59, dusk 17:00–18:59, night 19:00–04:59. This is a clock-based game ambience schedule, not a calculation of seasonal astronomical sunrise/sunset. Maps share the player's clock; regional terrain and palettes remain distinct. This is not a shared multiplayer world clock.

Night uses cool ambient lighting, illuminated building windows and brighter fireflies. Timezone only changes visuals and display; crop, incubation, training and breeding timers still use epoch time and cannot be accelerated by timezone changes.

## Mixed-element breeding
An eligible pair with different elements produces an egg with a primary and a secondary affinity. Hybrid parents can pass any of their owned elements, with a maximum of two distinct base elements. Species is still inherited from one parent. Existing adult/compatibility/resource/timer rules and parent retention remain. No Legendary/Mythic or rare affinity is generated through this mixing system.

Known combination names: Steam (Fire + Water), Magma (Fire + Earth), Thermal (Fire + Ice), Glacier (Water + Ice), Wetland (Water + Earth), Grove (Earth + Nature), Storm (Lightning + Water), Eclipse (Spirit + Shadow), Twilight (Light + Shadow), Aurora (Ice + Lightning). Other valid pairs display both elemental names. These are hybrid affinities, not additional finished monster species or evolution artwork.

Dual affinity appears in collection, active pet details and eggs. Original artwork gains a two-color aura. Farming helpers use the strongest applicable helper bonus, rather than stacking them.

Combat uses both affinities for outgoing and incoming type calculations. A dual matchup averages the original chart's pairwise multipliers, bounded to 0.75–1.5, rather than multiplying bonuses. Example: Fire + Water versus Nature = (1.5 + 0.75) / 2 = 1.125. No extra stat, equipment or paid advantage is added.

## Save compatibility and validation
The original primary `element` field and save key remain. `secondary` is optional, so existing single-element pets, eggs, levels and inventory remain valid. Imported secondary affinity must be a distinct supported base element. Breeding/hatching/switching preserve it. Account/cloud/server authority is still pending; these rules are local solo gameplay.

## Validation
34 automated tests pass (23 existing + 11 new): timezones, all phase boundaries, daylight saving, invalid zones, legacy saves, cross-element breeding and parent retention, hybrid inheritance/hatching/save round trips, invalid affinities and bounded damage. Syntax checks and static build pass (19 assets).
