class Arena {
  constructor(hero, monsters, size = 10, message) {
    this.hero = hero
    this.monsters = monsters
    this.size = size
    this.message = message
  }

  getDistance(fighter1, fighter2) {
    return Math.sqrt(Math.pow(fighter2.x - fighter1.x, 2) + Math.pow(fighter2.y - fighter1.y, 2)).toFixed(2)
  }

  isTouchable(attacker, defender) {
    return this.getDistance(attacker, defender) <= attacker.getRange()
  }

  // Hero movement managment
  // Gestion du déplacement du héros
  move(direction) {

   let y = this.hero.y;
    let x = this.hero.x;

    if (direction === "N") this.hero.y -= 1;
    if (direction === "S") this.hero.y += 1;
    if (direction === "E") this.hero.x -= 1;
    if (direction === "W") this.hero.x += 1;

    if(!this.isOutOfMap(this.hero.x, this.hero.y)){
      this.message = "Deplacement hors de la carte impossible"
    }
    else if(this.isNotAvailble(this.hero.x, this.hero.y)){
      this.message = "Deplacement sur une case déjà occupée impossible"
    } else {
      return {x, y}
    }

    document.getElementById("error").innerText = this.message

    this.hero.x = x;
    this.hero.y = y

   
    return this.hero;
  }

  isOutOfMap(x,y){
    return (x < this.size && x >= 0) && (y < this.size && y >= 0)
  }

  isNotAvailble(x,y){
    return this.monsters.some(monster => (monster.x === x && monster.y===y))
  }
}
