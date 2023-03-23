

class Wizard {

    #funds = 5
    constructor(
        spells = [],
        familiar = null,
        buffs = {},
        debuffs = {},
    ) {
        this.spells = spells;
        this.familiar = familiar;
        this.buffs = buffs;
        this.debuffs = debuffs;

    }
    //todo
    addSpell() {
        this.#funds = 1
        console.log(this.#funds)
    }
    //todo
    addDebuff() {

    }
    //todo
    addBuff() {

    }
    //todo
    addFamiliar() {

    }
    //todo, add remove for all the methods above ^

}

let test = new Wizard()
test.addSpell()

module.exports = Wizard;
