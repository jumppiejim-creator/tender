# Tender — Art Generation Guide (Leonardo AI)

## Style Anchor
Use this prefix on EVERY prompt to keep visual consistency:

**Style prefix:** `Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements`

---

## Asset List & Prompts

### 1. SHIP VIEW DOLLHOUSE (Priority: Highest)
**File:** `assets/ship-interior.png`
**Dimensions:** Generate at highest resolution, will be displayed at ~1024×600
**Prompt:**
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Side-view cutaway cross-section of a small cozy spaceship interior, showing six rooms in a horizontal layout: a bridge cockpit with glowing star charts on the left, an engine room with pipes and machinery, a warm galley kitchen with hanging pots, a greenhouse laboratory with empty plant shelves and glass domes, a small bunk room with four beds, and an observation deck with a large viewport showing stars on the right. The ship hull is visible as an outer shell. Warm interior lighting contrasts with cold space outside. The rooms feel lived-in but tidy. Digital painting style, side scrolling game aesthetic.
```

**Notes:** This is the most important single asset. You may need to generate several and pick the best layout. The rooms need to be visually distinct enough that Kevin can map clickable zones over them. If Leonardo struggles with all six rooms in one image, generate it as two halves (left 3 rooms, right 3 rooms) and Kevin can stitch them.

---

### 2. PLANET SURFACE TILES (Priority: High)
Generate one tile texture per planet type, per stage. 36 tiles total (6 types × 6 stages), but many stages share similar looks, so you can batch them.

**File naming:** `assets/tile-{type}-{stage}.png`
**Dimensions:** 64×64 each (will tile across the 12×8 grid)

#### Frozen
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, frozen icy planet surface, cracked blue-white ice sheets, frost crystals, barren and cold, no life. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, frozen planet developing thin atmosphere, pale blue ice with wispy fog patches, hints of melting. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, frozen planet with liquid water pools forming between ice sheets, blue and teal tones, early thaw. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, formerly frozen planet now covered in hardy tundra moss and lichen, green patches between remaining ice, early plant life. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, formerly frozen planet now alive with small arctic creatures, mossy green ground with tiny animal tracks in remaining snow. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, paradise world that was once frozen, lush blue-green meadows with crystal clear ponds, flowers, butterflies, peaceful and warm. 64x64 digital painting tile.
```

#### Desert
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, barren desert planet surface, tan and orange sand dunes, dry cracked earth, wind-swept, lifeless. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, desert planet with thin hazy atmosphere forming, dusty amber air, sand with slight moisture darkening. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, desert planet with small oasis pools forming, dark wet sand around turquoise water patches amid tan dunes. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, desert planet with desert shrubs and cacti sprouting, green succulents dotting sandy ground, early hardy plant life. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, desert planet with small lizards and insects among flowering cacti, sandy ground with burrows and tiny creatures. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, paradise desert world, lush savanna grassland with scattered trees, golden-green grass, gentle warm sunlight, peaceful oasis. 64x64 digital painting tile.
```

#### Rocky/Barren
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, barren rocky moon surface, grey cratered stone, dust, completely lifeless, lunar landscape. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, rocky planet with thin atmosphere forming, grey stone with faint blue atmospheric haze, dust settling. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, rocky planet with rain puddles and small streams forming between grey stones, wet rock surfaces. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, rocky planet with moss and ferns growing between stones, green creeping over grey rock, early colonizing plants. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, rocky planet now alive with small mammals and birds among mossy boulders, nesting spots, green and grey. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, paradise world that was once barren rock, lush rolling hills with wildflowers, gentle streams, soft green meadows, peaceful. 64x64 digital painting tile.
```

#### Volcanic
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, volcanic planet surface, dark black basalt with glowing red-orange lava cracks, intense heat, hostile. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, volcanic planet cooling slightly, dark rock with fading orange veins, thick smoky atmosphere forming, dimmer glow. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, volcanic planet with steam vents and hot springs forming, dark cooled rock with turquoise mineral pools. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, volcanic planet with heat-loving ferns and red-orange tropical plants growing on dark soil, volcanic garden. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, volcanic planet with exotic warm-climate creatures among tropical volcanic flora, colorful birds and lizards on dark fertile soil. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, paradise volcanic island world, lush dark-soil tropical jungle, vibrant flowers, warm misty waterfalls, fertile and peaceful. 64x64 digital painting tile.
```

#### Toxic
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, toxic planet surface, sickly yellow-green pools of acid, purple-brown corroded ground, noxious fumes, hostile. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, toxic planet being scrubbed, acid pools fading to murky brown, ground turning from purple to grey-brown, atmosphere clearing. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, formerly toxic planet with clean water replacing acid pools, muddy brown earth with clear blue puddles forming. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, formerly toxic planet with resilient pioneer plants, strange purple-green mushrooms and hardy weeds on recovering soil. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, formerly toxic planet with unique adapted creatures, bioluminescent insects and fungi, strange but thriving ecosystem. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, paradise world that was once toxic, ethereal bioluminescent meadows, glowing flowers, soft purple and green, magical and peaceful. 64x64 digital painting tile.
```

#### Oceanic
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, oceanic planet surface, deep dark blue water, choppy waves, endless ocean, no land visible, stormy. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, oceanic planet with atmosphere stabilizing, calmer deep blue water with softer wave patterns, clearing skies reflected. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, oceanic planet with small sandy islands and shallow reefs emerging from blue water, early landmass formation. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, oceanic planet with seaweed and coral on sandy shallows, green kelp forests visible through clear turquoise water. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, oceanic planet with fish and sea creatures visible in clear water around coral reefs, colorful marine life, tropical. 64x64 digital painting tile.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down seamless tile texture, paradise ocean world, crystal clear tropical lagoon with white sand, coral gardens, palm-fringed islands, serene and beautiful. 64x64 digital painting tile.
```

---

### 3. MACHINE SPRITES (Priority: High)
**File naming:** `assets/{machine.id}.png (using the id from game-data.js)`
**Dimensions:** 32×32 each (placed on 64×64 tiles, centered)

```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down view of a small sci-fi gas extractor machine, metal dome with pipes venting upward, blue-grey metal, glowing indicators, 32x32 digital painting sprite on transparent background.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down view of a small sci-fi pressure regulator device, cylindrical tank with gauge dials, silver metal with blue accents, 32x32 digital painting sprite on transparent background.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down view of a small sci-fi ice melter machine, heated coils on a platform with steam rising, copper and orange tones, 32x32 digital painting sprite on transparent background.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down view of a small sci-fi water pump station, circular well with mechanical pump arm, blue and silver, water droplet effects, 32x32 digital painting sprite on transparent background.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down view of a small sci-fi seed disperser drone pad, flat platform with small pods ready to launch, green and white, organic tech, 32x32 digital painting sprite on transparent background.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down view of a small sci-fi greenhouse dome, transparent glass dome with tiny green plants inside, warm light glowing from within, 32x32 digital painting sprite on transparent background.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down view of a small sci-fi bio-incubator pod, egg-shaped glowing capsule with organic tendrils, purple and green bioluminescence, 32x32 digital painting sprite on transparent background.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down view of a small sci-fi ecosystem stabilizer beacon, tall antenna with radiating rings of soft green energy, nature-tech hybrid, 32x32 digital painting sprite on transparent background.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down view of a small sci-fi solar array panel, angled reflective panels catching light, blue-silver with golden light reflection, 32x32 digital painting sprite on transparent background.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Top-down view of a small sci-fi storage silo container, squat hexagonal crate with glowing inventory display, metallic grey with amber lights, 32x32 digital painting sprite on transparent background.
```

---

### 4. PLANET ICONS FOR SYSTEM MAP (Priority: Medium)
**File naming:** `assets/planet-{type}-{variant}.png`
**Dimensions:** 48×48 each
**Variants:** barren, mid (Flora stage), paradise — 3 per type, 18 total

For each planet type, generate three variants. Example for Frozen:
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Small planet icon, frozen ice world seen from space, blue-white sphere with ice cap patterns, barren and cold, dark space background, 48x48 digital painting.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Small planet icon, formerly frozen world seen from space, blue sphere with patches of green tundra visible, partially terraformed, dark space background, 48x48 digital painting.
```
```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Small planet icon, paradise world that was once frozen, beautiful blue-green sphere with oceans and forests, glowing atmosphere, dark space background, 48x48 digital painting.
```

Repeat the pattern for Desert (tan→green-gold→lush savanna), Rocky (grey→mossy→verdant), Volcanic (red-black→cooling→tropical), Toxic (yellow-green→clearing→bioluminescent), Oceanic (dark blue→islands forming→tropical archipelago).

---

### 5. STAR CHART BACKGROUND (Priority: Medium)
**File:** `assets/starfield.png`
**Dimensions:** 1920×1080 (will tile or stretch)
```
Cozy digital painting, 32-bit retro space game style, soft muted palette, warm lighting, gentle glow effects, clean readable shapes, no text, no UI elements. Deep space starfield background, dark navy-black sky scattered with soft twinkling stars of varying sizes, subtle distant nebula in muted purple and blue tones, calm and vast, suitable for a navigation chart overlay. Pixel art style.
```

---

### 6. STAR SPRITES (Priority: Low)
**File naming:** `assets/star-{color}.png`
**Dimensions:** 64×64 each
**Colors:** yellow, orange, red, blue-white

```
Soft sci-fi digital painting style, realistic but warm, NASA concept art meets Studio Ghibli, rich atmospheric lighting, detailed textures, dark space backgrounds, clean readable silhouettes, no text, no UI elements. Small glowing yellow star seen from nearby space, warm radiant glow with soft corona, digital painting, 64x64 on dark transparent background.
```
Repeat for orange, red, blue-white.

---

## File Structure for Kevin
```
assets/
├── ship-interior.png
├── starfield.png
├── stars/
│   ├── star-yellow.png
│   ├── star-orange.png
│   ├── star-red.png
│   └── star-bluewhite.png
├── tiles/
│   ├── tile-frozen-0.png    (stage 0 = Barren)
│   ├── tile-frozen-1.png    (stage 1 = Atmosphere)
│   ├── tile-frozen-2.png    ... etc
│   ├── tile-frozen-5.png    (stage 5 = Paradise)
│   ├── tile-desert-0.png
│   └── ... (36 total)
├── machines/
│   ├── gas_extractor.png
│   ├── pressure_regulator.png
│   ├── ice_melter.png
│   ├── water_pump.png
│   ├── seed_disperser.png
│   ├── greenhouse.png
│   ├── bio_incubator.png
│   ├── ecosystem_stabilizer.png
│   ├── solar_array.png
│   └── storage_silo.png
└── planets/
    ├── planet-frozen-barren.png
    ├── planet-frozen-mid.png
    ├── planet-frozen-paradise.png
    ├── planet-desert-barren.png
    └── ... (18 total)
```

## Instructions for Kevin
Once assets are in the folder structure above, integrate them:
1. Ship View: replace CSS room boxes with ship-interior.png as background, map clickable zones over the room positions.
2. Planet Surface: replace flat-color tiles with tile-{type}-{stage}.png tiled across the grid. On stage advance, swap the tile image.
3. Machine placement: replace colored pips with {machine.id}.png (using the id from game-data.js) centered on the tile.
4. System Map: replace planet dots with planet-{type}-{variant}.png, selecting variant based on current stage (0-1=barren, 2-4=mid, 5=paradise). Replace star dot with star-{color}.png.
5. Star Chart: set starfield.png as the chart background.

All paths must be relative (./assets/...) per the primer.
