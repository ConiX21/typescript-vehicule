class Parking{
    public vehicules : Array<IParkable> = new Array<IParkable>();
    private _count :number = 0;


    constructor(){
        
    }

    set count(value:number) {
        this._count = value;
    }
    get count(): number {
        return this._count;
    }
      
    add(vehicule:IParkable){
        this.vehicules.push(vehicule);
        console.log(this.vehicules)
    }
}