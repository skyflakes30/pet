# Expressive 2D release

## Implemented

- Kat replaces Keeper Luma as the story guide, with chapter-specific hints, capture advice and optional conversations.
- Theia, Nythera and Kat receive a new 1448×1086 PNG portrait atlas: 4 equal expression columns × 3 character rows. Cells are selected through validated CSS background positions; no image stretching across character frames.
- Calm, happy, determined and worried portraits accompany dialogue. Keep talking cycles four relevant lines and expressions for each NPC without granting rewards or changing saves. Story scenes choose contextual expressions too.
- All nine collectible species, Hollowyrm and the lantern evolution forms retain their original SVG rigs, with upgraded body gradients, ambient color, silhouette shadows and subtle species-colored motes.
- Every monster rig has new happy-eye and worried-brow layers. Actual health/hunger/happiness/rest determines idle expression. Pet interaction shows happy eyes, attack and hit reactions retain their animated expressions, and resting pets use sleepy eyes.
- Existing articulated motion and reduced-motion preferences are preserved. Small farm/portrait placements suppress decorative particles; no canvas game-loop renderer or per-frame JavaScript was added.

No progression/stat/reward changes. Existing original species designs are retained. The NPC reference art is preserved separately; the new generated atlas is the active visual asset. The full story increment remains in the same PR and is released together when authorized.

## Validation

67 automated tests passed, including all species expression layers, unique SVG IDs, stat-derived moods, all twelve portrait positions, dialogue cycling, original story branch saves, and previous capture/combat/farm/progression regressions. Syntax and 22-asset static production build passed. Browser QA checked all four Kat expressions, Theia/Nythera dialogue switching and an actual pet-care transition to a happy expression. Physical mobile hardware was not tested.

## NPC asset production

Asset: `npc-expressions.png`, generated from the three user-supplied character references. The source atlas is kept unchanged; CSS selects equal cells. Existing monster SVGs were edited as native vector assets. No official franchise sprites are used.

Prompt used for the built-in image generation:

> Use case: stylized-concept / game portrait expression atlas. Create ONE polished high-resolution 2D RPG dialogue portrait sprite atlas in a strictly aligned 4-column by 3-row grid of twelve equal square cells, no gutters or borders, landscape 4:3 canvas. Each cell has a centered head-and-shoulders character portrait with consistent head size and generous padding inside its own cell; never cross cell edges. All artwork crisp clean anime/chibi 2D, expressive ink outlines, painterly cel-shading, soft rim lighting, rich readable colors, tasteful fantasy finish. Reference 1 (dark girl) is Nythera; Reference 2 (light girl) is Theia; Reference 3 is Kat. Preserve recognizable hair, facial proportions and clothes. TOP ROW across all 4 columns: Theia, long golden-orange hair, ivory-gold robe, opaque dark eye veil, gentle light protector. SECOND ROW: Nythera, same recognizable dark counterpart, dark gold hair, black eye veil with two ember-red glowing eyes, dark violet and tarnished-gold collar, no blood or gore. THIRD ROW: Kat, golden blond layered hair with ponytail, black thick rectangular glasses, navy cap, navy fur-trimmed jacket, friendly guide. COLUMN EXPRESSIONS left to right for EACH row: 1 calm neutral / listening; 2 visibly joyful smiling; 3 determined and serious; 4 worried / surprised. Theia's eyes remain veiled so convey expressions through mouth, brows above veil, cheeks and head posture. Kat's glasses stay consistent; Nythera's eyes always remain glowing under veil. Each cell opaque matching soft simple background: top row warm cream-gold, middle row dark plum, bottom row muted teal. No scenery or words, remove reference captions, names and astronomy text entirely. Only the small BAD label on Kat's cap may remain. No typography elsewhere. This atlas will be consumed directly by a CSS 4x3 background-position grid, so exact equal cell alignment and padding are essential.
