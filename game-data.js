// Tender — static game data
// Lifted from TENDER_DESIGN.md. Use `var` so these are accessible as browser globals.

var SAVE_VERSION = 1;
var OFFLINE_TICK_CAP_SECONDS = 8 * 60 * 60;

var SHIP_ROOMS = [
  { id: "bridge",       name: "Bridge",            desc: "A wraparound viewport, three soft chairs, and a chart table that hums when it's thinking.",
    zone: { left: "5%", top: "15%", width: "15%", height: "70%" } },
  { id: "engine",       name: "Engine Room",       desc: "Warm, humming, faintly oily. The drive coils tick as they cool.",
    zone: { left: "20%", top: "15%", width: "15%", height: "70%" } },
  { id: "galley",       name: "Galley",            desc: "Mismatched mugs, a kettle that whistles slightly off-key, jars accumulating along the shelf.",
    zone: { left: "35%", top: "15%", width: "15%", height: "70%" } },
  { id: "greenhouse",   name: "Greenhouse / Lab",  desc: "Grow lights, an empty seed rack waiting to be filled, and a microscope under a soft cloth.",
    zone: { left: "50%", top: "15%", width: "15%", height: "70%" } },
  { id: "quarters",     name: "Crew Quarters",     desc: "Four bunks, four small shelves, four lives folded into a single corridor.",
    zone: { left: "65%", top: "15%", width: "15%", height: "70%" } },
  { id: "observation",  name: "Observation Deck",  desc: "A dome of glass and a single bench. The best place to watch a star you'll never visit.",
    zone: { left: "80%", top: "15%", width: "15%", height: "70%" } }
];

var CREW_ROLES = [
  {
    id: "botanist",
    label: "Botanist",
    domain: "Flora & fauna stages",
    defaultRoom: "greenhouse",
    candidates: [
      { id: "yuki",  name: "Yuki Tanaka",      blurb: "Quiet, methodical. Keeps a private notebook of leaf shapes." },
      { id: "mira",  name: "Dr. Mira Okonkwo", blurb: "Sharp, academic. Will correct you, gently, in three languages." },
      { id: "fern",  name: "Fern Reyes",       blurb: "Warm and irreverent. Names every sprout something embarrassing." }
    ]
  },
  {
    id: "engineer",
    label: "Engineer",
    domain: "Ship & machine upgrades",
    defaultRoom: "engine",
    candidates: [
      { id: "holly", name: "Hollis \"Holly\" Vance", blurb: "Gruff veteran. Has opinions about every weld in the hull." },
      { id: "kiran", name: "Kiran Bhatt",            blurb: "Eager prodigy. Sleeps with a wrench under the pillow." },
      { id: "tov",   name: "Old Tov",                blurb: "Quiet, mysterious past. Doesn't say where he learned the trade." }
    ]
  },
  {
    id: "cartographer",
    label: "Cartographer / Xenologist",
    domain: "Chart & discovery",
    defaultRoom: "bridge",
    candidates: [
      { id: "ines",  name: "Ines Vidal",           blurb: "Obsessive mapper. Every blank space on a chart is a personal insult." },
      { id: "reza",  name: "Captain Reza Anvari",  blurb: "Paternal storyteller. Knows the name of every star you'll never reach." },
      { id: "echo",  name: "\"Echo\"",             blurb: "Minimal, watchful, hidden history. Goes by one word." }
    ]
  },
  {
    id: "cook",
    label: "Cook / Morale Officer",
    domain: "Heart of the ship, downtime scenes",
    defaultRoom: "galley",
    candidates: [
      { id: "babu",     name: "Babu Okafor",        blurb: "Booming, fatherly. The galley is louder when he's in it." },
      { id: "saoirse",  name: "Saoirse Malley",     blurb: "Dry ex-medic. Makes a stew that tastes like an apology." },
      { id: "wren",     name: "Wren Castellanos",   blurb: "Anxious young baker. Bread is her language for everything." }
    ]
  }
];

var PLANET_TYPES = [
  { id: "frozen",   name: "Frozen",       puzzle: "Warm it carefully without flashing the ice."   },
  { id: "desert",   name: "Desert",       puzzle: "Find water before atmosphere can hold it."     },
  { id: "rocky",    name: "Rocky / Barren", puzzle: "Build everything from nothing."              },
  { id: "volcanic", name: "Volcanic",     puzzle: "Cool instead of warm. Cryocrystals required." },
  { id: "toxic",    name: "Toxic",        puzzle: "Skip atmosphere — scrub what's already there." },
  { id: "oceanic",  name: "Oceanic",      puzzle: "Already wet. Needs landmass to anchor life."  }
];

var TERRAFORM_STAGES = [
  { id: 0, name: "Barren",      desc: "Untouched. The way you found it." },
  { id: 1, name: "Atmosphere",  desc: "A thin shell of breathable air." },
  { id: 2, name: "Hydrosphere", desc: "Water — running, pooling, raining." },
  { id: 3, name: "Flora",       desc: "First green. The longest stage." },
  { id: 4, name: "Fauna",       desc: "Movement returns. Quiet at first." },
  { id: 5, name: "Paradise",    desc: "Self-sustaining. A trickle of every signature resource." }
];

var MACHINES = [
  { id: "gas_extractor",       name: "Gas Extractor",          tier: 1, stage: "Atmosphere",  desc: "Pulls usable gases out of the regolith.",                    pps: 1.5, activeStages: [0], cost: { common_ore: 5 } },
  { id: "pressure_regulator",  name: "Pressure Regulator",     tier: 2, stage: "Atmosphere",  desc: "Holds the new air down.",                                    pps: 2.5, activeStages: [0], cost: { common_ore: 10, rare_metals: 5 } },
  { id: "ice_melter",          name: "Ice Melter / Condenser", tier: 1, stage: "Hydrosphere", desc: "Releases trapped water; condenses vapor.",                    pps: 1.5, activeStages: [1], cost: { common_ore: 8, geothermal_cores: 3 } },
  { id: "water_pump",          name: "Water Pump",             tier: 2, stage: "Hydrosphere", desc: "Moves water into the places it should be.",                   pps: 2.5, activeStages: [1], cost: { common_ore: 12, geothermal_cores: 6 } },
  { id: "seed_disperser",      name: "Seed Disperser",         tier: 1, stage: "Flora",       desc: "Scatters hardy starter species.",                             pps: 1.5, activeStages: [2], cost: { common_ore: 10, catalysts: 5 } },
  { id: "greenhouse",          name: "Greenhouse",             tier: 2, stage: "Flora",       desc: "Local nursery for the slow-to-take.",                         pps: 2.5, activeStages: [2], cost: { common_ore: 15, catalysts: 8, biomatter: 3 } },
  { id: "bio_incubator",       name: "Bio-Incubator",          tier: 2, stage: "Fauna",       desc: "First small things, carefully.",                              pps: 2.0, activeStages: [3], cost: { common_ore: 15, biomatter: 8, rare_metals: 5 } },
  { id: "ecosystem_stabilizer",name: "Ecosystem Stabilizer",   tier: 3, stage: "Fauna",       desc: "Holds a young ecosystem together until it can stand.",        pps: 3.0, activeStages: [3], cost: { common_ore: 20, biomatter: 12, catalysts: 8, rare_metals: 5 } },
  { id: "solar_array",         name: "Solar Array",            tier: 1, stage: "Universal",   desc: "Boosts all active machines by +10% each.",                    pps: 0,   activeStages: [],          multiplier: 0.10, cost: { common_ore: 3 } },
  { id: "storage_silo",        name: "Storage Silo",           tier: 1, stage: "Universal",   desc: "Boosts resource production by 15% per silo. No terraforming.", pps: 0,   activeStages: [],          cost: { common_ore: 8 } }
];

var STARTING_INVENTORY = { common_ore: 30 };

var SIGNATURE_RESOURCES = [
  { id: "cryocrystals",    name: "Cryocrystals",     from: "frozen",   used_for: "Cooling volcanic worlds." },
  { id: "rare_metals",     name: "Rare Metals",      from: "desert",   used_for: "Advanced machine tiers." },
  { id: "geothermal_cores",name: "Geothermal Cores", from: "volcanic", used_for: "Energy on cold worlds." },
  { id: "catalysts",       name: "Catalysts",        from: "toxic",    used_for: "Accelerating flora." },
  { id: "biomatter",       name: "Biomatter",        from: "oceanic",  used_for: "Fauna stage anywhere." },
  { id: "common_ore",      name: "Common Ore",       from: "rocky",    used_for: "Universal currency." }
];

// Star chart — 16 systems. Harbor is the start at the outer edge.
// Inner systems (reachable at Drive tier 1) form a connected core via direct lanes.
// Outer systems require 2+ hop jumps (Drive tier 2+) to reach from Harbor.
var STAR_NAMES = [
  { id: "harbor",    name: "Harbor",    desc: "The dock. A single yellow star and the rust-colored world you launched from." },
  { id: "promise",   name: "Promise",   desc: "Flagged 'promising' on the chart you inherited. Four worlds and a quiet star." },
  { id: "veil",      name: "Veil",      desc: "A pale star wrapped in dust. Something old left a footprint here." },
  { id: "crucible",  name: "Crucible",  desc: "Hot inner worlds orbit a restless orange star." },
  { id: "drift",     name: "Drift",     desc: "A lazy system. Worlds spread wide, orbits slow." },
  { id: "cairn",     name: "Cairn",     desc: "Stone and silence. Whoever came before stacked something here." },
  { id: "bloom",     name: "Bloom",     desc: "Faint organic signatures — the instruments can't agree on what." },
  { id: "threshold", name: "Threshold", desc: "The edge of the dense cluster. Beyond here, stars thin out." },
  { id: "anvil",     name: "Anvil",     desc: "A dense binary pair, worlds squeezed between two suns." },
  { id: "loom",      name: "Loom",      desc: "Threads of dust weave between five small worlds." },
  { id: "hush",      name: "Hush",      desc: "The quietest system on the chart. Even the star seems dim." },
  { id: "sunder",    name: "Sunder",    desc: "A shattered ring of debris and two surviving planets." },
  { id: "pyre",      name: "Pyre",      desc: "An old red giant. The inner worlds are baked and beautiful." },
  { id: "wellspring",name: "Wellspring", desc: "Water everywhere. Three oceanic worlds and a frozen moon." },
  { id: "cloister",  name: "Cloister",  desc: "Tucked behind a dust lane. Hard to reach, worth the trip." },
  { id: "ember",     name: "Ember",     desc: "A dying star's last warmth. Quiet, distant, still worth tending." }
];

var STAR_KINDS = [
  { color: "#f4c46d", kind: "Yellow dwarf" },
  { color: "#fde3a0", kind: "Pale main-sequence" },
  { color: "#cfd8ea", kind: "Dust-shrouded giant" },
  { color: "#f5a040", kind: "Orange subgiant" },
  { color: "#e87060", kind: "Red giant" },
  { color: "#aac8f0", kind: "Blue-white dwarf" }
];

var PLANET_TYPE_IDS = ["frozen", "desert", "rocky", "volcanic", "toxic", "oceanic"];

// Deterministic seeded random for reproducible galaxy layout.
var _starSeed = 42;
function starRng() { _starSeed = (_starSeed * 16807 + 0) % 2147483647; return (_starSeed & 0x7fffffff) / 0x7fffffff; }

var STUB_SYSTEMS = (function() {
  _starSeed = 42;
  // Positions: hand-placed for visual appeal. Denser middle, sparser edges.
  var positions = [
    /* harbor    */ { x: 80,  y: 380 },
    /* promise   */ { x: 220, y: 280 },
    /* veil      */ { x: 380, y: 360 },
    /* crucible  */ { x: 340, y: 180 },
    /* drift     */ { x: 500, y: 240 },
    /* cairn     */ { x: 180, y: 160 },
    /* bloom     */ { x: 480, y: 380 },
    /* threshold */ { x: 620, y: 300 },
    /* anvil     */ { x: 300, y: 300 },
    /* loom      */ { x: 540, y: 130 },
    /* hush      */ { x: 680, y: 180 },
    /* sunder    */ { x: 140, y: 440 },
    /* pyre      */ { x: 420, y: 80  },
    /* wellspring*/ { x: 680, y: 420 },
    /* cloister  */ { x: 720, y: 60  },
    /* ember     */ { x: 60,  y: 200 }
  ];

  // Jump lanes — an irregular web. Core is well-connected; edges sparser.
  var laneMap = {
    harbor:    ["promise", "sunder"],
    promise:   ["harbor", "veil", "cairn", "anvil"],
    veil:      ["promise", "anvil", "bloom"],
    crucible:  ["cairn", "drift", "pyre"],
    drift:     ["crucible", "threshold", "loom"],
    cairn:     ["promise", "crucible", "ember"],
    bloom:     ["veil", "threshold", "wellspring"],
    threshold: ["drift", "bloom", "hush"],
    anvil:     ["promise", "veil", "crucible"],
    loom:      ["drift", "pyre", "hush"],
    hush:      ["threshold", "loom", "cloister"],
    sunder:    ["harbor", "ember"],
    pyre:      ["crucible", "loom", "cloister"],
    wellspring:["bloom", "threshold"],
    cloister:  ["hush", "pyre"],
    ember:     ["sunder", "cairn"]
  };

  // Planet mixes — each system gets 2–5 planets with varied types.
  var planetMixes = [
    /* harbor    */ ["rocky", "desert", "frozen"],
    /* promise   */ ["volcanic", "desert", "oceanic", "frozen"],
    /* veil      */ ["toxic", "rocky", "volcanic", "oceanic", "frozen"],
    /* crucible  */ ["volcanic", "volcanic", "desert"],
    /* drift     */ ["frozen", "rocky", "oceanic"],
    /* cairn     */ ["rocky", "rocky", "toxic"],
    /* bloom     */ ["oceanic", "toxic", "desert", "frozen"],
    /* threshold */ ["desert", "volcanic", "frozen", "rocky"],
    /* anvil     */ ["volcanic", "desert", "rocky", "toxic"],
    /* loom      */ ["frozen", "oceanic", "toxic", "desert", "rocky"],
    /* hush      */ ["frozen", "frozen", "rocky"],
    /* sunder    */ ["rocky", "volcanic"],
    /* pyre      */ ["volcanic", "desert", "toxic", "oceanic"],
    /* wellspring*/ ["oceanic", "oceanic", "oceanic", "frozen"],
    /* cloister  */ ["toxic", "oceanic", "desert"],
    /* ember     */ ["frozen", "rocky", "desert"]
  ];

  return STAR_NAMES.map(function(s, si) {
    var pos = positions[si];
    var starKind = STAR_KINDS[si % STAR_KINDS.length];
    var mix = planetMixes[si];
    var planets = mix.map(function(type, pi) {
      return {
        id: s.id + "_" + String.fromCharCode(97 + pi),
        name: s.name + " " + (["I","II","III","IV","V"])[pi],
        type: type,
        stage: 0,
        orbit: pi
      };
    });
    return {
      id: s.id,
      name: s.name,
      x: pos.x, y: pos.y,
      description: s.desc,
      star: { name: s.name, color: starKind.color, kind: starKind.kind },
      planets: planets,
      connections: laneMap[s.id] || []
    };
  });
})();

// Visual palette for the System Map — one color per planet type.
var PLANET_COLORS = {
  frozen:   "#b8d8ea",
  desert:   "#e4b877",
  rocky:    "#8a7a6a",
  volcanic: "#c9543a",
  toxic:    "#8fc27a",
  oceanic:  "#3a7ac9"
};

// Planet surface grid dimensions (Phase 2).
var SURFACE_GRID_COLS = 12;
var SURFACE_GRID_ROWS = 8;

// Points required to advance one terraforming stage.
var STAGE_THRESHOLD = 1800;

// Stage index to human-readable stage name for machine UI.
var ACTIVE_STAGE_NAMES = {
  0: "Barren \u2192 Atmosphere",
  1: "Atmosphere \u2192 Hydrosphere",
  2: "Hydrosphere \u2192 Flora",
  3: "Flora \u2192 Fauna",
  4: "Fauna \u2192 Paradise"
};

// Color per machine category — drives the pip on the surface grid and the sidebar swatch.
var MACHINE_CATEGORY_COLORS = {
  Atmosphere:  "#a8d8f0",
  Hydrosphere: "#3a7ac9",
  Flora:       "#6fbf73",
  Fauna:       "#d9a66a",
  Universal:   "#f4c46d"
};

// Phase 3 — resource production. A world produces its signature resource once it
// reaches Flora (stage 3). Rate scales with stage: Flora < Fauna < Paradise.
var PRODUCTION_PER_STAGE = {
  3: 0.05,
  4: 0.15,
  5: 0.40
};

// Planet type -> signature resource id. Mirrors SIGNATURE_RESOURCES for quick lookup.
var PLANET_TYPE_RESOURCE = {
  frozen:   "cryocrystals",
  desert:   "rare_metals",
  volcanic: "geothermal_cores",
  toxic:    "catalysts",
  oceanic:  "biomatter",
  rocky:    "common_ore"
};

// Ship upgrade tracks — 5 tiers each. Tier 1 is the starting state (no cost).
// Cost maps are { resourceId: amount }.
var UPGRADE_TRACKS = [
  {
    id: "hull",
    label: "Hull",
    desc: "Cargo space and simultaneous in-progress worlds.",
    tiers: [
      { tier: 1, cost: null, effect: "2 worlds in progress" },
      { tier: 2, cost: { common_ore: 8 },                                                          effect: "3 worlds in progress" },
      { tier: 3, cost: { common_ore: 16, rare_metals: 8 },                                         effect: "4 worlds in progress" },
      { tier: 4, cost: { common_ore: 32, rare_metals: 16, cryocrystals: 8 },                       effect: "5 worlds in progress" },
      { tier: 5, cost: { common_ore: 64, rare_metals: 32, cryocrystals: 16, biomatter: 8 },        effect: "6 worlds in progress" }
    ]
  },
  {
    id: "drive",
    label: "Drive",
    desc: "Fuel, jump range, efficiency.",
    tiers: [
      { tier: 1, cost: null, effect: "1-hop jumps" },
      { tier: 2, cost: { geothermal_cores: 10 },                                                    effect: "2-hop jumps" },
      { tier: 3, cost: { geothermal_cores: 20, cryocrystals: 10 },                                  effect: "3-hop jumps" },
      { tier: 4, cost: { geothermal_cores: 40, cryocrystals: 20, catalysts: 10 },                   effect: "4-hop jumps" },
      { tier: 5, cost: { geothermal_cores: 80, cryocrystals: 40, catalysts: 20, biomatter: 10 },    effect: "Chart-wide jumps" }
    ]
  },
  {
    id: "lab",
    label: "Lab",
    desc: "Scanning depth, codex detail, blueprint research. (Placeholder for now.)",
    tiers: [
      { tier: 1, cost: null, effect: "Basic scans" },
      { tier: 2, cost: { catalysts: 10 },                                                           effect: "Resource breakdown" },
      { tier: 3, cost: { catalysts: 20, rare_metals: 10 },                                          effect: "Flora/fauna detail" },
      { tier: 4, cost: { catalysts: 40, rare_metals: 20, biomatter: 10 },                           effect: "Blueprint research" },
      { tier: 5, cost: { catalysts: 80, rare_metals: 40, biomatter: 20, cryocrystals: 10 },         effect: "Deep fragments" }
    ]
  }
];

// Hull tier -> max number of worlds with machines placed that haven't reached Paradise.
function hullWorldLimit(hullTier) {
  return 1 + (hullTier || 1);
}

// Crew congratulations when a stage threshold is crossed. Keyed by the newly entered stage.
// Botanist speaks for Flora/Fauna/Paradise; Engineer speaks for Atmosphere/Hydrosphere.
var STAGE_CONGRATS = {
  1: { role: "engineer", line: "\"Atmosphere holds. Breathable, mostly. That's the hard part done.\"" },
  2: { role: "engineer", line: "\"Rain. Actual rain. Listen to it for a second, captain.\"" },
  3: { role: "botanist", line: "\"First green. I wasn't sure it'd take. It took.\"" },
  4: { role: "botanist", line: "\"Something moved out there. Something small. Something alive.\"" },
  5: { role: "botanist", line: "\"It's a paradise now. Whatever we were trying to do — we did it.\"" }
};

// Placeholder lines so clicking a crewmate does something in Phase 0.
var PLACEHOLDER_LINES = {
  botanist:     "\"The greenhouse is empty. It won't be for long.\"",
  engineer:     "\"Drive's warm. Say the word.\"",
  cartographer: "\"Whenever you're ready, captain.\"",
  cook:         "\"Sit. Eat first. The galaxy will wait.\""
};
