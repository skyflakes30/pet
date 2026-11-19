# Capture challenge release

This release includes the unique skills in MONSTER_SKILLS.md plus a capture loop that replaces automatic victory recruitment. All nine current collectible species retain their own signatures; the guardian boss also has its own skill.

## Aether Snare

An original teal-and-gold prism orb, sold at the ranch market for 18 gold (sell value 5). New players receive three. Existing saves receive three once when the missing inventory key is migrated; existing pets, training and progress are kept.

- The target must have 50% HP or less, must not be a guardian boss or an already-owned species, and collection capacity must be available.
- Capture probability: clamp(0.25 + 0.4 × (1 − HP ratio / 0.5) − regionIndex × 0.06, 0.15, 0.65). The UI publishes the current rounded percentage. Low HP helps; no throw is guaranteed.
- A real throw consumes one orb. Each failure consumes a turn and triggers a counterattack; after the third failed throw the target escapes without rewards. Invalid attempts consume nothing.
- Success ends combat, adds one level-1 pet with derived signature skill and affinity, awards half the species battle XP and 5 bond, and awards no gold or win count. Repeated clicks cannot claim the same pet/reward again.
- Normal knockouts continue granting original battle rewards, but recruit no pets.
- Careful Strike costs 1 focus, deals 35% of the calculated attack and leaves at least 1 HP. Damage marks are still dangerous and can knock out a capture target.
- Attempt counts persist across reload. Existing battles without capture fields remain compatible. Terminal capture outcomes are never accepted inside an ongoing imported battle.

The current one-per-species wild collection rule is preserved. Breeding and rescue eggs can still add companions through their own progression rules. This is a solo local-save game, not server-authoritative multiplayer; capture rolls are not an anti-cheat backend.

## Verification

58 automated tests cover previous progression/skills plus capture gating, probability, focus cost, nonlethal strike, success/failure, counters, escape, rewards, inventory transactions, old inventory migration and invalid imports. Syntax checks and the 20-asset static production build pass. Service worker cache advances to the capture release.
