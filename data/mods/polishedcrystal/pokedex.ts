export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	abra: {
		inherit: true,
		baseStats: {hp: 25, atk: 20, def: 15, spa: 105, spd: 55, spe: 90},
		types: ["Psychic"],
		abilities: {0: "Synchronize", 1: "Magic Guard", H: "Trace"},
	},
	aerodactyl: {
		inherit: true,
		baseStats: {hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130},
		types: ["Rock", "Flying"],
		abilities: {0: "Rock Head", 1: "Unnerve", H: "Tough Claws"},
	},
	aipom: {
		inherit: true,
		baseStats: {hp: 55, atk: 70, def: 55, spa: 40, spd: 55, spe: 80},
		types: ["Normal"],
		abilities: {0: "Run Away", 1: "Pickup", H: "Skill Link"},
	},
	alakazam: {
		inherit: true,
		baseStats: {hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120},
		types: ["Psychic"],
		abilities: {0: "Synchronize", 1: "Magic Guard", H: "Trace"},
	},
	ambipom: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 66, spa: 60, spd: 66, spe: 115},
		types: ["Normal"],
		abilities: {0: "Technician", 1: "Pickup", H: "Skill Link"},
	},
	ampharos: {
		inherit: true,
		// BST update
		baseStats: {hp: 95, atk: 75, def: 90, spa: 125, spd: 95, spe: 65},
		// Types update
		types: ["Electric", "Dragon"],
		abilities: {0: "Static", H: "Mold Breaker"},
	},
	annihilape: {
		inherit: true,
		baseStats: {hp: 110, atk: 115, def: 80, spa: 50, spd: 90, spe: 90},
		types: ["Fighting", "Ghost"],
		// Abilities update
		abilities: {0: "Gorilla Tactics", 1: "Inner Focus", H: "Defiant"},
	},
	arbok: {
		inherit: true,
		baseStats: {hp: 60, atk: 95, def: 69, spa: 65, spd: 79, spe: 80},
		types: ["Poison"],
		abilities: {0: "Intimidate", 1: "Shed Skin", H: "Unnerve"},
		cosmeticFormes: ["Arbok-Kanto", "Arbok-Agatha", "Arbok-Ariana", "Arbok-Koga"],
		formeOrder: ["Arbok", "Arbok-Kanto", "Arbok-Agatha", "Arbok-Ariana", "Arbok-Koga"],
	},
	arcaninehisui: {
		inherit: true,
		baseStats: {hp: 95, atk: 115, def: 80, spa: 95, spd: 80, spe: 90},
		types: ["Fire", "Rock"],
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Rock Head"},
	},
	arcanine: {
		inherit: true,
		baseStats: {hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95},
		types: ["Fire"],
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Justified"},
	},
	ariados: {
		inherit: true,
		// BST update
		baseStats: {hp: 70, atk: 90, def: 70, spa: 60, spd: 70, spe: 80},
		// Types update
		types: ["Bug", "Dark"],
		abilities: {0: "Swarm", 1: "Insomnia", H: "Sniper"},
	},
	articunogalar: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 85, spa: 125, spd: 100, spe: 95},
		types: ["Psychic", "Flying"],
		abilities: {0: "Competitive"},
	},
	articuno: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85},
		types: ["Ice", "Flying"],
		// Abilities update
		abilities: {0: "Pressure", 1: "Snow Warning", H: "Snow Cloak"},
	},
	azumarill: {
		inherit: true,
		// BST update
		baseStats: {hp: 100, atk: 50, def: 80, spa: 90, spd: 80, spe: 50},
		types: ["Water", "Fairy"],
		abilities: {0: "Thick Fat", 1: "Huge Power", H: "Sap Sipper"},
	},
	azurill: {
		inherit: true,
		baseStats: {hp: 50, atk: 20, def: 40, spa: 20, spd: 40, spe: 20},
		types: ["Normal", "Fairy"],
		abilities: {0: "Thick Fat", 1: "Huge Power", H: "Sap Sipper"},
	},
	bayleef: {
		inherit: true,
		baseStats: {hp: 60, atk: 62, def: 80, spa: 63, spd: 80, spe: 60},
		types: ["Grass"],
		// Abilities update
		abilities: {0: "Overgrow", 1: "Natural Cure", H: "Leaf Guard"},
	},
	beedrill: {
		inherit: true,
		// BST update
		baseStats: {hp: 65, atk: 100, def: 40, spa: 45, spd: 90, spe: 115},
		types: ["Bug", "Poison"],
		abilities: {0: "Swarm", 1: "Sniper", H: "Adaptability"},
	},
	bellossom: {
		inherit: true,
		// BST update
		baseStats: {hp: 75, atk: 80, def: 95, spa: 100, spd: 110, spe: 50},
		// Types update
		types: ["Grass", "Fairy"],
		// Abilities update
		abilities: {0: "Chlorophyll", H: "Own Tempo"},
	},
	bellsprout: {
		inherit: true,
		baseStats: {hp: 50, atk: 75, def: 35, spa: 70, spd: 30, spe: 40},
		types: ["Grass", "Poison"],
		abilities: {0: "Chlorophyll", H: "Gluttony"},
	},
	blastoise: {
		inherit: true,
		baseStats: {hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78},
		// Types update
		types: ["Water", "Steel"],
		abilities: {0: "Torrent", 1: "Rain Dish", H: "Mega Launcher"},
	},
	blissey: {
		inherit: true,
		baseStats: {hp: 255, atk: 10, def: 10, spa: 75, spd: 135, spe: 55},
		types: ["Normal"],
		abilities: {0: "Natural Cure", 1: "Serene Grace"},
	},
	bonsly: {
		inherit: true,
		baseStats: {hp: 50, atk: 80, def: 95, spa: 10, spd: 45, spe: 10},
		types: ["Rock"],
		abilities: {0: "Sturdy", 1: "Rock Head", H: "Rattled"},
	},
	bulbasaur: {
		inherit: true,
		baseStats: {hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45},
		types: ["Grass", "Poison"],
		abilities: {0: "Overgrow", 1: "Chlorophyll", H: "Effect Spore"},
	},
	butterfree: {
		inherit: true,
		// BST update
		baseStats: {hp: 60, atk: 45, def: 50, spa: 110, spd: 110, spe: 80},
		// Types update
		types: ["Bug", "Psychic"],
		// Abilities update
		abilities: {0: "Compound Eyes", 1: "Levitate", H: "Tinted Lens"},
	},
	caterpie: {
		inherit: true,
		baseStats: {hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45},
		types: ["Bug"],
		abilities: {0: "Shield Dust", H: "Run Away"},
	},
	celebi: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		// Types update
		types: ["Grass", "Fairy"],
		// Abilities update
		abilities: {0: "Natural Cure", H: "Magic Guard"},
	},
	chansey: {
		inherit: true,
		baseStats: {hp: 250, atk: 5, def: 5, spa: 35, spd: 105, spe: 50},
		types: ["Normal"],
		abilities: {0: "Natural Cure", 1: "Serene Grace"},
	},
	charizard: {
		inherit: true,
		// BST update
		baseStats: {hp: 78, atk: 94, def: 78, spa: 99, spd: 85, spe: 100},
		// Types update
		types: ["Fire", "Dragon"],
		// Abilities update
		abilities: {0: "Blaze", 1: "Solar Power", H: "Tough Claws"},
	},
	charmander: {
		inherit: true,
		baseStats: {hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65},
		types: ["Fire"],
		abilities: {0: "Blaze", 1: "Solar Power", H: "Flame Body"},
	},
	charmeleon: {
		inherit: true,
		baseStats: {hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80},
		types: ["Fire"],
		abilities: {0: "Blaze", 1: "Solar Power", H: "Flame Body"},
	},
	chikorita: {
		inherit: true,
		baseStats: {hp: 45, atk: 49, def: 65, spa: 49, spd: 65, spe: 45},
		types: ["Grass"],
		// Abilities update
		abilities: {0: "Overgrow", 1: "Natural Cure", H: "Leaf Guard"},
	},
	chinchou: {
		inherit: true,
		baseStats: {hp: 75, atk: 38, def: 38, spa: 56, spd: 56, spe: 67},
		types: ["Water", "Electric"],
		abilities: {0: "Volt Absorb", 1: "Illuminate", H: "Water Absorb"},
	},
	clefable: {
		inherit: true,
		baseStats: {hp: 95, atk: 70, def: 73, spa: 95, spd: 90, spe: 60},
		types: ["Fairy"],
		abilities: {0: "Cute Charm", 1: "Magic Guard", H: "Unaware"},
	},
	clefairy: {
		inherit: true,
		baseStats: {hp: 70, atk: 45, def: 48, spa: 60, spd: 65, spe: 35},
		types: ["Fairy"],
		abilities: {0: "Cute Charm", 1: "Magic Guard"},
	},
	cleffa: {
		inherit: true,
		baseStats: {hp: 50, atk: 25, def: 28, spa: 45, spd: 55, spe: 15},
		types: ["Fairy"],
		abilities: {0: "Cute Charm", 1: "Magic Guard"},
	},
	clodsire: {
		inherit: true,
		// BST update
		baseStats: {hp: 130, atk: 85, def: 70, spa: 45, spd: 100, spe: 20},
		types: ["Poison", "Ground"],
		abilities: {0: "Poison Point", 1: "Water Absorb", H: "Unaware"},
	},
	cloyster: {
		inherit: true,
		baseStats: {hp: 50, atk: 95, def: 180, spa: 85, spd: 45, spe: 70},
		types: ["Water", "Ice"],
		abilities: {0: "Shell Armor", 1: "Skill Link", H: "Overcoat"},
	},
	corsolagalar: {
		inherit: true,
		baseStats: {hp: 60, atk: 55, def: 100, spa: 65, spd: 100, spe: 30},
		// Types update
		types: ["Ghost", "Rock"],
		abilities: {0: "Weak Armor", H: "Cursed Body"},
	},
	corsola: {
		inherit: true,
		baseStats: {hp: 65, atk: 55, def: 95, spa: 65, spd: 95, spe: 35},
		types: ["Water", "Rock"],
		abilities: {0: "Hustle", 1: "Natural Cure", H: "Regenerator"},
	},
	crobat: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 80, spa: 70, spd: 80, spe: 130},
		types: ["Poison", "Flying"],
		// Abilities update
		abilities: {0: "Inner Focus", 1: "Anticipation", H: "Infiltrator"},
	},
	croconaw: {
		inherit: true,
		baseStats: {hp: 65, atk: 80, def: 80, spa: 59, spd: 63, spe: 58},
		types: ["Water"],
		// Abilities update
		abilities: {0: "Torrent", 1: "Guts", H: "Sheer Force"},
	},
	cubone: {
		inherit: true,
		baseStats: {hp: 50, atk: 50, def: 95, spa: 40, spd: 50, spe: 35},
		types: ["Ground"],
		// Abilities update
		abilities: {0: "Rock Head", 1: "Cursed Body", H: "Battle Armor"},
	},
	cursola: {
		inherit: true,
		baseStats: {hp: 60, atk: 95, def: 50, spa: 145, spd: 130, spe: 30},
		// Types update
		types: ["Ghost", "Rock"],
		abilities: {0: "Weak Armor", H: "Perish Body"},
	},
	cyndaquil: {
		inherit: true,
		baseStats: {hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65},
		types: ["Fire"],
		// Abilities update
		abilities: {0: "Blaze", 1: "Flame Body", H: "Flash Fire"},
	},
	delibird: {
		inherit: true,
		// BST update
		baseStats: {hp: 55, atk: 85, def: 55, spa: 95, spd: 55, spe: 105},
		types: ["Ice", "Flying"],
		abilities: {0: "Vital Spirit", 1: "Hustle", H: "Insomnia"},
	},
	dewgong: {
		inherit: true,
		// BST update
		baseStats: {hp: 90, atk: 70, def: 80, spa: 80, spd: 95, spe: 70},
		types: ["Water", "Ice"],
		abilities: {0: "Thick Fat", 1: "Hydration", H: "Ice Body"},
	},
	diglettalola: {
		inherit: true,
		baseStats: {hp: 10, atk: 55, def: 30, spa: 35, spd: 45, spe: 90},
		types: ["Ground", "Steel"],
		abilities: {0: "Sand Veil", 1: "Tangling Hair", H: "Sand Force"},
	},
	diglett: {
		inherit: true,
		baseStats: {hp: 10, atk: 55, def: 25, spa: 35, spd: 45, spe: 95},
		types: ["Ground"],
		abilities: {0: "Sand Veil", 1: "Arena Trap", H: "Sand Force"},
	},
	ditto: {
		inherit: true,
		// BST update
		baseStats: {hp: 78, atk: 28, def: 48, spa: 28, spd: 48, spe: 108},
		types: ["Normal"],
		abilities: {0: "Limber", H: "Imposter"},
	},
	dodrio: {
		inherit: true,
		baseStats: {hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110},
		types: ["Normal", "Flying"],
		abilities: {0: "Run Away", 1: "Early Bird", H: "Tangled Feet"},
	},
	doduo: {
		inherit: true,
		baseStats: {hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75},
		types: ["Normal", "Flying"],
		abilities: {0: "Run Away", 1: "Early Bird", H: "Tangled Feet"},
	},
	donphan: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 120, spa: 60, spd: 60, spe: 50},
		types: ["Ground"],
		abilities: {0: "Sturdy", H: "Sand Veil"},
	},
	dragonair: {
		inherit: true,
		baseStats: {hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70},
		types: ["Dragon"],
		abilities: {0: "Shed Skin", H: "Marvel Scale"},
	},
	dragonite: {
		inherit: true,
		baseStats: {hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80},
		types: ["Dragon", "Flying"],
		// Abilities update
		abilities: {0: "Inner Focus", 1: "Marvel Scale", H: "Multiscale"},
	},
	dratini: {
		inherit: true,
		baseStats: {hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50},
		types: ["Dragon"],
		abilities: {0: "Shed Skin", H: "Marvel Scale"},
	},
	drowzee: {
		inherit: true,
		baseStats: {hp: 60, atk: 48, def: 45, spa: 43, spd: 90, spe: 42},
		types: ["Psychic"],
		abilities: {0: "Insomnia", 1: "Forewarn", H: "Inner Focus"},
	},
	dudunsparce: {
		inherit: true,
		baseStats: {hp: 125, atk: 100, def: 80, spa: 85, spd: 75, spe: 55},
		// Types update
		types: ["Normal", "Dragon"],
		abilities: {0: "Serene Grace", 1: "Run Away", H: "Rattled"},
		cosmeticFormes: ["Dudunsparce-Three-Segment"],
		formeOrder: ["Dudunsparce", "Dudunsparce-Three-Segment"],
	},
	dugtrioalola: {
		inherit: true,
		baseStats: {hp: 35, atk: 100, def: 60, spa: 50, spd: 70, spe: 110},
		types: ["Ground", "Steel"],
		abilities: {0: "Sand Veil", 1: "Tangling Hair", H: "Sand Force"},
	},
	dugtrio: {
		inherit: true,
		baseStats: {hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120},
		types: ["Ground"],
		abilities: {0: "Sand Veil", 1: "Arena Trap", H: "Sand Force"},
	},
	dunsparce: {
		inherit: true,
		baseStats: {hp: 100, atk: 70, def: 70, spa: 65, spd: 65, spe: 45},
		// Types update
		types: ["Normal", "Ground"],
		// Abilities update
		abilities: {0: "Serene Grace", 1: "Run Away", H: "Sand Stream"},
	},
	eevee: {
		inherit: true,
		baseStats: {hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55},
		types: ["Normal"],
		abilities: {0: "Run Away", 1: "Adaptability", H: "Anticipation"},
	},
	ekans: {
		inherit: true,
		baseStats: {hp: 35, atk: 60, def: 44, spa: 40, spd: 54, spe: 55},
		types: ["Poison"],
		abilities: {0: "Intimidate", 1: "Shed Skin", H: "Unnerve"},
	},
	electabuzz: {
		inherit: true,
		// BST update
		baseStats: {hp: 65, atk: 88, def: 57, spa: 95, spd: 85, spe: 105},
		types: ["Electric"],
		abilities: {0: "Static", H: "Vital Spirit"},
	},
	electivire: {
		inherit: true,
		// BST update
		baseStats: {hp: 75, atk: 123, def: 67, spa: 95, spd: 85, spe: 105},
		// Types update
		types: ["Electric", "Fighting"],
		abilities: {0: "Motor Drive", H: "Vital Spirit"},
	},
	electrodehisui: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150},
		types: ["Electric", "Grass"],
		abilities: {0: "Soundproof", 1: "Static", H: "Aftermath"},
	},
	electrode: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150},
		types: ["Electric"],
		abilities: {0: "Soundproof", 1: "Static", H: "Aftermath"},
	},
	elekid: {
		inherit: true,
		// BST update
		baseStats: {hp: 50, atk: 63, def: 37, spa: 65, spd: 55, spe: 100},
		types: ["Electric"],
		abilities: {0: "Static", H: "Vital Spirit"},
	},
	entei: {
		inherit: true,
		baseStats: {hp: 115, atk: 115, def: 85, spa: 90, spd: 75, spe: 100},
		types: ["Fire"],
		// Abilities update
		abilities: {0: "Pressure", 1: "Inner Focus", H: "Flash Fire"},
	},
	espeon: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 60, spa: 130, spd: 95, spe: 110},
		types: ["Psychic"],
		// Abilities update
		abilities: {0: "Synchronize", 1: "Magic Guard", H: "Magic Bounce"},
	},
	exeggcute: {
		inherit: true,
		baseStats: {hp: 60, atk: 40, def: 80, spa: 60, spd: 45, spe: 40},
		types: ["Grass", "Psychic"],
		abilities: {0: "Chlorophyll", H: "Harvest"},
	},
	exeggutoralola: {
		inherit: true,
		baseStats: {hp: 95, atk: 105, def: 85, spa: 125, spd: 75, spe: 45},
		types: ["Grass", "Dragon"],
		abilities: {0: "Frisk", H: "Harvest"},
	},
	exeggutor: {
		inherit: true,
		baseStats: {hp: 95, atk: 95, def: 85, spa: 125, spd: 75, spe: 55},
		types: ["Grass", "Psychic"],
		abilities: {0: "Chlorophyll", H: "Harvest"},
	},
	farfetchdgalar: {
		inherit: true,
		baseStats: {hp: 52, atk: 95, def: 55, spa: 58, spd: 62, spe: 55},
		types: ["Fighting"],
		abilities: {0: "Steadfast", H: "Scrappy"},
	},
	farfetchd: {
		inherit: true,
		baseStats: {hp: 52, atk: 90, def: 55, spa: 58, spd: 62, spe: 60},
		types: ["Normal", "Flying"],
		abilities: {0: "Keen Eye", 1: "Inner Focus", H: "Defiant"},
	},
	farigiraf: {
		inherit: true,
		// BST update
		baseStats: {hp: 120, atk: 90, def: 70, spa: 120, spd: 70, spe: 70},
		// Types update
		types: ["Psychic", "Dark"],
		abilities: {0: "Cud Chew", 1: "Armor Tail", H: "Sap Sipper"},
	},
	fearow: {
		inherit: true,
		// BST update
		baseStats: {hp: 75, atk: 99, def: 65, spa: 66, spd: 66, spe: 101},
		types: ["Normal", "Flying"],
		abilities: {0: "Keen Eye", H: "Sniper"},
	},
	feraligatr: {
		inherit: true,
		baseStats: {hp: 85, atk: 105, def: 100, spa: 79, spd: 83, spe: 78},
		// Types update
		types: ["Water", "Dark"],
		// Abilities update
		abilities: {0: "Torrent", 1: "Intimidate", H: "Sheer Force"},
	},
	flaaffy: {
		inherit: true,
		// BST update
		baseStats: {hp: 70, atk: 60, def: 60, spa: 85, spd: 65, spe: 50},
		types: ["Electric"],
		// Abilities update
		abilities: {0: "Static", H: "Motor Drive"},
	},
	flareon: {
		inherit: true,
		baseStats: {hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65},
		types: ["Fire"],
		// Abilities update
		abilities: {0: "Flash Fire", 1: "Drought", H: "Guts"},
	},
	forretress: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 140, spa: 60, spd: 60, spe: 40},
		types: ["Bug", "Steel"],
		abilities: {0: "Sturdy", H: "Overcoat"},
	},
	furret: {
		inherit: true,
		// BST update
		baseStats: {hp: 85, atk: 86, def: 64, spa: 45, spd: 55, spe: 108},
		types: ["Normal"],
		abilities: {0: "Run Away", 1: "Keen Eye", H: "Frisk"},
	},
	gastly: {
		inherit: true,
		baseStats: {hp: 30, atk: 35, def: 30, spa: 100, spd: 35, spe: 80},
		types: ["Ghost", "Poison"],
		abilities: {0: "Levitate"},
	},
	gengar: {
		inherit: true,
		baseStats: {hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110},
		types: ["Ghost", "Poison"],
		// Abilities update
		abilities: {0: "Cursed Body", 1: "Levitate", H: "Shadow Tag"},
	},
	geodudealola: {
		inherit: true,
		baseStats: {hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20},
		types: ["Rock", "Electric"],
		abilities: {0: "Magnet Pull", 1: "Sturdy", H: "Galvanize"},
	},
	geodude: {
		inherit: true,
		baseStats: {hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20},
		types: ["Rock", "Ground"],
		abilities: {0: "Rock Head", 1: "Sturdy", H: "Sand Veil"},
	},
	girafarig: {
		inherit: true,
		// BST update
		baseStats: {hp: 70, atk: 80, def: 65, spa: 100, spd: 65, spe: 95},
		// Types update
		types: ["Psychic", "Dark"],
		abilities: {0: "Inner Focus", 1: "Early Bird", H: "Sap Sipper"},
	},
	glaceon: {
		inherit: true,
		baseStats: {hp: 65, atk: 60, def: 110, spa: 130, spd: 95, spe: 65},
		types: ["Ice"],
		// Abilities update
		abilities: {0: "Snow Cloak", 1: "Snow Warning", H: "Ice Body"},
	},
	gligar: {
		inherit: true,
		baseStats: {hp: 65, atk: 75, def: 105, spa: 35, spd: 65, spe: 85},
		types: ["Ground", "Flying"],
		abilities: {0: "Hyper Cutter", 1: "Sand Veil", H: "Immunity"},
	},
	gliscor: {
		inherit: true,
		baseStats: {hp: 75, atk: 95, def: 125, spa: 45, spd: 75, spe: 95},
		types: ["Ground", "Flying"],
		abilities: {0: "Hyper Cutter", 1: "Sand Veil", H: "Poison Heal"},
	},
	gloom: {
		inherit: true,
		baseStats: {hp: 60, atk: 65, def: 70, spa: 85, spd: 75, spe: 40},
		types: ["Grass", "Poison"],
		abilities: {0: "Chlorophyll", H: "Stench"},
	},
	golbat: {
		inherit: true,
		baseStats: {hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 90},
		types: ["Poison", "Flying"],
		// Abilities update
		abilities: {0: "Inner Focus", 1: "Anticipation", H: "Infiltrator"},
	},
	goldeen: {
		inherit: true,
		baseStats: {hp: 45, atk: 67, def: 60, spa: 35, spd: 50, spe: 63},
		types: ["Water"],
		abilities: {0: "Swift Swim", 1: "Water Veil", H: "Lightning Rod"},
	},
	golduck: {
		inherit: true,
		baseStats: {hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 85},
		// Types update
		types: ["Water", "Psychic"],
		abilities: {0: "Damp", 1: "Cloud Nine", H: "Swift Swim"},
	},
	golemalola: {
		inherit: true,
		baseStats: {hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45},
		types: ["Rock", "Electric"],
		abilities: {0: "Magnet Pull", 1: "Sturdy", H: "Galvanize"},
	},
	golem: {
		inherit: true,
		baseStats: {hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45},
		types: ["Rock", "Ground"],
		abilities: {0: "Rock Head", 1: "Sturdy", H: "Sand Veil"},
	},
	granbull: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 75, spa: 60, spd: 60, spe: 45},
		types: ["Fairy"],
		abilities: {0: "Intimidate", 1: "Quick Feet", H: "Rattled"},
	},
	graveleralola: {
		inherit: true,
		baseStats: {hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35},
		types: ["Rock", "Electric"],
		abilities: {0: "Magnet Pull", 1: "Sturdy", H: "Galvanize"},
	},
	graveler: {
		inherit: true,
		baseStats: {hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35},
		types: ["Rock", "Ground"],
		abilities: {0: "Rock Head", 1: "Sturdy", H: "Sand Veil"},
	},
	grimeralola: {
		inherit: true,
		baseStats: {hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25},
		types: ["Poison", "Dark"],
		abilities: {0: "Poison Touch", 1: "Gluttony", H: "Corrosion"},
	},
	grimer: {
		inherit: true,
		baseStats: {hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25},
		types: ["Poison"],
		abilities: {0: "Stench", 1: "Sticky Hold", H: "Poison Touch"},
	},
	growlithehisui: {
		inherit: true,
		baseStats: {hp: 60, atk: 75, def: 45, spa: 65, spd: 50, spe: 55},
		types: ["Fire", "Rock"],
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Rock Head"},
	},
	growlithe: {
		inherit: true,
		baseStats: {hp: 55, atk: 70, def: 45, spa: 70, spd: 50, spe: 60},
		types: ["Fire"],
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Justified"},
	},
	gyarados: {
		inherit: true,
		baseStats: {hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81},
		types: ["Water", "Flying"],
		abilities: {0: "Intimidate", 1: "Moxie", H: "Mold Breaker"},
		cosmeticFormes: ["Gyarados-Red"],
		formeOrder: ["Gyarados", "Gyarados-Red"],
	},
	happiny: {
		inherit: true,
		baseStats: {hp: 100, atk: 5, def: 5, spa: 15, spd: 65, spe: 30},
		types: ["Normal"],
		abilities: {0: "Natural Cure", 1: "Serene Grace"},
	},
	haunter: {
		inherit: true,
		baseStats: {hp: 45, atk: 50, def: 45, spa: 115, spd: 55, spe: 95},
		types: ["Ghost", "Poison"],
		abilities: {0: "Levitate"},
	},
	heracross: {
		inherit: true,
		baseStats: {hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85},
		types: ["Bug", "Fighting"],
		abilities: {0: "Moxie", 1: "Guts", H: "Skill Link"},
	},
	hitmonchan: {
		inherit: true,
		baseStats: {hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76},
		types: ["Fighting"],
		abilities: {0: "Keen Eye", 1: "Iron Fist", H: "Inner Focus"},
	},
	hitmonlee: {
		inherit: true,
		baseStats: {hp: 50, atk: 120, def: 53, spa: 35, spd: 110, spe: 87},
		types: ["Fighting"],
		abilities: {0: "Limber", 1: "Reckless", H: "Unburden"},
	},
	hitmontop: {
		inherit: true,
		baseStats: {hp: 50, atk: 95, def: 95, spa: 35, spd: 110, spe: 70},
		types: ["Fighting"],
		abilities: {0: "Intimidate", 1: "Technician", H: "Steadfast"},
	},
	hooh: {
		inherit: true,
		baseStats: {hp: 106, atk: 130, def: 90, spa: 110, spd: 154, spe: 90},
		types: ["Fire", "Flying"],
		// Abilities update
		abilities: {0: "Pressure", 1: "Drought", H: "Regenerator"},
	},
	honchkrow: {
		inherit: true,
		// BST update
		baseStats: {hp: 105, atk: 125, def: 52, spa: 105, spd: 52, spe: 71},
		types: ["Dark", "Flying"],
		abilities: {0: "Insomnia", 1: "Super Luck", H: "Moxie"},
	},
	hoothoot: {
		inherit: true,
		baseStats: {hp: 60, atk: 30, def: 30, spa: 36, spd: 56, spe: 50},
		types: ["Normal", "Flying"],
		abilities: {0: "Insomnia", 1: "Keen Eye", H: "Tinted Lens"},
	},
	hoppip: {
		inherit: true,
		baseStats: {hp: 35, atk: 35, def: 40, spa: 35, spd: 55, spe: 50},
		types: ["Grass", "Flying"],
		abilities: {0: "Chlorophyll", 1: "Leaf Guard", H: "Infiltrator"},
	},
	horsea: {
		inherit: true,
		baseStats: {hp: 30, atk: 40, def: 70, spa: 70, spd: 25, spe: 60},
		types: ["Water"],
		abilities: {0: "Swift Swim", 1: "Sniper", H: "Damp"},
	},
	houndoom: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 50, spa: 110, spd: 80, spe: 95},
		types: ["Dark", "Fire"],
		abilities: {0: "Early Bird", 1: "Flash Fire", H: "Solar Power"},
	},
	houndour: {
		inherit: true,
		baseStats: {hp: 45, atk: 60, def: 30, spa: 80, spd: 50, spe: 65},
		types: ["Dark", "Fire"],
		abilities: {0: "Early Bird", 1: "Flash Fire", H: "Unnerve"},
	},
	hypno: {
		inherit: true,
		baseStats: {hp: 85, atk: 73, def: 70, spa: 73, spd: 115, spe: 67},
		types: ["Psychic"],
		abilities: {0: "Insomnia", 1: "Forewarn", H: "Inner Focus"},
	},
	igglybuff: {
		inherit: true,
		baseStats: {hp: 90, atk: 30, def: 15, spa: 40, spd: 20, spe: 15},
		types: ["Normal", "Fairy"],
		// Abilities update
		abilities: {0: "Cute Charm", 1: "Competitive", H: "Soundproof"},
	},
	ivysaur: {
		inherit: true,
		baseStats: {hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60},
		types: ["Grass", "Poison"],
		abilities: {0: "Overgrow", 1: "Chlorophyll", H: "Effect Spore"},
	},
	jigglypuff: {
		inherit: true,
		baseStats: {hp: 115, atk: 45, def: 20, spa: 45, spd: 25, spe: 20},
		types: ["Normal", "Fairy"],
		// Abilities update
		abilities: {0: "Cute Charm", 1: "Competitive", H: "Soundproof"},
	},
	jolteon: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130},
		types: ["Electric"],
		// Abilities update
		abilities: {0: "Volt Absorb", 1: "Static", H: "Quick Feet"},
	},
	jumpluff: {
		inherit: true,
		// BST update
		baseStats: {hp: 95, atk: 55, def: 70, spa: 55, spd: 95, spe: 110},
		types: ["Grass", "Flying"],
		abilities: {0: "Chlorophyll", 1: "Leaf Guard", H: "Infiltrator"},
	},
	jynx: {
		inherit: true,
		// BST update
		baseStats: {hp: 70, atk: 60, def: 40, spa: 120, spd: 100, spe: 95},
		types: ["Ice", "Psychic"],
		// Abilities update
		abilities: {0: "Oblivious", 1: "Filter", H: "Dry Skin"},
	},
	kabuto: {
		inherit: true,
		baseStats: {hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55},
		types: ["Rock", "Water"],
		abilities: {0: "Swift Swim", 1: "Battle Armor", H: "Weak Armor"},
	},
	kabutops: {
		inherit: true,
		baseStats: {hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80},
		types: ["Rock", "Water"],
		abilities: {0: "Swift Swim", 1: "Battle Armor", H: "Weak Armor"},
	},
	kadabra: {
		inherit: true,
		baseStats: {hp: 40, atk: 35, def: 30, spa: 120, spd: 70, spe: 105},
		types: ["Psychic"],
		abilities: {0: "Synchronize", 1: "Magic Guard", H: "Trace"},
	},
	kakuna: {
		inherit: true,
		baseStats: {hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35},
		types: ["Bug", "Poison"],
		abilities: {0: "Shed Skin"},
	},
	kangaskhan: {
		inherit: true,
		baseStats: {hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90},
		types: ["Normal"],
		// Abilities update
		abilities: {0: "Early Bird", 1: "Scrappy", H: "Parental Bond"},
	},
	kingdra: {
		inherit: true,
		baseStats: {hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 85},
		types: ["Water", "Dragon"],
		abilities: {0: "Swift Swim", 1: "Sniper", H: "Damp"},
	},
	kingler: {
		inherit: true,
		baseStats: {hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75},
		types: ["Water"],
		abilities: {0: "Hyper Cutter", 1: "Shell Armor", H: "Sheer Force"},
	},
	kleavor: {
		inherit: true,
		baseStats: {hp: 70, atk: 130, def: 95, spa: 45, spd: 75, spe: 85},
		types: ["Bug", "Rock"],
		abilities: {0: "Swarm", 1: "Sheer Force", H: "Sharpness"},
	},
	koffing: {
		inherit: true,
		baseStats: {hp: 40, atk: 65, def: 95, spa: 60, spd: 45, spe: 35},
		types: ["Poison"],
		abilities: {0: "Levitate", 1: "Neutralizing Gas", H: "Stench"},
	},
	krabby: {
		inherit: true,
		baseStats: {hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50},
		types: ["Water"],
		abilities: {0: "Hyper Cutter", 1: "Shell Armor", H: "Sheer Force"},
	},
	lanturn: {
		inherit: true,
		// BST update
		baseStats: {hp: 125, atk: 58, def: 58, spa: 86, spd: 86, spe: 67},
		types: ["Water", "Electric"],
		abilities: {0: "Volt Absorb", 1: "Illuminate", H: "Water Absorb"},
	},
	lapras: {
		inherit: true,
		baseStats: {hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60},
		types: ["Water", "Ice"],
		abilities: {0: "Water Absorb", 1: "Shell Armor", H: "Hydration"},
	},
	larvitar: {
		inherit: true,
		baseStats: {hp: 50, atk: 64, def: 50, spa: 45, spd: 50, spe: 41},
		types: ["Rock", "Ground"],
		// Abilities update
		abilities: {0: "Guts", 1: "Battle Armor", H: "Sand Veil"},
	},
	leafeon: {
		inherit: true,
		baseStats: {hp: 65, atk: 110, def: 130, spa: 60, spd: 65, spe: 95},
		types: ["Grass"],
		// Abilities update
		abilities: {0: "Leaf Guard", 1: "Natural Cure", H: "Chlorophyll"},
	},
	ledian: {
		inherit: true,
		// BST update
		baseStats: {hp: 55, atk: 95, def: 50, spa: 35, spd: 110, spe: 85},
		// Types update
		types: ["Bug", "Fighting"],
		abilities: {0: "Swarm", 1: "Early Bird", H: "Iron Fist"},
	},
	ledyba: {
		inherit: true,
		// BST update
		baseStats: {hp: 40, atk: 40, def: 30, spa: 20, spd: 80, spe: 55},
		types: ["Bug", "Flying"],
		abilities: {0: "Swarm", 1: "Early Bird", H: "Rattled"},
	},
	lickilicky: {
		inherit: true,
		baseStats: {hp: 110, atk: 85, def: 95, spa: 80, spd: 95, spe: 50},
		types: ["Normal"],
		abilities: {0: "Own Tempo", 1: "Oblivious", H: "Cloud Nine"},
	},
	lickitung: {
		inherit: true,
		baseStats: {hp: 90, atk: 55, def: 75, spa: 60, spd: 75, spe: 30},
		types: ["Normal"],
		abilities: {0: "Own Tempo", 1: "Oblivious", H: "Cloud Nine"},
	},
	lugia: {
		inherit: true,
		baseStats: {hp: 106, atk: 90, def: 130, spa: 90, spd: 154, spe: 110},
		// Types update
		types: ["Water", "Flying"],
		// Abilities update
		abilities: {0: "Pressure", 1: "Drizzle", H: "Multiscale"},
	},
	machamp: {
		inherit: true,
		baseStats: {hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55},
		types: ["Fighting"],
		abilities: {0: "Guts", 1: "No Guard", H: "Steadfast"},
	},
	machoke: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 70, spa: 50, spd: 60, spe: 45},
		types: ["Fighting"],
		abilities: {0: "Guts", 1: "No Guard", H: "Steadfast"},
	},
	machop: {
		inherit: true,
		baseStats: {hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35},
		types: ["Fighting"],
		abilities: {0: "Guts", 1: "No Guard", H: "Steadfast"},
	},
	magby: {
		inherit: true,
		// BST update
		baseStats: {hp: 50, atk: 75, def: 37, spa: 70, spd: 55, spe: 83},
		types: ["Fire"],
		abilities: {0: "Flame Body", H: "Vital Spirit"},
	},
	magcargo: {
		inherit: true,
		// BST update
		baseStats: {hp: 60, atk: 50, def: 135, spa: 115, spd: 115, spe: 30},
		types: ["Fire", "Rock"],
		abilities: {0: "Magma Armor", 1: "Flame Body", H: "Weak Armor"},
	},
	magikarp: {
		inherit: true,
		baseStats: {hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80},
		types: ["Water"],
		abilities: {0: "Swift Swim", H: "Rattled"},
		cosmeticFormes: ["Magikarp-Bubbles", "Magikarp-Calico-One", "Magikarp-Calico-Two", "Magikarp-Calico-Three", "Magikarp-Dapples", "Magikarp-Diamonds", "Magikarp-Forehead-One", "Magikarp-Forehead-Two", "Magikarp-Mask-One", "Magikarp-Mask-Two", "Magikarp-Orca", "Magikarp-Patches", "Magikarp-Raindrop", "Magikarp-Saucy", "Magikarp-Skelly", "Magikarp-Stripe", "Magikarp-Tiger", "Magikarp-Two-Tone", "Magikarp-Zebra"],
		formeOrder: ["Magikarp", "Magikarp-Bubbles", "Magikarp-Calico-One", "Magikarp-Calico-Two", "Magikarp-Calico-Three", "Magikarp-Dapples", "Magikarp-Diamonds", "Magikarp-Forehead-One", "Magikarp-Forehead-Two", "Magikarp-Mask-One", "Magikarp-Mask-Two", "Magikarp-Orca", "Magikarp-Patches", "Magikarp-Raindrop", "Magikarp-Saucy", "Magikarp-Skelly", "Magikarp-Stripe", "Magikarp-Tiger", "Magikarp-Two-Tone", "Magikarp-Zebra"],
	},
	magmar: {
		inherit: true,
		baseStats: {hp: 65, atk: 95, def: 57, spa: 100, spd: 85, spe: 93},
		types: ["Fire"],
		abilities: {0: "Flame Body", H: "Vital Spirit"},
	},
	magmortar: {
		inherit: true,
		// BST update
		baseStats: {hp: 75, atk: 95, def: 67, spa: 125, spd: 95, spe: 93},
		// Types update
		types: ["Fire", "Fighting"],
		abilities: {0: "Flame Body", H: "Vital Spirit"},
	},
	magnemite: {
		inherit: true,
		baseStats: {hp: 25, atk: 35, def: 70, spa: 95, spd: 55, spe: 45},
		types: ["Electric", "Steel"],
		// Abilities update
		abilities: {0: "Magnet Pull", 1: "Levitate", H: "Analytic"},
	},
	magneton: {
		inherit: true,
		baseStats: {hp: 50, atk: 60, def: 95, spa: 120, spd: 70, spe: 70},
		types: ["Electric", "Steel"],
		// Abilities update
		abilities: {0: "Magnet Pull", 1: "Levitate", H: "Analytic"},
	},
	magnezone: {
		inherit: true,
		baseStats: {hp: 70, atk: 70, def: 115, spa: 130, spd: 90, spe: 60},
		types: ["Electric", "Steel"],
		// Abilities update
		abilities: {0: "Magnet Pull", 1: "Levitate", H: "Analytic"},
	},
	mamoswine: {
		inherit: true,
		baseStats: {hp: 110, atk: 130, def: 80, spa: 70, spd: 60, spe: 80},
		types: ["Ice", "Ground"],
		abilities: {0: "Oblivious", 1: "Snow Cloak", H: "Thick Fat"},
	},
	mankey: {
		inherit: true,
		baseStats: {hp: 40, atk: 80, def: 35, spa: 35, spd: 45, spe: 70},
		types: ["Fighting"],
		abilities: {0: "Vital Spirit", 1: "Anger Point", H: "Defiant"},
	},
	mantine: {
		inherit: true,
		baseStats: {hp: 85, atk: 40, def: 70, spa: 80, spd: 140, spe: 70},
		types: ["Water", "Flying"],
		abilities: {0: "Swift Swim", 1: "Water Absorb", H: "Water Veil"},
	},
	mantyke: {
		inherit: true,
		baseStats: {hp: 45, atk: 20, def: 50, spa: 60, spd: 120, spe: 50},
		types: ["Water", "Flying"],
		abilities: {0: "Swift Swim", 1: "Water Absorb", H: "Water Veil"},
	},
	mareep: {
		inherit: true,
		baseStats: {hp: 55, atk: 40, def: 40, spa: 65, spd: 45, spe: 35},
		types: ["Electric"],
		// Abilities update
		abilities: {0: "Static", H: "Motor Drive"},
	},
	marill: {
		inherit: true,
		baseStats: {hp: 70, atk: 20, def: 50, spa: 20, spd: 50, spe: 40},
		types: ["Water", "Fairy"],
		abilities: {0: "Thick Fat", 1: "Huge Power", H: "Sap Sipper"},
	},
	marowakalola: {
		inherit: true,
		// BST update
		baseStats: {hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 70},
		types: ["Fire", "Ghost"],
		abilities: {0: "Cursed Body", 1: "Lightning Rod", H: "Rock Head"},
	},
	marowak: {
		inherit: true,
		// BST update
		baseStats: {hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 70},
		types: ["Ground"],
		abilities: {0: "Rock Head", 1: "Lightning Rod", H: "Battle Armor"},
	},
	meganium: {
		inherit: true,
		baseStats: {hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80},
		// Types update
		types: ["Grass", "Fairy"],
		// Abilities update
		abilities: {0: "Overgrow", 1: "Natural Cure", H: "Leaf Guard"},
	},
	meowthalola: {
		inherit: true,
		baseStats: {hp: 40, atk: 35, def: 35, spa: 50, spd: 40, spe: 90},
		types: ["Dark"],
		abilities: {0: "Pickup", 1: "Tough Claws", H: "Rattled"},
	},
	meowthgalar: {
		inherit: true,
		baseStats: {hp: 50, atk: 65, def: 65, spa: 40, spd: 40, spe: 40},
		types: ["Steel"],
		abilities: {0: "Battle Armor", 1: "Tough Claws", H: "Steely Spirit"},
	},
	meowth: {
		inherit: true,
		baseStats: {hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90},
		types: ["Normal"],
		abilities: {0: "Pickup", 1: "Technician", H: "Unnerve"},
	},
	metapod: {
		inherit: true,
		baseStats: {hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30},
		types: ["Bug"],
		abilities: {0: "Shed Skin"},
	},
	mew: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		types: ["Psychic"],
		// Abilities update
		abilities: {0: "Synchronize", H: "Magic Guard"},
	},
	mewtwoarmored: {
		num: -2000,
		name: "Mewtwo-Armored",
		baseSpecies: "Mewtwo",
		forme: "Armored",
		heightm: 2.2,
		weightkg: 137,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		tags: ["Restricted Legendary"],
		// BST update
		baseStats: {hp: 106, atk: 110, def: 100, spa: 134, spd: 100, spe: 130},
		// Types update
		types: ["Psychic", "Steel"],
		abilities: {0: "Pressure", 1: "Insomnia", H: "Unnerve"},
	},
	mewtwo: {
		inherit: true,
		baseStats: {hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130},
		types: ["Psychic"],
		abilities: {0: "Pressure", 1: "Insomnia", H: "Unnerve"},
		otherFormes: ["Mewtwo-Armored"],
		formeOrder: ["Mewtwo", "Mewtwo-Armored"],
	},
	miltank: {
		inherit: true,
		baseStats: {hp: 95, atk: 80, def: 105, spa: 40, spd: 70, spe: 100},
		types: ["Normal"],
		abilities: {0: "Thick Fat", 1: "Scrappy", H: "Sap Sipper"},
	},
	mimejr: {
		inherit: true,
		baseStats: {hp: 20, atk: 25, def: 45, spa: 70, spd: 90, spe: 60},
		types: ["Psychic", "Fairy"],
		abilities: {0: "Soundproof", 1: "Filter", H: "Technician"},
	},
	misdreavus: {
		inherit: true,
		baseStats: {hp: 60, atk: 60, def: 60, spa: 85, spd: 85, spe: 85},
		types: ["Ghost"],
		abilities: {0: "Levitate"},
	},
	mismagius: {
		inherit: true,
		// BST update
		baseStats: {hp: 60, atk: 60, def: 60, spa: 110, spd: 110, spe: 110},
		// Types update
		types: ["Ghost", "Fairy"],
		abilities: {0: "Levitate"},
	},
	moltresgalar: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 90, spa: 100, spd: 125, spe: 90},
		types: ["Dark", "Flying"],
		abilities: {0: "Berserk"},
	},
	moltres: {
		inherit: true,
		baseStats: {hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90},
		types: ["Fire", "Flying"],
		// Abilities update
		abilities: {0: "Pressure", 1: "Drought", H: "Flame Body"},
	},
	mrmimegalar: {
		inherit: true,
		baseStats: {hp: 50, atk: 65, def: 65, spa: 90, spd: 90, spe: 100},
		types: ["Ice", "Psychic"],
		abilities: {0: "Vital Spirit", 1: "Screen Cleaner", H: "Ice Body"},
	},
	mrmime: {
		inherit: true,
		baseStats: {hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90},
		types: ["Psychic", "Fairy"],
		abilities: {0: "Soundproof", 1: "Filter", H: "Technician"},
	},
	mrrime: {
		inherit: true,
		baseStats: {hp: 80, atk: 85, def: 75, spa: 110, spd: 100, spe: 70},
		types: ["Ice", "Psychic"],
		abilities: {0: "Tangled Feet", 1: "Screen Cleaner", H: "Ice Body"},
	},
	mukalola: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50},
		types: ["Poison", "Dark"],
		abilities: {0: "Poison Touch", 1: "Gluttony", H: "Corrosion"},
	},
	muk: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50},
		types: ["Poison"],
		abilities: {0: "Stench", 1: "Sticky Hold", H: "Poison Touch"},
	},
	munchlax: {
		inherit: true,
		baseStats: {hp: 135, atk: 85, def: 45, spa: 40, spd: 85, spe: 5},
		types: ["Normal"],
		abilities: {0: "Pickup", 1: "Thick Fat", H: "Gluttony"},
	},
	murkrow: {
		inherit: true,
		baseStats: {hp: 60, atk: 85, def: 42, spa: 85, spd: 42, spe: 91},
		types: ["Dark", "Flying"],
		abilities: {0: "Insomnia", 1: "Super Luck", H: "Prankster"},
	},
	natu: {
		inherit: true,
		baseStats: {hp: 40, atk: 50, def: 45, spa: 70, spd: 45, spe: 70},
		types: ["Psychic", "Flying"],
		abilities: {0: "Synchronize", 1: "Early Bird", H: "Magic Bounce"},
	},
	nidoking: {
		inherit: true,
		baseStats: {hp: 81, atk: 102, def: 77, spa: 85, spd: 75, spe: 85},
		types: ["Poison", "Ground"],
		abilities: {0: "Poison Point", 1: "Rivalry", H: "Sheer Force"},
	},
	nidoqueen: {
		inherit: true,
		baseStats: {hp: 90, atk: 92, def: 87, spa: 75, spd: 85, spe: 76},
		types: ["Poison", "Ground"],
		abilities: {0: "Poison Point", 1: "Rivalry", H: "Sheer Force"},
	},
	nidoranf: {
		inherit: true,
		baseStats: {hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41},
		types: ["Poison"],
		abilities: {0: "Poison Point", 1: "Rivalry", H: "Hustle"},
	},
	nidoranm: {
		inherit: true,
		baseStats: {hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50},
		types: ["Poison"],
		abilities: {0: "Poison Point", 1: "Rivalry", H: "Hustle"},
	},
	nidorina: {
		inherit: true,
		baseStats: {hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56},
		types: ["Poison"],
		abilities: {0: "Poison Point", 1: "Rivalry", H: "Hustle"},
	},
	nidorino: {
		inherit: true,
		baseStats: {hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65},
		types: ["Poison"],
		abilities: {0: "Poison Point", 1: "Rivalry", H: "Hustle"},
	},
	ninetalesalola: {
		inherit: true,
		baseStats: {hp: 73, atk: 67, def: 75, spa: 81, spd: 100, spe: 109},
		types: ["Ice", "Fairy"],
		abilities: {0: "Snow Cloak", H: "Snow Warning"},
	},
	ninetales: {
		inherit: true,
		baseStats: {hp: 73, atk: 76, def: 75, spa: 81, spd: 100, spe: 100},
		// Types update
		types: ["Fire", "Ghost"],
		// Abilities update
		abilities: {0: "Flash Fire", 1: "Forewarn", H: "Drought"},
	},
	noctowl: {
		inherit: true,
		// BST update
		baseStats: {hp: 100, atk: 50, def: 50, spa: 96, spd: 96, spe: 70},
		// Types update
		types: ["Ghost", "Flying"],
		abilities: {0: "Insomnia", 1: "Keen Eye", H: "Tinted Lens"},
	},
	octillery: {
		inherit: true,
		baseStats: {hp: 75, atk: 105, def: 75, spa: 105, spd: 75, spe: 45},
		// Types update
		types: ["Water", "Fire"],
		abilities: {0: "Suction Cups", 1: "Sniper", H: "Moody"},
	},
	oddish: {
		inherit: true,
		baseStats: {hp: 45, atk: 50, def: 55, spa: 75, spd: 65, spe: 30},
		types: ["Grass", "Poison"],
		abilities: {0: "Chlorophyll", H: "Run Away"},
	},
	omanyte: {
		inherit: true,
		baseStats: {hp: 35, atk: 40, def: 100, spa: 90, spd: 55, spe: 35},
		types: ["Rock", "Water"],
		abilities: {0: "Swift Swim", 1: "Shell Armor", H: "Weak Armor"},
	},
	omastar: {
		inherit: true,
		baseStats: {hp: 70, atk: 60, def: 125, spa: 115, spd: 70, spe: 55},
		types: ["Rock", "Water"],
		abilities: {0: "Swift Swim", 1: "Shell Armor", H: "Weak Armor"},
	},
	onix: {
		inherit: true,
		// BST update
		baseStats: {hp: 35, atk: 80, def: 160, spa: 30, spd: 45, spe: 70},
		types: ["Rock", "Ground"],
		abilities: {0: "Rock Head", 1: "Sturdy", H: "Weak Armor"},
	},
	overqwil: {
		inherit: true,
		baseStats: {hp: 85, atk: 115, def: 95, spa: 65, spd: 65, spe: 85},
		types: ["Dark", "Poison"],
		abilities: {0: "Poison Point", 1: "Swift Swim", H: "Intimidate"},
	},
	paras: {
		inherit: true,
		baseStats: {hp: 35, atk: 70, def: 55, spa: 45, spd: 55, spe: 25},
		types: ["Bug", "Grass"],
		abilities: {0: "Effect Spore", 1: "Dry Skin", H: "Damp"},
	},
	parasect: {
		inherit: true,
		// BST update
		baseStats: {hp: 60, atk: 115, def: 100, spa: 60, spd: 80, spe: 30},
		types: ["Bug", "Grass"],
		abilities: {0: "Effect Spore", 1: "Dry Skin", H: "Damp"},
	},
	perrserker: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 100, spa: 50, spd: 60, spe: 50},
		types: ["Steel"],
		abilities: {0: "Battle Armor", 1: "Tough Claws", H: "Steely Spirit"},
	},
	persianalola: {
		inherit: true,
		baseStats: {hp: 65, atk: 60, def: 60, spa: 75, spd: 65, spe: 115},
		types: ["Dark"],
		abilities: {0: "Fur Coat", 1: "Technician", H: "Rattled"},
	},
	persian: {
		inherit: true,
		baseStats: {hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115},
		types: ["Normal"],
		abilities: {0: "Limber", 1: "Technician", H: "Unnerve"},
	},
	phanpy: {
		inherit: true,
		baseStats: {hp: 90, atk: 60, def: 60, spa: 40, spd: 40, spe: 40},
		types: ["Ground"],
		abilities: {0: "Pickup", H: "Sand Veil"},
	},
	pichu: {
		inherit: true,
		baseStats: {hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60},
		types: ["Electric"],
		abilities: {0: "Static", H: "Lightning Rod"},
		cosmeticFormes: ["Pichu-Spiky-eared"],
		formeOrder: ["Pichu", "Pichu-Spiky-eared"],
	},
	pidgeot: {
		inherit: true,
		// BST update
		baseStats: {hp: 93, atk: 80, def: 75, spa: 90, spd: 70, spe: 102},
		types: ["Normal", "Flying"],
		abilities: {0: "Keen Eye", 1: "Tangled Feet", H: "No Guard"},
	},
	pidgeotto: {
		inherit: true,
		baseStats: {hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71},
		types: ["Normal", "Flying"],
		abilities: {0: "Keen Eye", 1: "Tangled Feet", H: "Big Pecks"},
	},
	pidgey: {
		inherit: true,
		baseStats: {hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56},
		types: ["Normal", "Flying"],
		abilities: {0: "Keen Eye", 1: "Tangled Feet", H: "Big Pecks"},
	},
	pikachu: {
		inherit: true,
		// BST update
		baseStats: {hp: 35, atk: 65, def: 40, spa: 60, spd: 50, spe: 95},
		types: ["Electric"],
		abilities: {0: "Static", H: "Lightning Rod"},
		cosmeticFormes: ["Pikachu-Chu-Chu", "Pikachu-Fly", "Pikachu-Pika", "Pikachu-Spark", "Pikachu-Surf"],
		formeOrder: ["Pikachu", "Pikachu-Chu-Chu", "Pikachu-Fly", "Pikachu-Pika", "Pikachu-Spark", "Pikachu-Surf"],
	},
	piloswine: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 80, spa: 60, spd: 60, spe: 50},
		types: ["Ice", "Ground"],
		abilities: {0: "Oblivious", 1: "Snow Cloak", H: "Thick Fat"},
	},
	pineco: {
		inherit: true,
		baseStats: {hp: 50, atk: 65, def: 90, spa: 35, spd: 35, spe: 15},
		types: ["Bug"],
		abilities: {0: "Sturdy", H: "Overcoat"},
	},
	pinsir: {
		inherit: true,
		baseStats: {hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 85},
		types: ["Bug"],
		abilities: {0: "Hyper Cutter", 1: "Mold Breaker", H: "Moxie"},
	},
	politoed: {
		inherit: true,
		// BST update
		baseStats: {hp: 90, atk: 75, def: 80, spa: 90, spd: 100, spe: 80},
		// Types update
		types: ["Water", "Grass"],
		abilities: {0: "Water Absorb", 1: "Damp", H: "Drizzle"},
	},
	poliwag: {
		inherit: true,
		baseStats: {hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90},
		types: ["Water"],
		abilities: {0: "Water Absorb", 1: "Damp", H: "Swift Swim"},
	},
	poliwhirl: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90},
		types: ["Water"],
		abilities: {0: "Water Absorb", 1: "Damp", H: "Swift Swim"},
	},
	poliwrath: {
		inherit: true,
		// BST update
		baseStats: {hp: 90, atk: 95, def: 100, spa: 70, spd: 90, spe: 70},
		types: ["Water", "Fighting"],
		abilities: {0: "Water Absorb", 1: "Damp", H: "Swift Swim"},
	},
	ponytagalar: {
		inherit: true,
		baseStats: {hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90},
		types: ["Psychic"],
		abilities: {0: "Run Away", 1: "Pastel Veil", H: "Anticipation"},
	},
	ponyta: {
		inherit: true,
		baseStats: {hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90},
		types: ["Fire"],
		abilities: {0: "Run Away", 1: "Flash Fire", H: "Flame Body"},
	},
	porygon: {
		inherit: true,
		baseStats: {hp: 65, atk: 60, def: 70, spa: 85, spd: 75, spe: 40},
		types: ["Normal"],
		abilities: {0: "Trace", 1: "Download", H: "Analytic"},
	},
	porygon2: {
		inherit: true,
		baseStats: {hp: 85, atk: 80, def: 90, spa: 105, spd: 95, spe: 60},
		types: ["Normal"],
		abilities: {0: "Trace", 1: "Download", H: "Analytic"},
	},
	porygonz: {
		inherit: true,
		baseStats: {hp: 85, atk: 80, def: 70, spa: 135, spd: 75, spe: 90},
		types: ["Normal"],
		abilities: {0: "Adaptability", 1: "Download", H: "Analytic"},
	},
	primeape: {
		inherit: true,
		baseStats: {hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95},
		types: ["Fighting"],
		// Abilities update
		abilities: {0: "Gorilla Tactics", 1: "Anger Point", H: "Defiant"},
	},
	psyduck: {
		inherit: true,
		baseStats: {hp: 50, atk: 52, def: 48, spa: 65, spd: 50, spe: 55},
		types: ["Water"],
		abilities: {0: "Damp", 1: "Cloud Nine", H: "Swift Swim"},
	},
	pupitar: {
		inherit: true,
		baseStats: {hp: 70, atk: 84, def: 70, spa: 65, spd: 70, spe: 51},
		types: ["Rock", "Ground"],
		// Abilities update
		abilities: {0: "Shed Skin", H: "Battle Armor"},
	},
	quagsire: {
		inherit: true,
		// BST update
		baseStats: {hp: 95, atk: 95, def: 95, spa: 65, spd: 65, spe: 35},
		types: ["Water", "Ground"],
		abilities: {0: "Damp", 1: "Water Absorb", H: "Unaware"},
	},
	quilava: {
		inherit: true,
		baseStats: {hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80},
		types: ["Fire"],
		// Abilities update
		abilities: {0: "Blaze", 1: "Flame Body", H: "Flash Fire"},
	},
	qwilfishhisui: {
		inherit: true,
		baseStats: {hp: 65, atk: 95, def: 85, spa: 55, spd: 55, spe: 85},
		types: ["Dark", "Poison"],
		abilities: {0: "Poison Point", 1: "Swift Swim", H: "Intimidate"},
	},
	qwilfish: {
		inherit: true,
		baseStats: {hp: 65, atk: 95, def: 85, spa: 55, spd: 55, spe: 85},
		types: ["Water", "Poison"],
		abilities: {0: "Poison Point", 1: "Swift Swim", H: "Intimidate"},
	},
	raichualola: {
		inherit: true,
		// BST update
		baseStats: {hp: 60, atk: 95, def: 50, spa: 105, spd: 85, spe: 121},
		types: ["Electric", "Psychic"],
		abilities: {0: "Static", H: "Motor Drive"},
	},
	raichu: {
		inherit: true,
		// BST update
		baseStats: {hp: 60, atk: 100, def: 55, spa: 100, spd: 80, spe: 121},
		types: ["Electric"],
		abilities: {0: "Static", H: "Lightning Rod"},
	},
	raikou: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 75, spa: 115, spd: 100, spe: 115},
		types: ["Electric"],
		// Abilities update
		abilities: {0: "Pressure", 1: "Inner Focus", H: "Volt Absorb"},
	},
	rapidashgalar: {
		inherit: true,
		baseStats: {hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105},
		types: ["Psychic", "Fairy"],
		abilities: {0: "Run Away", 1: "Pastel Veil", H: "Anticipation"},
	},
	rapidash: {
		inherit: true,
		baseStats: {hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105},
		// Types update
		types: ["Fire", "Fairy"],
		abilities: {0: "Run Away", 1: "Flash Fire", H: "Flame Body"},
	},
	raticatealola: {
		inherit: true,
		// BST update
		baseStats: {hp: 85, atk: 81, def: 70, spa: 40, spd: 80, spe: 87},
		types: ["Dark", "Normal"],
		abilities: {0: "Gluttony", 1: "Hustle", H: "Thick Fat"},
	},
	raticate: {
		inherit: true,
		// BST update
		baseStats: {hp: 65, atk: 91, def: 60, spa: 50, spd: 70, spe: 107},
		types: ["Normal"],
		abilities: {0: "Run Away", 1: "Guts", H: "Hustle"},
	},
	rattataalola: {
		inherit: true,
		baseStats: {hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72},
		types: ["Dark", "Normal"],
		abilities: {0: "Gluttony", 1: "Hustle", H: "Thick Fat"},
	},
	rattata: {
		inherit: true,
		baseStats: {hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72},
		types: ["Normal"],
		abilities: {0: "Run Away", 1: "Guts", H: "Hustle"},
	},
	remoraid: {
		inherit: true,
		baseStats: {hp: 35, atk: 65, def: 35, spa: 65, spd: 35, spe: 65},
		types: ["Water"],
		abilities: {0: "Hustle", 1: "Sniper", H: "Moody"},
	},
	rhydon: {
		inherit: true,
		// BST update
		baseStats: {hp: 110, atk: 130, def: 120, spa: 45, spd: 50, spe: 40},
		types: ["Ground", "Rock"],
		// Abilities update
		abilities: {0: "Rock Head", 1: "Solid Rock", H: "Reckless"},
	},
	rhyhorn: {
		inherit: true,
		baseStats: {hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25},
		types: ["Ground", "Rock"],
		// Abilities update
		abilities: {0: "Rock Head", 1: "Solid Rock", H: "Reckless"},
	},
	rhyperior: {
		inherit: true,
		// BST update
		baseStats: {hp: 120, atk: 140, def: 130, spa: 55, spd: 60, spe: 40},
		// Types update
		types: ["Steel", "Rock"],
		abilities: {0: "Lightning Rod", 1: "Solid Rock", H: "Reckless"},
	},
	sandshrewalola: {
		inherit: true,
		baseStats: {hp: 50, atk: 75, def: 90, spa: 10, spd: 35, spe: 40},
		types: ["Ice", "Steel"],
		abilities: {0: "Snow Cloak", H: "Slush Rush"},
	},
	sandshrew: {
		inherit: true,
		baseStats: {hp: 50, atk: 75, def: 85, spa: 20, spd: 30, spe: 40},
		types: ["Ground"],
		abilities: {0: "Sand Veil", H: "Sand Rush"},
	},
	sandslashalola: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 120, spa: 25, spd: 65, spe: 65},
		types: ["Ice", "Steel"],
		abilities: {0: "Snow Cloak", H: "Slush Rush"},
	},
	sandslash: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 110, spa: 45, spd: 55, spe: 65},
		types: ["Ground"],
		abilities: {0: "Sand Veil", H: "Sand Rush"},
	},
	scizor: {
		inherit: true,
		baseStats: {hp: 70, atk: 130, def: 100, spa: 55, spd: 80, spe: 65},
		types: ["Bug", "Steel"],
		abilities: {0: "Swarm", 1: "Technician", H: "Light Metal"},
	},
	scyther: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105},
		types: ["Bug", "Flying"],
		abilities: {0: "Swarm", 1: "Technician", H: "Steadfast"},
	},
	seadra: {
		inherit: true,
		baseStats: {hp: 55, atk: 65, def: 95, spa: 95, spd: 45, spe: 85},
		types: ["Water"],
		abilities: {0: "Poison Point", 1: "Sniper", H: "Damp"},
	},
	seaking: {
		inherit: true,
		// BST update
		baseStats: {hp: 80, atk: 102, def: 65, spa: 65, spd: 80, spe: 88},
		types: ["Water"],
		abilities: {0: "Swift Swim", 1: "Water Veil", H: "Lightning Rod"},
	},
	seel: {
		inherit: true,
		baseStats: {hp: 65, atk: 45, def: 55, spa: 45, spd: 70, spe: 45},
		types: ["Water"],
		abilities: {0: "Thick Fat", 1: "Hydration", H: "Ice Body"},
	},
	sentret: {
		inherit: true,
		baseStats: {hp: 35, atk: 46, def: 34, spa: 35, spd: 45, spe: 20},
		types: ["Normal"],
		abilities: {0: "Run Away", 1: "Keen Eye", H: "Frisk"},
	},
	shellder: {
		inherit: true,
		baseStats: {hp: 30, atk: 65, def: 100, spa: 45, spd: 25, spe: 40},
		types: ["Water"],
		abilities: {0: "Shell Armor", 1: "Skill Link", H: "Overcoat"},
	},
	shuckle: {
		inherit: true,
		baseStats: {hp: 20, atk: 10, def: 230, spa: 10, spd: 230, spe: 5},
		types: ["Bug", "Rock"],
		// Abilities update
		abilities: {0: "Solid Rock", 1: "Gluttony", H: "Contrary"},
	},
	sirfetchd: {
		inherit: true,
		baseStats: {hp: 62, atk: 135, def: 95, spa: 68, spd: 82, spe: 65},
		types: ["Fighting"],
		abilities: {0: "Steadfast", H: "Scrappy"},
	},
	skarmory: {
		inherit: true,
		// BST update
		baseStats: {hp: 85, atk: 80, def: 140, spa: 40, spd: 70, spe: 70},
		types: ["Steel", "Flying"],
		abilities: {0: "Keen Eye", 1: "Sturdy", H: "Weak Armor"},
	},
	skiploom: {
		inherit: true,
		// BST update
		baseStats: {hp: 65, atk: 45, def: 50, spa: 45, spd: 65, spe: 80},
		types: ["Grass", "Flying"],
		abilities: {0: "Chlorophyll", 1: "Leaf Guard", H: "Infiltrator"},
	},
	slowbrogalar: {
		inherit: true,
		// BST update
		baseStats: {hp: 95, atk: 100, def: 100, spa: 100, spd: 75, spe: 30},
		types: ["Poison", "Psychic"],
		abilities: {0: "Quick Draw", 1: "Own Tempo", H: "Regenerator"},
	},
	slowbro: {
		inherit: true,
		// BST update
		baseStats: {hp: 95, atk: 75, def: 120, spa: 100, spd: 80, spe: 30},
		types: ["Water", "Psychic"],
		abilities: {0: "Oblivious", 1: "Own Tempo", H: "Regenerator"},
	},
	slowkinggalar: {
		inherit: true,
		// BST update
		baseStats: {hp: 95, atk: 65, def: 80, spa: 110, spd: 120, spe: 30},
		types: ["Poison", "Psychic"],
		abilities: {0: "Gluttony", 1: "Own Tempo", H: "Regenerator"},
	},
	slowking: {
		inherit: true,
		// BST update
		baseStats: {hp: 95, atk: 75, def: 80, spa: 100, spd: 120, spe: 30},
		types: ["Water", "Psychic"],
		abilities: {0: "Oblivious", 1: "Own Tempo", H: "Regenerator"},
	},
	slowpokegalar: {
		inherit: true,
		baseStats: {hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15},
		types: ["Psychic"],
		abilities: {0: "Gluttony", 1: "Own Tempo", H: "Regenerator"},
	},
	slowpoke: {
		inherit: true,
		baseStats: {hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15},
		types: ["Water", "Psychic"],
		abilities: {0: "Oblivious", 1: "Own Tempo", H: "Regenerator"},
	},
	slugma: {
		inherit: true,
		baseStats: {hp: 40, atk: 40, def: 40, spa: 70, spd: 40, spe: 20},
		types: ["Fire"],
		abilities: {0: "Magma Armor", 1: "Flame Body", H: "Weak Armor"},
	},
	smeargle: {
		inherit: true,
		// BST update
		baseStats: {hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 100},
		types: ["Normal"],
		abilities: {0: "Own Tempo", 1: "Technician", H: "Moody"},
	},
	smoochum: {
		inherit: true,
		baseStats: {hp: 45, atk: 30, def: 15, spa: 85, spd: 65, spe: 65},
		types: ["Ice", "Psychic"],
		// Abilities update
		abilities: {0: "Oblivious", 1: "Filter", H: "Hydration"},
	},
	sneaselhisui: {
		inherit: true,
		baseStats: {hp: 55, atk: 95, def: 55, spa: 35, spd: 75, spe: 115},
		types: ["Poison", "Fighting"],
		abilities: {0: "Inner Focus", 1: "Keen Eye", H: "Pickpocket"},
	},
	sneasel: {
		inherit: true,
		baseStats: {hp: 55, atk: 95, def: 55, spa: 35, spd: 75, spe: 115},
		types: ["Dark", "Ice"],
		abilities: {0: "Inner Focus", 1: "Keen Eye", H: "Pickpocket"},
	},
	sneasler: {
		inherit: true,
		baseStats: {hp: 80, atk: 130, def: 60, spa: 40, spd: 80, spe: 120},
		types: ["Poison", "Fighting"],
		// Abilities update
		abilities: {0: "Technician", 1: "Unburden", H: "Poison Touch"},
	},
	snorlax: {
		inherit: true,
		baseStats: {hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30},
		types: ["Normal"],
		abilities: {0: "Immunity", 1: "Thick Fat", H: "Gluttony"},
	},
	snubbull: {
		inherit: true,
		baseStats: {hp: 60, atk: 80, def: 50, spa: 40, spd: 40, spe: 30},
		types: ["Fairy"],
		abilities: {0: "Intimidate", 1: "Run Away", H: "Rattled"},
	},
	spearow: {
		inherit: true,
		baseStats: {hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70},
		types: ["Normal", "Flying"],
		abilities: {0: "Keen Eye", H: "Sniper"},
	},
	spinarak: {
		inherit: true,
		baseStats: {hp: 40, atk: 60, def: 40, spa: 40, spd: 40, spe: 30},
		types: ["Bug", "Poison"],
		abilities: {0: "Swarm", 1: "Insomnia", H: "Sniper"},
	},
	squirtle: {
		inherit: true,
		baseStats: {hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43},
		types: ["Water"],
		abilities: {0: "Torrent", 1: "Rain Dish", H: "Shell Armor"},
	},
	stantler: {
		inherit: true,
		// BST update
		baseStats: {hp: 73, atk: 100, def: 62, spa: 85, spd: 65, spe: 85},
		// Types update
		types: ["Normal", "Psychic"],
		abilities: {0: "Intimidate", 1: "Frisk", H: "Sap Sipper"},
	},
	starmie: {
		inherit: true,
		baseStats: {hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115},
		types: ["Water", "Psychic"],
		abilities: {0: "Illuminate", 1: "Natural Cure", H: "Analytic"},
	},
	staryu: {
		inherit: true,
		baseStats: {hp: 30, atk: 45, def: 55, spa: 70, spd: 55, spe: 85},
		types: ["Water"],
		abilities: {0: "Illuminate", 1: "Natural Cure", H: "Analytic"},
	},
	steelix: {
		inherit: true,
		// BST update
		baseStats: {hp: 75, atk: 90, def: 200, spa: 55, spd: 65, spe: 30},
		types: ["Steel", "Ground"],
		abilities: {0: "Sheer Force", 1: "Sturdy", H: "Sand Force"},
	},
	sudowoodo: {
		inherit: true,
		// BST update
		baseStats: {hp: 75, atk: 115, def: 130, spa: 30, spd: 80, spe: 30},
		types: ["Rock"],
		abilities: {0: "Sturdy", 1: "Rock Head", H: "Rattled"},
	},
	suicune: {
		inherit: true,
		baseStats: {hp: 100, atk: 75, def: 115, spa: 90, spd: 115, spe: 85},
		types: ["Water"],
		// Abilities update
		abilities: {0: "Pressure", 1: "Inner Focus", H: "Water Absorb"},
	},
	sunflora: {
		inherit: true,
		// BST update
		baseStats: {hp: 75, atk: 55, def: 75, spa: 105, spd: 85, spe: 85},
		// Types update
		types: ["Grass", "Fire"],
		abilities: {0: "Chlorophyll", 1: "Solar Power", H: "Early Bird"},
	},
	sunkern: {
		inherit: true,
		baseStats: {hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 30},
		types: ["Grass"],
		abilities: {0: "Chlorophyll", 1: "Solar Power", H: "Early Bird"},
	},
	swinub: {
		inherit: true,
		baseStats: {hp: 50, atk: 50, def: 40, spa: 30, spd: 30, spe: 50},
		types: ["Ice", "Ground"],
		abilities: {0: "Oblivious", 1: "Snow Cloak", H: "Thick Fat"},
	},
	sylveon: {
		inherit: true,
		baseStats: {hp: 95, atk: 65, def: 65, spa: 110, spd: 130, spe: 60},
		types: ["Fairy"],
		// Abilities update
		abilities: {0: "Cute Charm", 1: "Serene Grace", H: "Pixilate"},
	},
	tangela: {
		inherit: true,
		baseStats: {hp: 65, atk: 55, def: 115, spa: 100, spd: 40, spe: 60},
		types: ["Grass"],
		abilities: {0: "Chlorophyll", 1: "Leaf Guard", H: "Regenerator"},
	},
	tangrowth: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 125, spa: 110, spd: 50, spe: 50},
		types: ["Grass"],
		abilities: {0: "Chlorophyll", 1: "Leaf Guard", H: "Regenerator"},
	},
	taurospaldeacombat: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 105, spa: 30, spd: 70, spe: 100},
		types: ["Fighting"],
		abilities: {0: "Intimidate", 1: "Anger Point", H: "Cud Chew"},
	},
	taurospaldeablaze: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 105, spa: 30, spd: 70, spe: 100},
		types: ["Fighting", "Fire"],
		abilities: {0: "Intimidate", 1: "Anger Point", H: "Cud Chew"},
	},
	taurospaldeaaqua: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 105, spa: 30, spd: 70, spe: 100},
		types: ["Fighting", "Water"],
		abilities: {0: "Intimidate", 1: "Anger Point", H: "Cud Chew"},
	},
	tauros: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110},
		types: ["Normal"],
		abilities: {0: "Intimidate", 1: "Anger Point", H: "Sheer Force"},
	},
	teddiursa: {
		inherit: true,
		baseStats: {hp: 60, atk: 80, def: 50, spa: 50, spd: 50, spe: 40},
		types: ["Normal"],
		abilities: {0: "Pickup", 1: "Quick Feet", H: "Honey Gather"},
	},
	tentacool: {
		inherit: true,
		baseStats: {hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70},
		types: ["Water", "Poison"],
		abilities: {0: "Clear Body", 1: "Liquid Ooze", H: "Rain Dish"},
	},
	tentacruel: {
		inherit: true,
		baseStats: {hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100},
		types: ["Water", "Poison"],
		abilities: {0: "Clear Body", 1: "Liquid Ooze", H: "Rain Dish"},
	},
	togekiss: {
		inherit: true,
		baseStats: {hp: 85, atk: 50, def: 95, spa: 120, spd: 115, spe: 80},
		types: ["Fairy", "Flying"],
		abilities: {0: "Hustle", 1: "Serene Grace", H: "Super Luck"},
	},
	togepi: {
		inherit: true,
		baseStats: {hp: 35, atk: 20, def: 65, spa: 40, spd: 65, spe: 20},
		types: ["Fairy"],
		abilities: {0: "Hustle", 1: "Serene Grace", H: "Super Luck"},
	},
	togetic: {
		inherit: true,
		baseStats: {hp: 55, atk: 40, def: 85, spa: 80, spd: 105, spe: 40},
		types: ["Fairy", "Flying"],
		abilities: {0: "Hustle", 1: "Serene Grace", H: "Super Luck"},
	},
	totodile: {
		inherit: true,
		baseStats: {hp: 50, atk: 65, def: 64, spa: 44, spd: 48, spe: 43},
		types: ["Water"],
		// Abilities update
		abilities: {0: "Torrent", 1: "Guts", H: "Sheer Force"},
	},
	typhlosionhisui: {
		inherit: true,
		baseStats: {hp: 73, atk: 84, def: 78, spa: 119, spd: 85, spe: 95},
		types: ["Fire", "Ghost"],
		// Abilities update
		abilities: {0: "Blaze", 1: "Flame Body", H: "Frisk"},
	},
	typhlosion: {
		inherit: true,
		baseStats: {hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100},
		// Types update
		types: ["Fire", "Ground"],
		// Abilities update
		abilities: {0: "Blaze", 1: "Flame Body", H: "Flash Fire"},
	},
	tyranitar: {
		inherit: true,
		baseStats: {hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61},
		types: ["Rock", "Dark"],
		// Abilities update
		abilities: {0: "Sand Stream", 1: "Battle Armor", H: "Unnerve"},
	},
	tyrogue: {
		inherit: true,
		baseStats: {hp: 35, atk: 35, def: 35, spa: 35, spd: 35, spe: 35},
		types: ["Fighting"],
		abilities: {0: "Guts", 1: "Steadfast", H: "Vital Spirit"},
	},
	umbreon: {
		inherit: true,
		baseStats: {hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65},
		types: ["Dark"],
		// Abilities update
		abilities: {0: "Synchronize", 1: "Magic Guard", H: "Inner Focus"},
	},
	unown: {
		inherit: true,
		baseStats: {hp: 48, atk: 72, def: 48, spa: 72, spd: 48, spe: 48},
		types: ["Psychic"],
		abilities: {0: "Levitate"},
	},
	ursalunabloodmoon: {
		inherit: true,
		baseStats: {hp: 113, atk: 70, def: 120, spa: 135, spd: 65, spe: 52},
		types: ["Ground", "Normal"],
		abilities: {0: "Mind's Eye"},
	},
	ursaluna: {
		inherit: true,
		baseStats: {hp: 130, atk: 140, def: 105, spa: 45, spd: 80, spe: 50},
		types: ["Ground", "Normal"],
		abilities: {0: "Guts", 1: "Bulletproof", H: "Unnerve"},
	},
	ursaring: {
		inherit: true,
		baseStats: {hp: 90, atk: 130, def: 75, spa: 75, spd: 75, spe: 55},
		types: ["Normal"],
		abilities: {0: "Guts", 1: "Quick Feet", H: "Unnerve"},
	},
	vaporeon: {
		inherit: true,
		baseStats: {hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65},
		types: ["Water"],
		// Abilities update
		abilities: {0: "Water Absorb", 1: "Drizzle", H: "Hydration"},
	},
	venomoth: {
		inherit: true,
		// BST update
		baseStats: {hp: 70, atk: 65, def: 60, spa: 115, spd: 75, spe: 90},
		types: ["Bug", "Poison"],
		abilities: {0: "Shield Dust", 1: "Tinted Lens", H: "Wonder Skin"},
	},
	venonat: {
		inherit: true,
		baseStats: {hp: 60, atk: 55, def: 50, spa: 40, spd: 55, spe: 45},
		types: ["Bug", "Poison"],
		abilities: {0: "Compound Eyes", 1: "Tinted Lens", H: "Run Away"},
	},
	venusaur: {
		inherit: true,
		baseStats: {hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80},
		types: ["Grass", "Poison"],
		abilities: {0: "Overgrow", 1: "Chlorophyll", H: "Thick Fat"},
	},
	victreebel: {
		inherit: true,
		// BST update
		baseStats: {hp: 80, atk: 115, def: 65, spa: 110, spd: 70, spe: 70},
		types: ["Grass", "Poison"],
		abilities: {0: "Chlorophyll", H: "Gluttony"},
	},
	vileplume: {
		inherit: true,
		// BST update
		baseStats: {hp: 75, atk: 80, def: 85, spa: 120, spd: 100, spe: 50},
		types: ["Grass", "Poison"],
		abilities: {0: "Chlorophyll", H: "Effect Spore"},
	},
	voltorbhisui: {
		inherit: true,
		baseStats: {hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100},
		types: ["Electric", "Grass"],
		abilities: {0: "Soundproof", 1: "Static", H: "Aftermath"},
	},
	voltorb: {
		inherit: true,
		baseStats: {hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100},
		types: ["Electric"],
		abilities: {0: "Soundproof", 1: "Static", H: "Aftermath"},
	},
	vulpixalola: {
		inherit: true,
		baseStats: {hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65},
		types: ["Ice"],
		abilities: {0: "Snow Cloak", H: "Snow Warning"},
	},
	vulpix: {
		inherit: true,
		baseStats: {hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65},
		types: ["Fire"],
		// Abilities update
		abilities: {0: "Flash Fire", 1: "Forewarn", H: "Drought"},
	},
	wartortle: {
		inherit: true,
		baseStats: {hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58},
		types: ["Water"],
		abilities: {0: "Torrent", 1: "Rain Dish", H: "Shell Armor"},
	},
	weavile: {
		inherit: true,
		baseStats: {hp: 70, atk: 120, def: 65, spa: 45, spd: 85, spe: 125},
		types: ["Dark", "Ice"],
		// Abilities update
		abilities: {0: "Pressure", 1: "Technician", H: "Pickpocket"},
	},
	weedle: {
		inherit: true,
		baseStats: {hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50},
		types: ["Bug", "Poison"],
		abilities: {0: "Shield Dust", H: "Run Away"},
	},
	weepinbell: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 50, spa: 85, spd: 45, spe: 55},
		types: ["Grass", "Poison"],
		abilities: {0: "Chlorophyll", H: "Gluttony"},
	},
	weezinggalar: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60},
		types: ["Poison", "Fairy"],
		abilities: {0: "Levitate", 1: "Neutralizing Gas", H: "White Smoke"},
	},
	weezing: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60},
		types: ["Poison"],
		abilities: {0: "Levitate", 1: "Neutralizing Gas", H: "Stench"},
	},
	wigglytuff: {
		inherit: true,
		// BST update
		baseStats: {hp: 148, atk: 70, def: 55, spa: 85, spd: 65, spe: 45},
		types: ["Normal", "Fairy"],
		// Abilities update
		abilities: {0: "Cute Charm", 1: "Competitive", H: "Soundproof"},
	},
	wobbuffet: {
		inherit: true,
		baseStats: {hp: 190, atk: 33, def: 58, spa: 33, spd: 58, spe: 33},
		types: ["Psychic"],
		abilities: {0: "Shadow Tag"},
	},
	wooperpaldea: {
		inherit: true,
		baseStats: {hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15},
		types: ["Poison", "Ground"],
		abilities: {0: "Poison Point", 1: "Water Absorb", H: "Unaware"},
	},
	wooper: {
		inherit: true,
		baseStats: {hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15},
		types: ["Water", "Ground"],
		abilities: {0: "Damp", 1: "Water Absorb", H: "Unaware"},
	},
	wynaut: {
		inherit: true,
		baseStats: {hp: 95, atk: 23, def: 48, spa: 23, spd: 48, spe: 23},
		types: ["Psychic"],
		abilities: {0: "Shadow Tag"},
	},
	wyrdeer: {
		inherit: true,
		baseStats: {hp: 103, atk: 105, def: 72, spa: 105, spd: 75, spe: 65},
		types: ["Normal", "Psychic"],
		abilities: {0: "Intimidate", 1: "Frisk", H: "Sap Sipper"},
	},
	xatu: {
		inherit: true,
		// BST update
		baseStats: {hp: 65, atk: 75, def: 70, spa: 100, spd: 70, spe: 100},
		types: ["Psychic", "Flying"],
		abilities: {0: "Synchronize", 1: "Early Bird", H: "Magic Bounce"},
	},
	yanma: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 45, spa: 75, spd: 45, spe: 95},
		types: ["Bug", "Flying"],
		abilities: {0: "Speed Boost", 1: "Compound Eyes", H: "Frisk"},
	},
	yanmega: {
		inherit: true,
		baseStats: {hp: 86, atk: 76, def: 86, spa: 116, spd: 56, spe: 95},
		// Types update
		types: ["Bug", "Dragon"],
		// Abilities update
		abilities: {0: "Speed Boost", 1: "Tinted Lens", H: "Levitate"},
	},
	zapdosgalar: {
		inherit: true,
		baseStats: {hp: 90, atk: 125, def: 90, spa: 85, spd: 90, spe: 100},
		types: ["Fighting", "Flying"],
		abilities: {0: "Defiant"},
	},
	zapdos: {
		inherit: true,
		baseStats: {hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100},
		types: ["Electric", "Flying"],
		// Abilities update
		abilities: {0: "Pressure", 1: "Drizzle", H: "Static"},
	},
	zubat: {
		inherit: true,
		baseStats: {hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55},
		types: ["Poison", "Flying"],
		// Abilities update
		abilities: {0: "Inner Focus", 1: "Anticipation", H: "Infiltrator"},
	},
	// COSMETIC FORMES
	// Handled in scripts.ts
	arbokkanto: {
		name: "Arbok-Kanto",
		isCosmeticForme: true,
	},
	arbokagatha: {
		name: "Arbok-Agatha",
		isCosmeticForme: true,
	},
	arbokariana: {
		name: "Arbok-Ariana",
		isCosmeticForme: true,
	},
	arbokkoga: {
		name: "Arbok-Koga",
		isCosmeticForme: true,
	},
	dudunsparcethreesegment: {
		name: "Dudunsparce-Three-Segment",
		isCosmeticForme: true,
	},
	gyaradosred: {
		name: "Gyarados-Red",
		isCosmeticForme: true,
	},
	magikarpbubbles: {
		name: "Magikarp-Bubbles",
		isCosmeticForme: true,
	},
	magikarpcalicoone: {
		name: "Magikarp-Calico-One",
		isCosmeticForme: true,
	},
	magikarpcalicotwo: {
		name: "Magikarp-Calico-Two",
		isCosmeticForme: true,
	},
	magikarpcalicothree: {
		name: "Magikarp-Calico-Three",
		isCosmeticForme: true,
	},
	magikarpdapples: {
		name: "Magikarp-Dapples",
		isCosmeticForme: true,
	},
	magikarpdiamonds: {
		name: "Magikarp-Diamonds",
		isCosmeticForme: true,
	},
	magikarpforeheadone: {
		name: "Magikarp-Forehead-One",
		isCosmeticForme: true,
	},
	magikarpforeheadtwo: {
		name: "Magikarp-Forehead-Two",
		isCosmeticForme: true,
	},
	magikarpmaskone: {
		name: "Magikarp-Mask-One",
		isCosmeticForme: true,
	},
	magikarpmasktwo: {
		name: "Magikarp-Mask-Two",
		isCosmeticForme: true,
	},
	magikarporca: {
		name: "Magikarp-Orca",
		isCosmeticForme: true,
	},
	magikarppatches: {
		name: "Magikarp-Patches",
		isCosmeticForme: true,
	},
	magikarpraindrop: {
		name: "Magikarp-Raindrop",
		isCosmeticForme: true,
	},
	magikarpsaucy: {
		name: "Magikarp-Saucy",
		isCosmeticForme: true,
	},
	magikarpskelly: {
		name: "Magikarp-Skelly",
		isCosmeticForme: true,
	},
	magikarpstripe: {
		name: "Magikarp-Stripe",
		isCosmeticForme: true,
	},
	magikarptiger: {
		name: "Magikarp-Tiger",
		isCosmeticForme: true,
	},
	magikarptwotone: {
		name: "Magikarp-Two-Tone",
		isCosmeticForme: true,
	},
	magikarpzebra: {
		name: "Magikarp-Zebra",
		isCosmeticForme: true,
	},
	pichuspikyeared: {
		name: "Pichu-Spiky-eared",
		isCosmeticForme: true,
	},
	pikachuchuchu: {
		name: "Pikachu-Chu-Chu",
		isCosmeticForme: true,
	},
	pikachufly: {
		name: "Pikachu-Fly",
		isCosmeticForme: true,
	},
	pikachupika: {
		name: "Pikachu-Pika",
		isCosmeticForme: true,
	},
	pikachuspark: {
		name: "Pikachu-Spark",
		isCosmeticForme: true,
	},
	pikachusurf: {
		name: "Pikachu-Surf",
		isCosmeticForme: true,
	},
};
