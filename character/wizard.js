

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
            throw new Error('user already knows that spell');
        }
    }
    addDebuff(debuff) {
        if (!this.debuffs[debuff.name]) {
            let name = debuff.name
            this.debuffs[name] = debuff;
        } else {
            throw new Error('user already has that debuff');
        }
    }
    //todo
    addBuff(buff) {
        if (!this.buffs[buff.name]) {
            let name = buff.name
            this.buffs[name] = buff;
        } else {
            throw new Error('user already has that buff');
        }
    }
    //todo
    addFamiliar(familiar) {
        if (this.familiar === null) {
            this.familiar = familiar;
        } else {
            throw new Error('user already has a familiar');
        }

    }

    removeSpell(spell) {
        let name = spell.name;
        if (this.spells[name]) {
            delete this.spells[name];
        } else {
            throw new Error('User does not know that spell')
        }
    }

    removeDebuff(debuff) {
        let name = debuff.name;
        if (this.debuffs[name]) {
            delete this.debuffs[name];
        } else {
            throw new Error('User does not have that debuff')
        }
    }

    removeBuff(buff) {
        let name = buff.name;
        if (this.buffs[name]) {
            delete this.buffs[name];
        } else {
            throw new Error('User does not have that buff')
        }

    }

    removeFamiliar() {
        if (this.familiar !== null) {
            this.familiar = null;
        } else {
            throw new Error('User does not have that familiar')
        }
    }

}

// let test = new Wizard()

// let fire = { name: 'fire', description: 'shoots fire' }

// test.addFamiliar(fire)
// console.log(test)
// test.removeFamiliar(fire)

// console.log(test)



module.exports = Wizard;
