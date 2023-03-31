const cantrips = [
    {
        name: "Minor Illusion",
        castingTime: "1 action",
        range: "30ft",
        components: "S, M (a bit of fleece)",
        duration: "1 minute",
        description: "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again. If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends. If you create an image of an object--such as a chair, muddy footprints, or a small chest--it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it. If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature."
    },
    {
        name: "True Strike",
        castingTime: "1 action",
        range: "30ft",
        components: "S",
        duration: "Concentration, up to 1 round",
        description: "You point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended."
    },
    {
        name: "Chill Touch",
        castingTime: "1 action",
        range: "120ft",
        components: "V, S",
        duration: "1 round",
        description: "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    }
]

const spells = [
    {
        name: "Burning Hands",
        castingTime: "1 action",
        range: "Self (15ft cone)",
        components: "V, S",
        duration: "Instantaneous",
        description: "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15ft cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
    },
    {
        name: "Arms of Hadar",
        castingTime: "1 action",
        range: "Self (10ft radius)",
        components: "V, S",
        duration: "Instantaneous",
        description: "You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10ft of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
    },
    {
        name: "Witch Bolt",
        castingTime: "1 action",
        range: "30ft",
        components: "V, S, M (a twig from a tree that has been struck by lightning",
        duration: "Concentration, up to 1 minute",
        description: "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot above 1st.",
    },
    {
        name: "Mirror Image",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "1 minute",
        description: "Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting positions so it's impossible to track which image is real. You can use your action to dismiss the illusory duplicates. Each time a creature targets you with an attack during the spell's duration, roll a d20 to determine whether the attack instead targets one of your duplicates. If you have three duplicates, you must roll a 6 or higher to change the attack's target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher. A duplicate's AC equals 10+ your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed. A creature is unaffected by this spell if it can't see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight.",
    },
    {
        name: "Misty Step",
        castingTime: "1 bonus action",
        range: "Self",
        components: "V",
        duration: "Instantaneous",
        description: "Briefly surrounded by silvery mist, you teleport up to 30ft to an unoccupied space you can see.",
    }
]

const character = {
    name: "Guy",
    race: "Human",
    characterClass: "Warlock",
    age: 16,
    lvl: 4,
    armorClass: 13,
    speed: 30,
    hpMax: 33,
    hd: "1d8",
    strength: {
        value: 12,
        mod: 1
    },
    dexterity: {
        value: 12,
        mod: 1
    },
    constitution: {
        value: 17,
        mod: 3
    },
    intelligence: {
        value: 12,
        mod: 1
    },
    wisdom: {
        value: 6,
        mod: -2
    },
    charisma: {
        value: 16,
        mod: 3
    }
}

const dropdownItems = document.querySelector('.dropdown-items')

for (let i = 0; i < cantrips.length; i++) {
    let a = document.createElement('a')
    a.classList.add(`cantrip-${i}`)
    a.textContent = cantrips[i].name
    dropdownItems.appendChild(a)
}

const spellDropdownItems = document.querySelectorAll('.dropdown-items')[1]

for (let i = 0; i < spells.length; i++) {
    let a = document.createElement('a')
    a.classList.add(`spell-${i}`)
    a.textContent = spells[i].name
    spellDropdownItems.appendChild(a) 
}