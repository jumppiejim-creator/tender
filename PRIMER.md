# Tender — Claude Code Primer

## Read First
Before doing anything else, read `TENDER_DESIGN.md` in this folder. It contains the full game concept, mechanics, crew, lore, and views. Everything below assumes you've read it.

## Project Status
**Phase 0: Scaffolding.** Nothing has been built yet. The first session goal is a minimal vertical slice you can click around in:
1. Project skeleton (`index.html` + `game-data.js`)
2. Character creation screen — pick one of three options for each of the four crew roles, name the ship
3. The Ship View dollhouse — single illustrated cutaway with the four chosen crewmates clickable in their default rooms (talking can be a placeholder line each)
4. Placeholder star chart with 3 stub systems and a working "jump" between them

The goal of Phase 0 is "something I can show Abby tonight," not polish.

## Tech Stack
- **HTML/JS/React in-browser, no build step.** Same architecture as the Cindervale Alchemist project. React loaded via CDN, JSX transformed in-browser via Babel standalone, single `index.html` for the app, single `game-data.js` for all static content.
- **Deployment: GitHub Pages**, served at a project subpath (e.g. `username.github.io/tender/`).
- **2D top-down throughout.** DOM-based for menus, chart, codex, Ship View. The planet surface tile rendering may want a `<canvas>` later — defer that decision until Phase 2.

## Critical Conventions (carried over from Cindervale)
- **Never rewrite either file wholesale.** Targeted edits only. If a change is large, do it as a sequence of focused edits, not a full file replacement.
- **`var` not `const` for globals in `game-data.js`** so they're accessible in browser global scope.
- **All asset paths must be relative** (`./assets/ship.png`, never `/assets/ship.png`). GitHub Pages serves at a subpath, and absolute paths will 404 in production while working fine locally.
- **Syntax-check after edits.** Run `node -c game-data.js` and confirm `index.html` parses cleanly before reporting done.
- **Commit checkpoints frequently.** Git is initialized. Commit after each working change so we can revert easily.

## Architectural Decisions Made Up Front

### Real-time growth (the offline tick)
Tender has a real-time component the player will hit immediately: terraforming worlds tick forward whether the player is on them, elsewhere in the galaxy, or has the game closed (capped at 8 hours offline).

**Build this on day one. Do not retrofit it.** Specifically:
- The save object stores a single `lastTickTimestamp` (epoch ms).
- A single function `applyGrowthTicks(elapsedSeconds)` walks all in-progress worlds and advances their stage thresholds based on their installed machines.
- On game load: compute `min(now - lastTickTimestamp, 8 hours)` in seconds, call `applyGrowthTicks` once, set `lastTickTimestamp = now`.
- During play: call `applyGrowthTicks` on a slow interval (every 5–10 seconds is fine — this is a cozy game).
- Save writes always update `lastTickTimestamp`.

This is the single most important architectural call. Get it right at the start.

### Save format
LocalStorage, single JSON blob, versioned (`saveVersion: 1`). Matches Cindervale's pattern. Include `lastTickTimestamp` from day one even if growth isn't implemented yet.

### Data lives in `game-data.js`
The 12 crew candidates, 6 planet types, 6 stages, ~10 machines, and signature resources are all flat data tables. Lift them straight from `TENDER_DESIGN.md` into `game-data.js` as the first task. Don't invent extra content — only what the design doc specifies.

## File Structure (target)
```
tender/
├── index.html          # React app, all UI components, game logic
├── game-data.js        # Static game content (crew, planets, machines, etc.)
├── assets/             # Images, when we have them
├── TENDER_DESIGN.md    # The design doc — source of truth
├── PRIMER.md           # This file
└── README.md           # Brief project description for the GitHub repo
```

## What NOT to Build in Phase 0
- Planet surface view (Phase 2)
- Codex (Phase 3)
- Crew banter / sidequests (Phase 4)
- Anomalies and derelicts (Phase 4)
- Any procedural generation beyond the 3 stub systems
- Audio
- Save/load UI (saving silently to localStorage is fine; UI comes later)

## Reporting
At the end of each session, report:
- Files changed and approximate line counts
- What works and what's stubbed
- Any design questions that came up that aren't answered in `TENDER_DESIGN.md` (flag, don't guess)
- Any deviations from the design doc and why

## Open Design Questions (flag if you encounter, don't decide)
- Whether the planet surface view uses DOM tiles or `<canvas>`
- Exact numeric thresholds for terraforming stages (placeholder values are fine for now)
- Whether jump lanes are bidirectional (assume yes unless something says otherwise)
- Exact size of the Ship View dollhouse (assume single screen, ~1024×768 area)
