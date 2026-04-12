// Tender — static game data
// Lifted from TENDER_DESIGN.md. Use `var` so these are accessible as browser globals.

var SAVE_VERSION = 1;
var OFFLINE_TICK_CAP_SECONDS = 8 * 60 * 60;

var SHIP_ROOMS = [
  { id: "bridge",       name: "Bridge",          desc: "A wraparound viewport, three soft chairs, and a chart table that hums when it's thinking." },
  { id: "engine",       name: "Engine Room",     desc: "Warm, humming, faintly oily. The drive coils tick as they cool." },
  { id: "galley",       name: "Galley",          desc: "Mismatched mugs, a kettle that whistles slightly off-key, jars accumulating along the shelf." },
  { id: "greenhouse",   name: "Greenhouse / Lab", desc: "Grow lights, an empty seed rack waiting to be filled, and a microscope under a soft cloth." },
  { id: "quarters",     name: "Crew Quarters",   desc: "Four bunks, four small shelves, four lives folded into a single corridor." },
  { id: "observation",  name: "Observation Deck", desc: "A dome of glass and a single bench. The best place to watch a star you'll never visit." }
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
  { id: "gas_extractor",       name: "Gas Extractor",        tier: 1, stage: "Atmosphere",  desc: "Pulls usable gases out of the regolith." },
  { id: "pressure_regulator",  name: "Pressure Regulator",   tier: 2, stage: "Atmosphere",  desc: "Holds the new air down." },
  { id: "ice_melter",          name: "Ice Melter / Condenser", tier: 1, stage: "Hydrosphere", desc: "Releases trapped water; condenses vapor." },
  { id: "water_pump",          name: "Water Pump",           tier: 2, stage: "Hydrosphere", desc: "Moves water into the places it should be." },
  { id: "seed_disperser",      name: "Seed Disperser",       tier: 1, stage: "Flora",       desc: "Scatters hardy starter species." },
  { id: "greenhouse",          name: "Greenhouse",           tier: 2, stage: "Flora",       desc: "Local nursery for the slow-to-take." },
  { id: "bio_incubator",       name: "Bio-Incubator",        tier: 2, stage: "Fauna",       desc: "First small things, carefully." },
  { id: "ecosystem_stabilizer",name: "Ecosystem Stabilizer", tier: 3, stage: "Fauna",       desc: "Holds a young ecosystem together until it can stand." },
  { id: "solar_array",         name: "Solar Array",          tier: 1, stage: "Universal",   desc: "Power for everything else." },
  { id: "storage_silo",        name: "Storage Silo",         tier: 1, stage: "Universal",   desc: "Holds what you've gathered." }
];

var SIGNATURE_RESOURCES = [
  { id: "cryocrystals",    name: "Cryocrystals",     from: "frozen",   used_for: "Cooling volcanic worlds." },
  { id: "rare_metals",     name: "Rare Metals",      from: "desert",   used_for: "Advanced machine tiers." },
  { id: "geothermal_cores",name: "Geothermal Cores", from: "volcanic", used_for: "Energy on cold worlds." },
  { id: "catalysts",       name: "Catalysts",        from: "toxic",    used_for: "Accelerating flora." },
  { id: "biomatter",       name: "Biomatter",        from: "oceanic",  used_for: "Fauna stage anywhere." },
  { id: "common_ore",      name: "Common Ore",       from: "rocky",    used_for: "Universal currency." }
];

// Phase 1 stub star chart — three systems, bidirectional jump lane chain.
// Each system has a hand-picked planet mix so no two compositions overlap.
// `star` is the system's central body (color drives the System Map render).
// Each planet has an orbit index (0 = innermost) used to lay out the System Map.
var STUB_SYSTEMS = [
  {
    id: "harbor",
    name: "Harbor",
    x: 120, y: 320,
    description: "The dock. A single yellow star and the rust-colored world you launched from.",
    star: { name: "Harbor", color: "#f4c46d", kind: "Yellow dwarf" },
    planets: [
      { id: "harbor_a", name: "Harbor I",   type: "rocky",  stage: 0, orbit: 0 },
      { id: "harbor_b", name: "Harbor II",  type: "desert", stage: 0, orbit: 1 },
      { id: "harbor_c", name: "Harbor III", type: "frozen", stage: 0, orbit: 2 }
    ],
    connections: ["promise"]
  },
  {
    id: "promise",
    name: "Promise",
    x: 360, y: 220,
    description: "Flagged 'promising' on the chart you inherited. Four worlds and a quiet star.",
    star: { name: "Promise", color: "#fde3a0", kind: "Pale main-sequence" },
    planets: [
      { id: "promise_a", name: "Promise I",   type: "volcanic", stage: 0, orbit: 0 },
      { id: "promise_b", name: "Promise II",  type: "desert",   stage: 0, orbit: 1 },
      { id: "promise_c", name: "Promise III", type: "oceanic",  stage: 0, orbit: 2 },
      { id: "promise_d", name: "Promise IV",  type: "frozen",   stage: 0, orbit: 3 }
    ],
    connections: ["harbor", "veil"]
  },
  {
    id: "veil",
    name: "Veil",
    x: 600, y: 380,
    description: "A pale star wrapped in dust. Something old left a footprint here.",
    star: { name: "Veil", color: "#cfd8ea", kind: "Dust-shrouded giant" },
    planets: [
      { id: "veil_a", name: "Veil I",   type: "toxic",    stage: 0, orbit: 0 },
      { id: "veil_b", name: "Veil II",  type: "rocky",    stage: 0, orbit: 1 },
      { id: "veil_c", name: "Veil III", type: "volcanic", stage: 0, orbit: 2 },
      { id: "veil_d", name: "Veil IV",  type: "oceanic",  stage: 0, orbit: 3 },
      { id: "veil_e", name: "Veil V",   type: "frozen",   stage: 0, orbit: 4 }
    ],
    connections: ["promise"]
  }
];

// Visual palette for the System Map — one color per planet type.
var PLANET_COLORS = {
  frozen:   "#b8d8ea",
  desert:   "#e4b877",
  rocky:    "#8a7a6a",
  volcanic: "#c9543a",
  toxic:    "#8fc27a",
  oceanic:  "#3a7ac9"
};

// Placeholder lines so clicking a crewmate does something in Phase 0.
var PLACEHOLDER_LINES = {
  botanist:     "\"The greenhouse is empty. It won't be for long.\"",
  engineer:     "\"Drive's warm. Say the word.\"",
  cartographer: "\"Whenever you're ready, captain.\"",
  cook:         "\"Sit. Eat first. The galaxy will wait.\""
};
