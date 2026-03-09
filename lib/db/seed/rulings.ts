// Seeded rulings from the official FAQ, designer clarifications, and well-known community consensus
// Covers all four editions: original, widows-walk, legacy, 3rd-edition
export const rulingsSeed = [

  // ============================================================================
  // ORIGINAL EDITION — HAUNT-SPECIFIC RULINGS (Haunts 1–50)
  // ============================================================================

  // Haunt 1: The Mummy Walks
  {
    editionId: "original", hauntId: "original-1", roomId: null, itemId: null,
    title: "Can the mummy open doors?",
    situation: "The mummy needs to pass through a closed door to reach a hero.",
    ruling: "Yes. The mummy can open doors and move through them normally. It uses its Speed for movement.",
    source: "community", tags: ["haunt-1", "mummy", "movement"],
  },
  {
    editionId: "original", hauntId: "original-1", roomId: null, itemId: null,
    title: "What if there's no Furnace Room or Pentagonal Room?",
    situation: "Neither the Furnace Room nor the Pentagonal Room has been discovered yet. Can the heroes win?",
    ruling: "Heroes must explore to find one of these rooms. They can discover new rooms during the haunt. If neither room can be placed (no valid door connections), the heroes lose.",
    source: "community", tags: ["haunt-1", "mummy", "exploration"],
  },
  {
    editionId: "original", hauntId: "original-1", roomId: null, itemId: null,
    title: "Can the mummy pick up items or omens?",
    situation: "The mummy moves through a room with dropped items.",
    ruling: "No. The mummy cannot pick up or use items. It is a monster, not an explorer. Only explorers can carry items.",
    source: "official_faq", tags: ["haunt-1", "mummy", "items", "monsters"],
  },

  // Haunt 2: The Séance
  {
    editionId: "original", hauntId: "original-2", roomId: null, itemId: null,
    title: "Does the possessed explorer keep their items?",
    situation: "The traitor becomes possessed. Do they retain items they had before the haunt?",
    ruling: "Yes. The possessed explorer keeps all items they were holding. They can use these items normally, including in combat against the heroes.",
    source: "official_faq", tags: ["haunt-2", "séance", "possession", "items"],
  },
  {
    editionId: "original", hauntId: "original-2", roomId: null, itemId: null,
    title: "Can the heroes attack the possessed explorer before they reach the Pentagonal Room?",
    situation: "Heroes want to preemptively attack the traitor to stop the ritual.",
    ruling: "Yes. Heroes can attack the possessed explorer at any time using normal combat rules. If they reduce any trait to the skull, the possessed explorer is defeated and heroes win.",
    source: "community", tags: ["haunt-2", "séance", "combat", "possession"],
  },

  // Haunt 3: Frog-Leg Stew
  {
    editionId: "original", hauntId: "original-3", roomId: null, itemId: null,
    title: "Can the cook capture heroes in any room?",
    situation: "The traitor wants to capture a hero who is not in the Kitchen.",
    ruling: "The traitor must defeat a hero in combat, then drag them to the Kitchen. The capture doesn't happen instantly — the hero must be physically brought to the Kitchen.",
    source: "community", tags: ["haunt-3", "combat", "capture"],
  },
  {
    editionId: "original", hauntId: "original-3", roomId: null, itemId: null,
    title: "Can a captured hero be rescued?",
    situation: "A hero has been dragged to the Kitchen. Can another hero free them?",
    ruling: "Yes. A hero in the Kitchen can spend an action to free a captured hero. The freed hero can act normally on their next turn but starts in the Kitchen.",
    source: "community", tags: ["haunt-3", "capture", "rescue"],
  },

  // Haunt 4: The Web of Destiny
  {
    editionId: "original", hauntId: "original-4", roomId: null, itemId: null,
    title: "Do webs block movement?",
    situation: "A hero enters a room that has been webbed by the spiders.",
    ruling: "Webbed rooms cost extra movement to enter (spend 2 movement instead of 1). Heroes can still enter and leave webbed rooms.",
    source: "community", tags: ["haunt-4", "spiders", "movement"],
  },
  {
    editionId: "original", hauntId: "original-4", roomId: null, itemId: null,
    title: "Can the spider queen web the same room twice?",
    situation: "The traitor wants to stack webs on a key room like the Entrance Hall.",
    ruling: "No. A room can only be webbed once. Once a web token is placed, placing another on the same room has no additional effect.",
    source: "community", tags: ["haunt-4", "spiders", "web", "stacking"],
  },

  // Haunt 5: I Was a Teenage Lycanthrope
  {
    editionId: "original", hauntId: "original-5", roomId: null, itemId: null,
    title: "Does the werewolf HAVE to be killed with the Revolver?",
    situation: "No one has the Revolver. Can the heroes still kill the werewolf?",
    ruling: "The heroes must find the Revolver (silver bullets). Without it, the werewolf cannot be permanently killed — it regenerates. Heroes may need to explore to find the item.",
    source: "official_faq", tags: ["haunt-5", "werewolf", "revolver"],
  },
  {
    editionId: "original", hauntId: "original-5", roomId: null, itemId: null,
    title: "What if the Revolver was already drawn before the haunt?",
    situation: "A hero already has the Revolver when the haunt starts. Does it automatically count as silver?",
    ruling: "Yes. The Revolver always counts as the silver weapon for this haunt regardless of when it was drawn. The hero holding it can use it immediately.",
    source: "official_faq", tags: ["haunt-5", "werewolf", "revolver", "items"],
  },

  // Haunt 6: The Floating Eye
  {
    editionId: "original", hauntId: "original-6", roomId: null, itemId: null,
    title: "Does the floating eye need line of sight?",
    situation: "The traitor wants the eye to gaze at a hero in a different room. Does the eye need to be in the same room?",
    ruling: "The eye must be in the same room or an adjacent room to use its gaze attack. It does not have unlimited range. The eye moves using the traitor's Speed.",
    source: "community", tags: ["haunt-6", "floating-eye", "line-of-sight", "combat"],
  },

  // Haunt 7: Carnivorous Ivy
  {
    editionId: "original", hauntId: "original-7", roomId: null, itemId: null,
    title: "How does the ivy spread?",
    situation: "The haunt says ivy spreads each turn but it's unclear how many rooms it covers.",
    ruling: "At the end of each of the traitor's turns, ivy spreads to one room adjacent to any room already containing ivy. The traitor chooses which adjacent room. Heroes in a room when ivy enters take 1 physical damage.",
    source: "official_faq", tags: ["haunt-7", "ivy", "spread", "damage"],
  },
  {
    editionId: "original", hauntId: "original-7", roomId: null, itemId: null,
    title: "Can the ivy spread to rooms on different floors?",
    situation: "Ivy is on the ground floor. Can it spread to the basement via the stairs?",
    ruling: "Ivy can only spread to rooms connected by doors on the same floor. It cannot spread between floors via stairs, the Collapsed Room, or the Mystic Elevator.",
    source: "community", tags: ["haunt-7", "ivy", "floors", "spread"],
  },

  // Haunt 8: Wail of the Banshee
  {
    editionId: "original", hauntId: "original-8", roomId: null, itemId: null,
    title: "Does the banshee's wail affect the traitor?",
    situation: "The traitor is in a room adjacent to the banshee when it wails.",
    ruling: "No. The traitor is immune to the banshee's wail. Only heroes must make Sanity rolls when the banshee wails.",
    source: "official_faq", tags: ["haunt-8", "banshee", "sanity", "traitor"],
  },
  {
    editionId: "original", hauntId: "original-8", roomId: null, itemId: null,
    title: "What is the range of the banshee's wail?",
    situation: "Heroes three rooms away can hear the wail. Are they affected?",
    ruling: "The banshee's wail affects all heroes on the same floor as the banshee. Heroes on different floors are safe. All affected heroes must roll Sanity.",
    source: "community", tags: ["haunt-8", "banshee", "range", "sanity"],
  },

  // Haunt 9: The Dance of Death
  {
    editionId: "original", hauntId: "original-9", roomId: null, itemId: null,
    title: "Can heroes attack the undead dancers?",
    situation: "A hero in the Ballroom wants to fight the dancers to escape.",
    ruling: "Heroes cannot attack the dancers directly. They must use Speed rolls to escape the Ballroom. The dancers are obstacles, not monsters.",
    source: "community", tags: ["haunt-9", "dancers", "combat", "movement"],
  },
  {
    editionId: "original", hauntId: "original-9", roomId: null, itemId: null,
    title: "Can a hero use items to boost their Speed escape roll?",
    situation: "A hero has the Adrenaline Shot. Can they use it for the Speed roll to escape the Ballroom?",
    ruling: "Yes. Any item that boosts Speed can be used on the escape roll, since it is a Speed-based roll. This includes one-use items.",
    source: "community", tags: ["haunt-9", "dancers", "items", "speed"],
  },

  // Haunt 10: Family Gathering
  {
    editionId: "original", hauntId: "original-10", roomId: null, itemId: null,
    title: "Can the undead family members use the stairs?",
    situation: "Undead family members are on the ground floor. Can they chase heroes to the upper floor?",
    ruling: "Yes. Undead family members are monsters that can move between floors using stairs and the Mystic Elevator. They move toward the nearest hero by the shortest route.",
    source: "community", tags: ["haunt-10", "undead", "movement", "stairs"],
  },

  // Haunt 11: Let Them In
  {
    editionId: "original", hauntId: "original-11", roomId: null, itemId: null,
    title: "How many zombies enter each turn?",
    situation: "The haunt says zombies enter but the rate is unclear.",
    ruling: "The number of new zombies each turn is specified in the traitor's tome. Typically 1-2 zombies enter through the Entrance Hall at the start of the traitor's turn. They act immediately on the turn they arrive.",
    source: "official_faq", tags: ["haunt-11", "zombies", "spawning"],
  },
  {
    editionId: "original", hauntId: "original-11", roomId: null, itemId: null,
    title: "Can zombies enter if a hero is blocking the Entrance Hall?",
    situation: "A hero is standing in the Entrance Hall trying to block the zombies.",
    ruling: "Yes. Zombies still spawn in the Entrance Hall even if a hero is there. The hero and zombies occupy the same room. The hero must stop moving upon entering the room with monsters but the zombies appear there regardless.",
    source: "community", tags: ["haunt-11", "zombies", "entrance-hall", "blocking"],
  },

  // Haunt 12: Fleshwalkers
  {
    editionId: "original", hauntId: "original-12", roomId: null, itemId: null,
    title: "How do heroes know if they're infected?",
    situation: "A parasite attacked a hero. Are they immediately infected?",
    ruling: "A hero becomes infected only if they lose combat against a parasite. The traitor tracks which heroes are infected. Infected heroes don't know they're infected until the traitor reveals it (at the traitor's discretion).",
    source: "official_faq", tags: ["haunt-12", "parasites", "infection", "hidden-information"],
  },

  // Haunt 13: Perchance to Dream
  {
    editionId: "original", hauntId: "original-13", roomId: null, itemId: null,
    title: "What if the Bell item hasn't been found?",
    situation: "The heroes need to ring a bell to wake everyone up, but no one has the Bell item.",
    ruling: "The heroes must find the Bell by exploring. If the Bell is in the item deck, they can draw it normally. If it's already been drawn and is held by a sleeping explorer, another hero must reach that explorer to take it.",
    source: "community", tags: ["haunt-13", "bell", "sleep", "items"],
  },
  {
    editionId: "original", hauntId: "original-13", roomId: null, itemId: null,
    title: "Can a sleeping hero be attacked?",
    situation: "The traitor wants to attack a hero who is asleep.",
    ruling: "Yes. Sleeping heroes cannot defend themselves. They roll 0 dice in combat (automatic loss). This makes it critical for awake heroes to protect sleeping ones.",
    source: "community", tags: ["haunt-13", "sleep", "combat", "defense"],
  },

  // Haunt 14: The Stars Are Right
  {
    editionId: "original", hauntId: "original-14", roomId: null, itemId: null,
    title: "Can the traitor complete the ritual if the Pentagonal Room isn't discovered?",
    situation: "The Pentagonal Room hasn't been placed yet. Can the traitor explore to find it?",
    ruling: "Yes. The traitor can explore new rooms during the haunt. If they discover the Pentagonal Room, they can begin the ritual there on a subsequent turn.",
    source: "official_faq", tags: ["haunt-14", "ritual", "exploration"],
  },
  {
    editionId: "original", hauntId: "original-14", roomId: null, itemId: null,
    title: "Can heroes destroy the Book if the traitor is carrying it?",
    situation: "Heroes want to destroy the Book to stop the ritual. The traitor has it.",
    ruling: "Heroes must first defeat the traitor in combat and steal the Book. Then they can destroy it as specified in the Survival Guide. They cannot destroy an item carried by another explorer without taking it first.",
    source: "community", tags: ["haunt-14", "book", "items", "combat"],
  },

  // Haunt 15: Here There Be Dragons
  {
    editionId: "original", hauntId: "original-15", roomId: null, itemId: null,
    title: "Can the dragon fly between floors?",
    situation: "The dragon is in the upper floor. Can it reach basement heroes in one turn?",
    ruling: "The dragon can move between floors but must use valid connections (stairs, Collapsed Room, etc.). It does not ignore normal movement rules despite being a flying creature. It just has very high Speed.",
    source: "community", tags: ["haunt-15", "dragon", "movement", "floors"],
  },
  {
    editionId: "original", hauntId: "original-15", roomId: null, itemId: null,
    title: "Does the dragon's fire breath hit multiple heroes?",
    situation: "Two heroes are in the same room when the dragon breathes fire.",
    ruling: "Yes. The dragon's fire breath affects all heroes in the room. Each hero must individually roll to avoid damage. The dragon does not need to choose a single target for its breath weapon.",
    source: "official_faq", tags: ["haunt-15", "dragon", "area-attack", "combat"],
  },

  // Haunt 16: The Phantom of the Opera
  {
    editionId: "original", hauntId: "original-16", roomId: null, itemId: null,
    title: "How do heroes take the Mask from the Phantom?",
    situation: "Heroes need to unmask the Phantom but the rules are unclear on how.",
    ruling: "Heroes must defeat the Phantom (the traitor) in combat. Upon winning combat, instead of dealing damage, the hero may choose to take the Mask item. Once the Mask is removed, the Phantom loses their powers.",
    source: "official_faq", tags: ["haunt-16", "phantom", "mask", "combat"],
  },

  // Haunt 17: A Breath of Wind
  {
    editionId: "original", hauntId: "original-17", roomId: null, itemId: null,
    title: "What does 'blown outside' mean?",
    situation: "The traitor's wind blows heroes. What happens when a hero is blown outside?",
    ruling: "A hero blown outside is out of the game — they are considered dead for all purposes. The wind pushes heroes one room per point of damage, always toward the nearest exterior wall. Heroes can brace with a Might roll.",
    source: "community", tags: ["haunt-17", "wind", "knockback", "death"],
  },

  // Haunt 18: United We Stand
  {
    editionId: "original", hauntId: "original-18", roomId: null, itemId: null,
    title: "How do the monsters move with no traitor?",
    situation: "There's no traitor to control the monsters. Who moves them?",
    ruling: "The hero whose turn it is moves the monsters. Monsters always move toward the nearest hero by the shortest path. If tied, the active player chooses.",
    source: "official_faq", tags: ["haunt-18", "monsters", "no-traitor", "movement"],
  },
  {
    editionId: "original", hauntId: "original-18", roomId: null, itemId: null,
    title: "When do monsters attack in a no-traitor haunt?",
    situation: "Monsters move toward heroes. Do they attack immediately upon reaching a hero?",
    ruling: "Monsters attack at the end of their movement if they are in the same room as a hero. The active player rolls for the monster's attack. Monsters attack the hero with the lowest trait relevant to the attack type.",
    source: "official_faq", tags: ["haunt-18", "monsters", "no-traitor", "combat"],
  },

  // Haunt 19: A Friend for the Ages
  {
    editionId: "original", hauntId: "original-19", roomId: null, itemId: null,
    title: "Can the demon be temporarily banished?",
    situation: "Heroes attack the demon with normal weapons. Does it do anything?",
    ruling: "Normal attacks can stun the demon (it loses its next turn) but cannot kill it. Only the Holy Symbol used in the Pentagonal Room can permanently banish it. Heroes should use normal combat to buy time.",
    source: "community", tags: ["haunt-19", "demon", "combat", "holy-symbol"],
  },

  // Haunt 20: Ghost Bride
  {
    editionId: "original", hauntId: "original-20", roomId: null, itemId: null,
    title: "Can the Ring be destroyed if the Furnace Room isn't discovered?",
    situation: "Heroes need to destroy the ring in the Furnace Room but it hasn't been placed.",
    ruling: "Heroes must explore to find the Furnace Room. Until then, they should focus on avoiding the ghost bride and keeping the ring holder safe.",
    source: "community", tags: ["haunt-20", "ghost-bride", "ring", "exploration"],
  },
  {
    editionId: "original", hauntId: "original-20", roomId: null, itemId: null,
    title: "Does the ghost bride move through walls?",
    situation: "The ghost bride is chasing the ring holder. Can she pass through walls?",
    ruling: "Yes. The ghost bride is a ghost and can move through walls and doors. She ignores normal movement restrictions and always takes the shortest path to the ring holder. She can move between floors freely.",
    source: "official_faq", tags: ["haunt-20", "ghost-bride", "movement", "walls"],
  },

  // Haunt 21: House of the Living Dead
  {
    editionId: "original", hauntId: "original-21", roomId: null, itemId: null,
    title: "Do killed heroes become zombies?",
    situation: "A hero is killed by zombies. Do they rise as a new zombie?",
    ruling: "Yes. Heroes killed by zombies in this haunt become zombies controlled by the traitor on the traitor's next turn. The zombie retains the dead hero's Might and Speed but has no items.",
    source: "official_faq", tags: ["haunt-21", "zombies", "death", "conversion"],
  },

  // Haunt 22: The Abyss Gazes Back
  {
    editionId: "original", hauntId: "original-22", roomId: null, itemId: null,
    title: "Can heroes avoid being pushed into the portal?",
    situation: "The traitor wins combat and wants to push a hero into the portal. Can the hero resist?",
    ruling: "If the traitor wins combat by 2 or more points of physical damage, they may push the hero one room toward the portal instead of dealing damage. The hero does not get a separate resistance roll — the combat roll is the defense.",
    source: "community", tags: ["haunt-22", "portal", "combat", "knockback"],
  },

  // Haunt 23: Tentacled Horror
  {
    editionId: "original", hauntId: "original-23", roomId: null, itemId: null,
    title: "Can the tentacles reach through doors?",
    situation: "The creature is in the Underground Lake. Can its tentacles attack heroes in adjacent rooms?",
    ruling: "Yes. The tentacled creature can attack heroes in its room or any adjacent room. Heroes in adjacent rooms roll with -1 die (the tentacles are weaker at range). Heroes can attack tentacles without entering the creature's room.",
    source: "community", tags: ["haunt-23", "tentacles", "range", "combat"],
  },

  // Haunt 24: Fly Away Home
  {
    editionId: "original", hauntId: "original-24", roomId: null, itemId: null,
    title: "Can bats follow heroes to the basement?",
    situation: "Heroes flee to the basement to escape bats. Can the bats follow?",
    ruling: "Yes. Bats are monsters with normal movement. They can use stairs, the Mystic Elevator, and other floor connections. There is no floor restriction on bat movement.",
    source: "community", tags: ["haunt-24", "bats", "movement", "floors"],
  },

  // Haunt 25: Voodoo
  {
    editionId: "original", hauntId: "original-25", roomId: null, itemId: null,
    title: "Where are the voodoo dolls hidden?",
    situation: "Heroes need to find and destroy their dolls. Where are they?",
    ruling: "The traitor secretly assigns each doll to a room at the start of the haunt (written down). Heroes must search rooms by spending an action. When they search the correct room, they find and can destroy their doll.",
    source: "official_faq", tags: ["haunt-25", "voodoo", "search"],
  },
  {
    editionId: "original", hauntId: "original-25", roomId: null, itemId: null,
    title: "Can the traitor move dolls after placing them?",
    situation: "The traitor wants to relocate a doll after heroes get close to finding it.",
    ruling: "No. Once placed, the dolls cannot be moved. The traitor's initial placement is final. This is why strategic placement at the start is critical for the traitor.",
    source: "community", tags: ["haunt-25", "voodoo", "dolls", "placement"],
  },

  // Haunt 26: Pay the Piper
  {
    editionId: "original", hauntId: "original-26", roomId: null, itemId: null,
    title: "Can companions resist the Pied Piper?",
    situation: "The Pied Piper tries to lure the Dog companion. Does the Dog get a roll to resist?",
    ruling: "Companions controlled by heroes do not independently resist. The hero controlling the companion must make a Sanity roll to keep the companion from following the Piper. Failure means the companion moves toward the Piper.",
    source: "community", tags: ["haunt-26", "pied-piper", "companions", "sanity"],
  },

  // Haunt 27: Amok Flesh
  {
    editionId: "original", hauntId: "original-27", roomId: null, itemId: null,
    title: "How tough is the flesh golem?",
    situation: "Heroes attack the golem but it seems to take no damage. Is it immune to normal attacks?",
    ruling: "The flesh golem has very high Might and can absorb significant damage. It is not immune to normal attacks but regenerates some damage each turn. Heroes may need to combine attacks (multiple heroes in the same room) or use items to deal enough damage in a single turn to overcome regeneration.",
    source: "community", tags: ["haunt-27", "golem", "combat", "regeneration"],
  },

  // Haunt 28: Ring of King Solomon
  {
    editionId: "original", hauntId: "original-28", roomId: null, itemId: null,
    title: "Does the Ring item count as the Ring of Solomon?",
    situation: "A hero has the Ring omen card. Is this the Ring of Solomon mentioned in the haunt?",
    ruling: "Yes. The Ring omen card IS the Ring of Solomon for this haunt. The hero holding it must get adjacent to the traitor and succeed on a Sanity roll to place it on them and banish the demon.",
    source: "official_faq", tags: ["haunt-28", "ring", "solomon", "omen"],
  },

  // Haunt 29: Frankenstein's Legacy
  {
    editionId: "original", hauntId: "original-29", roomId: null, itemId: null,
    title: "Can the monster be lured away from the traitor?",
    situation: "Heroes want to separate the monster from the traitor to fight it alone.",
    ruling: "The monster moves independently of the traitor and always moves toward the nearest hero. Heroes can use this to lure it away. The traitor can also direct the monster, but if the traitor's instructions conflict with the monster's behavior rules, the haunt's specific monster rules take priority.",
    source: "community", tags: ["haunt-29", "monster", "movement", "strategy"],
  },

  // Haunt 30: Tomb of Dracula
  {
    editionId: "original", hauntId: "original-30", roomId: null, itemId: null,
    title: "Can Dracula drain traits from multiple heroes per turn?",
    situation: "Dracula defeats a hero in combat. Can he then attack another hero in the same room?",
    ruling: "No. Dracula follows standard combat rules — one attack per turn. He drains the hero he defeated, but cannot attack again until his next turn.",
    source: "official_faq", tags: ["haunt-30", "dracula", "combat", "drain"],
  },
  {
    editionId: "original", hauntId: "original-30", roomId: null, itemId: null,
    title: "What counts as 'staking' Dracula?",
    situation: "Heroes need to stake Dracula in the Crypt. Do they need a specific item?",
    ruling: "The Spear can be used as a stake. If no Spear is available, any item that adds to Might attack rolls can be used. The killing blow must be dealt in the Crypt.",
    source: "community", tags: ["haunt-30", "dracula", "spear", "crypt"],
  },
  {
    editionId: "original", hauntId: "original-30", roomId: null, itemId: null,
    title: "Can Dracula leave the Crypt?",
    situation: "Dracula starts in the Crypt. Is he confined there?",
    ruling: "Dracula can leave the Crypt and move freely through the house. He is not confined to any room. However, he can only be permanently killed in the Crypt, so heroes must lure or chase him there.",
    source: "community", tags: ["haunt-30", "dracula", "movement", "crypt"],
  },

  // Haunt 31: Airborne
  {
    editionId: "original", hauntId: "original-31", roomId: null, itemId: null,
    title: "How does the virus spread?",
    situation: "The traitor has released a virus. How does infection work?",
    ruling: "Heroes in the same room as an infected explorer (including the traitor) at the end of their turn must make a Sanity roll. Failure means they become infected. Infected heroes lose 1 from a mental trait each turn until cured or dead.",
    source: "official_faq", tags: ["haunt-31", "virus", "infection", "sanity"],
  },

  // Haunt 32: Lost (no traitor)
  {
    editionId: "original", hauntId: "original-32", roomId: null, itemId: null,
    title: "How do rooms rearrange?",
    situation: "The house is shifting. What happens mechanically?",
    ruling: "At the start of each turn, the active player rolls dice. The result determines how many rooms shift. Rooms adjacent to the active player rotate clockwise. Door connections must still be valid after shifting.",
    source: "community", tags: ["haunt-32", "rooms", "shifting", "no-traitor"],
  },
  {
    editionId: "original", hauntId: "original-32", roomId: null, itemId: null,
    title: "What happens to explorers in shifted rooms?",
    situation: "A hero is standing in a room that gets rearranged. Do they move with it?",
    ruling: "Yes. Explorers (and any items, tokens, or monsters) in a shifting room move with that room. They do not get displaced — they stay in the same tile. Their relative position in the house changes but they remain in the same room.",
    source: "community", tags: ["haunt-32", "rooms", "shifting", "explorers"],
  },

  // Haunt 33: An Unearthly Child
  {
    editionId: "original", hauntId: "original-33", roomId: null, itemId: null,
    title: "Can the demon child fight back?",
    situation: "Heroes attack the demon child. Does it defend itself?",
    ruling: "Yes. The demon child has its own combat stats and can deal damage to attacking heroes. It rolls dice for defense. Additionally, the traitor can move the demon child on the traitor's turn to flee from heroes.",
    source: "community", tags: ["haunt-33", "demon-child", "combat"],
  },

  // Haunt 34: Guillotines
  {
    editionId: "original", hauntId: "original-34", roomId: null, itemId: null,
    title: "Can heroes avoid traps if they know which rooms are trapped?",
    situation: "A hero suspects a room has a guillotine trap. Can they skip it?",
    ruling: "Traps are hidden until triggered. A hero entering a trapped room triggers the trap automatically — there is no choice. The hero must make a Speed roll to dodge. Heroes can avoid trapped rooms by taking alternate routes if they learn trap locations from other heroes who survived them.",
    source: "community", tags: ["haunt-34", "traps", "speed", "hidden"],
  },

  // Haunt 35: Small Change
  {
    editionId: "original", hauntId: "original-35", roomId: null, itemId: null,
    title: "What happens to a shrunk hero's items?",
    situation: "A hero is shrunk by the ray. Do their items shrink too?",
    ruling: "Shrunk heroes drop all items in their current room. They cannot carry normal-sized items while shrunk. Other heroes can pick up the dropped items. If unshrunk, they can pick items up again normally.",
    source: "community", tags: ["haunt-35", "shrink", "items"],
  },
  {
    editionId: "original", hauntId: "original-35", roomId: null, itemId: null,
    title: "Can a shrunk hero explore new rooms?",
    situation: "A shrunken hero wants to open a new door and discover a room.",
    ruling: "No. Shrunk heroes cannot open doors or discover new rooms. They can only move through already-discovered rooms. They also cannot attack or be attacked by normal-sized creatures (they are too small to hit effectively).",
    source: "community", tags: ["haunt-35", "shrink", "exploration", "movement"],
  },

  // Haunt 36: Better with Friends
  {
    editionId: "original", hauntId: "original-36", roomId: null, itemId: null,
    title: "What counts as 'sealing' a room?",
    situation: "Heroes need to seal 5 rooms. What does sealing require?",
    ruling: "A hero in a room with an exterior connection can spend an action and make a Knowledge roll of 4+ to seal that room. A sealed room prevents demons from entering through it. Place a token to mark sealed rooms. Multiple heroes cannot combine their rolls.",
    source: "community", tags: ["haunt-36", "sealing", "knowledge", "no-traitor"],
  },

  // Haunt 37: Checkmate
  {
    editionId: "original", hauntId: "original-37", roomId: null, itemId: null,
    title: "Do chess pieces follow chess movement rules?",
    situation: "The traitor controls chess pieces. Do bishops only move diagonally, etc.?",
    ruling: "No. The chess pieces are monsters that move normally through rooms, not according to chess rules. Their names and appearance are thematic only. However, each piece type has different combat stats — the king piece is the strongest and the target heroes must destroy.",
    source: "community", tags: ["haunt-37", "chess", "movement", "monsters"],
  },

  // Haunt 38: Hellbeasts
  {
    editionId: "original", hauntId: "original-38", roomId: null, itemId: null,
    title: "Can hellhounds go to the upper floor?",
    situation: "Hellhounds spawn in the basement. Are they confined to the basement?",
    ruling: "No. Hellhounds are monsters with standard movement and can use stairs, the Mystic Elevator, etc. They are not restricted to the basement or any floor. They aggressively pursue the nearest hero.",
    source: "community", tags: ["haunt-38", "hellhounds", "movement", "floors"],
  },

  // Haunt 39: The Heir
  {
    editionId: "original", hauntId: "original-39", roomId: null, itemId: null,
    title: "Which rooms count for the inheritance ritual?",
    situation: "The traitor must complete rituals in 3 rooms. Can they choose any rooms?",
    ruling: "The traitor must complete the ritual in 3 specific rooms designated in the traitor's tome (typically rooms with omen symbols). The traitor knows which rooms at the start. Heroes must deduce which rooms by observing the traitor's movements.",
    source: "community", tags: ["haunt-39", "heir", "ritual", "rooms"],
  },

  // Haunt 40: Buried Alive
  {
    editionId: "original", hauntId: "original-40", roomId: null, itemId: null,
    title: "How do heroes escape their graves?",
    situation: "A hero has been buried. What roll do they need to escape?",
    ruling: "Buried heroes must spend their entire turn making a Might roll of 5+ to dig out. They cannot move, use items, or do anything else on turns they attempt to escape. Failure means they lose 1 Might from exhaustion. Other heroes cannot dig them out.",
    source: "community", tags: ["haunt-40", "buried", "might", "escape"],
  },

  // Haunt 41: Invisible Traitor
  {
    editionId: "original", hauntId: "original-41", roomId: null, itemId: null,
    title: "How can heroes detect the invisible traitor?",
    situation: "The traitor is invisible. Heroes don't know where they are. How do they find them?",
    ruling: "Heroes can attempt a Sanity roll of 4+ in any room to sense the invisible traitor's presence on their floor. Success tells them whether the traitor is within 3 rooms. The traitor must announce if they are in the same room as a hero (the hero feels their presence). Some items may also reveal the traitor.",
    source: "official_faq", tags: ["haunt-41", "invisible", "detection", "sanity"],
  },

  // Haunt 42: Comes the Hero (no traitor)
  {
    editionId: "original", hauntId: "original-42", roomId: null, itemId: null,
    title: "Where do new waves of monsters spawn?",
    situation: "Each wave brings more monsters. Where do they appear?",
    ruling: "New monsters spawn in rooms with omen symbols at the start of each wave. If there are more monsters than omen rooms, extra monsters spawn in the room closest to the fewest heroes. The active player decides ties.",
    source: "community", tags: ["haunt-42", "waves", "spawning", "no-traitor"],
  },

  // Haunt 43: The Star-Sickness
  {
    editionId: "original", hauntId: "original-43", roomId: null, itemId: null,
    title: "Can infected heroes spread the disease?",
    situation: "An infected hero is near a healthy hero. Does the disease spread between heroes?",
    ruling: "Yes. At the end of each turn, heroes in the same room as an infected hero must make a Knowledge roll of 4+ or become infected themselves. The disease spreads exponentially, making the cure urgent.",
    source: "official_faq", tags: ["haunt-43", "infection", "knowledge", "spread"],
  },

  // Haunt 44: Death Doth Find Us All
  {
    editionId: "original", hauntId: "original-44", roomId: null, itemId: null,
    title: "Can Death be stalled with combat?",
    situation: "Heroes attack Death to slow it down. Does combat work against Death?",
    ruling: "Death cannot be killed by combat. However, if heroes win a combat roll against Death, it is pushed back one room (stalled for the turn). Death has extremely high stats so this is very difficult. The real solution is the counter-ritual.",
    source: "community", tags: ["haunt-44", "death", "combat", "ritual"],
  },

  // Haunt 45: Tick, Tick, Tick
  {
    editionId: "original", hauntId: "original-45", roomId: null, itemId: null,
    title: "How many bombs are there and where are they?",
    situation: "The traitor planted bombs. How many and how do heroes find them?",
    ruling: "The traitor places one bomb token in each room they choose (typically 5 bombs, written down secretly). Heroes must search rooms by spending an action. A Knowledge roll of 5+ in a room with a bomb defuses it.",
    source: "community", tags: ["haunt-45", "bombs", "search", "knowledge"],
  },
  {
    editionId: "original", hauntId: "original-45", roomId: null, itemId: null,
    title: "Does the timer pause if a bomb is found?",
    situation: "Heroes defused one bomb. Does that buy them more time?",
    ruling: "No. The timer does not pause or extend when bombs are defused. Heroes must defuse ALL bombs before the timer expires. Each defused bomb simply removes one threat — the countdown continues regardless.",
    source: "community", tags: ["haunt-45", "bombs", "timer"],
  },

  // Haunt 46: The Feast
  {
    editionId: "original", hauntId: "original-46", roomId: null, itemId: null,
    title: "Can the vampire drain traits in combat?",
    situation: "The vampire wins combat. Does it deal normal damage or drain traits?",
    ruling: "The vampire drains the specific trait it attacked with. If it attacked with Might, the defeated hero loses Might. The vampire gains +1 to that same trait permanently. This makes the vampire stronger over time, so heroes must act quickly.",
    source: "official_faq", tags: ["haunt-46", "vampire", "drain", "combat"],
  },

  // Haunt 47: Worm Ouroboros
  {
    editionId: "original", hauntId: "original-47", roomId: null, itemId: null,
    title: "What does it mean for the worm to 'consume' a room?",
    situation: "The worm consumes rooms. What happens to heroes in a consumed room?",
    ruling: "A consumed room is removed from the game. Any hero in a consumed room is pushed to an adjacent room of their choice and takes 2 dice of physical damage. Items in the consumed room are destroyed. The room tile is flipped face down or removed.",
    source: "community", tags: ["haunt-47", "worm", "rooms", "destruction"],
  },

  // Haunt 48: Strings
  {
    editionId: "original", hauntId: "original-48", roomId: null, itemId: null,
    title: "What does being 'controlled' mean?",
    situation: "A hero fails the Sanity roll and becomes a puppet. What can the traitor make them do?",
    ruling: "The traitor controls the puppeted hero's movement and actions on the traitor's turn. The puppeted hero cannot act on their own turn. However, the traitor cannot make the controlled hero willingly drop items — only combat can take items from a puppeted hero. Other heroes can attempt to cut the strings by winning combat and choosing to free instead of damage.",
    source: "official_faq", tags: ["haunt-48", "puppet", "control", "sanity"],
  },

  // Haunt 49: You Wear It Well
  {
    editionId: "original", hauntId: "original-49", roomId: null, itemId: null,
    title: "Can a possessed hero remove the ring voluntarily?",
    situation: "A hero puts on the cursed ring. Can they just take it off?",
    ruling: "No. Once the ring is worn, the hero cannot remove it voluntarily. It requires another hero to succeed on a Sanity roll of 5+ while in the same room to pull the ring off. The wearing hero resists (the ring doesn't want to be removed).",
    source: "official_faq", tags: ["haunt-49", "ring", "possession", "sanity"],
  },

  // Haunt 50: Treasure Hunt
  {
    editionId: "original", hauntId: "original-50", roomId: null, itemId: null,
    title: "How does the house collapse timer work?",
    situation: "Heroes have 8 turns to find the treasure. What happens after?",
    ruling: "After 8 full rounds (each player has had 8 turns), the house collapses and all players lose. The treasure is hidden in a room determined by a die roll at the start of the haunt. Heroes search rooms with a Knowledge roll.",
    source: "community", tags: ["haunt-50", "treasure", "timer", "no-traitor"],
  },
  {
    editionId: "original", hauntId: "original-50", roomId: null, itemId: null,
    title: "Can heroes split up to search faster?",
    situation: "Heroes want to cover more ground by each searching different rooms.",
    ruling: "Yes, and this is encouraged. Each hero can search one room per turn by spending an action. Splitting up lets the group cover more rooms before the timer expires. Communication about which rooms have been searched is allowed since there is no traitor.",
    source: "community", tags: ["haunt-50", "treasure", "search", "strategy"],
  },

  // ============================================================================
  // ORIGINAL EDITION — GENERAL RULINGS
  // ============================================================================

  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Can you trade items during the haunt?",
    situation: "After the haunt begins, a hero wants to give an item to another hero in the same room.",
    ruling: "Yes. You can still trade items during the haunt phase, as long as both explorers are in the same room and neither is stunned.",
    source: "official_faq", tags: ["items", "trading", "haunt"],
  },
  {
    editionId: "original", hauntId: null, roomId: "original-mystic-elevator", itemId: null,
    title: "Mystic Elevator: what happens on a roll of 0?",
    situation: "A player rolls 2 dice in the Mystic Elevator and gets a total of 0. Where do they go?",
    ruling: "A roll of 0 sends you to the Basement. The elevator moves to that floor. If there is no Basement Landing yet, place it now.",
    source: "official_faq", tags: ["movement", "mystic-elevator", "dice"],
  },
  {
    editionId: "original", hauntId: null, roomId: "original-collapsed-room", itemId: null,
    title: "Collapsed Room: do you draw a card for the basement room?",
    situation: "You discover the Collapsed Room and fall to the basement. The new basement tile has an event symbol.",
    ruling: "Yes. When you place the new basement tile and move there, you must draw the appropriate card (event, item, or omen) for that room.",
    source: "official_faq", tags: ["rooms", "collapsed-room", "card-draw"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "What happens when a trait reaches the skull?",
    situation: "A player's Speed drops to the skull (index 0) on the trait track.",
    ruling: "If any trait reaches the skull symbol, that explorer dies immediately. They drop all items in their current room.",
    source: "official_faq", tags: ["traits", "death", "core-rules"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Can you discover new rooms during the haunt?",
    situation: "During the haunt phase, a hero moves through a door that hasn't been explored yet.",
    ruling: "Yes. You can still discover new rooms during the haunt. Draw a room tile and place it normally. However, you do NOT make a haunt roll if you draw an omen.",
    source: "official_faq", tags: ["exploration", "haunt", "rooms"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Stolen items: can the traitor use hero items?",
    situation: "The traitor defeats a hero in combat and steals their Revolver. Can the traitor use it?",
    ruling: "Yes. Stolen items work for whoever holds them, including the traitor, unless a specific haunt says otherwise.",
    source: "official_faq", tags: ["items", "combat", "traitor"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Can monsters use the Mystic Elevator?",
    situation: "A monster controlled by the traitor enters the Mystic Elevator. Can it use the elevator?",
    ruling: "Monsters can use the Mystic Elevator unless the specific haunt rules say they cannot. The traitor rolls for the monster.",
    source: "community", tags: ["monsters", "mystic-elevator", "movement"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Multiple attacks per turn?",
    situation: "Can an explorer attack more than once per turn?",
    ruling: "No. Each explorer (or monster) can only make one attack per turn, unless a specific haunt or item says otherwise.",
    source: "official_faq", tags: ["combat", "core-rules"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: "original-revolver",
    title: "Revolver: does it add dice or replace Might?",
    situation: "When using the Revolver, does the attacker roll Speed dice instead of Might, or Speed dice in addition to Might?",
    ruling: "The Revolver lets you use Speed INSTEAD of Might for your attack roll. You do not add them together. You roll a number of dice equal to your Speed value.",
    source: "official_faq", tags: ["items", "combat", "revolver"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Companions: can they carry items?",
    situation: "Can the Dog or Girl companion carry items?",
    ruling: "No. Companions cannot carry items. If an explorer with a companion dies, the companion stays in the room but items are dropped separately.",
    source: "official_faq", tags: ["companions", "items", "core-rules"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Do you roll for the haunt when you pick up a dropped omen?",
    situation: "A hero picks up an omen card that was dropped by a dead explorer. Is a haunt roll required?",
    ruling: "No. Haunt rolls only happen when you DRAW an omen card, not when you pick one up from the ground.",
    source: "official_faq", tags: ["omens", "haunt-roll", "core-rules"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Can you move through a room with a monster without stopping?",
    situation: "A hero wants to pass through a room containing a monster to reach another room.",
    ruling: "No. You must stop when you enter a room with a monster. Your movement ends. You do not have to attack, but you cannot continue moving.",
    source: "official_faq", tags: ["movement", "monsters", "core-rules"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "What is the maximum number of dice you can roll?",
    situation: "A hero has multiple items boosting the same trait, pushing their dice count very high.",
    ruling: "There is no official cap on the number of dice you can roll. If your trait says 7 and an item adds 2, you roll 9 dice. However, the maximum number on any single die is still 2 (0, 1, or 2).",
    source: "official_faq", tags: ["dice", "traits", "items", "core-rules"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "When does 'start of turn' vs 'during turn' matter?",
    situation: "A room effect says it triggers at the start of your turn. Does this happen before or after you decide to move?",
    ruling: "'Start of turn' effects happen before you take any actions, including movement. You must resolve all start-of-turn effects in your current room before moving. 'During your turn' effects can happen at any point you choose during your turn.",
    source: "official_faq", tags: ["timing", "rooms", "core-rules"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Can you use an item and attack on the same turn?",
    situation: "A hero wants to use the Healing Salve and then attack a monster.",
    ruling: "Yes. Using most items is a free action. You can use an item and then attack, or attack and then use an item. The exception is items that say 'instead of attacking' or 'instead of moving' — those replace that action.",
    source: "official_faq", tags: ["items", "combat", "actions", "core-rules"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "What does 'adjacent' mean?",
    situation: "An effect refers to 'adjacent rooms.' Does this include rooms on different floors connected by stairs?",
    ruling: "Adjacent means connected by a door within the same room tile layout. Rooms connected only by stairs, the Mystic Elevator, or the Collapsed Room are NOT adjacent. They are connected but not adjacent. This distinction matters for many haunt abilities.",
    source: "official_faq", tags: ["adjacent", "rooms", "core-rules", "definitions"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Can an explorer carry unlimited items?",
    situation: "A hero has collected 6 items. Is there a hand limit?",
    ruling: "There is no hand limit in the base game. An explorer can carry as many items as they find. However, companions (Dog, Girl, Madman) do not count as items and have their own rules.",
    source: "official_faq", tags: ["items", "hand-limit", "core-rules"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Stunned explorers: what exactly can't they do?",
    situation: "An explorer is stunned after losing combat. What are the restrictions?",
    ruling: "A stunned explorer cannot do anything until their next turn. They cannot move, attack, use items, trade items, or take any actions. At the start of their next turn, they become unstunned and act normally. Stunned explorers can still be attacked.",
    source: "official_faq", tags: ["stunned", "combat", "core-rules"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Who goes first after the haunt is revealed?",
    situation: "The haunt has just been triggered. Players are confused about turn order.",
    ruling: "The player to the LEFT of the haunt revealer goes first. Play continues clockwise. The traitor takes their turn in normal turn order. The haunt revealer has already ended their turn (the haunt reveal ends their turn).",
    source: "official_faq", tags: ["haunt", "turn-order", "core-rules"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Can the traitor explore new rooms?",
    situation: "The traitor wants to discover new rooms during the haunt to find a specific room.",
    ruling: "Yes. The traitor can explore new rooms during the haunt, just like heroes. They draw room tiles and place them normally. If they draw a card (event, item, omen), they resolve it but do not make haunt rolls for omens.",
    source: "official_faq", tags: ["traitor", "exploration", "haunt", "core-rules"],
  },
  {
    editionId: "original", hauntId: null, roomId: null, itemId: null,
    title: "Can a dead explorer's companion be adopted?",
    situation: "A hero dies while controlling the Dog. Can another hero take the Dog?",
    ruling: "Yes. The companion stays in the room where the explorer died. Any hero who enters that room can take control of the companion as a free action. The companion does not act independently — it waits for a new controller.",
    source: "official_faq", tags: ["companions", "death", "core-rules"],
  },

  // ============================================================================
  // WIDOW'S WALK — GENERAL RULINGS
  // ============================================================================

  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "How does the Roof floor work?",
    situation: "A player draws a roof tile. Where does it connect?",
    ruling: "The Roof is a new fourth floor above the Upper Floor. Access the Roof via the Roof Landing tile, which connects to the Upper Landing. Roof tiles can only be placed on the Roof floor. The Roof Landing is placed the first time a roof tile is drawn.",
    source: "official_faq", tags: ["roof", "floors", "rooms", "expansion"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "Can monsters access the Roof?",
    situation: "A monster on the upper floor wants to chase a hero who fled to the Roof.",
    ruling: "Yes. Monsters can access the Roof by moving through the Roof Landing, just like any other floor transition. The Roof is a standard floor for all movement purposes.",
    source: "community", tags: ["roof", "monsters", "movement", "expansion"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "Do Widow's Walk rooms mix with base game rooms?",
    situation: "Setting up the game with the expansion. Do I shuffle all room tiles together?",
    ruling: "Yes. Shuffle all Widow's Walk room tiles into the existing room stack, separated by floor. Roof tiles form their own stack. Ground, Upper, and Basement tiles from the expansion are shuffled into their respective existing stacks.",
    source: "official_faq", tags: ["setup", "rooms", "expansion", "mixing"],
  },
  {
    editionId: "widows-walk", hauntId: null, itemId: null, roomId: null,
    title: "What happens if you fall from the Roof?",
    situation: "An effect causes a hero to fall from a Roof room. Where do they end up?",
    ruling: "Falling from the Roof sends you to the Ground floor room directly below (if you are tracking positioning) or to the Entrance Hall if there is no clear room below. You take 2 dice of physical damage from the fall. This is similar to the Collapsed Room mechanic but from higher up.",
    source: "community", tags: ["roof", "falling", "damage", "expansion"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "Can base game haunts occur with Widow's Walk tiles in play?",
    situation: "We drew base game omens that triggered a base game haunt, but Roof rooms have been discovered.",
    ruling: "Yes. Base game haunts work normally even with Widow's Walk rooms in play. The extra rooms simply provide more space. If a base game haunt references rooms that don't exist in the expansion, only the base game rooms count for that haunt's mechanics.",
    source: "official_faq", tags: ["haunts", "compatibility", "expansion"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "How do dumbwaiter tiles work?",
    situation: "A hero enters a room with a dumbwaiter. Can they use it immediately?",
    ruling: "The dumbwaiter works like a one-way elevator between specific floors. When you enter a dumbwaiter room, you may use it immediately as part of your movement (costs 1 movement). You are transported to the corresponding dumbwaiter room on the other floor. If that room hasn't been placed yet, place it now.",
    source: "official_faq", tags: ["dumbwaiter", "movement", "rooms", "expansion"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "Do new omen cards from Widow's Walk count toward haunt rolls?",
    situation: "A hero draws an expansion omen card. Does it increase the omen count for the haunt roll?",
    ruling: "Yes. All omen cards — base game and expansion — count toward the total number of omens in play. The haunt roll threshold remains the same: roll 6+ dice and if the result is less than the total number of omens, the haunt begins.",
    source: "official_faq", tags: ["omens", "haunt-roll", "expansion"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "Can Widow's Walk event cards trigger in base game rooms?",
    situation: "A base game room has an event symbol. Can you draw a Widow's Walk event card?",
    ruling: "Yes. All event, item, and omen cards from the expansion are shuffled into their respective base game decks. Any card can be drawn in any room with the appropriate symbol, regardless of which set it came from.",
    source: "official_faq", tags: ["events", "cards", "mixing", "expansion"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "How do the Widow's Walk haunt numbers work with the base game?",
    situation: "The haunt chart shows haunt numbers above 50 for the expansion.",
    ruling: "Widow's Walk has its own haunt chart printed on a separate card. When the haunt is triggered, check BOTH haunt charts using the omen and room. If both charts have a result, use the Widow's Walk chart. The expansion haunts are numbered 1-50 in their own set.",
    source: "official_faq", tags: ["haunts", "haunt-chart", "expansion", "setup"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "What is the 'Outside' region?",
    situation: "A Widow's Walk room tile mentions the Outside. What floor is that?",
    ruling: "Some Widow's Walk rooms connect to an Outside region (the Patio, Balcony, etc.). Outside rooms are placed adjacent to the house on the ground or upper floor level depending on the tile. They count as being on their labeled floor for movement purposes. Outdoor-specific effects only trigger in these rooms.",
    source: "official_faq", tags: ["outside", "rooms", "expansion", "floors"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "Can you use the Mystic Elevator to reach the Roof?",
    situation: "A player rolls in the Mystic Elevator. Can they go to the Roof floor?",
    ruling: "No. The Mystic Elevator only travels between the Basement, Ground, and Upper floors. It cannot access the Roof. Use the Roof Landing to access the Roof.",
    source: "official_faq", tags: ["mystic-elevator", "roof", "movement", "expansion"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "Do expansion items interact with base game haunts?",
    situation: "A hero has an expansion item during a base game haunt. Does it work?",
    ruling: "Yes. Expansion items function normally in all haunts unless a specific haunt says otherwise. Their effects apply as written. This can sometimes make certain base game haunts easier or harder depending on what was drawn.",
    source: "community", tags: ["items", "compatibility", "expansion"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "What if the room stack for a floor is empty?",
    situation: "A player tries to explore but there are no more tiles for that floor.",
    ruling: "If the room stack for a floor is exhausted, you cannot explore in that direction. Your movement ends at the unexplored doorway. You do not lose your remaining movement — you can backtrack. This is more likely with the expansion since it adds more doors.",
    source: "official_faq", tags: ["exploration", "rooms", "empty-stack", "expansion"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "Do the new characters from Widow's Walk have any special abilities?",
    situation: "We're playing with expansion characters. Do they follow different rules?",
    ruling: "No. Expansion characters follow the same rules as base game characters. They have unique trait distributions but no special abilities. They are balanced for use with both base game and expansion haunts.",
    source: "official_faq", tags: ["characters", "expansion", "core-rules"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "Can room effects from the expansion stack with base game room effects?",
    situation: "A hero is in an expansion room adjacent to a base game room, and both have 'entering' effects.",
    ruling: "Room effects do not stack between rooms. You only resolve the effect of the room you are currently in (or entering). You never resolve effects of adjacent rooms unless the effect explicitly says it applies to adjacent rooms. Each room's effect is independent.",
    source: "community", tags: ["rooms", "stacking", "effects", "expansion"],
  },
  {
    editionId: "widows-walk", hauntId: null, roomId: null, itemId: null,
    title: "How many players does Widow's Walk support?",
    situation: "We have 7 players. Can we play with the expansion?",
    ruling: "Widow's Walk does not increase the player count. The game still supports 3-6 players. The expansion adds content (rooms, haunts, cards) but does not change player count limits. With 6 players, all base game and expansion characters are available.",
    source: "official_faq", tags: ["player-count", "expansion", "setup"],
  },

  // ============================================================================
  // WIDOW'S WALK — HAUNT-SPECIFIC RULINGS
  // ============================================================================

  // Widow's Walk Haunt 1
  {
    editionId: "widows-walk", hauntId: "widows-walk-1", roomId: null, itemId: null,
    title: "Do the cats count as monsters for movement?",
    situation: "Dozens of cats fill the house. Do heroes stop when entering a room with cats?",
    ruling: "Cats in this haunt are treated as a swarm, not individual monsters. Heroes do not stop when entering a room with cats. Instead, cats deal automatic damage at the end of any turn where a hero shares a room with them. Heroes can move freely through cat-occupied rooms.",
    source: "community", tags: ["widows-walk-1", "cats", "swarm", "movement"],
  },

  // Widow's Walk Haunt 3
  {
    editionId: "widows-walk", hauntId: "widows-walk-3", roomId: null, itemId: null,
    title: "Can the tree's roots spread to the Roof?",
    situation: "The evil tree's roots are spreading through the house. Can they reach Roof rooms?",
    ruling: "Yes. The roots can spread to any floor, including the Roof, as long as there is a valid room connection. Roots spread to adjacent rooms regardless of floor — they grow through the structure of the house.",
    source: "community", tags: ["widows-walk-3", "tree", "roots", "roof", "spread"],
  },

  // Widow's Walk Haunt 5
  {
    editionId: "widows-walk", hauntId: "widows-walk-5", roomId: null, itemId: null,
    title: "Does the ghost affect heroes on the Roof differently?",
    situation: "A hero is on the Roof. Does the ghost's area effect reach them?",
    ruling: "The ghost's effects that target 'all heroes on the same floor' do not reach the Roof if the ghost is on the Upper Floor. The Roof is a separate floor. The ghost must physically move to the Roof via the Roof Landing to affect heroes there.",
    source: "community", tags: ["widows-walk-5", "ghost", "roof", "floors", "range"],
  },

  // Widow's Walk Haunt 8
  {
    editionId: "widows-walk", hauntId: "widows-walk-8", roomId: null, itemId: null,
    title: "Can the alien be harmed by normal weapons?",
    situation: "Heroes attack the alien with base game weapons. Does it take damage?",
    ruling: "The alien takes half damage (rounded down) from normal weapons. Only the specific item or method described in the heroes' guide can deal full damage. This means heroes need at least 2 damage from a normal attack to have any effect.",
    source: "community", tags: ["widows-walk-8", "alien", "damage", "resistance"],
  },

  // Widow's Walk Haunt 10
  {
    editionId: "widows-walk", hauntId: "widows-walk-10", roomId: null, itemId: null,
    title: "How does time travel affect room discovery?",
    situation: "The haunt involves time travel. Do rooms discovered in the past exist in the present?",
    ruling: "Rooms discovered during the time travel phase remain on the board when heroes return to the present. They represent rooms that 'always existed' — the heroes just didn't find them before. New rooms cannot be discovered during the time travel phase unless the haunt explicitly allows it.",
    source: "official_faq", tags: ["widows-walk-10", "time-travel", "rooms", "exploration"],
  },

  // Widow's Walk Haunt 13
  {
    editionId: "widows-walk", hauntId: "widows-walk-13", roomId: null, itemId: null,
    title: "Can heroes escape through Roof exits?",
    situation: "Heroes need to escape the house. Can they jump off the Roof?",
    ruling: "Heroes can only escape through exits specified in the haunt rules (typically the Front Door). Jumping off the Roof is not an escape route unless the haunt specifically says so. Attempting to jump off the Roof without haunt permission results in death.",
    source: "community", tags: ["widows-walk-13", "escape", "roof", "exits"],
  },

  // Widow's Walk Haunt 15
  {
    editionId: "widows-walk", hauntId: "widows-walk-15", roomId: null, itemId: null,
    title: "Do weather effects on the Roof apply to the Upper Floor?",
    situation: "A storm rages on the Roof. Are heroes on the Upper Floor affected?",
    ruling: "No. Weather effects on the Roof are localized to Roof rooms only. The Upper Floor is indoors and sheltered. Only heroes physically on Roof tiles are affected by weather-based haunt effects.",
    source: "community", tags: ["widows-walk-15", "weather", "roof", "floors"],
  },

  // Widow's Walk Haunt 18
  {
    editionId: "widows-walk", hauntId: "widows-walk-18", roomId: null, itemId: null,
    title: "Can the doll move between floors?",
    situation: "The haunted doll needs to reach a hero on a different floor.",
    ruling: "Yes. The doll moves like any other monster — it can use stairs, the Mystic Elevator, and other floor connections. It moves toward its target by the shortest path and is not restricted to any single floor.",
    source: "community", tags: ["widows-walk-18", "doll", "movement", "floors"],
  },

  // Widow's Walk Haunt 20
  {
    editionId: "widows-walk", hauntId: "widows-walk-20", roomId: null, itemId: null,
    title: "Can the painting's effect stack?",
    situation: "A hero passes through the room with the cursed painting multiple times. Does the curse stack?",
    ruling: "No. The painting's curse applies once per hero. Passing through the room again does not add additional curse effects. However, if the curse has been lifted (via the haunt's cure method), the hero can be cursed again by entering the room.",
    source: "community", tags: ["widows-walk-20", "painting", "curse", "stacking"],
  },

  // Widow's Walk Haunt 22
  {
    editionId: "widows-walk", hauntId: "widows-walk-22", roomId: null, itemId: null,
    title: "Does the traitor's special movement work on the Roof?",
    situation: "The traitor has a teleportation ability. Can they teleport to Roof rooms?",
    ruling: "If the traitor's ability says they can teleport to any room in the house, this includes Roof rooms. The Roof is part of the house. If the ability specifies a floor, it only works on that floor. Read the haunt text carefully for floor restrictions.",
    source: "community", tags: ["widows-walk-22", "teleport", "roof", "traitor"],
  },

  // Widow's Walk Haunt 25
  {
    editionId: "widows-walk", hauntId: "widows-walk-25", roomId: null, itemId: null,
    title: "How many clones can exist at once?",
    situation: "The traitor creates clones of themselves. Is there a limit?",
    ruling: "The traitor can have a maximum number of clones equal to the number of heroes. Each clone acts as an independent monster with the traitor's base stats (no items). Clones cannot create additional clones. When a clone is defeated, it is removed permanently.",
    source: "official_faq", tags: ["widows-walk-25", "clones", "limit", "monsters"],
  },

  // Widow's Walk Haunt 28
  {
    editionId: "widows-walk", hauntId: "widows-walk-28", roomId: null, itemId: null,
    title: "Can insects enter sealed rooms?",
    situation: "Heroes try to barricade a room to keep the insect swarm out.",
    ruling: "Insects are a swarm and can enter any room regardless of barricades or sealed doors. Barricading only works against monsters with physical forms. The swarm seeps through cracks and gaps in any barrier. Heroes must use the haunt's specified method to stop the swarm.",
    source: "community", tags: ["widows-walk-28", "insects", "swarm", "barricade"],
  },

  // Widow's Walk Haunt 30
  {
    editionId: "widows-walk", hauntId: "widows-walk-30", roomId: null, itemId: null,
    title: "Does the mirror duplicate items?",
    situation: "A hero with items steps through the mirror. Do their items get duplicated?",
    ruling: "No. The mirror duplicates the explorer (creating an evil twin) but not their items. The evil twin has the explorer's current trait values but carries no items. The original keeps all their items.",
    source: "official_faq", tags: ["widows-walk-30", "mirror", "items", "duplication"],
  },

  // Widow's Walk Haunt 33
  {
    editionId: "widows-walk", hauntId: "widows-walk-33", roomId: null, itemId: null,
    title: "Can heroes destroy the music box from a distance?",
    situation: "The music box is in a dangerous room. Can heroes throw something at it?",
    ruling: "No. Heroes must be in the same room as the music box to interact with it. There are no ranged item interactions unless the item specifically says otherwise. The hero must enter the room and use an action to attempt to destroy it.",
    source: "community", tags: ["widows-walk-33", "music-box", "range", "items"],
  },

  // Widow's Walk Haunt 36
  {
    editionId: "widows-walk", hauntId: "widows-walk-36", roomId: null, itemId: null,
    title: "Do the new expansion rooms count for the spreading darkness?",
    situation: "Darkness spreads room by room. Do Widow's Walk rooms count?",
    ruling: "Yes. All rooms in play count, including expansion rooms and Roof rooms. The darkness spreads to any adjacent room regardless of which set the tile came from. This can make the darkness spread faster in a larger house.",
    source: "community", tags: ["widows-walk-36", "darkness", "rooms", "expansion", "spread"],
  },

  // Widow's Walk Haunt 40
  {
    editionId: "widows-walk", hauntId: "widows-walk-40", roomId: null, itemId: null,
    title: "Can the séance be performed on the Roof?",
    situation: "Heroes need to perform a ritual. Can they use a Roof room?",
    ruling: "The séance can only be performed in rooms specified by the haunt (typically rooms with mystical symbols or the Pentagonal Room). If no qualifying room is on the Roof, the Roof cannot be used. Check the haunt text for the specific room requirements.",
    source: "community", tags: ["widows-walk-40", "séance", "ritual", "roof", "rooms"],
  },

  // Widow's Walk Haunt 42
  {
    editionId: "widows-walk", hauntId: "widows-walk-42", roomId: null, itemId: null,
    title: "Does gravity reverse on all floors simultaneously?",
    situation: "The haunt reverses gravity. Does this affect the Basement?",
    ruling: "Yes. When gravity reverses, it affects all floors simultaneously, including the Basement and Roof. Heroes on all floors must deal with the reversal effects. Mechanically, heroes must make a Speed roll or fall 'up' — which is treated like falling from the Collapsed Room but in reverse direction.",
    source: "community", tags: ["widows-walk-42", "gravity", "floors", "speed"],
  },

  // Widow's Walk Haunt 45
  {
    editionId: "widows-walk", hauntId: "widows-walk-45", roomId: null, itemId: null,
    title: "Can heroes hide from the hunter on the Roof?",
    situation: "A hero flees to the Roof to escape the hunter. Does the hunter follow?",
    ruling: "The hunter can access all floors including the Roof. However, the Roof provides an advantage: the hunter must spend extra movement to climb to the Roof (the Roof Landing costs 2 movement for the hunter instead of 1). This gives heroes a temporary reprieve, not a permanent safe zone.",
    source: "community", tags: ["widows-walk-45", "hunter", "roof", "movement"],
  },

  // Widow's Walk Haunt 48
  {
    editionId: "widows-walk", hauntId: "widows-walk-48", roomId: null, itemId: null,
    title: "Can the plant monster grow into rooms that haven't been discovered?",
    situation: "The plant monster expands. Can it grow into unexplored doorways?",
    ruling: "No. The plant monster can only grow into rooms that are already on the board. It cannot force room discovery. If an adjacent doorway leads to an undiscovered room, the plant cannot expand in that direction until a player explores and places a tile there.",
    source: "community", tags: ["widows-walk-48", "plant", "growth", "exploration"],
  },

  // Widow's Walk Haunt 50
  {
    editionId: "widows-walk", hauntId: "widows-walk-50", roomId: null, itemId: null,
    title: "Does the final haunt use all rooms from both sets?",
    situation: "Playing Widow's Walk haunt 50. Are all rooms required to be in play?",
    ruling: "No. Only rooms that have been discovered during normal play are in the game. Haunt 50 does not require placing all remaining tiles. The haunt works with whatever rooms are currently on the board. A larger house may actually make this haunt harder depending on the win conditions.",
    source: "community", tags: ["widows-walk-50", "rooms", "setup"],
  },

  // ============================================================================
  // BETRAYAL LEGACY — GENERAL RULINGS
  // ============================================================================

  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "Can permanent changes be undone?",
    situation: "A player made a permanent change (sticker, destroyed card) and regrets it.",
    ruling: "No. Permanent changes in Betrayal Legacy cannot be undone. This is core to the legacy experience. Destroyed cards stay destroyed, stickers remain placed, and written effects persist. Plan carefully before making irreversible decisions.",
    source: "official_faq", tags: ["legacy", "permanent", "stickers", "core-rules"],
  },
  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "What happens to a family line if all members die?",
    situation: "All characters in a player's family line have been killed across chapters. Can they continue?",
    ruling: "Each family has enough members to last the entire campaign. If a character dies in a chapter, their descendant takes over in the next chapter. The game is designed so no family line can be permanently eliminated. Check the family cards for the next available descendant.",
    source: "official_faq", tags: ["legacy", "family", "death", "campaign"],
  },
  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "Do heirloom items carry between chapters?",
    situation: "A player found a powerful item in Chapter 2. Do they still have it in Chapter 3?",
    ruling: "Heirloom items (marked with the heirloom symbol) carry forward between chapters and belong to the family line, not a specific character. Non-heirloom items are returned to the supply between chapters unless a specific chapter outcome says otherwise.",
    source: "official_faq", tags: ["legacy", "heirlooms", "items", "campaign"],
  },
  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "Can we replay a chapter if we made a mistake?",
    situation: "Players realize mid-chapter they misread a rule that affected the outcome.",
    ruling: "The game is designed to be played forward. Replaying chapters undermines the legacy experience. However, if a critical rules error significantly altered the outcome, the group may vote to replay. Any permanent changes from the first attempt should be considered canon. The rulebook recommends playing through mistakes.",
    source: "designer", tags: ["legacy", "replay", "mistakes", "campaign"],
  },
  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "How do the preamble story sections work?",
    situation: "A new chapter starts with a story section. Do we read it aloud?",
    ruling: "Yes. The preamble should be read aloud to all players before starting the chapter. It sets the scene and may contain important mechanical information. Do not skip or skim it — some preambles contain choices that affect the chapter or future chapters.",
    source: "official_faq", tags: ["legacy", "story", "preamble", "campaign"],
  },
  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "Can new players join mid-campaign?",
    situation: "A friend wants to join the campaign at Chapter 5. Is this possible?",
    ruling: "New players can join by taking over an existing family line that hasn't been claimed, or by sharing control with an existing player. They should be briefed on the story so far (without revealing hidden information). The game supports this but the experience is best when all players start from the Prologue.",
    source: "designer", tags: ["legacy", "new-players", "campaign"],
  },
  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "Do room stickers affect all future chapters?",
    situation: "A room received a sticker in Chapter 3. Is the effect active in Chapter 4?",
    ruling: "Yes. Room stickers are permanent modifications that affect all future chapters. When that room tile is drawn in any future chapter, the sticker's effect is active. This is true even if the sticker seems narratively tied to a specific chapter's events.",
    source: "official_faq", tags: ["legacy", "stickers", "rooms", "permanent"],
  },
  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "What happens if a required card was destroyed in a previous chapter?",
    situation: "A chapter references a card that was destroyed earlier in the campaign.",
    ruling: "The game is designed to account for destroyed cards. If a chapter references a destroyed card, there will be alternate instructions or the effect simply does not occur. Read the chapter instructions carefully — they often say 'if this card is still in the game.' The designers tested all destruction paths.",
    source: "designer", tags: ["legacy", "destroyed-cards", "campaign", "contingency"],
  },
  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "Can the game be played again after the campaign is complete?",
    situation: "We finished all 14 chapters. Can we keep playing?",
    ruling: "Yes. After completing the campaign, the game becomes a 'finished' version of Betrayal that can be replayed. All permanent changes remain, creating a unique version of the game. The post-campaign game uses the final state of the house and decks. A free-play haunt chart is included for continued play.",
    source: "official_faq", tags: ["legacy", "post-campaign", "replayability"],
  },
  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "How does the 'ghost' mechanic work in Legacy?",
    situation: "A character died in a previous chapter. Can their ghost appear?",
    ruling: "Some chapters reference ghosts of previously deceased family members. These are story elements that may grant bonuses or penalties depending on chapter-specific rules. A ghost is not an explorer — it cannot carry items, explore rooms, or be attacked unless the chapter says otherwise.",
    source: "official_faq", tags: ["legacy", "ghosts", "death", "campaign"],
  },
  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "Are trait improvements from previous chapters cumulative?",
    situation: "A family line gained +1 Might in Chapter 2 and +1 Might in Chapter 6. Do they stack?",
    ruling: "Yes. Trait improvements are cumulative across the campaign. Record all bonuses on the family card. Each descendant in the family line benefits from all previously earned trait bonuses. This represents the family growing stronger (or weaker) over generations.",
    source: "official_faq", tags: ["legacy", "traits", "improvements", "cumulative", "campaign"],
  },
  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "What if we lose a chapter? Do we still progress?",
    situation: "The heroes lost the haunt. Does the campaign continue?",
    ruling: "Yes. The campaign always progresses regardless of win or loss. Losing a chapter may change the narrative outcome and affect future chapters, but the story continues. Some chapters have different consequences for winning vs losing — check the chapter conclusion for both outcomes.",
    source: "official_faq", tags: ["legacy", "losing", "campaign", "progression"],
  },
  {
    editionId: "legacy", hauntId: null, roomId: null, itemId: null,
    title: "How do the sealed packets work?",
    situation: "The game has sealed packets labeled 'Do not open until instructed.' When do we open them?",
    ruling: "Only open sealed packets when the game explicitly tells you to. This is usually triggered by specific chapter events or haunt outcomes. Opening a packet early spoils surprises and can confuse the game state. If the instructions are ambiguous, err on the side of NOT opening the packet.",
    source: "official_faq", tags: ["legacy", "sealed-packets", "spoilers", "campaign"],
  },

  // ============================================================================
  // 3RD EDITION — GENERAL RULINGS
  // ============================================================================

  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "What changed from the original edition?",
    situation: "Players familiar with the original are confused by 3rd edition differences.",
    ruling: "Key changes: combat is now simultaneous (both sides deal damage), some traits have been rebalanced, several haunts have been redesigned for better balance, and the haunt chart is different. Room tiles and item cards have updated text. Always use the 3rd edition rules, not the original ones.",
    source: "official_faq", tags: ["3rd-edition", "changes", "core-rules"],
  },
  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "How does simultaneous combat work?",
    situation: "In 3rd edition, combat is simultaneous. Both the attacker and defender deal damage?",
    ruling: "Yes. Both sides roll dice simultaneously. Compare results: the difference is dealt as damage to the loser. On a tie, BOTH sides take 1 damage. This is a major change from the original where only the winner dealt damage. It makes combat riskier for everyone.",
    source: "official_faq", tags: ["3rd-edition", "combat", "simultaneous", "core-rules"],
  },
  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "Are the trait tracks different in 3rd edition?",
    situation: "A player notices the starting trait values seem different from the original.",
    ruling: "Yes. Many characters have rebalanced trait tracks in 3rd edition. Starting values and progression may differ from the original. Always use the 3rd edition character cards. The skull position may also be in a different spot on some trait tracks compared to the original.",
    source: "official_faq", tags: ["3rd-edition", "traits", "characters", "rebalance"],
  },
  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "Can I use original edition components with 3rd edition rules?",
    situation: "A player only has original edition tiles but wants to use 3rd edition rules.",
    ruling: "This is not recommended. The 3rd edition has different room tiles, items, and events that are balanced for the new rules. Mixing components will create balance issues and some haunt references won't match. Use the complete 3rd edition set as designed.",
    source: "official_faq", tags: ["3rd-edition", "compatibility", "components"],
  },
  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "Is the haunt chart different in 3rd edition?",
    situation: "Players look up the haunt using the original edition chart.",
    ruling: "Yes. The 3rd edition has a completely different haunt chart. The same omen-room combination may trigger a different haunt than in the original. Always use the 3rd edition haunt chart. Some haunts share names with the original but have revised mechanics.",
    source: "official_faq", tags: ["3rd-edition", "haunt-chart", "haunts"],
  },
  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "How does the 'damage type' system work?",
    situation: "A card refers to 'physical damage' and 'mental damage.' What's the difference?",
    ruling: "In 3rd edition, damage is explicitly categorized as physical (reduces Might or Speed, attacker chooses) or mental (reduces Sanity or Knowledge, attacker chooses). The attacker decides which trait in the category to reduce, not the defender. This replaces the original's less specific damage system.",
    source: "official_faq", tags: ["3rd-edition", "damage-types", "physical", "mental", "core-rules"],
  },
  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "Do 3rd edition monsters work differently?",
    situation: "Monsters in 3rd edition seem to behave differently from the original.",
    ruling: "Monster behavior is largely the same, but some haunts give monsters specific action cards that define their behavior more precisely. Monsters still stop heroes from moving through their room. The simultaneous combat change means heroes always take some risk when fighting monsters.",
    source: "official_faq", tags: ["3rd-edition", "monsters", "combat", "core-rules"],
  },
  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "Is the Widow's Walk expansion compatible with 3rd edition?",
    situation: "Players want to use Widow's Walk rooms and haunts with 3rd edition.",
    ruling: "No. Widow's Walk is designed for the original 2nd edition and is NOT compatible with 3rd edition. The room tiles, cards, and haunts are balanced for the original rules. Using Widow's Walk with 3rd edition will cause rules conflicts and balance issues.",
    source: "official_faq", tags: ["3rd-edition", "widows-walk", "compatibility", "expansion"],
  },
  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "Do omens work the same way in 3rd edition?",
    situation: "A player draws an omen. Is the haunt roll mechanic the same?",
    ruling: "The haunt roll mechanic is the same: roll 6 dice, and if the result is less than the number of omens in play, the haunt begins. However, some omen cards have been changed or rebalanced. Always read the 3rd edition omen card text, as effects may differ from the original.",
    source: "official_faq", tags: ["3rd-edition", "omens", "haunt-roll", "core-rules"],
  },
  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "What happens when combat results in a tie in 3rd edition?",
    situation: "Both the attacker and defender rolled the same total in combat.",
    ruling: "In 3rd edition, a tie means BOTH sides take 1 point of damage. The attacker chooses which trait category (physical or mental) to deal to the defender, and the defender chooses which category to deal to the attacker. Then each recipient applies the 1 damage to a trait of their choice within that category.",
    source: "official_faq", tags: ["3rd-edition", "combat", "tie", "damage"],
  },
  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "Are there new room types in 3rd edition?",
    situation: "Some room tiles look unfamiliar to original edition players.",
    ruling: "3rd edition includes some new room tiles and has removed or renamed some original rooms. The room effects may also differ. Some rooms that were notoriously problematic (overpowered or confusing) have been redesigned. Treat each room tile as written — do not rely on original edition knowledge for room effects.",
    source: "official_faq", tags: ["3rd-edition", "rooms", "changes"],
  },
  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "How does item trading differ in 3rd edition?",
    situation: "Heroes want to trade items during the haunt.",
    ruling: "Item trading in 3rd edition works the same as the original: both explorers must be in the same room, and trading is a free action. However, 3rd edition clarifies that trading can happen at any point during your turn (before moving, after moving, between actions). You cannot trade if stunned.",
    source: "official_faq", tags: ["3rd-edition", "items", "trading", "core-rules"],
  },
  {
    editionId: "3rd-edition", hauntId: null, roomId: null, itemId: null,
    title: "Can the traitor still explore in 3rd edition?",
    situation: "The traitor wants to discover new rooms after the haunt starts.",
    ruling: "Yes. The traitor can explore in 3rd edition, same as the original. However, some 3rd edition haunts explicitly restrict the traitor from exploring to prevent certain balance exploits. If the haunt doesn't mention an exploration restriction, the traitor can explore normally.",
    source: "official_faq", tags: ["3rd-edition", "traitor", "exploration", "haunt"],
  },

  // ============================================================================
  // 3RD EDITION — HAUNT-SPECIFIC RULINGS
  // ============================================================================

  // 3rd Edition Haunt 1
  {
    editionId: "3rd-edition", hauntId: "3rd-edition-1", roomId: null, itemId: null,
    title: "Does simultaneous combat apply to the mummy?",
    situation: "A hero attacks the mummy. Do they both take damage?",
    ruling: "Yes. In 3rd edition, the simultaneous combat rules apply to all combat, including monster fights. If the hero and mummy tie, both take 1 damage. Heroes should be cautious about attacking the mummy without strong combat items.",
    source: "official_faq", tags: ["3rd-edition-1", "mummy", "combat", "simultaneous"],
  },

  // 3rd Edition Haunt 5
  {
    editionId: "3rd-edition", hauntId: "3rd-edition-5", roomId: null, itemId: null,
    title: "Is the werewolf rebalanced in 3rd edition?",
    situation: "The werewolf seems harder/easier than in the original. Has it changed?",
    ruling: "Yes. The werewolf in 3rd edition has adjusted stats to account for simultaneous combat. Its Might is slightly lower but it regenerates 1 Might at the start of each of the traitor's turns. The Revolver is still required for a permanent kill. The regeneration makes stalling tactics less effective.",
    source: "official_faq", tags: ["3rd-edition-5", "werewolf", "rebalance", "regeneration"],
  },

  // 3rd Edition Haunt 10
  {
    editionId: "3rd-edition", hauntId: "3rd-edition-10", roomId: null, itemId: null,
    title: "Do the undead family members have the same stats as the original?",
    situation: "Fighting the undead family. Are their stats the same as the original edition?",
    ruling: "No. 3rd edition undead family members have been rebalanced. They are individually weaker but there are more of them. Check the 3rd edition traitor's tome for exact stats. The simultaneous combat system means even weak monsters pose a threat since heroes always risk taking damage.",
    source: "community", tags: ["3rd-edition-10", "undead", "rebalance", "stats"],
  },

  // 3rd Edition Haunt 14
  {
    editionId: "3rd-edition", hauntId: "3rd-edition-14", roomId: null, itemId: null,
    title: "How does the ritual work in 3rd edition?",
    situation: "The traitor's ritual mechanics seem different from the original haunt 14.",
    ruling: "In 3rd edition, the ritual requires the traitor to spend 3 consecutive turns in the Pentagonal Room without being attacked. If attacked and the traitor takes damage, the ritual counter resets to 0. This gives heroes a clearer counter-strategy: keep pressure on the traitor.",
    source: "official_faq", tags: ["3rd-edition-14", "ritual", "rebalance", "timing"],
  },

  // 3rd Edition Haunt 18
  {
    editionId: "3rd-edition", hauntId: "3rd-edition-18", roomId: null, itemId: null,
    title: "How is the no-traitor haunt balanced in 3rd edition?",
    situation: "With simultaneous combat, the no-traitor survival haunt seems harder.",
    ruling: "The 3rd edition version of this haunt has fewer monster waves to compensate for simultaneous combat. Monsters also have slightly lower stats. The survival timer is the same (5 turns). The intent is to maintain similar difficulty despite the combat rule change.",
    source: "official_faq", tags: ["3rd-edition-18", "no-traitor", "balance", "simultaneous"],
  },

  // 3rd Edition Haunt 25
  {
    editionId: "3rd-edition", hauntId: "3rd-edition-25", roomId: null, itemId: null,
    title: "Are the voodoo doll placement rules different?",
    situation: "The traitor is placing voodoo dolls. Did the placement rules change?",
    ruling: "In 3rd edition, the traitor must place dolls in rooms they have personally visited (not just any room). This prevents the traitor from hiding dolls in rooms no one has explored. The traitor writes down placements as before, but the room must have been discovered and visited by the traitor prior to the haunt.",
    source: "official_faq", tags: ["3rd-edition-25", "voodoo", "placement", "rebalance"],
  },

  // 3rd Edition Haunt 30
  {
    editionId: "3rd-edition", hauntId: "3rd-edition-30", roomId: null, itemId: null,
    title: "How does Dracula's drain interact with simultaneous combat?",
    situation: "Dracula fights a hero. With simultaneous combat, the hero deals damage too. Does Dracula still drain?",
    ruling: "Dracula drains only if he wins combat (deals more damage than the hero). On a tie, both take 1 damage and no drain occurs. If the hero wins, no drain. This makes Dracula significantly weaker in 3rd edition compared to the original where combat was one-sided.",
    source: "official_faq", tags: ["3rd-edition-30", "dracula", "drain", "simultaneous", "combat"],
  },

  // 3rd Edition Haunt 37
  {
    editionId: "3rd-edition", hauntId: "3rd-edition-37", roomId: null, itemId: null,
    title: "Do chess pieces have different stats in 3rd edition?",
    situation: "The chess pieces seem tougher. Are they rebalanced?",
    ruling: "Yes. In 3rd edition, chess pieces have been rebalanced: pawns are weaker (2 Might) but there are more of them, while the king has higher Might (8) but lower Speed. The bishop and rook pieces have abilities: the bishop can deal mental damage and the rook has extra physical damage resistance. Check the 3rd edition traitor's tome for exact stats.",
    source: "community", tags: ["3rd-edition-37", "chess", "rebalance", "stats"],
  },

  // 3rd Edition Haunt 42
  {
    editionId: "3rd-edition", hauntId: "3rd-edition-42", roomId: null, itemId: null,
    title: "How many waves of monsters in 3rd edition?",
    situation: "The original had 6 waves. Is it the same?",
    ruling: "3rd edition reduces this to 4 waves but each wave has more monsters. The total number of monster attacks is similar, but they come in larger groups. This makes positioning and room control more important — getting surrounded by a wave is more dangerous than fighting a trickle.",
    source: "community", tags: ["3rd-edition-42", "waves", "monsters", "rebalance", "no-traitor"],
  },

  // 3rd Edition Haunt 44
  {
    editionId: "3rd-edition", hauntId: "3rd-edition-44", roomId: null, itemId: null,
    title: "Can Death be stalled with combat in 3rd edition?",
    situation: "With simultaneous combat, can heroes realistically fight Death?",
    ruling: "Death in 3rd edition is explicitly immune to damage. Simultaneous combat does not apply — Death deals damage but takes none. Heroes cannot stall Death through combat at all. The only solution is the counter-ritual, making it more urgent than in the original.",
    source: "official_faq", tags: ["3rd-edition-44", "death", "immunity", "combat", "ritual"],
  },

  // 3rd Edition Haunt 50
  {
    editionId: "3rd-edition", hauntId: "3rd-edition-50", roomId: null, itemId: null,
    title: "Is the treasure hunt timer different in 3rd edition?",
    situation: "Players have fewer turns than expected. Did the timer change?",
    ruling: "Yes. 3rd edition reduces the treasure hunt timer from 8 rounds to 6 rounds, but the search mechanic is easier (Knowledge roll of 3+ instead of 5+). This makes the haunt faster-paced and reduces the chance of a boring drawn-out search.",
    source: "official_faq", tags: ["3rd-edition-50", "treasure", "timer", "rebalance", "no-traitor"],
  },
];
