function test1(a:number, b?:number, c?:number) {
  document.write(`<p>a = ${a}, b = ${b}, c = ${c}</p>`)
}

test1(20);
test1(20,30);
test1(20,30,40);

// here user has last option as an optional property
let user : {firstname: string, lastname?: string, phone: number};

user = {firstname : "Alex", phone: 999912};
document.write(`<p>Name : ${user.firstname}, phone : ${user.phone}</p>`);