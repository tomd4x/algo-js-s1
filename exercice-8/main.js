class Pokemons{
    constructor(name,atck,defense,hp){
        this.name=name
        this.atck=atck
        this.defense=defense
        this.hp=hp
    }

    attackPokemon(adversaire){
        adversaire.hp-=this.atck-adversaire.defense
    }

}
let pickachu= new Pokemons("pickachu",60,30,180)


let dracaufeu= new Pokemons("dracaufeu",55,40,110)


console.log(dracaufeu)
console.log(pickachu)

while(pickachu.hp>=0 && dracaufeu.hp>0){
     pickachu.attackPokemon(dracaufeu)
     console.log(dracaufeu.hp+" a de hp dracaufeu")
     if(dracaufeu.hp<=0){
        console.log("pickachu a gagne")
        break
    }
     dracaufeu.attackPokemon(pickachu)
     console.log(pickachu.hp+" a de hp pickachu")
     if(pickachu.hp<=0){
        console.log("dracaufeu a gagne")
        break
     }


}

 