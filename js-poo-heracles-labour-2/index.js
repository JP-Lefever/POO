import { Fighter } from "./src/Fighter.js";
import { Weapon } from "./src/Weapon.js";
import { Shield } from "./src/Shield.js";

//**Create weapon */
const sword = new Weapon("Sword" , 10)
const shield = new Shield(10)
/** Create Heracles  */
const heracles = new Fighter(" Heracles", 20, 6, sword, shield);

/** Create the opponent  */
const boar = new Fighter("Erymanthian Boar", 25, 12);



/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} Attack  ${fighter2.name} Life ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1,
    loser: fighter2,
  } : {
    winner: fighter2,
    loser: fighter1
  };
};



 let round = 1
 while (heracles.isAlive() && boar.isAlive()){
 console.log(`round: ${round}`)

heracles.fight(boar)
 console.log(roundDisplay(heracles, boar))
 boar.fight(heracles)
console.log(roundDisplay(boar, heracles))

 round++

 }

 const result = score(heracles, boar)

 console.log(`${result.loser.name} is dead`)
 console.log( `${result.winner.name} Win, life : ${result.winner.life}`)