var Emp1 = /** @class */ (function () {
    function Emp1(id, name) {
        this.id = id;
        this.name = name;
    }
    //accessible outside the class
    Emp1.prototype.display = function () {
        document.write("<p>Id: ".concat(this.id, ", Name: ").concat(this.name, "</p>"));
    };
    Emp1.prototype.getId = function () {
        return this.id;
    };
    Emp1.prototype.setName = function (name) {
        this.name = name;
    };
    return Emp1;
}());
var e1 = new Emp1(100, "Rajesh");
var e2 = new Emp1(100, "Raj");
e1.display();
e2.display();
