"use strict";
var Horses;
(function (Horses) {
    var Horse = /** @class */ (function () {
        function Horse() {
            this.height = 0;
            this.color = "";
            this.name = "";
        }
        return Horse;
    }());
    Horses.Horse = Horse;
    var hasHooves = true;
})(Horses || (Horses = {}));
// referencing object from outside of namespace: Only exported items are available outside the namespace. hashooves is inaccessible 
var horse = new Horses.Horse();
horse.color = "brown";
horse.name = "Francis";
horse.height = 6;
console.log(horse.color);
// we can declare horse again outside of the namepace, out here its in global scope
var Horse = /** @class */ (function () {
    function Horse() {
    }
    return Horse;
}());
//# sourceMappingURL=tsNamespaces.js.map