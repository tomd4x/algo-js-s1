class Character{
    constructor(name,sanity){
        this.name=name
        this.sanity=sanity
}
 Trajet(musics) {
    let numbersChangeTaxi=0
    let redLightsNumbers=0
    while(redLightsNumbers<30 && this.sanity>0){
        redLightsNumbers+=1
        let rand = Math.floor(Math.random()*playList.length)
        let randomMusic = playList[rand]
        console.log(randomMusic+" passe a la radio")
        console.log(this.name+"est au "+redLightsNumbers+"eme feux")
        if(randomMusic=="Anissa-Wejdene"){
            this.sanity-=1
            numbersChangeTaxi+=1
            console.log("Anissa est passée")
        }
        if(this.sanity===0){
            console.log(this.name + " na plus de santée mentale il était au "+ redLightsNumbers+"eme feux")
            break
        }
        if(redLightsNumbers===30){
            console.log(this.name + " a reussi son trajet et il a changé de taxi "+ numbersChangeTaxi+" fois")
            break
        }



    }
    
}


}
let John= new Character("John",10)
let playList=["Opaque-Maes","Anissa-Wejdene","VSS-Ninho","Sayan-Angele","DIE-Gazo"]

John.Trajet(playList)
