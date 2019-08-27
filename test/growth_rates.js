// var be_base_stats = {
//   Edelgard:[]
// }

// character specific stuff
// [growth rate][lost item][liked item]
var houses = {
  'Protagonist':['Byleth'],
  'Black Eagles':['Edelgard','Hubert','Dorothea','Ferdinand','Bernadetta','Caspar','Petra','Lindardt'],
  'Blue Lions':['Dimitri','Dedude','Felix','Mercedes','Ashe','Annette','Sylvain','Ingrid'],
  'Golden Deer':['Claude','Lorenz','Hilda','Raphael','Lysithea','Ignatz','Marianne','Leonie'],
  'Church of Seiros':['Manuela', 'Hanneman', 'Seteth', 'Flayn', 'Cyril'],
  'Knights of Seiros':['Catherine', 'Alois', 'Gilbert', 'Shamir'],
}

var base_stats = {
  'Byleth':[[45,45,35,45,45,45,35,30,45],[],[]],

  'Edelgard':[[40,55,45,45,40,30,35,35,60],["White Glove",	"Time-worn Quill Pen", "Eastern Porcelain"],['Carnation', 'Armored Bear Stuffy', 'Monarch Studies Book', 'Board Game']],
  'Hubert':[[35,30,55,45,45,35,25,40,35],["Hresvelg Treatise",	'Noxious Handkerchief',	'Folding Razor'],['Coffee Beans', 'Board Game', 'The History of Fodlan']],
  'Dorothea':[[40,20,40,45,40,35,15,35,40],['Silver Brooch', 'Songstress Poster','Lovely Comb'],['Book of Sheet Music', 'Gemstone Beads', 'Stylish Hair Clip']],
  'Ferdinand':[[50,45,20,40,50,40,35,20,40],['Maintenance Oil',	'Agricultural Survey',	'Bag of Tea Leaves'],['Riding Boots', 'Whetstone', 'Tea Leaves']],
  'Bernadetta':[[35,35,20,55,50,25,20,30,35],['Needle and Thread',	'Still-Life Picture',	'Hedgehog Case'],['Pitcher Plant', 'Armored Bear Stuffy', 'Book of Sheet Music', 'Watering Can', 'Landscape Painting', 'Dapper Handkerchief']],
  'Caspar':[[55,45,25,45,45,40,30,20,25],['Thunderbrand Replica',	'Tattered Overcoat',	'Grounding Charm'],['Training Weight', 'Whetstone	Hunting Dagger', 'Smoked Meat']],
  'Petra':[[45,40,25,50,60,45,30,15,35],['Exotic Flower','	Small Tanned Hide',	'Annotated Dictionary'],['Sunflower', 'Hunting Dagger', 'Exotic Spices	Smoked Meat']],
  'Lindardt':[[30,30,45,40,40,45,30,45,20],['The Saints Revealed',	'Feather Pillow',	'Animated Bait'],['Tasty Baked Treat', 'Book of Crest Designs', 'Fishing Float']],

  'Dimitri':[[55,60,20,50,50,25,40,20,55],['Dulled Longsword',	'Black Leather Gloves',	'Training Logbook'],['Training Weight', 'Whetstone', 'Riding Boots', 'Ceremonial Sword']],
  'Dedude':[[60,50,15,30,20,25,50,10,30],['Gold Earring', 'Gardening Sheers', 'Iron Cooking Pot'],['Exotic Spices', 'Floral Adornment', 'Watering Can']],
  'Felix':[[45,55,30,45,55,40,30,20,30],['Black Iron Spur', 'Sword Belt Fragment	Toothed Dagger'],['Smoked Meat', 'Hunting Dagger', 'Training Weight', 'Ceremonial Sword']],
  'Mercedes':[[30,25,50,45,40,30,25,45,40],['Book of Ghost Stories', 'Fruit Preserves', 'How to Bake Sweets'],['Lavender', 'Tasty Bake Treat', 'Goddess Statuette', 'Armored Bear Stuffy', 'Gemstone Beads']],
  'Ashe':[[35,35,25,55,50,40,20,35,25],['Moon Knight’s Tale', 'Evil-Repelling Amulet', 'Bundle of Herbs'],['Violet', 'Legends of Chivalry', 'Exotic Spices', 'Tasty Baked Treat', 'Ancient Coin']],
  'Annette':[[25,30,50,50,35,35,20,30,35],['Unfinished Score', 'School of Sorcery Book', 'Wax Diptych'],['Book of Sheet Music', 'Stylish Hair Clip', 'Arithmetic Textbook']],
  'Sylvain':[[55,45,30,35,50,35,40,25,40],['Unused Lipstick', 'Crumpled Love Letter', 'The History of Sreng'],['Landscape Painting', 'Dapper Handkerchief', 'Board Game']],
  'Ingrid':[[40,35,35,40,60,45,30,40,45],['Pegasus Horseshoes', 'Jousting Almanac', 'Curry Comb'],['Riding Boots', 'Smoked Meat', 'Legends of Chivalry']],

  'Claude':[[35,40,25,60,55,45,30,25,55],['Leather Bow Sheath', 'Mild Stomach Poison', 'Board Game Piece'],['Riding Boots', 'Book of Crest Designs', 'Exotic Spices', 'Board Game']],
  'Lorenz':[[55,40,40,45,40,25,30,40,35],['Artificial Flower', 'A Treatise on Etiquette', 'Silk Handkerchief'],['Rose', 'Floral Adornment', 'Tea Leaves', 'Book of Sheet Music']],
  'Hilda':[[50,45,25,30,50,35,35,20,50],['Handmade Hair Clip','Spotless Bandage', 'Used Bottle of Perfume'],['Anemone', 'Gemstone Beads', 'Dapper Handkerchief', 'Book of Sheet Music', 'Stylish Hair Clip', 'Armored Bear Stuffy']],
  'Raphael':[[65,50,15,35,15,35,45,10,25],['Wooden Button', 'Burlap Sack of Rocks', 'Big Spoon'],['Smoked Meat', 'Training Weight', 'Tasty Baked Treat', 'Blue Cheese']],
  'Lysithea':[[20,15,60,60,50,15,10,25,25],[	'Encyclopedia of Sweets', 'Princess Doll', 'New Bottle of Perfume'],['Lily', 'Armored Bear Stuffy', 'Arithmetic Textbook', 'Tasty Baked Treat', 'Book of Crest Designs']],
  'Ignatz':[[35,35,30,50,50,55,25,35,25],[	'Blue Stone', 'Art Book', 'Letter to the Goddess'],['Forget-me-nots', 'Ancient Coin', 'Landscape Painting', 'Goddess Statuette', 'Ceremonial Sword']],
  'Marianne':[[30,20,50,40,40,35,15,45,40],[	'Bag of Seeds', 'How to be Tidy', 'Confessional Letter'],['Lily of the Valley', 'Dapper Handkerchief', 'Floral Adornment', 'Armored Bear Stuffy']],
  'Leonie':[[40,40,20,55,60,40,40,15,40],[	'Hand Drawn Map', 'Crude Arrowheads', 'Fur Scarf'],['Hunting Dagger', 'Training Weight', 'Fishing Float']],

  // 'Rhea'
  'Manuela':[[50,35,35,40,60,35,30,25,50],['Wellness Herbs', 'Clean Dusting Cloth', 'Light Purple Veil'],['Book of Sheet Music',	'Gemstone Beads', 'Blue Cheese', 'Goddess Statuette']],
  'Hanneman':[[40,30,55,45,20,35,25,40,35],[	'Lens Cloth', 'Hammer and Chisel', 'Sketch of a Sigil'],['Arithmetic Textbook', 'Tea Leaves', 'Book of Crest Designs', 'Dapper Handkerchief']],
  'Seteth':[[50,45,35,50,50,25,30,25,45],['Unfinished Fable', 'Old Fishing Rod', 'Snapped Writing Quill'],['The History of Fodlan', 'Fishing Float', 'Dapper Handkerchief']],
  'Flayn':[[25,25,55,45,35,15,25,50,45],[	'Antique Clasp', 'Old Map of Enbarr', 'Dusty Book of Fables'],['Forget-me-nots', 'Tasty Baked Treat', 'Armored Bear Stuffy', 'Stylish Hair Clip', 'Dapper Handkerchief']],
  'Cyril':[[35,20,15,40,40,30,10,10,15],[	'Well-Used Hatchet', 'Portrait of Rhea', 'Old Cleaning Cloth'],['Baby’s Breath', 'Smoked Meat	Hunting Dagger', 'Watering Can']],

  //Jeralt
  'Catherine':[[50,50,25,40,55,30,30,20,25],[	'Weathered Cloak', 'Letter to Rhea', 'Badge of Graduation'],['Training Weight', 'Whetstone', 'Legends of Chivalry', 'Blue Cheese' ]],
  'Alois':[[45,45,20,35,40,30,40,20,40],[	'Introduction to Magic', 'Foreign Gold Coin', 'Mysterious Notebook'],['Sunflower', 'Ancient Coin', 'Fishing Float', 'Floral Adornment']],
  'Gilbert':[[55,45,20,45,30,15,45,10,35],[	'Noseless Puppet', 'Carving Hammer', 'Silver Necklace'],['Goddess Statuette', 'Fishing Float', 'Ceremonial Sword']],
  'Shamir':[[35,40,20,55,40,55,20,15,30],[	'Bundle of Dry Hemp', 'Centipede Picture', 'Animal Bone Dice'],['Ancient Coin', 'Exotic Spices', 'Coffee Beans', 'Hunting Dagger', 'Book of Sheet Music']],

}

var class_groups = {
  'Unique':['Noble','Commoner','Dancer'],
  'Beginner':['Myrmidon','Soldier','Fighter','Monk'],
  'Intermediate':['Lord','Mercenary','Thief','Armored Knight','Cavalier','Brigand','Archer','Brawler','Mage','Dark Mage','Priest','Pegasus Knight'],
  'Advanced':['Armored Lord','High Lord','Wyvern Master','Hero','Swordmaster','Assassin','Fortress Knight','Paladin','Wyvern Rider','Warrior','Sniper','Grappler','Warlock','Dark Bishop','Bishop'],
  'Master':['Enlightened One','Emperor','Great Lord','Barbarossa','Falcon Knight','Wyvern Lord','Mortal Savant','Great Knight','Bow Knight','Dark Knight','Holy Knight','War Master','Gremory'],
  }

// class specific stuff
// [growth rates][mastery skills][min grade for certification]
var class_rates = {
  'Noble':[[0,0,0,0,0,0,0,0,5],[['HP +4 Ability','Raises max health points by 4']],[]],
  'Commoner':[[0,0,0,0,0,0,0,0,0],[['HP +4 Ability','Raises max health points by 4']],[]],
  'Dancer':[[20, -5, 0,0,0,0,-5,-5,10],[["Special Dance Ability","When using Dance, grants +4 Dex / Spd / Lck to target ally."]],[]],
  // beginner
  'Myrmidon':[[10,0,0,0,5,0,0,-5,5],[["Speed +3 Ability","Raises unit's Speed by 3"],["Swap Combat Art","Unit swaps positions with an adjacent ally."]],["Sword D"]],
  'Soldier':[[10,0,0,5,0,0,0,-5,5],[["Defense +2 Ability","Raises unit's Defense by 2"],["Reposition Combat Art","Adjacent ally is moved to the opposite side of the unit."]],["Lance D"]],
  'Fighter':[[10,5,0,0,0,0,0,-5,5],[["Strength +2 Ability","Raises unit's Strength by 2."],["Shove Combat Art","Unit pushes an adjacent ally forward one space."]],["Axe D", "Bow D", "Brawl D"]],
  'Monk':[[5,0,0,0,0,0,0,5,5],[["Magic +2 Ability","	Raises unit's Magic by 2."],["Draw Back Combat Art","Unit moves one space away from an adjacent ally and pulls the ally along."]],["Reason D", "Faith D"]],
  // Intermediate
  'Lord':[[20,0,0,10,0,0,0,0,10],[["Resistance +2 Ability","Raises unit's Resistance by 2."], ["Subdue Combat Art","Sword Combat Art that leaves the enemy with 1 HP."]],["Sword D+","Authority C"]],
  'Mercenary':[[20,5,0,0,5,0,0,-5,5],[["Vantage Ability","When foe initiates combat, unit still attacks first if less than 50% HP."]],["Sword C"]],
  'Thief':[[20,0,0,10,10,0,0,0,5],[["Steal Ability","Allows unit to steal a non-weapon item from a foe with lower Speed."]],["Sword C"]],
  'Armored Knight':[[20,0,0,0,-10,0,5,0,5],[["Armored Blow Ability","If unit initiates combat, grants +6 Def during combat."]],["Axe C", "Hvy Armor D"]],
  'Cavalier':[[20,5,0,5,-10,0,5,0,5],[["Desperation Ability","If unit initiates combat with HP equal or less than 50%, unit's follow-up attack occurs before foe's counterattack."]],["Lance C","Riding D"]],
  'Brigand':[[30,10,0,0,0,0,0,-5,5],[["Death Blow Ability","If unit initiates combat, grants +6 Str during combat."]],["Axe C"]],
  'Archer':[[5,0,0,10,0,5,0,0,5],[["Hit +20 Ability","Increases Hit rate by 20."]],["Bow C"]],
  'Brawler':[[30,0,-10,10,10,0,0,-10,5],[["Unarmed Combat Ability","Allows unit to attack when no weapons are equipped."]],["Brawl C"]],
  'Mage':[[5,-5,10,5,0,0,-5,5,5],[["Fiendish Blow Ability","If unit initiates combat, grants +6 Mag during combat."]],["Reason C"]],
  'Dark Mage':[[5,-5,10,5,0,0,-5,5,0],[["Poison Strike Ability","If unit initiates combat, hit will cause foe lose up to 20% of max HP after combat."]],["Reason C"]],
  'Priest':[[5,-5,5,5,0,0,-5,10,10],[["Miracle Ability","Luck% Chance to survive lethal damage with 1 HP if HP is above 1"]],["Faith C"]],
  'Pegasus Knight':[[15,0,0,0,10,0,0,5,10],[["Darting Blow Ability","If unit initiates combat, grants +6 AS during combat."],["Triangle Attack Combat Art","Combat Art that deals +8 Mt, +30 Hit, +40 Crit, can only be activated when 3 allied units (including user) are adjacent to an enemy."]],["Lance C","Flying D"]],
  // advanced
  'Armored Lord':[[20,5,5,0,0,0,5,5,10],[["Pomp and Circumstance Ability","Raises unit's Luck and Charm by 4."]],[]],
  'High Lord':[[20,5,0,5,0,0,5,0,10],[["Pomp and Circumstance Ability","Raises unit's Luck and Charm by 4."]],[]],
  'Wyvern Master':[[20,10,0,0,5,0,5,0,10],[["Pomp and Circumstance Ability","Raises unit's Luck and Charm by 4."]],[]],
  'Hero':[[30,10,0,0,10,0,0,-5,5],[["Defiant Strength Ability","Grants +8 Str when HP is less than 25%."]],["Sword B","Axe C"]],
  'Swordmaster':[[25,10,0,0,20,0,0,-5,5],[["Astra Combat Art","A Sword Combat Art that attacks 5 times at 30% Mt. (Swordsmaster Exclusive)"]],["Sword A"]],
  'Assassin':[[20,0,0,20,20,0,0,0,0],[["Lethality Ability","(Dex x 0.25)% Chance to instantly kill a foe when damage is dealt."], ["Assassinate Combat Art","A Combat Art that grants +15 Hit and +15 Avo, and can kill enemies instantly. (Assassin Exclusive)"]],["Sword B","Bow C"]],
  'Fortress Knight':[[30,10,0,0,-10,0,15,0,5],[["Pavise Ability","Dex% chance to reduce sword / lance / axe / brawling damage by half."]],["Axe B","Hvy Armor B"]],
  'Paladin':[[30,10,0,5,-10,5,5,5,5],[["Aegis Ability","Dex% chance to reduce bow / magic damage by half."]],["Lance B","Riding B"]],
  'Wyvern Rider':[[30,10,-5,0,0,0,5,-5,5],[["Seal Defense Ability","If unit damages foe during combat, they suffer -6 Def for 1 turn."]],["Axe B","Flying C"]],
  'Warrior':[[40,15,-5,0,0,0,0,0,5],[["Wrath Ability","If foe initiates combat when unit's HP is 50% or less, grants +50 Crit."]],["Axe A"]],
  'Sniper':[[10,5,0,20,0,10,0,0,5],[["Hunter's Volley Combat Art","Hunter's Volley Combat Art"]],["Bow A"]],
  'Grappler':[[40,10,0,10,10,0,0,0,5],[["Tomebreaker Ability","Grants Hit / Avo +20 when using brawling against magic users."], ["Fierce Iron First Combat Art", "A Brawling Combat Art that grants +1 Mt, +10 Hit, +10 Crit and strikes 3 times. (Grappler Exclusive)"]],["Brawl A"]],
  'Warlock':[[10,0,10,0,0,0,-5,5,5],[["Bowbreaker Ability","	Grants Hit / Avo +20 when using magic against bow users."]],["Reason A"]],
  'Dark Bishop':[[10,0,10,0,0,0,-5,5,0],[["Lifetaker Ability","Unit recovers HP equal to 50% of damage dealt after defeating a foe."]],["Reason A"]],
  'Bishop':[[10,0,10,0,0,10,-5,5,10],[["Renewal Ability","Unit recovers up to 20% of max HP at the start of each turn."]],["Faith A"]],
  // master
  'Enlightened One':[[20,10,10,0,0,0,5,0,5],[["Sacred Power Ability","Adjacent allies deal 3 extra damage and take 3 less damage during combat."]],[]],
  'Emperor':[[30,10,10,0,0,0,5,5,10],[["Flickering Flower Combat Art","An attack that seals the enemy’s movement. (Exclusive to Emperor)"]],[]],
  'Great Lord':[[30,10,0,10,0,0,5,0,10],[["Paraselene Combat Art","A Lance Combat Art that grants +10 Mt, +10 Avo, and moves the unit back one space after attacking. (Exclusive to Great Lord)"]],[]],
  'Barbarossa':[[30,15,0,0,10,0,5,0,10],[["Wind God","A bow attack with exceptional range. (Exclusive to Barbarossa)"]],[]],
  'Falcon Knight':[[30,10,0,0,20,0,0,5,10],[["Defiant Avo Ability","Grants +30 Avo when HP is equal to or below 25%."]],["Sword C", "Lance A","Flying B+"]],
  'Wyvern Lord':[[30,15,-5,0,10,0,6,0,5],[["Defiant Crit Ability","Grants +50 Crit when HP is equal to or below 25%."]],["Lance C", "Axe A","Flying A"]],
  'Mortal Savant':[[20,10,10,0,-10,10,0,0,5],[["Warding Blow Ability","If unit initiates combat, grants +6 Res during combat."]],["Sword A","Reason B+"]],
  'Great Knight':[[30,10,0,0,-10,0,5,-5,5],[["Defiant Def Ability","Grants +6 Def when HP is equal to or below 25%"]],["Axe B+", "Hvy Armor A","Riding B+"]],
  'Bow Knight':[[10,0,0,0,-5,0,0,0,5],[["Defiant Spd Ability","Grants +6 Speed when HP is equal to or below 25%."]],["Lance C", "Bow A","Riding A"]],
  'Dark Knight':[[10,5,10,0,-5,0,5,10,5],[["Seal Resistance Ability","If unit damages foe during combat, they suffer -6 Res for 1 turn after combat."]],["Lance C","Reason B+","Riding A"]],
  'Holy Knight':[[10,0,10,0,-5,10,5,10,10],[["Defiant Res Ability","Grants +8 Res when HP is equal to or below 25%."]],["Lance C","Faith B+","Riding A"]],
  'War Master':[[40,15,0,0,10,0,0,0,5],[["Quick Riposte Ability","If foe initiate's combat while unit's HP is 50% or more, unit makes a guaranteed follow-up attack."],["War Master's Strike Combat Art","Axe Combat Art that grants +3 Mt, +30 Hit, and is effective against all enemy types."]],["Axe A","Brawl A"]],
  'Gremory':[[10,0,10,10,0,0,0,5,10],[["Defiant Mag Ability","Grants +8 Mag when HP is equal to or below 25%."]],["Reason A","Faith A"]],
}
