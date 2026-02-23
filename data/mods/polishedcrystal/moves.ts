export const Moves: {[k: string]: ModdedMoveData} = {
    blizzard: {
		inherit: true,
		desc: "Has a 10% chance to freeze the target. If the weather is Hail, this move does not check accuracy.",
		shortDesc: "10% chance to freeze foe(s). Can't miss in Hail.",
	},
	cut: {
        inherit: true,
        accuracy: 100,
        basePower: 60,
        type: "Steel",
    },
    fly: {
        inherit: true,
        accuracy: 100,
    },
    takedown: {
        inherit: true,
        accuracy: 100,
        pp: 15,
    },
    sing: {
        inherit: true,
        accuracy: 75,
    },
    supersonic: {
        inherit: true,
        accuracy: 65,
    },
    strength: {
        inherit: true,
        type: "Fighting",
    },
    firespin: {
        inherit: true,
        basePower: 40,
        accuracy: 90,
    },
    dig: {
        inherit: true,
        basePower: 90,
    },
    scald: {
        inherit: true,
        basePower: 70,
    },
    crabhammer: {
        inherit: true,
        accuracy: 95,
    },
    furyswipes: {
        inherit: true,
        basePower: 20,
        accuracy: 85,
    },
    octazooka: {
        inherit: true,
        basePower: 75,
        accuracy: 95,
    },
    painsplit: {
        inherit: true,
        type: "Ghost",
    },
    rapidspin: {
        inherit: true,
        pp: 20,
    },
    hiddenpower: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerbug: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerdark: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerdragon: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerelectric: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerfighting: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerfire: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerflying: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerghost: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowergrass: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerground: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerice: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerpoison: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerpsychic: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerrock: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowersteel: {
        inherit: true,
        basePower: 70,
    },
    hiddenpowerwater: {
        inherit: true,
        basePower: 70,
    },
    whirlpool: {
        inherit: true,
        basePower: 40,
        accuracy: 90,
    },
    moonlight: {
        inherit: true,
        type: "Normal",
    },
	// IMPORTED MOVES
	// Available moves with no changes
	teleport: {
		inherit: true,
	},
	dynamicpunch: {
		inherit: true,
	},
	curse: {
		inherit: true,
	},
	calmmind: {
		inherit: true,
	},
	toxic: {
		inherit: true,
	},
	sunnyday: {
		inherit: true,
	},
	lightscreen: {
		inherit: true,
	},
	protect: {
		inherit: true,
	},
	raindance: {
		inherit: true,
	},
	safeguard: {
		inherit: true,
	},
	irontail: {
		inherit: true,
	},
	return: {
		inherit: true,
	},
	psychic: {
		inherit: true,
	},
	shadowball: {
		inherit: true,
	},
	doubleteam: {
		inherit: true,
	},
	reflect: {
		inherit: true,
	},
	substitute: {
		inherit: true,
	},
	facade: {
		inherit: true,
	},
	rest: {
		inherit: true,
	},
	attract: {
		inherit: true,
	},
	thief: {
		inherit: true,
	},
	dazzlinggleam: {
		inherit: true,
	},
	energyball: {
		inherit: true,
	},
	drainpunch: {
		inherit: true,
	},
	flash: {
		inherit: true,
	},
	thunderwave: {
		inherit: true,
	},
	bodyslam: {
		inherit: true,
	},
	counter: {
		inherit: true,
	},
	doubleedge: {
		inherit: true,
	},
	dreameater: {
		inherit: true,
	},
	endure: {
		inherit: true,
	},
	firepunch: {
		inherit: true,
	},
	headbutt: {
		inherit: true,
	},
	icepunch: {
		inherit: true,
	},
	knockoff: {
		inherit: true,
	},
	seismictoss: {
		inherit: true,
	},
	skillswap: {
		inherit: true,
	},
	sleeptalk: {
		inherit: true,
	},
	swagger: {
		inherit: true,
	},
	thunderpunch: {
		inherit: true,
	},
	trick: {
		inherit: true,
	},
	trickroom: {
		inherit: true,
	},
	zapcannon: {
		inherit: true,
	},
	zenheadbutt: {
		inherit: true,
	},
	barrier: {
		inherit: true,
	},
	encore: {
		inherit: true,
	},
	dragonrage: {
		inherit: true,
	},
	dragonbreath: {
		inherit: true,
	},
	wingattack: {
		inherit: true,
	},
	bite: {
		inherit: true,
	},
	scaryface: {
		inherit: true,
	},
	roar: {
		inherit: true,
	},
	rockthrow: {
		inherit: true,
	},
	agility: {
		inherit: true,
	},
	ancientpower: {
		inherit: true,
	},
	crunch: {
		inherit: true,
	},
	bravebird: {
		inherit: true,
	},
	ironhead: {
		inherit: true,
	},
	hyperbeam: {
		inherit: true,
	},
	rockslide: {
		inherit: true,
	},
	gigaimpact: {
		inherit: true,
	},
	dragonclaw: {
		inherit: true,
	},
	honeclaws: {
		inherit: true,
	},
	bulldoze: {
		inherit: true,
	},
	earthquake: {
		inherit: true,
	},
	brickbreak: {
		inherit: true,
	},
	flamethrower: {
		inherit: true,
	},
	sandstorm: {
		inherit: true,
	},
	fireblast: {
		inherit: true,
	},
	swift: {
		inherit: true,
	},
	aerialace: {
		inherit: true,
	},
	steelwing: {
		inherit: true,
	},
	roost: {
		inherit: true,
	},
	dragonpulse: {
		inherit: true,
	},
	stoneedge: {
		inherit: true,
	},
	aquatail: {
		inherit: true,
	},
	earthpower: {
		inherit: true,
	},
	foresight: {
		inherit: true,
	},
	pursuit: {
		inherit: true,
	},
	scratch: {
		inherit: true,
	},
	leer: {
		inherit: true,
	},
	mudslap: {
		inherit: true,
	},
	astonish: {
		inherit: true,
	},
	batonpass: {
		inherit: true,
	},
	screech: {
		inherit: true,
	},
	doubleslap: {
		inherit: true,
	},
	acrobatics: {
		inherit: true,
	},
	nastyplot: {
		inherit: true,
	},
	solarbeam: {
		inherit: true,
	},
	thunderbolt: {
		inherit: true,
	},
	thunder: {
		inherit: true,
	},
	waterpulse: {
		inherit: true,
	},
	shadowclaw: {
		inherit: true,
	},
	uturn: {
		inherit: true,
	},
	defensecurl: {
		inherit: true,
	},
	seedbomb: {
		inherit: true,
	},
	triattack: {
		inherit: true,
	},
	confusion: {
		inherit: true,
	},
	disable: {
		inherit: true,
	},
	psybeam: {
		inherit: true,
	},
	nightshade: {
		inherit: true,
	},
	recover: {
		inherit: true,
	},
	confuseray: {
		inherit: true,
	},
	futuresight: {
		inherit: true,
	},
	focusblast: {
		inherit: true,
	},
	tackle: {
		inherit: true,
	},
	growl: {
		inherit: true,
	},
	thundershock: {
		inherit: true,
	},
	spark: {
		inherit: true,
	},
	healbell: {
		inherit: true,
	},
	powergem: {
		inherit: true,
	},
	outrage: {
		inherit: true,
	},
	flashcannon: {
		inherit: true,
	},
	wildcharge: {
		inherit: true,
	},
	voltswitch: {
		inherit: true,
	},
	rage: {
		inherit: true,
	},
	lowkick: {
		inherit: true,
	},
	focusenergy: {
		inherit: true,
	},
	karatechop: {
		inherit: true,
	},
	crosschop: {
		inherit: true,
	},
	reversal: {
		inherit: true,
	},
	feintattack: {
		inherit: true,
	},
	thrash: {
		inherit: true,
	},
	closecombat: {
		inherit: true,
	},
	gunkshot: {
		inherit: true,
	},
	bulkup: {
		inherit: true,
	},
	poisonjab: {
		inherit: true,
	},
	payday: {
		inherit: true,
	},
	nightslash: {
		inherit: true,
	},
	wrap: {
		inherit: true,
	},
	poisonsting: {
		inherit: true,
	},
	glare: {
		inherit: true,
	},
	acid: {
		inherit: true,
	},
	leechlife: {
		inherit: true,
	},
	haze: {
		inherit: true,
	},
	venoshock: {
		inherit: true,
	},
	gigadrain: {
		inherit: true,
	},
	sludgebomb: {
		inherit: true,
	},
	darkpulse: {
		inherit: true,
	},
	flamecharge: {
		inherit: true,
	},
	extremespeed: {
		inherit: true,
	},
	willowisp: {
		inherit: true,
	},
	hypervoice: {
		inherit: true,
	},
	doublekick: {
		inherit: true,
	},
	flareblitz: {
		inherit: true,
	},
	dragondance: {
		inherit: true,
	},
	charm: {
		inherit: true,
	},
	bugbite: {
		inherit: true,
	},
	stringshot: {
		inherit: true,
	},
	absorb: {
		inherit: true,
	},
	growth: {
		inherit: true,
	},
	suckerpunch: {
		inherit: true,
	},
	meanlook: {
		inherit: true,
	},
	pinmissile: {
		inherit: true,
	},
	xscissor: {
		inherit: true,
	},
	swordsdance: {
		inherit: true,
	},
	megahorn: {
		inherit: true,
	},
	sonicboom: {
		inherit: true,
	},
	toxicspikes: {
		inherit: true,
	},
	gust: {
		inherit: true,
	},
	hypnosis: {
		inherit: true,
	},
	extrasensory: {
		inherit: true,
	},
	airslash: {
		inherit: true,
	},
	hurricane: {
		inherit: true,
	},
	aeroblast: {
		inherit: true,
	},
	icywind: {
		inherit: true,
	},
	iceshard: {
		inherit: true,
	},
	icebeam: {
		inherit: true,
	},
	hail: {
		inherit: true,
	},
	avalanche: {
		inherit: true,
	},
	aquajet: {
		inherit: true,
	},
	rollout: {
		inherit: true,
	},
	bubblebeam: {
		inherit: true,
	},
	dizzypunch: {
		inherit: true,
	},
	playrough: {
		inherit: true,
	},
	hydropump: {
		inherit: true,
	},
	surf: {
		inherit: true,
	},
	waterfall: {
		inherit: true,
	},
	bellydrum: {
		inherit: true,
	},
	perishsong: {
		inherit: true,
	},
	amnesia: {
		inherit: true,
	},
	splash: {
		inherit: true,
	},
	watergun: {
		inherit: true,
	},
	razorleaf: {
		inherit: true,
	},
	poisonpowder: {
		inherit: true,
	},
	disarmingvoice: {
		inherit: true,
	},
	moonblast: {
		inherit: true,
	},
	leechseed: {
		inherit: true,
	},
	vinewhip: {
		inherit: true,
	},
	falseswipe: {
		inherit: true,
	},
	megadrain: {
		inherit: true,
	},
	stunspore: {
		inherit: true,
	},
	petaldance: {
		inherit: true,
	},
	sleeppowder: {
		inherit: true,
	},
	sweetkiss: {
		inherit: true,
	},
	powerwhip: {
		inherit: true,
	},
	aurasphere: {
		inherit: true,
	},
	mirrorcoat: {
		inherit: true,
	},
	shellsmash: {
		inherit: true,
	},
	gyroball: {
		inherit: true,
	},
	softboiled: {
		inherit: true,
	},
	milkdrink: {
		inherit: true,
	},
	metronome: {
		inherit: true,
	},
	minimize: {
		inherit: true,
	},
	explosion: {
		inherit: true,
	},
	bugbuzz: {
		inherit: true,
	},
	ember: {
		inherit: true,
	},
	smokescreen: {
		inherit: true,
	},
	metalclaw: {
		inherit: true,
	},
	slash: {
		inherit: true,
	},
	drainingkiss: {
		inherit: true,
	},
	aurorabeam: {
		inherit: true,
	},
	spikes: {
		inherit: true,
	},
	iciclespear: {
		inherit: true,
	},
	iciclecrash: {
		inherit: true,
	},
	rockblast: {
		inherit: true,
	},
	hex: {
		inherit: true,
	},
	superfang: {
		inherit: true,
	},
	quickattack: {
		inherit: true,
	},
	bonemerang: {
		inherit: true,
	},
	magnitude: {
		inherit: true,
	},
	peck: {
		inherit: true,
	},
	drillpeck: {
		inherit: true,
	},
	destinybond: {
		inherit: true,
	},
	lick: {
		inherit: true,
	},
	transform: {
		inherit: true,
	},
	hijumpkick: {
		inherit: true,
	},
	hornattack: {
		inherit: true,
	},
	stomp: {
		inherit: true,
	},
	sacredfire: {
		inherit: true,
	},
	machpunch: {
		inherit: true,
	},
	bulletpunch: {
		inherit: true,
	},
	psystrike: {
		inherit: true,
	},
	sketch: {
		inherit: true,
	},
	spore: {
		inherit: true,
	},
	conversion: {
		inherit: true,
	},
	hyperfang: {
		inherit: true,
	},
    // EXISTING GEN 9 MOVES
    // Makes all other moves unavailable
    accelerock: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	acidspray: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	acupressure: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	afteryou: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	aircutter: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	allyswitch: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	anchorshot: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	appleacid: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	aquacutter: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	aquaring: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	aquastep: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	armorcannon: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	armthrust: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	aromatherapy: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	aromaticmist: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	assist: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	assurance: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	astralbarrage: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	attackorder: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	aurawheel: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	auroraveil: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	autotomize: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	axekick: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	babydolleyes: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	baddybad: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	banefulbunker: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	barbbarrage: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	beakblast: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	beatup: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	behemothbash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	behemothblade: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	belch: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bestow: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bitterblade: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bittermalice: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	blastburn: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	blazekick: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	blazingtorque: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bleakwindstorm: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	block: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bloodmoon: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bloomdoom: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	blueflare: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bodypress: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	boltbeak: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	boltstrike: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bonerush: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	boomburst: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bounce: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bouncybubble: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	branchpoke: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	breakingswipe: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	brine: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	brutalswing: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bulletseed: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	burningjealousy: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	burnup: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	buzzybuzz: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	camouflage: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	captivate: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	catastropika: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	ceaselessedge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	celebrate: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	charge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	chargebeam: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	chatter: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	chillingwater: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	chillyreception: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	chipaway: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	chloroblast: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	circlethrow: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	clangingscales: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	clangoroussoul: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	clangoroussoulblaze: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	clearsmog: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	coaching: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	coil: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	collisioncourse: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	combattorque: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	comeuppance: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	confide: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	continentalcrush: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	conversion2: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	copycat: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	coreenforcer: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	corkscrewcrash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	corrosivegas: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	cosmicpower: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	cottonguard: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	cottonspore: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	courtchange: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	covet: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	craftyshield: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	crosspoison: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	crushclaw: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	crushgrip: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	darkestlariat: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	darkvoid: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	decorate: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	defendorder: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	defog: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	detect: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	devastatingdrake: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	diamondstorm: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	discharge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	direclaw: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	dive: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	doodle: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	doomdesire: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	doublehit: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	doubleironbash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	doubleshock: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	dracometeor: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	dragonascent: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	dragondarts: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	dragonenergy: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	dragonhammer: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	dragonrush: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	dragontail: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	drillrun: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	drumbeating: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	dualchop: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	dualwingbeat: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	dynamaxcannon: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	echoedvoice: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	eerieimpulse: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	eeriespell: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	electricterrain: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	electrify: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	electroball: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	electrodrift: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	electroweb: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	embargo: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	endeavor: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	entrainment: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	eruption: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	esperwing: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	eternabeam: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	expandingforce: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	extremeevoboost: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	fairylock: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	fairywind: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	fakeout: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	faketears: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	falsesurrender: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	featherdance: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	feint: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	fellstinger: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	fierydance: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	fierywrath: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	filletaway: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	finalgambit: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	firefang: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	firelash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	firepledge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	firstimpression: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	fishiousrend: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	flail: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	flameburst: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	flamewheel: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	flatter: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	fleurcannon: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	fling: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	flipturn: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	floatyfall: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	floralhealing: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	flowershield: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	flowertrick: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	flyingpress: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	focuspunch: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	followme: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	forcepalm: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	forestscurse: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	foulplay: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	freezedry: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	freezeshock: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	freezingglare: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	freezyfrost: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	frenzyplant: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	frostbreath: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	frustration: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	fusionbolt: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	fusionflare: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	gastroacid: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	geargrind: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	gearup: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	genesissupernova: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	geomancy: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	gigatonhammer: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	gigavolthavoc: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	glaciallance: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	glaciate: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	glaiverush: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	glitzyglow: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	grassknot: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	grasspledge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	grasswhistle: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	grassyglide: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	grassyterrain: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	gravapple: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	gravity: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	grudge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	guardianofalola: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	guardsplit: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	guardswap: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	hammerarm: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	happyhour: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	headcharge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	headlongrush: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	headsmash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	healblock: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	healingwish: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	healorder: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	healpulse: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	heartstamp: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	heartswap: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	heatcrash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	heatwave: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	heavyslam: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	helpinghand: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	highhorsepower: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	holdback: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	holdhands: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	hornleech: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	howl: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	hydrocannon: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	hydrosteam: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	hydrovortex: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	hyperdrill: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	hyperspacefury: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	hyperspacehole: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	iceball: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	iceburn: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	icefang: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	icehammer: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	icespinner: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	imprison: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	incinerate: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	infernalparade: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	inferno: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	infernooverdrive: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	infestation: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	ingrain: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	instruct: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	iondeluge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	irondefense: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	ivycudgel: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	jawlock: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	jetpunch: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	judgment: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	junglehealing: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	kingsshield: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	kowtowcleave: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	landswrath: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	laserfocus: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lashout: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lastresort: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lastrespects: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lavaplume: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	leafage: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	leafblade: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	leafstorm: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	leaftornado: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	letssnuggleforever: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lifedew: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lightofruin: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lightthatburnsthesky: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	liquidation: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lockon: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lowsweep: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	luckychant: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	luminacrash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lunarblessing: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lunardance: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lunge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lusterpurge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	magicalleaf: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	magicaltorque: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	magiccoat: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	magicpowder: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	magicroom: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	magmastorm: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	magnetbomb: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	magneticflux: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	magnetrise: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	makeitrain: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	maliciousmoonsault: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	matblock: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	matchagotcha: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mefirst: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	memento: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	menacingmoonrazemaelstrom: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	metalburst: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	metalsound: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	meteorassault: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	meteorbeam: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	meteormash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mindblown: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mindreader: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	miracleeye: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mirrorshot: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mistball: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mistyexplosion: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mistyterrain: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	moongeistbeam: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	morningsun: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mortalspin: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mountaingale: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mudbomb: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mudshot: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mudsport: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	muddywater: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	multiattack: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mysticalfire: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mysticalpower: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	naturalgift: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	naturepower: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	naturesmadness: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	needlearm: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	neverendingnightmare: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	nightdaze: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	nightmare: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	nobleroar: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	noretreat: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	noxioustorque: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	nuzzle: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	oblivionwing: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	obstruct: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	oceanicoperetta: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	octolock: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	odorsleuth: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	ominouswind: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	orderup: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	originpulse: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	overdrive: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	overheat: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	paleowave: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	paraboliccharge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	partingshot: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	payback: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	petalblizzard: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	phantomforce: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	photongeyser: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	pikapapow: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	plasmafists: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	playnice: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	pluck: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	poisonfang: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	poisontail: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	pollenpuff: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	poltergeist: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	populationbomb: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	pounce: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	powder: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	powdersnow: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	powershift: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	powersplit: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	powerswap: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	powertrick: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	powertrip: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	poweruppunch: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	precipiceblades: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	present: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	prismaticlaser: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	psyblade: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	psychup: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	psychicfangs: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	psychicterrain: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	psychoboost: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	psychocut: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	psychoshift: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	psyshieldbash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	psyshock: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	pulverizingpancake: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	punishment: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	purify: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	pyroball: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	quash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	quickguard: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	quiverdance: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	ragefist: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	ragepowder: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	ragingbull: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	ragingfury: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	razorshell: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	recycle: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	reflecttype: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	refresh: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	relicsong: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	retaliate: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	revelationdance: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	revenge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	revivalblessing: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	risingvoltage: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	roaroftime: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	rockclimb: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	rockpolish: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	rocksmash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	rocktomb: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	rockwrecker: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	roleplay: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	rototiller: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	round: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	ruination: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sacredsword: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	saltcure: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sandsearstorm: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sandtomb: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sappyseed: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	savagespinout: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	scaleshot: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	scorchingsands: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	searingshot: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	searingsunrazesmash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	secretpower: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	secretsword: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	seedflare: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	shadowbone: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	shadowforce: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	shadowpunch: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	shadowsneak: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	shadowstrike: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	shatteredpsyche: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	shedtail: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sheercold: {
		inherit: true,
		isNonstandard: "Unobtainable",
		ohko: 'Ice',
	},
	shellsidearm: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	shelltrap: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	shelter: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	shiftgear: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	shockwave: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	shoreup: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	signalbeam: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	silktrap: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	silverwind: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	simplebeam: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sinisterarrowraid: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sizzlyslide: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	skittersmack: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	skydrop: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	skyuppercut: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	slackoff: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sludgewave: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	smackdown: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	smartstrike: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	smellingsalts: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	snaptrap: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	snarl: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	snatch: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	snipeshot: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	snore: {
		inherit: true,
		isNonstandard: "Unobtainable",
		sleepUsable: true,
	},
	snowscape: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	soak: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	solarblade: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	soulstealing7starstrike: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	spacialrend: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sparklingaria: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sparklyswirl: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	spectralthief: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	speedswap: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	spicyextract: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	spiderweb: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	spikyshield: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	spinout: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	spiritbreak: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	spiritshackle: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	spitup: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	spite: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	splinteredstormshards: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	splishysplash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	spotlight: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	springtidestorm: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	stealthrock: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	steameruption: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	steamroller: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	steelbeam: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	steelroller: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	stickyweb: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	stockpile: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	stokedsparksurfer: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	stompingtantrum: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	stoneaxe: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	storedpower: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	stormthrow: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	strangesteam: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	strengthsap: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	strugglebug: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	stuffcheeks: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	subzeroslammer: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sunsteelstrike: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	superpower: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	supersonicskystrike: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	surgingstrikes: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	swallow: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sweetscent: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	switcheroo: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	synchronoise: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	synthesis: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	syrupbomb: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	tailglow: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	tailslap: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	tailwind: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	takeheart: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	tarshot: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	taunt: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	tearfullook: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	teatime: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	technoblast: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	tectonicrage: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	teeterdance: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	telekinesis: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	terablast: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	terrainpulse: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	thousandarrows: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	thousandwaves: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	throatchop: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	thundercage: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	thunderfang: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	thunderouskick: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	tickle: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	tidyup: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	topsyturvy: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	torchsong: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	torment: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	toxicthread: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	trailblaze: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	trickortreat: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	triplearrows: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	tripleaxel: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	tripledive: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	triplekick: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	tropkick: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	trumpcard: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	twinbeam: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	twinkletackle: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	twister: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	uproar: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	vacuumwave: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	vcreate: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	veeveevolley: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	venomdrench: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	victorydance: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	vitalthrow: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	volttackle: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	wakeupslap: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	waterpledge: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	watershuriken: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	watersport: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	waterspout: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	wavecrash: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	weatherball: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	wickedblow: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	wickedtorque: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	wideguard: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	wildboltstorm: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	wish: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	wonderroom: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	woodhammer: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	workup: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	worryseed: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	wringout: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	yawn: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	zingzap: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	zippyzap: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
};
