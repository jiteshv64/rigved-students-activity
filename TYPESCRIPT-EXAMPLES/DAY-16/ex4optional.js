function test1(a, b, c) {
    document.write("<p>a = ".concat(a, ", b = ").concat(b, ", c = ").concat(c, "</p>"));
}
test1(20);
test1(20, 30);
test1(20, 30, 40);
// here user has last option as an optional property
var user;
user = { firstname: "Alex", phone: 999912 };
document.write("<p>Name : ".concat(user.firstname, ", phone : ").concat(user.phone, "</p>"));
