
// type Character = {
//    name: string,
//    cartoon: string,
//    phrase?: string,
//    age?: number
// }

type Character = {
   [key :string]: string
}

const homer: Character = {
   name: "Homer Simpson",
   cartoon: "The Simpsons"
}

homer["phrase"] = "Moe, me vê mais uma Duff Beer!"
homer.age = "37"
homer.car = "Rosa"

console.log(homer);