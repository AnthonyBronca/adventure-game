const Levels = require('./levels/levels')


class Stats {
    constructor() {
        this.combatLevel = new Levels(3);
        this.health = new Levels(10);
        this.mana = new Levels(10);
        this.stamina = new Levels(10);
        this.attack = new Levels();
        this.defense = new Levels();
        this.magic = new Levels();
        this.range = new Levels();
        this.fishing = new Levels();
        this.cooking = new Levels();
    }
}


module.exports = Stats
