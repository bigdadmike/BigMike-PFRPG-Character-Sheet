var bigmike = bigmike || {};

bigmike.diceType = "1d20";

bigmike.charClasses = [
    'barbarian',
    'bard',
    'cleric',
    'druid',
    'fighter',
    'monk',
    'oracle',
    'paladin',
    'ranger',
    'rogue',
    'sorcerer',
    'summoner',
    'wizard',
    'gunslinger',
    'ninja',
    'samurai',
    'magus',
    'alchemist',
    'cavalier',
    'inquisitor',
    'witch'
];

bigmike.attribs = [];
bigmike.attribs["level"] = { name: "Level", current: 1, max: 1 };
bigmike.attribs["casterlvl"] = { name: "Caster-Level", current: 0, max: 0 };
bigmike.attribs["str"] = { name: "Str-Mod", current: 0, max: 0 };
bigmike.attribs["dex"] = { name: "Dex-Mod", current: 0, max: 0 };
bigmike.attribs["con"] = { name: "Con-Mod", current: 0, max: 0 };
bigmike.attribs["int"] = { name: "Int-Mod", current: 0, max: 0 };
bigmike.attribs["wis"] = { name: "Wis-Mod", current: 0, max: 0 };
bigmike.attribs["cha"] = { name: "Cha-Mod", current: 0, max: 0 };
bigmike.attribs["line1"] = { name: "------------------", current: "", max: ""  };
bigmike.attribs["fort"] = { name: "Fortitude-Mod", current: 0, max: 0 };
bigmike.attribs["ref"] = { name: "Reflex-Mod", current: 0, max: 0 };
bigmike.attribs["will"] = { name: "Will-Mod", current: 0, max: 0 };
bigmike.attribs["hp"] = { name: "HP", current: 0, max: 0 };
bigmike.attribs["cmb"] = { name: "CMB", current: 0, max: 0 };
bigmike.attribs["cmd"] = { name: "CMD", current: 0, max: 0 };
bigmike.attribs["init"] = { name: "Initiative", current: 0, max: 0 };
bigmike.attribs["bab"] = { name: "BAB", current: 0, max: 0 };
bigmike.attribs["csb"] = { name: "Class-Skill-Bonus", current: 3, max: 3 };
bigmike.attribs["line2"] = { name: "------------------", current: "", max: ""  };
bigmike.attribs["ac"] = { name: "AC", current: 0, max: 0 };
bigmike.attribs["acflat"] = { name: "AC-Flat", current: 10, max: "" };
bigmike.attribs["actouch"] = { name: "AC-Touch", current: 10, max: "" };
bigmike.attribs["acpan"] = { name: "AC-Penalty", current: 0, max: 0 };
bigmike.attribs["spd"] = { name: "Speed", current: 30, max: 30 };
bigmike.attribs["line3"] = { name: "------------------", current: "", max: ""  };
bigmike.attribs["mainWpn"] = { name: "EquippedWeapon", current: "fist", max: "1H" };// max = 1H or 2H (for 1 or two handed attack)
bigmike.attribs["mainAtt"] = { name: "EquippedAttack", current: 0, max: "" };
bigmike.attribs["mainDmg"] = { name: "EquippedDamage", current: "1d3", max: "" };
bigmike.attribs["offHandWpn"] = { name: "OffHandWeapon", current: "fist", max: "OH" };  // max = OH (off hand)
bigmike.attribs["offHandAtt"] = { name: "OffHandAttack", current: 0, max: "" };
bigmike.attribs["offHandDmg"] = { name: "OffHandDamage", current: "1d3", max: "" };
bigmike.attribs["thrownWpn"] = { name: "ThrownWeapon", current: "stone", max: "10" };  // max = range
bigmike.attribs["thrownAtt"] = { name: "ThrownAttack", current: 0, max: "" };
bigmike.attribs["thrownDmg"] = { name: "ThrownDamage", current: "1d2", max: "" };
bigmike.attribs["rangedWpn"] = { name: "RangedWeapon", current: "rock", max: "" };  // max = range
bigmike.attribs["rangedAtt"] = { name: "RangedAttack", current: 0, max: "" };
bigmike.attribs["rangedDmg"] = { name: "RangedDamage", current: "1d2", max: "" };
bigmike.attribs["line4"] = { name: "------------------", current: "", max: ""  };
bigmike.attribs["acrobaticsRanks"] = { name: "Acrobatics-Ranks", current: 0, max: 0 };
bigmike.attribs["appraiseRanks"] = { name: "Appraise-Ranks", current: 0, max: 0 };
bigmike.attribs["bluffRanks"] = { name: "Bluff-Ranks", current: 0, max: 0 };
bigmike.attribs["climbRanks"] = { name: "Climb-Ranks", current: 0, max: 0 };
bigmike.attribs["craftRanks"] = { name: "Craft-Ranks", current: 0, max: 0 };
bigmike.attribs["diplomacyRanks"] = { name: "Diplomacy-Ranks", current: 0, max: 0 };
bigmike.attribs["disableDeviceRanks"] = { name: "Disable-Device-Ranks", current: 0, max: 0 };
bigmike.attribs["disguiseRanks"] = { name: "Disguise-Ranks", current: 0, max: 0 };
bigmike.attribs["escapeArtistRanks"] = { name: "Escape-Artist-Ranks", current: 0, max: 0 };
bigmike.attribs["flyRanks"] = { name: "Fly-Ranks", current: 0, max: 0 };
bigmike.attribs["handleAnimalRanks"] = { name: "Handle-Animal-Ranks", current: 0, max: 0 };
bigmike.attribs["healRanks"] = { name: "Heal-Ranks", current: 0, max: 0 };
bigmike.attribs["intimidateRanks"] = { name: "Intimidate-Ranks", current: 0, max: 0 };
bigmike.attribs["knowledgeArcanaRanks"] = { name: "Knowledge-Arcana-Ranks", current: 0, max: 0 };
bigmike.attribs["knowledgeDungeoneeringRanks"] = { name: "Knowledge-Dungeoneering-Ranks", current: 0, max: 0 };
bigmike.attribs["knowledgeEngineeringRanks"] = { name: "Knowledge-Engineering-Ranks", current: 0, max: 0 };
bigmike.attribs["knowledgeGeographyRanks"] = { name: "Knowledge-Geography-Ranks", current: 0, max: 0 };
bigmike.attribs["knowledgeHistoryRanks"] = { name: "Knowledge-History-Ranks", current: 0, max: 0 };
bigmike.attribs["knowledgeLocalRanks"] = { name: "Knowledge-Local-Ranks", current: 0, max: 0 };
bigmike.attribs["knowledgeNatureRanks"] = { name: "Knowledge-Nature-Ranks", current: 0, max: 0 };
bigmike.attribs["knowledgeNobilityRanks"] = { name: "Knowledge-Nobility-Ranks", current: 0, max: 0 };
bigmike.attribs["knowledgePlanesRanks"] = { name: "Knowledge-Planes-Ranks", current: 0, max: 0 };
bigmike.attribs["knowledgeReligionRanks"] = { name: "Knowledge-Religion-Ranks", current: 0, max: 0 };
bigmike.attribs["linguisticsRanks"] = { name: "Linguistics-Ranks", current: 0, max: 0 };
bigmike.attribs["perceptionRanks"] = { name: "Perception-Ranks", current: 0, max: 0 };
bigmike.attribs["performRanks"] = { name: "Perform-Ranks", current: 0, max: 0 };
bigmike.attribs["professionRanks"] = { name: "Profession-Ranks", current: 0, max: 0 };
bigmike.attribs["rideRanks"] = { name: "Ride-Ranks", current: 0, max: 0 };
bigmike.attribs["senseMotiveRanks"] = { name: "Sense-Motive-Ranks", current: 0, max: 0 };
bigmike.attribs["sleightOfHandRanks"] = { name: "Sleight-of-Hand-Ranks", current: 0, max: 0 };
bigmike.attribs["spellcraftRanks"] = { name: "Spellcraft-Ranks", current: 0, max: 0 };
bigmike.attribs["stealthRanks"] = { name: "Stealth-Ranks", current: 0, max: 0 };
bigmike.attribs["survivalRanks"] = { name: "Survival-Ranks", current: 0, max: 0 };
bigmike.attribs["swimRanks"] = { name: "Swim-Ranks", current: 0, max: 0 };
bigmike.attribs["useMagicDeviceRanks"] = { name: "Use-Magic-Device-Ranks", current: 0, max: 0 };
bigmike.attribs["line5"] = { name: "------------------", current: "", max: ""  };
bigmike.attribs["powerAttack"] = { name: "PowerAttack", current: 0, max: "" };
bigmike.attribs["expertise"] = { name: "CombatExpertise", current: 0, max: "" };
bigmike.attribs["rapidShot"] = { name: "RapidShot", current: 0, max: "" };
bigmike.attribs["his/her"] = { name: "his/her", current: "his", max: ""};
bigmike.attribs["he/she"] = { name: "he/she", current: "he", max: "" };
bigmike.attribs["line6"] = { name: "------------------", current: "", max: "" };

bigmike.skills = [
    { name: "Acrobatics", attribute: bigmike.attribs["dex"].name, rank: bigmike.attribs["acrobaticsRanks"].name, acpan: true, classSkill: ['barbarian', 'bard', 'cleric', 'monk', 'rogue','gunslinger','ninja'] },
    { name: "Appraise", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["appraiseRanks"].name, classSkill: ['bard', 'cleric', 'rogue', 'sorcerer', 'wizard','ninja','alchemist'] },
    { name: "Bluff", attribute: bigmike.attribs["cha"].name, rank: bigmike.attribs["bluffRanks"].name, classSkill: ['bard','rogue','sorcerer','gunslinger','ninja','samurai','cavalier','inquisitor'] },
    { name: "Climb", attribute: bigmike.attribs["str"].name, rank: bigmike.attribs["climbRanks"].name, acpan: true, classSkill: ['barbarian','bard','druid','fighter','monk','ranger','rogue','gunslinger','ninja','samurai','magus','cavalier','inquisitor'] },
    { name: "Craft", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["craftRanks"].name, classSkill: ['all'] },
    { name: "Diplomacy", attribute: bigmike.attribs["cha"].name, rank: bigmike.attribs["diplomacyRanks"].name, classSkill: ['bard','cleric','oracle','paladin','rogue','ninja','samurai','cavalier','inquisitor'] },
    { name: "Disable-Device", attribute: bigmike.attribs["dex"].name, rank: bigmike.attribs["disableDeviceRanks"].name, acpan: true, classSkill: ['rogue','ninja','alchemist'] },
    { name: "Disguise", attribute: bigmike.attribs["cha"].name, rank: bigmike.attribs["disguiseRanks"].name, classSkill: ['bard','rogue','ninja','inquisitor'] },
    { name: "Escape-Artist", attribute: bigmike.attribs["dex"].name, rank: bigmike.attribs["escapeArtistRanks"].name, acpan: true, classSkill: ['bard','monk','rogue','ninja'] },
    { name: "Fly", attribute: bigmike.attribs["dex"].name, rank: bigmike.attribs["flyRanks"].name, acpan: true, classSkill: ['druid','summoner','sorcerer','wizard','magus','alchemist','witch'] },
    { name: "Handle-Animal", attribute: bigmike.attribs["cha"].name, rank: bigmike.attribs["handleAnimalRanks"].name,  classSkill: ['barbarian','druid','fighter','paladin','ranger','summoner','gunslinger','samurai','cavalier'] },
    { name: "Heal", attribute: bigmike.attribs["wis"].name, rank: bigmike.attribs["healRanks"].name, classSkill: ['cleric','druid','oracle','paladin','ranger','alchemist','inquisitor','witch'] },
    { name: "Intimidate", attribute: bigmike.attribs["cha"].name, rank: bigmike.attribs["intimidateRanks"].name, classSkill: ['barbarian','bard','fighter','monk','ranger','rogue','sorcerer','gunslinger','ninja','samurai','magus','cavalier','inquisitor','witch'] },
    { name: "Knowledge-Arcana", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["knowledgeArcanaRanks"].name, classSkill: ['bard','cleric','sorcerer','summoner','wizard','alchemist','inquisitor','witch'] },
    { name: "Knowledge-Dungeoneering", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["knowledgeDungeoneeringRanks"].name, classSkill: ['bard','fighter','ranger','rogue','summoner','wizard','magus','inquisitor'] },
    { name: "Knowledge-Engineering", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["knowledgeEngineeringRanks"].name, classSkill: ['bard','fighter','summoner','wizard','gunslinger'] },
    { name: "Knowledge-Geography", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["knowledgeGeographyRanks"].name, classSkill: ['bard','druid','ranger','summoner','wizard'] },
    { name: "Knowledge-History", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["knowledgeHistoryRanks"].name, classSkill: ['bard','cleric','monk','oracle','summoner','wizard','witch'] },
    { name: "Knowledge-Local", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["knowledgeLocalRanks"].name, classSkill: ['bard','rogue','summoner','wizard','gunslinger','ninja'] },
    { name: "Knowledge-Nature", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["knowledgeNatureRanks"].name, classSkill: ['barbarian','bard','druid','ranger','summoner','wizard','alchemist','inquisitor'] },
    { name: "Knowledge-Nobility", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["knowledgeNobilityRanks"].name, classSkill: ['bard','cleric','paladin','summoner','wizard','ninja'] },
    { name: "Knowledge-Planes", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["knowledgePlanesRanks"].name, classSkill: ['bard','cleric','oracle','summoner','wizard','magus','inquisitor','witch'] },
    { name: "Knowledge-Religion", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["knowledgeReligionRanks"].name, classSkill: ['bard','cleric','monk','oracle','paladin','summoner','wizard','inquisitor'] },
    { name: "Linguistics", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["linguisticsRanks"].name, classSkill: ['bard','cleric','rogue','summoner','wizard','ninja'] },
    { name: "Perception", attribute: bigmike.attribs["wis"].name, rank: bigmike.attribs["perceptionRanks"].name, classSkill: ['barbarian','bard','druid','monk','ranger','rogue','gunslinger','ninja','alchemist','inquisitor'] },
    { name: "Perform", attribute: bigmike.attribs["cha"].name, rank: bigmike.attribs["performRanks"].name, classSkill: ['bard','monk','rogue','ninja'] },
    { name: "Profession", attribute: bigmike.attribs["cha"].name, rank: bigmike.attribs["professionRanks"].name, classSkill: ['bard','cleric','druid','fighter','monk','oracle','paladin','ranger','rogue','sorcerer','summoner','wizard','gunslinger','ninja','samurai','magus','alchemist','cavalier','inquisitor','witch'] },
    { name: "Ride", attribute: bigmike.attribs["dex"].name, rank: bigmike.attribs["rideRanks"].name, acpan: true, classSkill: ['barbarian','druid','fighter','monk','paladin','summoner','ranger','gunslinger','samurai','magus','cavalier','inquisitor'] },
    { name: "Sense-Motive", attribute: bigmike.attribs["wis"].name, rank: bigmike.attribs["senseMotiveRanks"].name, classSkill: ['bard','cleric','monk','oracle','paladin','rogue','ninja','samurai','cavalier','inquisitor'] },
    { name: "Sleight-of-Hand", attribute: bigmike.attribs["dex"].name, rank: bigmike.attribs["sleightOfHandRanks"].name, acpan: true, classSkill: ['bard','rogue','gunslinger','ninja','alchemist'] },
    { name: "Spellcraft", attribute: bigmike.attribs["int"].name, rank: bigmike.attribs["spellcraftRanks"].name, classSkill: ['bard','cleric','druid','oracle','paladin','ranger','sorcerer','summoner','wizard','magus','alchemist','inquisitor','witch'] },
    { name: "Stealth", attribute: bigmike.attribs["dex"].name, rank: bigmike.attribs["stealthRanks"].name, acpan: true, classSkill: ['bard','monk','ranger','rogue','ninja','inquisitor'] },
    { name: "Survival", attribute: bigmike.attribs["wis"].name, rank: bigmike.attribs["survivalRanks"].name, classSkill: ['barbarian','druid','fighter','ranger','gunslinger','alchemist','inquisitor'] },
    { name: "Swim", attribute: bigmike.attribs["str"].name, rank: bigmike.attribs["swimRanks"].name, acpan: true, classSkill: ['barbarian','druid','fighter','monk','ranger','rogue','gunslinger','ninja','samurai','magus','cavalier','inquisitor'] },
    { name: "Use-Magic-Device", attribute: bigmike.attribs["cha"].name, rank: bigmike.attribs["useMagicDeviceRanks"].name, classSkill: ['bard','rogue','sorcerer','summoner','ninja','magus','alchemist','witch'] }
    
];

bigmike.attack = [
	{ name: bigmike.attribs["mainWpn"].name + " (light)", macro: "/e attacks @{" + bigmike.attribs["his/her"].name + "} target with @{" + bigmike.attribs["his/her"].name + "} @{" + bigmike.attribs["mainWpn"].name + "} wielded in one hand, hitting AC ( [[" + bigmike.dicetype + " + @{" + bigmike.attribs["bab"].name + "} + @{" + bigmike.attribs["str"].name + "} + @{" + bigmike.attribs["mainAtt"].name + "} - @{" + bigmike.attribs["powerAttack"].name + "} - @{" + bigmike.attribs["expertise"].name + "} + ?{Additional Attack Bonus/Penalty?|0} ]] ) for [[@{" + bigmike.attribs["mainDmg"].name + "} + @{" + bigmike.attribs["str"].name + "} +?{Additional damage?|0} ]] damage." },
    { name: bigmike.attribs["mainWpn"].name + " (1Hand)", macro: "/e attacks @{" + bigmike.attribs["his/her"].name + "} target with @{" + bigmike.attribs["his/her"].name + "} @{" + bigmike.attribs["mainWpn"].name + "} wielded in one hand, hitting AC ( [[" + bigmike.dicetype + " + @{" + bigmike.attribs["bab"].name + "} + @{" + bigmike.attribs["str"].name + "} + @{" + bigmike.attribs["mainAtt"].name + "} - @{" + bigmike.attribs["powerAttack"].name + "} - @{" + bigmike.attribs["expertise"].name + "} + ?{Additional Attack Bonus/Penalty?|0} ]] ) for [[@{" + bigmike.attribs["mainDmg"].name + "} + @{" + bigmike.attribs["str"].name + "} + @{" + bigmike.attribs["powerAttack"].name + "} +?{Aditional damage?|0} ]] damage." },
    { name: bigmike.attribs["mainWpn"].name + " (2Hand)", macro: "/e attacks @{" + bigmike.attribs["his/her"].name + "} target with @{" + bigmike.attribs["his/her"].name + "} @{" + bigmike.attribs["mainWpn"].name + "} wielded in both hands, hitting AC ( [[" + bigmike.dicetype + " + @{" + bigmike.attribs["bab"].name + "} + @{" + bigmike.attribs["str"].name + "} + @{" + bigmike.attribs["mainAtt"].name + "} - @{" + bigmike.attribs["powerAttack"].name + "} - @{" + bigmike.attribs["expertise"].name + "} + ?{Additional Attack Bonus/Penalty?|0} ]] ) for [[@{" + bigmike.attribs["mainDmg"].name + "} + ( @{" + bigmike.attribs["str"].name + "} * 1.5 ) + ( @{" + bigmike.attribs["powerAttack"].name + "} * 2 ) +?{Additional damage?|0} ]] damage." },
    { name: bigmike.attribs["offHandWpn"].name + " (light)", macro: "/e attacks with @{" + bigmike.attribs["his/her"].name + "} off-hand @{" + bigmike.attribs["offHandWpn"].name + "}, hitting AC ( [[" + bigmike.dicetype + " + @{" + bigmike.attribs["bab"].name + "} + @{" + bigmike.attribs["str"].name + "} + @{" + bigmike.attribs["offHandAtt"].name + "} - @{" + bigmike.attribs["powerAttack"].name + "} - @{" + bigmike.attribs["expertise"].name + "} + ?{Additional Attack Bonus/Penalty?|0} ]] ) for [[@{" + bigmike.attribs["offHandDmg"].name + "} + ( @{" + bigmike.attribs["str"].name + "}*0.5 ) +?{Additional damage?|0} ]] damage." },
    { name: bigmike.attribs["offHandWpn"].name + " (1Hand)", macro: "/e attacks with @{" + bigmike.attribs["his/her"].name + "} off-hand @{" +  bigmike.attribs["offHandWpn"].name + "}, hitting AC ( [[" + bigmike.dicetype + " + @{" + bigmike.attribs["bab"].name + "} + @{" + bigmike.attribs["str"].name + "} + @{" + bigmike.attribs["offHandAtt"].name + "} - @{" + bigmike.attribs["powerAttack"].name + "} - @{" + bigmike.attribs["expertise"].name + "} + ?{Additional Attack Bonus/Penalty?|0} ]] ) for [[@{" + bigmike.attribs["offHandDmg"].name + "} + ( @{" + bigmike.attribs["str"].name + "}*0.5 ) + @{" + bigmike.attribs["powerAttack"].name + "} +?{Additional damage?|0} ]] damage." },
    { name: bigmike.attribs["thrownWpn"].name + " (Light)", macro: "/e throws @{" + bigmike.attribs["his/her"].name + "} @{" +  bigmike.attribs["thrownWpn"].name + "}, hitting AC ( [[ " + bigmike.dicetype + " + @{" + bigmike.attribs["bab"].name + "} + @{" + bigmike.attribs["dex"].name + "} + @{" + bigmike.attribs["thrownAtt"].name + "} - @{" + bigmike.attribs["rapidShot"].name + "} - @{" + bigmike.attribs["expertise"].name + "} + ?{Additional Attack Bonus/Penalty?|0} ]] ) for [[ @{" + bigmike.attribs["thrownDmg"].name + "} + @{" + bigmike.attribs["str"].name + "} + ?{Additional damage?|0} ]] damage." },
    { name: bigmike.attribs["thrownWpn"].name + " (1Hand)", macro: "/e throws @{" + bigmike.attribs["his/her"].name + "} @{" +  bigmike.attribs["thrownWpn"].name + "}, hitting AC ( [[ " + bigmike.dicetype + " + @{" + bigmike.attribs["bab"].name + "} + @{" + bigmike.attribs["dex"].name + "} + @{" + bigmike.attribs["thrownAtt"].name + "} - @{" + bigmike.attribs["rapidShot"].name + "} - @{" + bigmike.attribs["expertise"].name + "} - @{" + bigmike.attribs["powerAttack"].name + "} + ?{Additional Attack Bonus/Penalty?|0} ]] ) for [[ @{" + bigmike.attribs["thrownDmg"].name + "} + @{" + bigmike.attribs["str"].name + "} + ?{Additional damage?|0} ]] damage." },
    { name: bigmike.attribs["rangedWpn"].name, macro: "/e throws @{" + bigmike.attribs["his/her"].name + "} @{" +  bigmike.attribs["rangedWpn"].name + "}, hitting AC ( [[" + bigmike.dicetype + " + @{" + bigmike.attribs["bab"].name + "} + @{" + bigmike.attribs["dex"].name + "} + @{" + bigmike.attribs["rangedAtt"].name + "} - @{" + bigmike.attribs["rapidShot"].name + "} - @{" + bigmike.attribs["expertise"].name + "} + ?{Additional Attack Bonus/Penalty?|0}]] ) for [[@{" + bigmike.attribs["rangedDmg"].name + "} + ?{Additional damage?|0} ]] damage." }

];

bigmike.saves = [];
bigmike.saves["fort"] = { name: "Fortitude-Save", attribute: bigmike.attribs["con"].name, bonus: bigmike.attribs["fort"].name };
bigmike.saves["ref"] = { name: "Reflex-Save", attribute: bigmike.attribs["dex"].name, bonus: bigmike.attribs["ref"].name };
bigmike.saves["will"] = { name: "Will-Save", attribute: bigmike.attribs["wis"].name, bonus: bigmike.attribs["will"].name };
 
bigmike.processAttribs = function processAttribs(character) {
    for (var index in bigmike.attribs) {
        createObj("attribute", {
            name: bigmike.attribs[index].name,
            current: bigmike.attribs[index].current,
            max: bigmike.attribs[index].max,
            characterid: character.id
        });
    };
}

bigmike.getSkillBonus = function getSkillBonus(skill, charType) {
    log("Skill: " + JSON.stringify(skill));
    if (_.indexOf(skill.classSkill, charType) !== -1 
        || _.indexOf(skill.classSkill, 'all') !== -1) {
        return "+@{" + bigmike.attribs["csb"].name + "}";
    }
    return "";
}

bigmike.createAbilityAction = function createAbilityAction(skill, charType) {
    var abilityAction = skill.name;
    abilityAction += "\n/e ";
	abilityAction += "[["
    abilityAction += bigmike.diceType;
    abilityAction += "+@{" + skill.attribute + "}";
    abilityAction += "+@{" + skill.rank + "}";
    abilityAction += bigmike.getSkillBonus(skill, charType);
	if (skill.acpan) {
        abilityAction += "+@{" + bigmike.attribs["acpan"].name + "}";
    }
    abilityAction += "]]"
	return abilityAction;
}

bigmike.processAttack = function insertAttacks(character) {
    for (var index = 0; index < bigmike.attack.length; index++) {
        createObj("ability", {
            name: bigmike.attack[index].name,
            description: "",   
            action: bigmike.attack[index].macro,   
            characterid: character.id,
        });
    };
}

bigmike.createSaveAction = function createSaveAction(save) {
    var saveAction = save.name;
    saveAction += "\n/e ";
	saveAction += "[["
    saveAction += bigmike.diceType;
    saveAction += "+@{" + save.attribute + "}";
    saveAction += "+@{" + save.bonus + "}";
	saveAction += "]]"
    return saveAction;
}
 
bigmike.processSkills = function processSkills(character, charType) {
    for (var skill in bigmike.skills) {
        var abilityAction = bigmike.createAbilityAction(bigmike.skills[skill], charType);
        var abilities = findObjs({
            name: bigmike.skills[skill].name,
            type: "ability",
            description: "",   
            characterid: character.id
        }, {caseInsensitive: true});
        if (abilities.length > 0) {
            _.each(abilities, function(ability) {
                var userModifier = bigmike.retrieveUserModifiers(bigmike.skills[skill], ability.get("action"));
                log("Retrieved User-Modifier: " + userModifier);
                abilityAction += userModifier;
                ability.set("action", abilityAction);
            })
        } else {
            createObj("ability", {
                name: bigmike.skills[skill].name,
                description: "",   
                action: abilityAction,   
                characterid: character.id
            });
        }
    };
 
    var placeHolder = findObjs({
        name: "--------------------------",
        description: "",
        action: "",
        type: "ability",
        characterid: character.id
    }, {caseInsensitive: true});
    if (placeHolder.length < 1) {
        createObj("ability", {
            name: "--------------------------",
            description: "",
            action: "",
            characterid: character.id
        });
    }

    for (var save in bigmike.saves) {
        var saveAction = bigmike.createSaveAction(bigmike.saves[save]);
        var savingthrows = findObjs({
            name: bigmike.saves[save].name,
            description: "",
            type: "ability",
            characterid: character.id
        }, {caseInsensitive: true});
        if (savingthrows.length > 0) {
            _.each(savingthrows, function(save){
                save.set("action", saveAction);
            });
        } else {
            createObj("ability", {
                name: bigmike.saves[save].name,
                description: "",   
                action: saveAction,   
                characterid: character.id
            });
        }
    };
 
    var placeHolder = findObjs({
        name: "--------------------------",
        description: "",
        action: "",
        type: "ability",
        characterid: character.id
    }, {caseInsensitive: true});
    if (placeHolder.length < 1) {
        createObj("ability", {
            name: "--------------------------",
            description: "",
            action: "",
            characterid: character.id
        });
    }
}
 
bigmike.retrieveUserModifiers = function retrieveUserModifiers(currentSkill, actionCommand) {
    var modifier = actionCommand.replace(currentSkill.name+"\n/r " + bigmike.diceType + "+@{" + currentSkill.attribute + "}" + "+@{" + currentSkill.skill + "}", "");
    log("Modifier - Step 1: " + modifier);
    modifier = modifier.replace("+@{" + bigmike.attribs["csb"].name + "}", "");
    log("Modifier - Step 2: " + modifier);
    modifier = modifier.replace("+@{" + bigmike.attribs["acpan"].name + "}", "");
    log("Modifier - Step 3: " + modifier);
    return modifier;
}

bigmike.parseCommand = function parseCommand(msg) {
    if (msg.type == "api" && msg.who.indexOf("(GM)") == -1) {
        sendChat("System", "Only the GM is allowed to switch classes.");
        return;
    }
    if(msg.type == "api" && msg.content.indexOf("!skill ") !== -1) {
        var cmdParts = msg.content.replace("!skill ", "").split(" ");
        var charClass;
        
        _.each(cmdParts, function(part) {
            var indexOfClass = _.indexOf(bigmike.charClasses, part);
            if (indexOfClass > -1) {
                charClass = bigmike.charClasses[indexOfClass];
                cmdParts = _.without(cmdParts, part);
            }
        });

        if (typeof charClass === undefined) {
            sendChat('System', 'Usage: !skill charName charClass');
            sendChat('System', 'Value for charClass: ' + bigmike.charClasses);
            return;
        }
 
        var result = {};
        result.charName = cmdParts.join(" ");
        log("Charname: " + result.charName);
        result.charType = charClass;
        log("CharType: " + result.charType);
        return result;
    }
}
 
on("ready", function() {
    on("add:character", function(char) {
        bigmike.processAttribs(char);
        bigmike.processSkills(char, 'all');
		bigmike.processAttack (char)
    });

    on("chat:message", function(msg) {
        var chatCmd = bigmike.parseCommand(msg);
        if (typeof chatCmd === 'undefined') {
            return;
        }
 
        sendChat('System', 'Setting class ' + chatCmd.charType + ' for ' + chatCmd.charName);
        
        var characters = findObjs({
            _type: "character",
            archived: false,
            name: chatCmd.charName
        }, {caseInsensitive: true});
        _.each(characters, function(character) {
            log("Name: " + character.get("name"));
            log("Bio: " + character.get("bio"));
            log("GM-Notes: " + character.get("gmnotes"));
            log("Archived: " + character.get("archived"));
            log("In player journals: " + character.get("inplayerjournals"));
            log("Controlled By: " + character.get("controlledby"));
            bigmike.processSkills(character, chatCmd.charType);
        });
    });
});