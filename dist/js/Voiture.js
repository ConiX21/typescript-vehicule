var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Voiture = (function (_super) {
    __extends(Voiture, _super);
    function Voiture(id, color) {
        return _super.call(this, id, color) || this;
    }
    Voiture.prototype.isParked = function () {
        return true;
    };
    return Voiture;
}(Vehicule));
