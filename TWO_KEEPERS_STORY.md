# Theia and Nythera: two opposing forces

The user’s light character keeps the name **Theia**. Her dark counterpart is renamed **Nythera**. The supplied images guide the descriptions (golden hair/eye veil/ivory and gold for Theia, ember-red eyes and darkened gold for Nythera); they are not copied into the shipped artwork. This update introduces lore and dialogue, not newly generated character portraits or a new boss fight.

Theia, Keeper of the First Dawn, protects free bonds between people and creatures. Nythera, Sovereign of the Hollow Eclipse, wants to bind the Heart fragments and command the vanished Guardians. They once guarded the Heart together. Nythera’s broken oath fractured it. Their Light/Darkness conflict drives the campaign; Nihiloth remains the deeper World Eater threat. Current story text retires the old Null Order label in favor of Nythera’s dark force.

## Playable presentation

- Story screen introduces both forces through distinct light/dark lore cards and optional Hear Theia/Hear Nythera dialogue panels.
- All ten starting affinities and nine collectible species have a companion-specific story thread.
- Existing five objectives receive new speakers and dialogue, including Theia, Nythera and Keeper Luma.
- Existing restore/investigate choices become the Path of Restoration and Path of the Hidden Trail, with different opening-arc conclusions: The Grove Rekindled / The Veil Uncovered.
- Investigating Nythera is a reconnaissance path, not an evil allegiance. A pet’s element does not determine loyalty.

## Compatibility and limits

Story data is modular in story.js. Existing ranch.story.step and ranch.story.choice remain authoritative. No save-key/schema change, reset, reward change, stat change, equipment or backend. Existing players see the new writing at their current chapter, and completed players retain their ending branch. Nythera and Theia are narrative characters here; combat still uses existing monsters and Hollowyrm. Later chapters and direct character encounters remain future work.

Syntax checks, 62 automated tests (58 existing + 4 story regressions), and a 21-asset build validate this increment. Browser review covers lore cards and character dialogue. Production is not overwritten by preparing this story branch.
