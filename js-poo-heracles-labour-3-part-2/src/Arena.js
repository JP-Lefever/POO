class Arena {
  constructor(size, monsters, hero) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }

  getDistance(fighter1, fighter2){

    const dist = Math.sqrt(Math.pow((fighter2.x - fighter1.x),2) + Math.pow((fighter2.y - fighter1.y), 2))
    return dist.toFixed(2)
  }

  isTouchable(fighter, defender){
    
    return this.getDistance(fighter, defender) <= fighter.getRange() 
  } 
}