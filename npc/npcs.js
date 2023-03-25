const Adventurer = require('../character/adventurer.js')
const { DefaultGear } = require('../gear/default_gear')
const Wizard = require('../character/wizard.js')
const { dark_staff,
    dark_wizard_hat,
    dark_wizard_pants,
    dark_wizard_robe,
    light_book,
    light_wizard_hat,
    light_wizard_pants,
    light_wizard_robe,
    light_staff,
    wizard_blade,
    evil_book } = require('../gear/wizard_gear')

class Npc extends Adventurer {
    constructor(name, gear, className) {
        super(name, className)
        this.gear = gear
    }
}



const npcAGear = new DefaultGear();
const darkWizardGear = new DefaultGear(dark_wizard_hat, dark_wizard_robe,)
const guardGear = new DefaultGear('Steel Helmet', 'Steel Torso', 'Steel Leggings', 'Steel GreatSword', null, true)


const npc1 = new Npc('Bob', npcAGear)
const npc2 = new Npc('Jill', npcAGear)
const guard1 = new Npc('Jack', guardGear, new Wizard())
