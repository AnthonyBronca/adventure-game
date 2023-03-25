const Account = require('../account/account.js')
const { defaultGear } = require('../gear/default_gear')
const Wizard = require('./wizard');
const Archer = require('./archer');
const Warrior = require('./warrior');
const Stats = require('./stats');

class Adventurer {
    constructor(name, className) {
        this.name = name;
        this.stats = new Stats();
        this.gear = defaultGear;
        this.className = className || null
    }
    //allow user to change name
    changeName(newName) {
        this.name = newName;
    }
    //instance method to change level, add a pay wall
    levelUp() {
        this.stats.combatlevel++
        this.stats.health++;
    }

    levelSkill(skillname) {
        this.stats[skillname]++;
        console.log(`Congrats! You are now level ${this.stats[skillname]} in ${skillname}`)
    }

}

const Anthony = new Account('anthony_b', 'bronca@gmail.com', 'strong_password')
Anthony.setBank('main_bank', 123456789, 987654321, 2_000)
Anthony.setCharacter(new Adventurer('Apollo', Wizard))

const apollo = Anthony.character
// apollo.changeName('Apollo Archery')
console.log(Anthony)
// const ryan = new Adventurer('Ryan', Archer)
module.exports = Adventurer
