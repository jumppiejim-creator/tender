# Tender — Design Document

## Concept
A cozy 2D top-down space exploration game. You and a permanent crew of four drift through a cluster of 50–80 star systems, terraforming worlds that keep growing in real time while you're away. No combat, no fail states, no ending. The galaxy contains no other living intelligent life — only the four people you chose to bring with you. The reward is looking at your star chart after 30 hours and seeing a constellation of green dots you made.

**Tagline:** Tend a galaxy you didn't plant.

## Core Pillars
1. **Cozy, contemplative tone.** No combat. No threats. Gentle resource pressure at most. Running out of fuel means a tow, not a game over.
2. **Persistent transformation.** Worlds you terraform stay terraformed and visibly change across stages. Real-time growth while away, capped at 8 hours of offline progress.
3. **The crew is the only warmth.** In a galaxy with no other people, the four voices in your cabin are the entire social world.
4. **Tending, not conquering.** You inherit a dead galaxy and bring pieces of it back to life for their own sake.

## Views (4 nested)
1. **Star Chart** — 50–80 systems connected by fixed jump lanes forming an irregular web. Denser middle, sparser arms, isolated edges. Player starts on the outer edge.
2. **System Map** — 2D top-down. One star (sometimes two), 2–6 planets, asteroid fields, occasional landmarks. Pilot ship in real time, slow and contemplative.
3. **Planet Surface** — 2D top-down. Land, walk, deploy machines, scan flora/fauna, mine.
4. **Ship View (Dollhouse)** — single hand-illustrated cutaway of ship interior. 6 rooms: Bridge, Engine Room, Galley, Greenhouse/Lab, Crew Quarters, Observation Deck. Click crew to talk; click rooms for descriptions. Cannot walk around. Visually accumulates objects from the journey over time (plants in greenhouse, rocks on bridge, jars in galley). Pausable, openable any time.

## Worlds & Terraforming

**6 Planet Types** (each with distinct terraforming puzzle):
- Frozen, Desert, Rocky/Barren, Volcanic (cool instead of warm), Toxic (skip atmosphere, scrub instead), Oceanic (already wet, needs landmass).

**6 Universal Stages:** Barren → Atmosphere → Hydrosphere → Flora → Fauna → Paradise. Each stage triggered by numeric thresholds driven by placed machines. Visible transformation at each threshold (color shifts, water appears, green spreads, planet icon updates on chart).

**~10 Machines across 3 Tiers:**
- Atmosphere: Gas Extractor, Pressure Regulator
- Hydrosphere: Ice Melter / Condenser, Water Pump
- Flora: Seed Disperser, Greenhouse
- Fauna: Bio-Incubator, Ecosystem Stabilizer
- Universal: Solar Array, Storage Silo

T2/T3 unlocked via crew level, derelict blueprints, or rare resources from other world types.

**Circular Resource Dependencies** (the loop that ties planets together):
- Frozen → Cryocrystals (cool volcanic worlds)
- Desert → Rare Metals (advanced machine tiers)
- Volcanic → Geothermal Cores (energy on cold worlds)
- Toxic → Catalysts (accelerate flora)
- Oceanic → Biomatter (fauna stage anywhere)
- Rocky → Common Ore (universal currency)

Paradise worlds passively trickle small amounts of all signature resources. You cannot specialize in one biome — the galaxy is the unit of play.

**Real-time growth:** Worlds tick whether you're on them or elsewhere in the galaxy. Closing the game caps progress at 8 hours so you always have something to come back to but are never punished.

## Crew
Player chooses one specialist from each of four roles at game start. Permanent for the run. No recruitment later — the silence is the point.

**Botanist** (Flora/Fauna stages): Yuki Tanaka (quiet, methodical) / Dr. Mira Okonkwo (sharp, academic) / Fern Reyes (warm, irreverent)
**Engineer** (ship & machine upgrades): Hollis "Holly" Vance (gruff veteran) / Kiran Bhatt (eager prodigy) / Old Tov (quiet, mysterious past)
**Cartographer/Xenologist** (chart & discovery): Ines Vidal (obsessive mapper) / Captain Reza Anvari (paternal storyteller) / "Echo" (minimal, watchful, hidden history)
**Cook/Morale Officer** (heart of ship, downtime scenes): Babu Okafor (booming, fatherly) / Saoirse Malley (dry ex-medic) / Wren Castellanos (anxious young baker)

Each character has a small flavor-aligned perk (never build-defining), 4 personal sidequests, and pair-based banter with the other 9 possible crewmates (66 pairs total in the writing pool, only 6 active per playthrough). Some sidequests are *linked* — a second crewmate's presence changes how the story resolves. Subtle bonus: pairs that have triggered enough banter together get a small perk boost when both aboard.

## Ship
Player names the ship at game start. Three linear upgrade tracks, 5 tiers each:
- **Hull** — cargo, simultaneous in-progress worlds
- **Drive** — fuel, jump range, efficiency
- **Lab** — scanning depth, codex detail, blueprint research

Some upgrades visibly add objects to the corresponding Ship View room.

## The Lore — A Soft Mystery
Long ago, a civilization called **the First Tenders** terraformed worlds in this cluster. They are gone. There is no explanation, no villain, no twist where they return. Every planet bears faint traces — ruins under ice, fossilized machines, half-finished atmospheres that decayed. The cluster's edges are defined by where the Tenders' work reached. Players are the second civilization to ever try this. The Fragments codex tab fills with discoveries; even at 100% the picture has holes. The mystery is *given*, never resolved.

## Codex (4 tabs — the long-term reward in lieu of an ending)
1. **Worlds** — every scanned planet, type, stage, resources, custom name field. Auto-updating descriptive paragraphs.
2. **Life** — flora and fauna catalog, hand-illustrated naturalist style.
3. **Fragments** — Tender lore (logs, murals, machines, crew theories). Deliberately incomplete.
4. **Crew** — fills in over playthrough as sidequests and banter trigger. Becomes a small biography of each character.

No completion percentage. Entries are their own reward.

## Anomalies & Derelicts
- **Tender sites** — ruins yielding codex entries and rare blueprints. Some heartbreaking, some beautiful, some inexplicable.
- **Echoes** — non-Tender oddities (humming planet, slow-time system, observed-only flower). No reward beyond wonder. Outer Wilds energy.
- **Lost human probes** — scattered evidence of *previous* human attempts to reach this cluster. None succeeded. The player is the first human to make it. The quietest emotional layer.

Derelicts are scanned, never looted. No derelict ever contains a living person.

## Landmarks (~15% of systems)
Hand-authored special systems breaking procedural rhythm: Tender stations, black hole with single planet, binary mirrored twins, mono-type system, fleet graveyard, perfectly preserved Tender garden world (gift, no terraforming needed), perfectly cubic moon, singing crystal array, children's garden ruin.

## Opening
Game opens on Ship View, in dock. Crew already aboard, ship already named. No cutscene, no narrator. Cook is cooking. Engineer doing final checks. Cartographer at the bridge with a chart showing only the start system. Botanist in the empty greenhouse. Player walks the cursor around, talks to each crewmate once, then the Cartographer says *"Whenever you're ready, captain."* First jump goes to a system flagged as "promising." After that, the game never gives another instruction.

## Tech Notes for Implementation
- 2D top-down throughout. Procedural where it serves variety (system layouts, planet tiles), hand-authored where it serves meaning (landmarks, crew dialogue, Ship View art).
- Save format must support persistent world states (per-planet stage, machine inventory, real-time tick timestamps).
- Time delta on game load: compute elapsed real-time since last save, apply growth ticks to all in-progress worlds, cap at 8 hours.
- Crew dialogue system: pair-keyed banter pool, triggered by downtime events (post-jump, world-stage-complete, dock).
