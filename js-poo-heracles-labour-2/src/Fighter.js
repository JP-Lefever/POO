const MAX_LIFE = 100;

export class Fighter {
    constructor(name, strength, dexterity, weapon=null, shield=null) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        this.weapon = weapon
        this.shield = shield
    }


    // Launch a fight
    fight(defender) {
        const attackPoints = this.getRandomInt(this.getDamage(this.strength, this.weapon));
        const damages = Math.max(attackPoints - this.getDefense(defender.dexterity, defender.shield), 0);
        console.log(damages)

        defender.life = Math.max(defender.life - damages, 0);
    }


    // Generate a random value between 1 and max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    // Determine if a fighter is still alive
    isAlive() {
        return this.life > 0;
    }

    getDamage(strength, weapon){

        return weapon ? strength + weapon.damage : strength
    }

    getDefense(dexterity, shield){

        return shield ?  dexterity + shield.protection : dexterity
    }
}


