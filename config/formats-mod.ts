// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	// Pet Mods
	{
		section: "GSC Mods",
		column: 1,
	},
	{
		name: "[Gen 9] Polished Crystal OU",
		mod: 'polishedcrystal',
		ruleset: ['Standard'],
		teambuilderFormat: 'National Dex',
		banlist: ['Uber', 'Shadow Tag'],
	},
	{
		name: "[Gen 9] Polished Crystal Ubers",
		mod: 'polishedcrystal',
		ruleset: ['Standard'],
		teambuilderFormat: 'National Dex',
	},
	{
		name: "[Gen 9] Polished Crystal LC",
		mod: 'polishedcrystal',
		ruleset: ['Standard', 'Little Cup'],
		teambuilderFormat: 'National Dex',
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'NUBL', 'NU', 'PUBL', 'PU', 'ZUBL', 'ZU', 'NFE'],
	},
	{
		name: "[Gen 9] Polished Crystal AG",
		mod: 'polishedcrystal',
		ruleset: ['Obtainable', '+Past', 'Sketch Post-Gen 7 Moves', 'Terastal Clause', '!Obtainable Misc'],
		teambuilderFormat: 'National Dex',
		searchShow: false,
	},
	{
		section: "RBY Mods",
		column: 1,
	},
	{
		name: "[Gen 1] ColorPlus OU",
		mod: 'colorplus',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Stadium Tradebacks Cup",
		mod: 'gen1stadium',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 3', 'Min Level = 50', 'Max Level = 55', 'Max Total Level = 155',
			'Standard', 'Team Preview', 'Allow Tradeback'],
		banlist: ['Uber'],
	},
	// Default Metas
	// Please keep these here for testing / debugging
	{
		section: "Past Gens",
		column: 2,
	},
	{
		name: "[Gen 8] OU",
		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
		searchShow: false,
	},
	{
		name: "[Gen 7] OU",
		mod: 'gen7',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
		searchShow: false,
	},
	{
		name: "[Gen 6] OU",
		mod: 'gen6',
		ruleset: ['Standard', 'Evasion Abilities Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Soul Dew', 'Baton Pass', 'Swagger'],
		searchShow: false,
	},
	{
		name: "[Gen 5] OU",
		mod: 'gen5',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Gems Clause', 'Baton Pass Stat Clause'],
		banlist: ['Uber', 'Arena Trap', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Rush', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Soul Dew', 'Assist', 'Swagger'],
		searchShow: false,
	},
	{
		name: "[Gen 4] OU",
		mod: 'gen4',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Stat Trap Clause', 'Freeze Clause Mod', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Quick Claw', 'Soul Dew', 'Swagger'],
		searchShow: false,
	},
	{
		name: "[Gen 3] OU",
		mod: 'gen3',
		ruleset: ['Standard', 'One Boost Passer Clause', 'Accuracy Trap Clause', 'Freeze Clause Mod', 'Speed Pass Clause'],
		banlist: ['Uber', 'Smeargle + Ingrain', 'Sand Veil', 'Soundproof', 'Assist', 'Baton Pass + Block', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web', 'Swagger'],
		searchShow: false,
	},
	{
		name: "[Gen 2] OU",
		mod: 'gen2',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Mean Look + Baton Pass', 'Spider Web + Baton Pass'],
		searchShow: false,
	},
	{
		name: "[Gen 1] OU",
		mod: 'gen1',
		ruleset: ['Standard'],
		banlist: ['Uber'],
		searchShow: false,
	},
	{
		name: "[Gen 1] Custom Game",
		mod: 'gen1',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 2] Custom Game",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 3] Custom Game",
		mod: 'gen3',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
];
