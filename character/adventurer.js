const defaultGear = require('../gear/default_gear')
const Wizard = require('./wizard');
const Archer = require('./archer');
const Warrior = require('./warrior');
const Stats = require('./stats');

class Adventurer {
    constructor(name, className) {
        this.name = name;
        this.stats = new Stats();
        this.gear = defaultGear;
        this.className = className
    }
    //allow user to change name if they pay $1.00
    changeName(newName) {
        this.name = newName;
    }
    //instance method to change level, add a pay wall
    levelUp() {
        this.stats.level++
        this.stats.health += 5;
    }

    levelSkill(skillname) {
        this.stats[skillname]++;
        console.log(`Congrats! You are now level ${this.stats[skillname]} in ${skillname}`)
    }

}


const anthony = new Adventurer('Anthony', Wizard);
// const ryan = new Adventurer('Ryan', Archer)

console.log(anthony.stats)
