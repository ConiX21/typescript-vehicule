var Main = (function () {
    function Main() {
        var _this = this;
        this.add = function () {
            _this.parking.add(new Voiture(1, "red"));
            _this.showVehiculesInParking();
        };
        console.log("Main Controller");
        this.parking = new Parking();
        this.populateSelect();
    }
    Main.prototype.showVehiculesInParking = function () {
        var template = $("#li-template").html();
        var templateScript = Handlebars.compile(template);
        var context = { "vehicules": this.parking.vehicules };
        var html = templateScript(context);
        $("#vehicules").html(html);
    };
    Main.prototype.populateSelect = function () {
        var template = $("#li-template").html();
        var templateScript = Handlebars.compile(template);
        var context = { "vehicules": [
                { "vehicule": "Voiture" },
                { "vehicule": "Moto" },
                { "vehicule": "Camion" }
            ] };
        var html = templateScript(context);
        $(html).insertBefore("div:first");
    };
    Main.prototype.onChange = function () {
        console.log("onChange");
    };
    return Main;
}());
document.addEventListener("DOMContentLoaded", function () {
    var main = new Main();
    var select = $("select");
    var button = $("button");
    select.on("change", main.onChange);
    button.on("click", main.add);
});
