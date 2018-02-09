
class Voiture extends Vehicule implements IParkable{
    constructor(id:number, color:string){
        super(id, color);
    }
    
    isParked():boolean{
        return true;
    }

}
