class Pokemons{
    constructor(name,atck,defense,hp,luck){
        this.name=name
        this.atck=atck
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }

    attackPokemon(adversaire){
        if (this.isluck()==true){
            adversaire.hp-=this.atck-adversaire.defense
            console.log(adversaire.hp+" a de hp "+adversaire.name)    

        }
        else{console.log(this.name+" rate son attaque")

        }
        
    }
    isluck(){
        if(Math.random()<=this.luck){
            return true
        }
        else{
            return false
        }
        
    }

}
let pickachu= new Pokemons("pickachu",60,30,180,0.7)


let dracaufeu= new Pokemons("dracaufeu",55,40,110,0.9)


console.log(dracaufeu)
console.log(pickachu)

while(pickachu.hp>=0 && dracaufeu.hp>0){
     pickachu.attackPokemon(dracaufeu)
     if(dracaufeu.hp<=0){
        console.log("pickachu a gagne")
        break
    }
     dracaufeu.attackPokemon(pickachu)
     if(pickachu.hp<=0){
        console.log("dracaufeu a gagne")
        break
     }


}

 