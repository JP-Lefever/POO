// First Labour : Heracles vs Nemean Lion
// use your Figher class here
import { Fighter } from "./src/Fighter.js";


const Heracles = new Fighter(" Heracles", 20, 6)
const Nemean = new Fighter("Lion", 11, 13)




let round = 1

while (Heracles.life > 0 || Nemean.life > 0){

    Heracles.fight(Nemean)
    console.log(`Round : ${round}, ${Heracles.name} attack ${Nemean.name}, Heracles life : ${Heracles.life}, Nemean Life : ${Nemean.life}`)
    Nemean.fight(Heracles)
    console.log(`Round : ${round}, ${Nemean.name} attack ${Heracles.name}, Heracles life : ${Heracles.life}, Nemean Life : ${Nemean.life}`)

    if (Heracles.life <= 0){
        console.log("Nemean Win, Heracles die")
        break
    } if (Nemean.life <= 0){
          console.log("Heracles Win, Nemean die")
          break
    }
    round ++
}