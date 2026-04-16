// The Garden of the Stars — static game data
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
  { id: "frozen",   name: "Frozen",         puzzle: "Warm it carefully without flashing the ice. Vapor first, then meltwater, then moss." },
  { id: "desert",   name: "Desert",         puzzle: "Find water before atmosphere can hold it. Filter the dust, then condense the air, then seed hardy life." },
  { id: "rocky",    name: "Rocky / Barren", puzzle: "Build everything from nothing. The blank canvas." },
  { id: "volcanic", name: "Volcanic",       puzzle: "Cool instead of warm. Collect the vents, condense the steam, settle the land." },
  { id: "toxic",    name: "Toxic",          puzzle: "Skip the atmosphere puzzle — scrub what's already there. Purify, then replant." },
  { id: "oceanic",  name: "Oceanic",        puzzle: "Already wet. Stabilize the air, raise the coral, wake the reefs." }
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
  { id: "gas_extractor", name: "Gas Extractor", tier: 1, stage: "Atmosphere", desc: "Pulls usable gases out of the regolith.", pps: 1.5, activeStages: [0], cost: { common_ore: 5 },
    typeFlavor: {
      frozen:   { name: "Vapor Collector",      desc: "Captures what little atmosphere the ice releases as it thaws." },
      desert:   { name: "Dust Filter",          desc: "Sifts breathable gases from the constant particulate haze." },
      rocky:    { name: "Gas Extractor",        desc: "Pulls usable gases out of the regolith." },
      volcanic: { name: "Vent Tap",             desc: "Siphons gases directly from geothermal vents." },
      toxic:    { name: "Atmosphere Scrubber",   desc: "Filters poisons from the existing atmosphere, a molecule at a time." },
      oceanic:  { name: "Surface Harvester",    desc: "Draws dissolved gases from the ocean's skin." }
    }},
  { id: "pressure_regulator", name: "Pressure Regulator", tier: 2, stage: "Atmosphere", desc: "Holds the new air down.", pps: 2.5, activeStages: [0], cost: { common_ore: 10, rare_metals: 5 },
    typeFlavor: {
      frozen:   { name: "Cryo-Pressure Regulator", desc: "Holds the new atmosphere down before it can boil off into space." },
      desert:   { name: "Convection Dampener",     desc: "Keeps day-night temperature swings from tearing the atmosphere apart." },
      rocky:    { name: "Pressure Regulator",      desc: "Holds the new air down." },
      volcanic: { name: "Vent Stabilizer",         desc: "Balances atmospheric outgassing against orbital pressure." },
      toxic:    { name: "Containment Baffler",     desc: "Maintains the scrubbed atmosphere at livable pressure." },
      oceanic:  { name: "Pressure Equalizer",      desc: "Balances the air against the weight of the ocean below." }
    }},
  { id: "ice_melter", name: "Ice Melter / Condenser", tier: 1, stage: "Hydrosphere", desc: "Releases trapped water; condenses vapor.", pps: 1.5, activeStages: [1], cost: { common_ore: 10 },
    typeFlavor: {
      frozen:   { name: "Ice Melter",                  desc: "Releases water trapped in the ice, carefully, without flashing it." },
      desert:   { name: "Atmospheric Water Generator", desc: "Condenses moisture from air that insists it has none." },
      rocky:    { name: "Moisture Extractor",          desc: "Draws water from hydrated minerals in the rock." },
      volcanic: { name: "Steam Condenser",             desc: "Collects water vapor from cooling volcanic plumes." },
      toxic:    { name: "Purification Still",          desc: "Distills clean water out of whatever's in the existing liquid." },
      oceanic:  { name: "Desalination Plant",          desc: "The planet's already wet. Just make it drinkable." }
    }},
  { id: "water_pump", name: "Water Pump", tier: 2, stage: "Hydrosphere", desc: "Moves water into the places it should be.", pps: 2.5, activeStages: [1], cost: { common_ore: 12, geothermal_cores: 6 },
    typeFlavor: {
      frozen:   { name: "Meltwater Channeler", desc: "Routes thawed streams before they refreeze." },
      desert:   { name: "Aquifer Pump",        desc: "Pulls deep groundwater to the surface where it can do some good." },
      rocky:    { name: "Water Pump",          desc: "Moves water into the places it should be." },
      volcanic: { name: "Lava Tube Irrigator", desc: "Threads water through cooled lava tubes to spread it underground." },
      toxic:    { name: "Filtered Irrigator",  desc: "Distributes purified water while keeping the old stuff out." },
      oceanic:  { name: "Current Director",    desc: "Shapes the ocean's own currents to build fertile shallows." }
    }},
  { id: "seed_disperser", name: "Seed Disperser", tier: 1, stage: "Flora", desc: "Scatters hardy starter species.", pps: 1.5, activeStages: [2], cost: { common_ore: 12 },
    typeFlavor: {
      frozen:   { name: "Tundra Seeder",           desc: "Drops cold-hardy mosses and lichens across the thawing ground." },
      desert:   { name: "Cactus Disperser",        desc: "Plants drought-resistant succulents that anchor the new soil." },
      rocky:    { name: "Lichen Scatter",           desc: "Seeds pioneer lichens that break rock into dirt." },
      volcanic: { name: "Volcanic Pioneer Seeder",  desc: "Drops heat-tolerant ferns into fresh volcanic soil." },
      toxic:    { name: "Adapted Spore Disperser",  desc: "Releases bio-engineered spores that thrive in residual toxins." },
      oceanic:  { name: "Mangrove Seeder",          desc: "Plants salt-tolerant roots along the new coastlines." }
    }},
  { id: "greenhouse", name: "Greenhouse", tier: 2, stage: "Flora", desc: "Local nursery for the slow-to-take.", pps: 2.5, activeStages: [2], cost: { common_ore: 15, catalysts: 8, biomatter: 3 },
    typeFlavor: {
      frozen:   { name: "Alpine Nursery",    desc: "A heated enclosure that coaxes temperate plants through frozen nights." },
      desert:   { name: "Oasis Nursery",     desc: "A shaded, humid shelter where seedlings forget the desert outside." },
      rocky:    { name: "Greenhouse",        desc: "Local nursery for the slow-to-take." },
      volcanic: { name: "Volcanic Nursery",  desc: "A cooled dome that shields young plants from ash and heat." },
      toxic:    { name: "Contained Nursery", desc: "A sealed grow-chamber where nothing toxic can reach the roots." },
      oceanic:  { name: "Tide-Pool Nursery", desc: "A sheltered basin that lets marine flora establish in calm water." }
    }},
  { id: "bio_incubator", name: "Bio-Incubator", tier: 2, stage: "Fauna", desc: "First small things, carefully.", pps: 2.0, activeStages: [3], cost: { common_ore: 15, biomatter: 8, rare_metals: 5 },
    typeFlavor: {
      frozen:   { name: "Hibernation Chamber",  desc: "Warms dormant organisms to life in controlled thermal cycles." },
      desert:   { name: "Burrow Incubator",     desc: "Breeds heat-adapted insects and lizards in cool underground nests." },
      rocky:    { name: "Bio-Incubator",        desc: "First small things, carefully." },
      volcanic: { name: "Thermal Hatchery",     desc: "Uses geothermal warmth to incubate heat-loving organisms." },
      toxic:    { name: "Detox Incubator",      desc: "Raises organisms pre-adapted to trace toxins in the soil." },
      oceanic:  { name: "Reef Spawner",         desc: "Cultivates coral polyps and small marine creatures in sheltered tanks." }
    }},
  { id: "ecosystem_stabilizer", name: "Ecosystem Stabilizer", tier: 3, stage: "Fauna", desc: "Holds a young ecosystem together until it can stand.", pps: 3.0, activeStages: [3], cost: { common_ore: 20, biomatter: 12, catalysts: 8, rare_metals: 5 },
    typeFlavor: {
      frozen:   { name: "Permafrost Balancer",    desc: "Manages freeze-thaw cycles so the young tundra ecology survives winter." },
      desert:   { name: "Oasis Network",          desc: "Links water sources and shade corridors into a self-sustaining web." },
      rocky:    { name: "Ecosystem Stabilizer",   desc: "Holds a young ecosystem together until it can stand." },
      volcanic: { name: "Caldera Regulator",      desc: "Buffers eruptions and gas surges to protect the fragile new biome." },
      toxic:    { name: "Biome Purifier",         desc: "Continuously scrubs residual toxins so the ecosystem doesn't backslide." },
      oceanic:  { name: "Marine Equilibrium Array", desc: "Balances currents, salinity, and temperature across the living ocean." }
    }},
  { id: "solar_array",         name: "Solar Array",            tier: 1, stage: "Universal",   desc: "Boosts the speed of every active terraforming machine on this planet by +10% per Solar. Stacks additively. Does not affect extraction or resource production.", pps: 0, activeStages: [], multiplier: 0.10, cost: { common_ore: 3 } },
  { id: "storage_silo",        name: "Storage Silo",           tier: 1, stage: "Universal",   desc: "Multiplies this planet's resource output by 1.15× per Silo, stacking multiplicatively. Applies to both passive production and extraction machines. Only active once the world reaches Flora.", pps: 0, activeStages: [], cost: { common_ore: 8 } },
  { id: "mining_drill",        name: "Mining Drill",           tier: 1, stage: "Extraction",  desc: "Pulls the planet's signature resource from the ground.",       pps: 0,   activeStages: [],          extractionRate: 0.05, extractionMinStage: 0, cost: { common_ore: 10 } },
  { id: "harvester",           name: "Harvester",              tier: 2, stage: "Extraction",  desc: "Efficient extractor. Needs living ground to work.",            pps: 0,   activeStages: [],          extractionRate: 0.15, extractionMinStage: 3, cost: { common_ore: 15, rare_metals: 5 } },
  { id: "deep_driller",        name: "Deep Driller",           tier: 3, stage: "Extraction",  desc: "Reaches deep deposits. Requires a mature ecosystem above.",    pps: 0,   activeStages: [],          extractionRate: 0.40, extractionMinStage: 4, cost: { common_ore: 25, rare_metals: 10, geothermal_cores: 5 } }
];

var STARTING_INVENTORY = { common_ore: 50 };

var SIGNATURE_RESOURCES = [
  { id: "cryocrystals",    name: "Cryocrystals",     from: "frozen",   used_for: "Cooling volcanic worlds." },
  { id: "rare_metals",     name: "Rare Metals",      from: "desert",   used_for: "Advanced machine tiers." },
  { id: "geothermal_cores",name: "Geothermal Cores", from: "volcanic", used_for: "Energy on cold worlds." },
  { id: "catalysts",       name: "Catalysts",        from: "toxic",    used_for: "Accelerating flora." },
  { id: "biomatter",       name: "Biomatter",        from: "oceanic",  used_for: "Fauna stage anywhere." },
  { id: "common_ore",      name: "Common Ore",       from: "rocky",    used_for: "Universal currency." }
];

// Star chart — 18 systems. Harbor is the start at the outer edge.
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
  { id: "ember",     name: "Ember",     desc: "A dying star's last warmth. Quiet, distant, still worth tending." },
  { id: "kestrel",   name: "Kestrel",   desc: "A fast-spinning star throwing light in pulses. Two hardy worlds cling close." },
  { id: "solace",    name: "Solace",    desc: "The farthest point on the chart. Calm, cold, untouched." }
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
  // Canvas is 1500x750. Harbor at the left edge as the starting system.
  var positions = [
    /* harbor    */ { x: 100,  y: 500 },
    /* promise   */ { x: 280,  y: 380 },
    /* veil      */ { x: 480,  y: 460 },
    /* crucible  */ { x: 440,  y: 240 },
    /* drift     */ { x: 650,  y: 310 },
    /* cairn     */ { x: 240,  y: 210 },
    /* bloom     */ { x: 620,  y: 490 },
    /* threshold */ { x: 820,  y: 400 },
    /* anvil     */ { x: 380,  y: 380 },
    /* loom      */ { x: 700,  y: 170 },
    /* hush      */ { x: 900,  y: 240 },
    /* sunder    */ { x: 180,  y: 580 },
    /* pyre      */ { x: 540,  y: 110 },
    /* wellspring*/ { x: 900,  y: 540 },
    /* cloister  */ { x: 960,  y: 100 },
    /* ember     */ { x: 80,   y: 260 },
    /* kestrel   */ { x: 1100, y: 320 },
    /* solace    */ { x: 1260, y: 200 }
  ];

  // Jump lanes — an irregular web. Core is well-connected; edges sparser.
  var laneMap = {
    harbor:    ["promise", "sunder"],
    promise:   ["harbor", "veil", "cairn", "anvil"],
    veil:      ["promise", "anvil", "bloom"],
    crucible:  ["cairn", "drift", "pyre", "anvil"],
    drift:     ["crucible", "threshold", "loom"],
    cairn:     ["promise", "crucible", "ember"],
    bloom:     ["veil", "threshold", "wellspring"],
    threshold: ["drift", "bloom", "hush", "kestrel", "wellspring"],
    anvil:     ["promise", "veil", "crucible"],
    loom:      ["drift", "pyre", "hush"],
    hush:      ["threshold", "loom", "cloister", "kestrel"],
    sunder:    ["harbor", "ember"],
    pyre:      ["crucible", "loom", "cloister"],
    wellspring:["bloom", "threshold", "kestrel"],
    cloister:  ["hush", "pyre", "solace"],
    ember:     ["sunder", "cairn"],
    kestrel:   ["threshold", "hush", "wellspring", "solace"],
    solace:    ["kestrel", "cloister"]
  };

  // Planet mixes — each system gets 2–6 planets with varied types.
  // Rocky and Frozen weighted heavier (easier early worlds).
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
    /* ember     */ ["frozen", "rocky", "desert"],
    /* kestrel   */ ["rocky", "frozen", "desert", "volcanic"],
    /* solace    */ ["frozen", "frozen", "rocky", "oceanic", "toxic"]
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
  0: "Barren → Atmosphere",
  1: "Atmosphere → Hydrosphere",
  2: "Hydrosphere → Flora",
  3: "Flora → Fauna",
  4: "Fauna → Paradise"
};

// Color per machine category — drives the pip on the surface grid and the sidebar swatch.
var MACHINE_CATEGORY_COLORS = {
  Atmosphere:  "#a8d8f0",
  Hydrosphere: "#3a7ac9",
  Flora:       "#6fbf73",
  Fauna:       "#d9a66a",
  Universal:   "#f4c46d",
  Extraction:  "#c9a0e0"
};

// Phase 3 — resource production. A world produces its signature resource once it
// reaches Flora (stage 3). Rate scales with stage: Flora < Fauna < Paradise.
var PRODUCTION_PER_STAGE = {
  3: 0.03,
  4: 0.08,
  5: 0.20
};

// Rocky worlds produce Common Ore from stage 0 (all values placeholder for playtesting).
// Halved — extraction machines are now the primary resource driver.
var ROCKY_PRODUCTION_PER_STAGE = {
  0: 0.01,
  1: 0.02,
  2: 0.04,
  3: 0.08,
  4: 0.15,
  5: 0.25
};

// Non-Rocky worlds produce a base trickle of Common Ore at stages 0–2 (placeholder for playtesting).
// Stops at Flora (stage 3) when the planet's signature resource takes over.
var BASE_ORE_TRICKLE = 0.01;

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
    desc: "Cargo capacity and tending focus.",
    tiers: [
      { tier: 1, cost: null, effect: "Tending Focus: 2 worlds · Cargo cap: 200" },
      { tier: 2, cost: { common_ore: 8 },                                                          effect: "Tending Focus: 3 worlds · Cargo cap: 300" },
      { tier: 3, cost: { common_ore: 16, rare_metals: 8 },                                         effect: "Tending Focus: 4 worlds · Cargo cap: 450" },
      { tier: 4, cost: { common_ore: 32, rare_metals: 16, cryocrystals: 8 },                       effect: "Tending Focus: 5 worlds · Cargo cap: 650" },
      { tier: 5, cost: { common_ore: 64, rare_metals: 32, cryocrystals: 16, biomatter: 8 },        effect: "Tending Focus: 6 worlds · Cargo cap: 900" }
    ]
  },
  {
    id: "drive",
    label: "Drive",
    desc: "Jump range and system scanning.",
    tiers: [
      { tier: 1, cost: null, effect: "1-hop jumps" },
      { tier: 2, cost: { geothermal_cores: 10 },                                                    effect: "2-hop jumps · Scan: planet types" },
      { tier: 3, cost: { geothermal_cores: 20, cryocrystals: 10 },                                  effect: "3-hop jumps · Scan: planet stages" },
      { tier: 4, cost: { geothermal_cores: 40, cryocrystals: 20, catalysts: 10 },                   effect: "4-hop jumps · Scan: star type" },
      { tier: 5, cost: { geothermal_cores: 80, cryocrystals: 40, catalysts: 20, biomatter: 10 },    effect: "Chart-wide jumps · Full scan" }
    ]
  },
  {
    id: "lab",
    label: "Lab",
    desc: "Surface readouts and production analysis.",
    tiers: [
      { tier: 1, cost: null, effect: "Basic readouts" },
      { tier: 2, cost: { catalysts: 10 },                                                           effect: "Resource previews" },
      { tier: 3, cost: { catalysts: 20, rare_metals: 10 },                                          effect: "Production breakdown" },
      { tier: 4, cost: { catalysts: 40, rare_metals: 20, biomatter: 10 },                           effect: "Efficiency formulas" },
      { tier: 5, cost: { catalysts: 80, rare_metals: 40, biomatter: 20, cryocrystals: 10 },         effect: "Paradise projections" }
    ]
  }
];

// Hull tier -> max number of worlds with machines placed that haven't reached Paradise.
function hullWorldLimit(hullTier) {
  return 1 + (hullTier || 1);
}

// Hull tier -> cargo cap per resource.
var HULL_CARGO_CAP = { 1: 200, 2: 300, 3: 450, 4: 650, 5: 900 };
function cargoCap(hullTier) {
  return HULL_CARGO_CAP[hullTier || 1] || 200;
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

// Contextual advice system, voiced by the Cartographer. Keyed by context, then candidate_id.
var CARTOGRAPHER_ADVICE = {
  ship_no_worlds: {
    reza: "We have systems within reach, captain. I'd start with Harbor — the world you launched from has Rocky terrain, and Rocky worlds produce Common Ore from the very first stage. Every other machine we build will need it.",
    ines: "Harbor is mapped. Promise is flagged. We should start where the ore is — Rocky world, Harbor system. Open the star chart.",
    echo: "Harbor. Start there."
  },
  ship_worlds_below_flora: {
    reza: "Your world is growing, captain. Place a few more machines to speed it along, or use this time to scout another system from the chart. Patience and curiosity — that's how galaxies get tended.",
    ines: "The chart is waiting. Every system you visit shows us more. And your world won't stop growing while you're gone.",
    echo: "There's more out there. Look."
  },
  ship_world_at_flora: {
    reza: "It's producing resources now. That's the feeling I hoped you'd see. We can spend them on a Hull upgrade, a Drive upgrade, or a second world. Your choice, captain.",
    ines: "Resources flowing. Upgrade the Drive — more systems, more charts to fill. Or the Hull, if you'd rather spread wider first.",
    echo: "It produces now. Spend it."
  },
  ship_multiple_worlds: {
    reza: "Multiple worlds turning at once. Keep an eye on your resource stockpiles — if anything hits the cargo cap, it's going to waste. Build, upgrade, or expand.",
    ines: "Worlds running. Resources accumulating. Don't let them cap — check your Hull tier and spend what's piling up.",
    echo: "Don't waste what they make."
  },
  ship_paradise_exists: {
    reza: "You've brought a world to Paradise, captain. That's no small thing. The galaxy is large and there are harder worlds out there — Volcanic, Toxic. But there's no rush. Tend what calls to you.",
    ines: "Paradise achieved. The chart still has blanks. Drive upgrades open the outer ring. More worlds, more data.",
    echo: "One done. More to do. Or not. Your call."
  },
  chart_never_jumped: {
    reza: "Tap any reachable system to see what's there. Promise has been flagged as promising — four worlds and a quiet star. Tap it, then tap Jump.",
    ines: "Every system is a hypothesis, captain. Jump to Promise — it's the obvious first. Then map everything.",
    echo: "Jump. Anywhere. We'll see."
  },
  chart_has_unreachable: {
    reza: "The greyed-out systems are beyond our Drive range. A Drive upgrade would open the next ring outward. Geothermal Cores from Volcanic worlds are what we'd need. Worth saving for.",
    ines: "More chart waiting behind that grey wall. Drive upgrade. The cost is Geothermal Cores — find a Volcanic world or check your stockpiles.",
    echo: "Can't reach those. Drive. Upgrade."
  },
  chart_explored: {
    reza: "We've seen a good portion of the chart now. If there are worlds still growing, tend them. If the Drive can reach further, there's always more to find.",
    ines: "Chart's filling in. Keep terraforming — resources fund the next Drive tier, and the next tier funds more chart.",
    echo: "Keep going."
  },
  system_no_landed: {
    reza: "Tap a planet to see what it is. Rocky worlds are the easiest start — Common Ore from day one. Volcanic and Toxic are harder puzzles, worthy but not first.",
    ines: "Land somewhere. Anywhere. Rocky first if you're being smart about it. Start cataloguing.",
    echo: "Pick one."
  },
  system_has_worlds: {
    reza: "You have worlds here already. Tap one to check its progress, or land on a new planet to start it fresh. Every world you tend makes the next one easier.",
    ines: "Existing work here. Check progress or expand. More worlds, more resources, more options.",
    echo: "Check them. Or start another."
  },
  surface_no_machines: {
    reza: "Tap the Build button, pick a machine, then tap a tile to place it. For a fresh world, start with a few Gas Extractors and a Solar Array. Basic but reliable. The stages come in order — atmosphere first.",
    ines: "Gas Extractors first. Atmosphere first. The stages come in order. Solar Arrays boost them. Place and wait.",
    echo: "Extractors. Place them."
  },
  surface_machines_active: {
    reza: "Machines are running. The progress bar shows how close you are to the next stage. If you want it faster, add more machines for this stage or boost them with Solar Arrays.",
    ines: "Progress ticking. More machines means faster. Solar Arrays multiply what's already there. Mining Drills pull resources while you wait.",
    echo: "It's working. Add more if you want it faster."
  },
  surface_machines_idle: {
    reza: "Some machines went idle — they're from the previous stage. Tap them to deconstruct and recover 75% of their resources. Then build the next stage's machines to keep progressing.",
    ines: "Deconstruct the idle ones. Recycle. Build forward. Don't leave dead weight on the surface.",
    echo: "Idle now. Take them down. Rebuild."
  },
  surface_paradise: {
    reza: "This world is Paradise now — self-sustaining, beautiful, done. It still produces resources. Add Mining Drills or Silos if you want to harvest it, or just let it be.",
    ines: "Paradise. Nothing left to terraform here. Extraction machines still work. Silos multiply output. Or leave it.",
    echo: "Done. It's beautiful. Leave it or harvest it."
  }
};

// Pick contextual advice for a cartographer candidate.
function pickAdvice(contextId, candidateId) {
  var ctx = CARTOGRAPHER_ADVICE[contextId];
  if (!ctx) return null;
  return ctx[candidateId] || ctx.reza || null;
}

// Placeholder lines so clicking a crewmate does something in Phase 0.
var PLACEHOLDER_LINES = {
  botanist:     "\"The greenhouse is empty. It won't be for long.\"",
  engineer:     "\"Drive's warm. Say the word.\"",
  cartographer: "\"Whenever you're ready, captain.\"",
  cook:         "\"Sit. Eat first. The galaxy will wait.\""
};

// Reactive crew comment system. Keyed by candidate_id, then event type.
// Event types: stage_advance, first_paradise, paradise, upgrade_hull, upgrade_drive,
//   upgrade_lab, new_system, drive_unlock, cargo_cap, offline_return, tenth_machine, deconstruct
var CREW_REACTIONS = {
  // ---------- Botanists ----------
  yuki: {
    stage_advance: [
      "Another threshold crossed. I've been sketching the leaf shapes — they're changing already.",
      "Quiet progress. The best kind.",
      "The readings shifted. It's working, captain."
    ],
    first_paradise: [
      "I didn't think it would take. It took. Look at it, captain.",
      "I filled a whole notebook on this one. Every page, every stage.",
      "Self-sustaining. The numbers say so. I believe the numbers."
    ],
    paradise: [
      "Another world standing on its own. I'll never get used to that.",
      "Paradise. The word feels earned this time.",
      "I've started a new notebook."
    ],
    deconstruct: [
      "Careful with the roots around that one.",
      "The soil will fill in. Give it time.",
      "Good. It was in the way of something better."
    ]
  },
  mira: {
    stage_advance: [
      "Textbook transition. Well — the textbook I'm writing, anyway.",
      "The biome shift is within expected parameters. Excellent.",
      "Note: stage transition confirmed. Proceeding."
    ],
    first_paradise: [
      "The stabilization curve is textbook. Frame this world, captain.",
      "Self-sustaining equilibrium achieved. Publication-worthy, frankly.",
      "I will allow myself one moment of satisfaction. There. Done."
    ],
    paradise: [
      "Another data point for the model. A beautiful one.",
      "Consistent results. The methodology holds.",
      "Paradise confirmed. Adjusting projections for the next candidate."
    ],
    deconstruct: [
      "Reclaiming materials is efficient. I approve.",
      "Document the removal. We may want the data later."
    ]
  },
  fern: {
    stage_advance: [
      "Look at her go! I'm so proud I could cry. I won't, but I could.",
      "She's growing up! Someone get me a tissue.",
      "Named the first sprout Gerald. Gerald's doing great."
    ],
    first_paradise: [
      "She's alive. God, look at her.",
      "I promised I wouldn't name an entire planet but I'm going to name this entire planet.",
      "Every embarrassing sprout name was worth it. Every single one."
    ],
    paradise: [
      "Another baby all grown up. They grow so fast.",
      "I'm running out of embarrassing names. Just kidding, I'll never run out.",
      "She's perfect. Don't tell the other planets I said that."
    ],
    deconstruct: [
      "Bye bye, little friend. You did good.",
      "Ripping things out of the ground. My least favorite part."
    ]
  },
  // ---------- Engineers ----------
  holly: {
    stage_advance: [
      "Machines are holding. That's my weld work, captain.",
      "Another stage. The hull's complaining about the load, but she'll manage.",
      "Pressure's good. Temperature's good. I'm satisfied."
    ],
    upgrade_hull: [
      "Better. The old configuration was going to fail within the year.",
      "New plating's in. Don't scratch it.",
      "Cargo holds are reinforced. Try not to fill them with junk."
    ],
    upgrade_drive: [
      "Drive coils are singing. She can reach further now.",
      "Calibrated. Don't ask how long it took.",
      "More range. Try not to strand us."
    ],
    drive_unlock: [
      "New systems in range. About time we stretched our legs.",
      "Drive's warmed up. Those stars aren't going to visit themselves."
    ],
    tenth_machine: [
      "Ten machines on one world. That's a proper operation now.",
      "Starting to look like a real build site. Good.",
      "Ten. Keep it tight or I'll come down there and rewire the lot."
    ],
    deconstruct: [
      "Good steel back in the hold. Nothing wasted.",
      "Pulling her apart clean. I hate sloppy teardowns.",
      "Recycled. That's how it's done."
    ]
  },
  kiran: {
    stage_advance: [
      "YES! Did you see that? The gauges just — captain, it WORKED!",
      "I stayed up all night watching the readouts and it was WORTH IT!",
      "The machines are humming perfectly. I tuned them myself!"
    ],
    upgrade_hull: [
      "New hull panels! Can I name them? I want to name them.",
      "More room! More worlds! This is the best day!",
      "I already have ideas for what to do with the extra space."
    ],
    upgrade_drive: [
      "Wait — we can actually get THERE now? Captain, we can actually get there!",
      "I rewired the coils THREE TIMES to get this right!",
      "The drive sounds different. Better. I can hear it from my bunk."
    ],
    drive_unlock: [
      "New stars! NEW STARS! I'm not crying, the ventilation is just — okay I'm crying.",
      "Captain! Captain! Look at the chart! LOOK AT IT!"
    ],
    tenth_machine: [
      "Ten machines! That's more than some stations have!",
      "I calibrated every single one of them myself. Well, Holly helped.",
      "Can we get to twenty? Please say we can get to twenty."
    ],
    deconstruct: [
      "I'll salvage the good parts. Nothing goes to waste on my watch!",
      "Taking her apart is harder than putting her together. I hate this part."
    ]
  },
  tov: {
    stage_advance: [
      "Good.",
      "Stable. That's what matters.",
      "It holds. Move on."
    ],
    upgrade_hull: [
      "Good.",
      "Stronger now. Good enough.",
      "Done."
    ],
    upgrade_drive: [
      "Farther, then.",
      "The old drives were better built. But these are faster.",
      "Calibrated."
    ],
    drive_unlock: [
      "New reach. Use it wisely.",
      "More sky. Same crew. We'll manage."
    ],
    tenth_machine: [
      "Solid build.",
      "Ten. That's enough to hold."
    ],
    deconstruct: [
      "Clean work.",
      "Done. Next.",
      "Waste nothing."
    ]
  },
  // ---------- Cartographers ----------
  ines: {
    stage_advance: [
      "Updating the chart. Stage transitions get their own color in my system.",
      "Another data point. The map grows richer.",
      "Noted, plotted, annotated. This is what I live for."
    ],
    new_system: [
      "A new system to map! Every blank space on this chart is a personal insult.",
      "Uncharted. Not for long. Give me an hour with the instruments.",
      "Oh, this one has interesting orbital mechanics. Let me just — give me a minute.",
      "Coordinates locked. Adding to the master chart NOW."
    ],
    upgrade_lab: [
      "Better instruments. Better data. Better maps. This is how it should be.",
      "The new scanners are already showing things the old ones missed.",
      "Finally. I've been working with children's toys until now."
    ],
    deconstruct: [
      "Removing it from the surface map. Noted.",
      "Fewer machines. Simpler layout. I can work with that."
    ]
  },
  reza: {
    stage_advance: [
      "I've seen a hundred worlds turn. It never gets old, captain.",
      "There's a story in every stage. This one's chapter just changed.",
      "My old captain would have loved to see this."
    ],
    new_system: [
      "A new star. I used to dream about these when I was young.",
      "There are stories here. I can feel them in the light.",
      "I knew the name before we arrived. Don't ask me how.",
      "Another star that someone, somewhere, made a wish on. Now we're standing in it."
    ],
    upgrade_lab: [
      "Better eyes for an old stargazer. Thank you, captain.",
      "The new instruments show me things I'd only guessed at. Beautiful things.",
      "Knowledge is the only cargo that gets lighter as you carry more of it."
    ],
    deconstruct: [
      "Everything has its season. That machine's season is done.",
      "We leave lighter than we arrived. That's not always a loss."
    ]
  },
  echo: {
    stage_advance: [
      "...noted.",
      "Mm.",
      "Good."
    ],
    new_system: [
      "...interesting.",
      "New light.",
      "Hm."
    ],
    upgrade_lab: [
      "Better.",
      "...good instruments. Finally.",
      "Mm. This will do."
    ],
    deconstruct: [
      "...",
      "Clean."
    ]
  },
  // ---------- Cooks ----------
  babu: {
    stage_advance: [
      "Another stage! This calls for the good plates!",
      "I made something special for this. Come eat before it gets cold.",
      "Progress! The universe is kinder when your belly's full."
    ],
    first_paradise: [
      "PARADISE! I'm making a feast. Everyone to the galley. NOW.",
      "Little star, you've done it. The biggest pot. The longest table.",
      "Tears in the stew tonight. The happy kind."
    ],
    paradise: [
      "Another paradise means another feast. I don't make the rules.",
      "The good plates again! I just washed them!",
      "I'm going to need a bigger galley at this rate."
    ],
    upgrade_hull: [
      "More cargo space? More room for spices. I know my priorities.",
      "Good. I was running out of shelf space for the jars."
    ],
    upgrade_drive: [
      "Faster travel means the bread is still warm when we arrive!",
      "New stars, new ingredients. I'm already planning the menu."
    ],
    new_system: [
      "New system! I wonder what grows there. I wonder what it tastes like.",
      "Another star to cook under. The light changes the flavor, you know."
    ],
    cargo_cap: [
      "Overflowing! This is what happens when you don't cook often enough.",
      "Too much of a good thing. We need to USE some of this, captain!",
      "The shelves are full. Time to build something. Or eat something."
    ],
    offline_return: [
      "There you are, little star. I kept the kettle warm.",
      "Back! Good. The stew's been waiting. Sit.",
      "I was starting to worry. But the bread kept rising, so I kept baking.",
      "Welcome home, captain. You look hungry."
    ],
    deconstruct: [
      "Recycling. Very practical. Now come eat.",
      "One less machine, one more helping of stew. Balance."
    ],
    drive_unlock: [
      "New places! New flavors! The spice rack is READY!"
    ],
    tenth_machine: [
      "Ten machines means ten hungry workers. Metaphorically. I'm still cooking."
    ]
  },
  saoirse: {
    stage_advance: [
      "Another stage. I'd celebrate, but the stew won't stir itself.",
      "Good. One less thing to worry about.",
      "The readings are healthy. So is dinner, if anyone's asking."
    ],
    first_paradise: [
      "Paradise. First time it's not a euphemism. Well done, captain.",
      "Self-sustaining. I used to say that about field hospitals. This is better.",
      "I'll make something that doesn't taste like an apology. Just this once."
    ],
    paradise: [
      "Another one. I'm almost getting used to miracles.",
      "Paradise again. The stew's getting better too. Coincidence.",
      "Good work, everyone. Now eat before it gets cold."
    ],
    upgrade_hull: [
      "More room. I could set up a proper medical bay. Not that anyone asks.",
      "Reinforced. Good. Less rattling in the pots."
    ],
    upgrade_drive: [
      "Faster. Good. I was tired of reheating the soup.",
      "New range. New worlds. Same dry rations until I get better ingredients."
    ],
    new_system: [
      "Another system. I'll keep the med kit ready. Old habit.",
      "New stars. Same crew. I'll manage."
    ],
    cargo_cap: [
      "You're overflowing. I hope you brought bowls.",
      "Full stores. In the field, that meant trouble was coming. Here it just means upgrade your hull.",
      "Cap's hit. Spend or waste. Your call, captain."
    ],
    offline_return: [
      "Wondered when you'd be back. The ship didn't burn down.",
      "You were gone a while. Everything's fine. I checked.",
      "Back. Good. The bread went stale but the stew survived."
    ],
    deconstruct: [
      "Efficient. I respect that.",
      "Clean removal. No waste."
    ],
    drive_unlock: [
      "New range. Pack bandages."
    ],
    tenth_machine: [
      "Ten machines on one world. That's a proper deployment."
    ]
  },
  wren: {
    stage_advance: [
      "Oh! It changed! Did everyone see? It changed!",
      "I made a little cake to celebrate. It's lopsided but it's — it's from the heart.",
      "The bread rose at the exact same time the stage turned. That's a sign. Right?"
    ],
    first_paradise: [
      "Paradise! Oh — oh no, I'm going to cry. I'm going to cry and the soufflé is going to collapse.",
      "It's beautiful. I baked a world-shaped loaf. It's not round enough but — look!",
      "We did it. WE DID IT. I need to sit down. And bake. Both."
    ],
    paradise: [
      "Another paradise! Another celebration loaf! ...I need more flour.",
      "Every time a world turns paradise I add a new recipe to the book.",
      "I'm going to run out of cake eventually. But not today!"
    ],
    upgrade_hull: [
      "More room! For — for more baking supplies! Right? That's what it's for?",
      "Oh good, the flour won't be crammed against the bulkhead anymore."
    ],
    upgrade_drive: [
      "We can go further! That's — that's exciting and terrifying!",
      "New stars to bake under. Each one changes the crust differently. I read that somewhere."
    ],
    new_system: [
      "A new system! What if they have — what if there are NEW GRAINS?",
      "Oh — oh, it's beautiful. The light is different here. The bread will be different."
    ],
    cargo_cap: [
      "Oh no — we should spend some of this. We should — we should build something.",
      "The pantry's overflowing! That's — that's good? That's good. But also overwhelming!",
      "Too much! Too much in the stores! I get anxious when things pile up!"
    ],
    offline_return: [
      "Captain! I made rolls! They're a little burnt but I was worried and — you're here!",
      "Oh thank goodness. I started stress-baking an hour ago. There's bread everywhere.",
      "You're back! The sourdough missed you. I missed you. The sourdough missed you more.",
      "I saved you a plate! It's cold now but — you're HERE!"
    ],
    deconstruct: [
      "Oh — is it broken? Are we recycling? I hate watching things come apart.",
      "That was — that was a good machine. Goodbye, machine."
    ],
    drive_unlock: [
      "New places! I wonder if they have butter — do you think they have butter?"
    ],
    tenth_machine: [
      "Ten! Ten whole machines! That's — that's a lot of responsibility!"
    ]
  }
};

// Resolve a crew reaction line. Returns { name, candidateId, line } or null.
function pickCrewReaction(crew, eventType) {
  // Determine which role speaks for this event.
  var roleForEvent = {
    stage_advance_early: "engineer",
    stage_advance_late: "botanist",
    first_paradise: "botanist",
    paradise: "botanist",
    upgrade_hull: "engineer",
    upgrade_drive: "engineer",
    upgrade_lab: "cartographer",
    new_system: "cartographer",
    drive_unlock: "engineer",
    cargo_cap: "cook",
    offline_return: "cook",
    tenth_machine: "engineer",
    deconstruct: null // round-robin, caller picks
  };
  var role = roleForEvent[eventType];
  if (!role) return null;
  var candidateId = crew[role];
  if (!candidateId) return null;
  var reactions = CREW_REACTIONS[candidateId];
  // Normalize event type for lookup (stage_advance_early/late → stage_advance).
  var lookupKey = eventType.replace(/_early$|_late$/, "");
  var lines = reactions && reactions[lookupKey];
  if (!lines || lines.length === 0) return null;
  var roleDef = CREW_ROLES.find(function(r) { return r.id === role; });
  var cand = roleDef && roleDef.candidates.find(function(c) { return c.id === candidateId; });
  return {
    name: cand ? cand.name : candidateId,
    candidateId: candidateId,
    line: lines[Math.floor(Math.random() * lines.length)]
  };
}

// Pick a reaction from any crewmate (for round-robin events like deconstruct).
function pickAnyCrewReaction(crew, eventType) {
  var roles = ["botanist", "engineer", "cartographer", "cook"];
  var idx = Math.floor(Math.random() * roles.length);
  var role = roles[idx];
  var candidateId = crew[role];
  if (!candidateId) return null;
  var reactions = CREW_REACTIONS[candidateId];
  var lines = reactions && reactions[eventType];
  if (!lines || lines.length === 0) return null;
  var roleDef = CREW_ROLES.find(function(r) { return r.id === role; });
  var cand = roleDef && roleDef.candidates.find(function(c) { return c.id === candidateId; });
  return {
    name: cand ? cand.name : candidateId,
    candidateId: candidateId,
    line: lines[Math.floor(Math.random() * lines.length)]
  };
}
