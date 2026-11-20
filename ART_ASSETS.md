# Illustrated NPC and item assets (v20)

Original illustrations generated for this project with the built-in image tool, then encoded as WebP for the browser. These are UI portraits/icons, not replacement exploration sprites. Existing Kat, Theia and Dark Protector artwork stays intact.

## Files and layout

- `npc-portraits-v1.webp`: 1254×1254, 266,410 bytes, 4 columns × 6 rows. Row order: Mara, Tobin, Seren, Vey, Professor Elian, Captain Rovan. Column order: calm, happy, determined, worried. The original landscape cells are center-cropped in square portrait windows by CSS without distorting faces. Elian/Rovan have prepared portraits; their future story content is not implemented by this asset update.
- `item-icons-v1.webp`: 1448×1086, 173,170 bytes, 4 columns × 3 rows. Row-major: Aether Snare, Pet Food, Premium Food, Small HP Potion, Medium HP Potion, Energy Snack, Recovery Drink, Seeds, Incubator Fuel, Breeding Treats, Farming Materials, Moonberries.
- `ui-art.js`: validated catalog-to-atlas mapping and escaped accessible labels.

Both atlases are cached by the service worker and production build. Total new image payload is 439,580 bytes. They do not enter the per-frame 3D mesh renderer.

## Production prompt set

NPC atlas prompt: original cozy fantasy 2.5D RPG illustrated dialogue UI; square texture with exactly four equal columns and six equal rows, no gutters/borders/text/watermark, chest-up original characters on muted deep teal. Every row repeats one identity in calm/happy/determined/worried expressions. Warm light upper left, polished hand-painted anime style, features readable at 64px. Mara: brown bun, dusty rose jacket, cream apron, caring adult caretaker. Tobin: tan breeder, straw hat, green vest, egg brooch. Seren: navy ponytail, teal training jacket, coral sash. Vey: pale silver-blond bob, indigo traveler hat, layered blue cloak, sea-glass clasp. Elian: middle-aged researcher, medium-dark skin, curly hair with silver temples, bronze glasses, ivory/sage clothing, turquoise pendant. Rovan: olive-skinned adult guard, auburn short hair, trimmed beard, eyebrow scar, dark blue/brass coat and leather shoulder guard.

Item atlas prompt: one original hand-painted fantasy inventory texture, exact four columns by three rows, matching dark muted teal cells, upper-left light and soft shadows, no labels/numbers/borders/watermark. Centered isolated items within 72% of each cell, distinct silhouettes readable at 48px. Bronze-caged luminous blue capture orb (not a red/white ball), cream food bowl, ornate teal premium snack bowl, round red small potion, tall blue medium potion, honey energy bar, green/lavender recovery bottle, cloth seed pouch, amber crystal fuel lantern, pink/cream heart biscuits, wood/rope/stone farming supplies, violet moonberries.

## Integration and verification

NPC expressions appear in conversations and the market/training/nursery panels. All eleven basic items are illustrated in the market and supplies bag; field cards use seed/harvest icons. Non-consumable inventory entries explain where to use them instead of exposing an invalid Use action.

No rewards, prices, effects, quest prerequisites, save schema, equipment or backend systems change. 118 automated tests, syntax checks and a 39-asset build pass. Verify image crops, dialogue, purchases and phone-sized inventory layout in browser before release.

## Adventurer portrait atlas v2

`adventurer-portraits-v2.webp`: 1254×1254, original built-in image-generation artwork, optimized to WebP without changing composition. Four equal cells: male calm / female calm; male happy / female happy. Used by character-profile.js and the local profile editor. Actual world actors remain animated 3D geometry, not these portraits.

Prompt: Original fantasy RPG adventurer portrait atlas for Ghost Pocket: Aetheria; polished square 2-column by 2-row atlas, equal square cells without borders or text. Top: boy left, girl right; bottom: same characters joyfully smiling. Family-friendly inviting hand-painted anime storybook game art; large lively eyes and friendly confidence; practical fully clothed fantasy outfits. Boy: tousled layered chestnut hair, emerald eyes, teal jacket, cream scarf, gold star clasp. Girl: warm auburn high side ponytail, turquoise ribbon, jade eyes, periwinkle jacket, cream scarf and matching star clasp. Soft mint/cream woodland bokeh; centered faces with full hairstyle and shoulders; maintain identity between rows. Original characters, no branded characters, watermarks or text.
