/// <reference path="../typings/index.d.ts" />

class Main{
    public parking : Parking;
    public vehicules : Array<string>;

    constructor(){
        console.log("Main Controller");
        this.parking = new Parking();
        this.populateSelect();
    }

    public add = ()=>{
        this.parking.add(new Voiture(1, "red"));
        this.showVehiculesInParking();
    }

    showVehiculesInParking(){
        let template = $("#li-template").html();
        var templateScript = Handlebars.compile(template);
        var context = {"vehicules" : this.parking.vehicules};
        var html = templateScript(context);
        $("#vehicules").html(html);
    }

    populateSelect(){
        let template = $("#li-template").html();
        var templateScript = Handlebars.compile(template);
        var context = { "vehicules" : [
            {"vehicule" : "Voiture"},
            {"vehicule" : "Moto"},
            {"vehicule" : "Camion"}
        ]};

        var html = templateScript(context);
        $(html).insertBefore("div:first");
    }

    onChange(){
        console.log("onChange");
    }
}

document.addEventListener("DOMContentLoaded", function(){
    var main = new Main();
    var select = $("select");
    var button = $("button");

    select.on("change", main.onChange);
    button.on("click", main.add);
});