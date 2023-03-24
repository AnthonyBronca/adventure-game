

class Wizard {
    constructor(
        spells = {},
        familiar = null,
        buffs = {},
        debuffs = {},
    ) {
        this.spells = spells;
        this.familiar = familiar;
        this.buffs = buffs;
        this.debuffs = debuffs;

    }
    addSpell(spell) {
        if (!this.spells[spell.name]) {
            let name = spell.name
            this.spells[name] = spell;
        } else {
            Error('user already knows that spell');
        }
    }
    addDebuff(debuff) {
        if (!this.debuffs[debuff.name]) {
            let name = debuff.name
            this.debuffs[name] = debuff;
        } else {
            Error('user already has that debuff');
        }
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
