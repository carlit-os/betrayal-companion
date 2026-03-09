// Seeded rulings from the official FAQ and well-known community consensus
export const rulingsSeed = [
  // === HAUNT-SPECIFIC RULINGS ===

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

  // Haunt 3: Frog-Leg Stew
  {
    editionId: "original", hauntId: "original-3", roomId: null, itemId: null,
    title: "Can the cook capture heroes in any room?",
    situation: "The traitor wants to capture a hero who is not in the Kitchen.",
    ruling: "The traitor must defeat a hero in combat, then drag them to the Kitchen. The capture doesn't happen instantly — the hero must be physically brought to the Kitchen.",
    source: "community", tags: ["haunt-3", "combat", "capture"],
  },

  // Haunt 4: The Web of Destiny
  {
    editionId: "original", hauntId: "original-4", roomId: null, itemId: null,
    title: "Do webs block movement?",
    situation: "A hero enters a room that has been webbed by the spiders.",
    ruling: "Webbed rooms cost extra movement to enter (spend 2 movement instead of 1). Heroes can still enter and leave webbed rooms.",
    source: "community", tags: ["haunt-4", "spiders", "movement"],
  },

  // Haunt 5: I Was a Teenage Lycanthrope
  {
    editionId: "original", hauntId: "original-5", roomId: null, itemId: null,
    title: "Does the werewolf HAVE to be killed with the Revolver?",
    situation: "No one has the Revolver. Can the heroes still kill the werewolf?",
    ruling: "The heroes must find the Revolver (silver bullets). Without it, the werewolf cannot be permanently killed — it regenerates. Heroes may need to explore to find the item.",
    source: "official_faq", tags: ["haunt-5", "werewolf", "revolver"],
  },

  // Haunt 9: The Dance of Death
  {
    editionId: "original", hauntId: "original-9", roomId: null, itemId: null,
    title: "Can heroes attack the undead dancers?",
    situation: "A hero in the Ballroom wants to fight the dancers to escape.",
    ruling: "Heroes cannot attack the dancers directly. They must use Speed rolls to escape the Ballroom. The dancers are obstacles, not monsters.",
    source: "community", tags: ["haunt-9", "dancers", "combat", "movement"],
  },

  // Haunt 13: Perchance to Dream
  {
    editionId: "original", hauntId: "original-13", roomId: null, itemId: null,
    title: "What if the Bell item hasn't been found?",
    situation: "The heroes need to ring a bell to wake everyone up, but no one has the Bell item.",
    ruling: "The heroes must find the Bell by exploring. If the Bell is in the item deck, they can draw it normally. If it's already been drawn and is held by a sleeping explorer, another hero must reach that explorer to take it.",
    source: "community", tags: ["haunt-13", "bell", "sleep", "items"],
  },

  // Haunt 14: The Stars Are Right
  {
    editionId: "original", hauntId: "original-14", roomId: null, itemId: null,
    title: "Can the traitor complete the ritual if the Pentagonal Room isn't discovered?",
    situation: "The Pentagonal Room hasn't been placed yet. Can the traitor explore to find it?",
    ruling: "Yes. The traitor can explore new rooms during the haunt. If they discover the Pentagonal Room, they can begin the ritual there on a subsequent turn.",
    source: "official_faq", tags: ["haunt-14", "ritual", "exploration"],
  },

  // Haunt 18: United We Stand (no traitor)
  {
    editionId: "original", hauntId: "original-18", roomId: null, itemId: null,
    title: "How do the monsters move with no traitor?",
    situation: "There's no traitor to control the monsters. Who moves them?",
    ruling: "The hero whose turn it is moves the monsters. Monsters always move toward the nearest hero by the shortest path. If tied, the active player chooses.",
    source: "official_faq", tags: ["haunt-18", "monsters", "no-traitor", "movement"],
  },

  // Haunt 20: Ghost Bride
  {
    editionId: "original", hauntId: "original-20", roomId: null, itemId: null,
    title: "Can the Ring be destroyed if the Furnace Room isn't discovered?",
    situation: "Heroes need to destroy the ring in the Furnace Room but it hasn't been placed.",
    ruling: "Heroes must explore to find the Furnace Room. Until then, they should focus on avoiding the ghost bride and keeping the ring holder safe.",
    source: "community", tags: ["haunt-20", "ghost-bride", "ring", "exploration"],
  },

  // Haunt 25: Voodoo
  {
    editionId: "original", hauntId: "original-25", roomId: null, itemId: null,
    title: "Where are the voodoo dolls hidden?",
    situation: "Heroes need to find and destroy their dolls. Where are they?",
    ruling: "The traitor secretly assigns each doll to a room at the start of the haunt (written down). Heroes must search rooms by spending an action. When they search the correct room, they find and can destroy their doll.",
    source: "official_faq", tags: ["haunt-25", "voodoo", "search"],
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

  // Haunt 32: Lost (no traitor)
  {
    editionId: "original", hauntId: "original-32", roomId: null, itemId: null,
    title: "How do rooms rearrange?",
    situation: "The house is shifting. What happens mechanically?",
    ruling: "At the start of each turn, the active player rolls dice. The result determines how many rooms shift. Rooms adjacent to the active player rotate clockwise. Door connections must still be valid after shifting.",
    source: "community", tags: ["haunt-32", "rooms", "shifting", "no-traitor"],
  },

  // Haunt 45: Tick, Tick, Tick
  {
    editionId: "original", hauntId: "original-45", roomId: null, itemId: null,
    title: "How many bombs are there and where are they?",
    situation: "The traitor planted bombs. How many and how do heroes find them?",
    ruling: "The traitor places one bomb token in each room they choose (typically 5 bombs, written down secretly). Heroes must search rooms by spending an action. A Knowledge roll of 5+ in a room with a bomb defuses it.",
    source: "community", tags: ["haunt-45", "bombs", "search", "knowledge"],
  },

  // Haunt 50: Treasure Hunt (no traitor)
  {
    editionId: "original", hauntId: "original-50", roomId: null, itemId: null,
    title: "How does the house collapse timer work?",
    situation: "Heroes have 8 turns to find the treasure. What happens after?",
    ruling: "After 8 full rounds (each player has had 8 turns), the house collapses and all players lose. The treasure is hidden in a room determined by a die roll at the start of the haunt. Heroes search rooms with a Knowledge roll.",
    source: "community", tags: ["haunt-50", "treasure", "timer", "no-traitor"],
  },

  // === GENERAL RULINGS ===

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
];
