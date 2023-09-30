function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
class Killer{

    constructor(name,hp){
        this.name=name
        this.hp=hp
    }
    
        
    attack(adversaire){
    while(this.hp>=100){
        
        let randomProba2 = getRandomInt(3)

        if (randomProba2===1){
            console.log(adversaire.name+" est mort")
            break
        }
    }   if (randomProba2=2){
        console.log(adversaire.name+" esquive et inflige 10 degats au tueur")
        this.hp-=10
        console.log(this.name+" a maintenant "+this.hp+" hp")
        }
        if (this.hp<=0){
            console.log(this.name+" est mort")
        }
        if(randomProba2=3){
            this.hp-=15
            console.log(adversaire.name+" meurt mais inflige 15 degats au tueur") 
            console.log(this.name+" a maintenant "+this.hp+" hp") 
             
        }
}}

class Character{
    constructor(name,characteristic,luck){
        this.name=name
        this.characteristic=characteristic
        this.luck=luck

    }
    isluck(){
        if(Math.random()<=this.luck){
            return true
        }
        else{
            return false
        }
}}
let characteristics=["nerd","blonde","sportif","populaire","chanteur"]
let proba=[0.33333,0.33333,0.333333]
let Names=["Tom","Thomas","Solene","Walid","lou","Martin"]
let proba2=[1,2,3]
var randP2 = Math.floor(Math.random()*proba2.length)
var randomProba2 = proba2[randP2]

var randC = Math.floor(Math.random()*characteristics.length)
var randomCharacteristiques = characteristics[randC]
characteristics.splice(randC, 1)
var randN = Math.floor(Math.random()*Names.length)
var randomNames = Names[randN]
Names.splice(randN, 1)
var randP = Math.floor(Math.random()*proba.length)
var randomProba = proba[randP]
let Perso1= new Character(randomNames,randomCharacteristiques,randomProba)
console.log(Perso1)

var randC = Math.floor(Math.random()*characteristics.length)
var randomCharacteristiques = characteristics[randC]
characteristics.splice(randC, 1)
var randN = Math.floor(Math.random()*Names.length)
var randomNames = Names[randN]
Names.splice(randN, 1)
var randP = Math.floor(Math.random()*proba.length)
var randomProba = proba[randP]
let Perso2= new Character(randomNames,randomCharacteristiques,randomProba)
console.log(Perso2)

var randC = Math.floor(Math.random()*characteristics.length)
var randomCharacteristiques = characteristics[randC]
characteristics.splice(randC, 1)
var randN = Math.floor(Math.random()*Names.length)
var randomNames = Names[randN]
Names.splice(randN, 1)
var randP = Math.floor(Math.random()*proba.length)
var randomProba = proba[randP]
let Perso3= new Character(randomNames,randomCharacteristiques,randomProba)
console.log(Perso3)

var randC = Math.floor(Math.random()*characteristics.length)
var randomCharacteristiques = characteristics[randC]
characteristics.splice(randC, 1)
var randN = Math.floor(Math.random()*Names.length)
var randomNames = Names[randN]
Names.splice(randN, 1)
var randP = Math.floor(Math.random()*proba.length)
var randomProba = proba[randP]
let Perso4= new Character(randomNames,randomCharacteristiques,randomProba)
console.log(Perso4)

var randC = Math.floor(Math.random()*characteristics.length)
var randomCharacteristiques = characteristics[randC]
characteristics.splice(randC, 1)
var randN = Math.floor(Math.random()*Names.length)
var randomNames = Names[randN]
Names.splice(randN, 1)
var randP = Math.floor(Math.random()*proba.length)
var randomProba = proba[randP]
let Perso5= new Character(randomNames,randomCharacteristiques,randomProba)
console.log(Perso5)



let Jason= new Killer("Jason",100)

Jason.attack(Perso1)
if (Jason.hp>=0){
    Jason.attack(Perso2)
}
if (Jason.hp>=0){
    Jason.attack(Perso3)
}
if (Jason.hp>=0){
    Jason.attack(Perso4)
}
if (Jason.hp>=0){
    Jason.attack(Perso5)
}
if (Jason.hp>=0){
   console.log("Jason aa tuée tous le monde")
}
