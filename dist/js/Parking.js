var Parking = (function () {
    function Parking() {
        this.vehicules = new Array();
        this._count = 0;
    }
    Object.defineProperty(Parking.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            this._count = value;
        },
        enumerable: true,
        configurable: true
    });
    Parking.prototype.add = function (vehicule) {
        this.vehicules.push(vehicule);
        console.log(this.vehicules);
    };
    return Parking;
}());
