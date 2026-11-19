# Cinematic story mode — original 2.5D presentation

## Implemented

- A dedicated Story navigation entry and one walkable Moonwell Village plaza. Original painted background, fixed elevated perspective, small traveler with a following active companion, shadows and depth ordering.
- Tap-to-walk, arrow/WASD movement, touch direction pad, clamped walkable plaza, proximity story trigger, and fullscreen request where supported. Movement remains local presentation state and does not award gold or EXP.
- Theia, Nythera and Kat are absent from normal farm/adventure maps. Only the currently authored participants appear during dialogue. Theia–Nythera arguments do not display Kat as a silent spectator.
- New transparent illustrated full-body atlas with four gesture/expression variants per NPC. Theia retains her reference's long golden-orange hair, opaque eye veil and flowing ivory/gold robes. Kat wears the navy fur-trim jacket rather than crossed robe straps.
- Scenes remain within the story environment, with scene entries, two-shot camera treatment, changing poses, active-speaker lighting, expression portrait and dialogue box. Previous/next, keyboard navigation, Escape and return to exploration work without completing objectives.
- Both existing ending branches and all saved progression are retained. Objective and path buttons still call the original validated ranch rules. Normal farm, training and battles remain reachable.

## Practical scope

This is an original 2.5D browser story presentation inspired by the user's exploration-video direction. It is not the Digimon World 3 engine, a full 3D remake, or an additional campaign. The first plaza is playable; the rest of the game's maps and combat retain their existing renderer. NPC motion combines illustrated pose changes, scene entrance movement and subtle idle transforms; it is not skeletal 3D animation or lip sync. There is no new voice acting. Physical iOS/Android hardware has not been tested.

## Validation

73 automated tests pass, including atlas identities, removal of overworld keepers, participant-only scenes, confrontation casting, both endings, non-mutating replay, walk bounds and interaction distances. Syntax checks and 26-asset production build pass.

## Art provenance

story-cast-v2.png: original transparent 4-column/3-row full-body character atlas generated with the built-in image tool from the existing original NPC expression atlas as identity reference. story-plaza-v2.png: original generated pre-rendered fantasy plaza. Source PNG bytes and alpha are preserved. Exact prompts are in STORY_ART_PROMPTS.md. No game sprites or footage from the reference games are shipped.
