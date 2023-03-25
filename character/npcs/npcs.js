const { DefaultGear } = require('../../gear/default_gear')
const { strawHat, strawPants, strawShirt } = require('../../gear/items')
// console.log(DefaultGear)



class Npc {
    constructor(name, description, gear, hasJob = false) {
        this.name = name;
        this.description = description
        this.hasJob = hasJob;
        this.isTalking = false;

        this.dialogue = {
            'how are you': 'Great Weather?',
            'are you an adventurer': 'I used to be an adventurer like you... but then I took an arrow to the knee.',
            'You look funny': 'You should be completing your quest...'
        }

        this.gear = new DefaultGear(strawHat, strawShirt, strawPants)
    };

}


const marcus = new Npc('Marcus', 'Warrior', true);
marcus.gear.torso.degradeAble()

console.log(marcus)

module.exports = { marcus }
