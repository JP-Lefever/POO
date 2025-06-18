/* Fighter class definition */
const MAX_LIFE = 100

export class Fighter{
    constructor(name, strength, dexterity, life){
        this.name =   name ;
        this.strength  =  strength;
        this.dexterity = dexterity ;
        this.life = MAX_LIFE;
    }

    fight(Fighter){

        let damage = Math.floor(1 + Math.random() * this.strength) - Fighter.dexterity
       
        
        if(damage < 0){
            damage = 0
        }
       
        Fighter.life = Fighter.life - damage
        
        return Fighter.life

    }
}

