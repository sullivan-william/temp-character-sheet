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
    hd: "1d8",
    maxHP: 33,
    attributes: [
        {
            title: "strength",
            value: 12,
            mod: "1"
        },
        {
            title: "dexterity",
            value: 12,
            mod: "1"
        },
        {
            title: "constitution",
            value: 17,
            mod: "3"
        },
        {
            title: "intelligence",
            value: 12,
            mod: "1"
        },
        {
            title: "wisdom",
            value: 6,
            mod: "- 2"
        },
        {
            title: "charisma",
            value: 16,
            mod: "3"
        }
    ],
    inventory: ["Hatchet", "Magic Ring", "Scroll"],
    coin: 500
}

const characterName = document.querySelector('.character-name')
const race = document.querySelector('.race')
const characterClass = document.querySelector('.character-class')
const age = document.querySelector('.age')
const lvl = document.querySelector('.lvl')
const armorClass = document.querySelector('.armor-class')
const speed = document.querySelector('.speed')
const hitDice = document.querySelector('.hit-dice')

characterName.textContent = `Name: ${character.name}`
race.textContent = `Race: ${character.race}`
characterClass.textContent = `Class: ${character.characterClass}`
age.textContent = `Age: ${character.age}`
lvl.textContent = `Level: ${character.lvl}`
armorClass.textContent = `AC: ${character.armorClass}`
speed.textContent = `Speed: ${character.speed}`
hitDice.textContent = `Hit Dice: ${character.hd}`

let hp = character.maxHP
let bonusHP = 0

const maxHP = document.querySelector('.max-hp')
const currentHP = document.querySelector('.hp')
const tempHP = document.querySelector('.temp-hp')
const up = document.querySelector('.up')
const down = document.querySelector('.down')
const tempUp = document.querySelector('.temp-up')
const tempDown = document.querySelector('.temp-down')

maxHP.textContent = `Max HP: ${character.maxHP}`
currentHP.textContent = hp
tempHP.textContent = bonusHP

up.addEventListener('click', (e) => {
    if (hp >= character.maxHP) {
        return
    } else {
        hp += 1
        currentHP.textContent = hp
    }
})

down.addEventListener('click', (e) => {
    if (hp > 0) {
        hp -= 1
        currentHP.textContent = hp
    } else {
        return
    }
})

tempUp.addEventListener('click', (e) => {
    bonusHP += 1
    tempHP.textContent = bonusHP
})

tempDown.addEventListener('click', (e) => {
    if (bonusHP > 0) {
        bonusHP -= 1
        tempHP.textContent = bonusHP
    } else {
        return
    }
})

const dropdownBtn = document.querySelectorAll('.dropdown-btn')
const spellName = document.querySelectorAll('.spell-name')
const castingTime = document.querySelectorAll('.casting-time')
const range = document.querySelectorAll('.range')
const components = document.querySelectorAll('.components')
const duration = document.querySelectorAll('.duration')
const description = document.querySelectorAll('.description')
const spellDisplay = document.querySelectorAll('.spell-display')

const dropdownItems = document.querySelector('.dropdown-items')

for (let i = 0; i < cantrips.length; i++) {
    let a = document.createElement('a')
    a.classList.add(`cantrip-${i}`)
    a.textContent = cantrips[i].name
    a.addEventListener('click', (e) => {
        dropdownBtn[0].textContent = 'Cantrips △'
        spellName[0].textContent = cantrips[i].name
        castingTime[0].textContent = `Casting time: ${cantrips[i].castingTime}`
        range[0].textContent = `Range: ${cantrips[i].range}`
        components[0].textContent = `Components: ${cantrips[i].components}`
        duration[0].textContent = `Duration: ${cantrips[i].duration}`
        description[0].textContent = cantrips[i].description
        dropdownItems.classList.remove('show')
        spellDisplay[0].classList.add('show')
    })
    dropdownItems.appendChild(a)
}

const spellDropdownItems = document.querySelectorAll('.dropdown-items')[1]

for (let i = 0; i < spells.length; i++) {
    let a = document.createElement('a')
    a.classList.add(`spell-${i}`)
    a.textContent = spells[i].name
    a.addEventListener('click', (e) => {
        dropdownBtn[1].textContent = 'Spells △'
        spellName[1].textContent = spells[i].name
        castingTime[1].textContent = `Casting time: ${spells[i].castingTime}`
        range[1].textContent = `Range: ${spells[i].range}`
        components[1].textContent = `Components: ${spells[i].components}`
        duration[1].textContent = `Duration: ${spells[i].duration}`
        description[1].textContent = spells[i].description
        spellDropdownItems.classList.remove('show')
        spellDisplay[1].classList.add('show')
    })
    spellDropdownItems.appendChild(a)
}

dropdownBtn[0].addEventListener('click', (e) => {
    if (dropdownBtn[0].textContent === 'Cantrips △') {
        dropdownBtn[0].textContent = 'Cantrips ▽'
        spellName[0].textContent = ''
        castingTime[0].textContent = ''
        range[0].textContent = ''
        components[0].textContent = ''
        duration[0].textContent = ''
        description[0].textContent = ''
        spellDisplay[0].classList.remove('show')
    } else if (dropdownItems.classList.contains('show')) {
        dropdownItems.classList.remove('show')
    } else {
        dropdownItems.classList.add('show')
    }
})

dropdownBtn[1].addEventListener('click', (e) => {
    if (dropdownBtn[1].textContent === 'Spells △') {
        dropdownBtn[1].textContent = 'Spells ▽'
        spellName[1].textContent = ''
        castingTime[1].textContent = ''
        range[1].textContent = ''
        components[1].textContent = ''
        duration[1].textContent = ''
        description[1].textContent = ''
        spellDisplay[1].classList.remove('show')
    } else if (spellDropdownItems.classList.contains('show')) {
        spellDropdownItems.classList.remove('show')
    } else {
        spellDropdownItems.classList.add('show')
    }
})

window.onclick = ((e) => {
    if (!e.target.matches('.dropdown-btn')) {
        spellDropdownItems.classList.remove('show')
        dropdownItems.classList.remove('show')
    }
})

character.attributes.forEach(attribute => {
    let currentAttribute = document.querySelector(`.${attribute.title}`)
    let h4 = document.createElement('h4')
    let h5 = document.createElement('h5')
    h4.classList.add('val')
    h5.classList.add('mod')
    currentAttribute.textContent = attribute.title.toUpperCase()
    h4.textContent = attribute.value
    currentAttribute.appendChild(h4)

    if (attribute.mod[0] === '-') {
        h5.textContent = attribute.mod
    } else {
        h5.textContent = `+ ${attribute.mod}`
    }
    currentAttribute.appendChild(h5)
})

const inventory = document.querySelector('.inventory')
const gold = document.querySelector('.gold')

character.inventory.forEach(item => {
    let li = document.createElement('li')
    li.textContent = item
    inventory.appendChild(li)
})

gold.textContent = character.coin