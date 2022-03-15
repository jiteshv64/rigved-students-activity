class Emp1 {
  private readonly id : number; //it can be accessed only within class
  private name : string;
  constructor(id : number, name : string) {
    this.id = id;
    this.name = name;
  }
  //accessible outside the class
  public display() : void {
    document.write(`<p>Id: ${this.id}, Name: ${this.name}</p>`)
  }
  public getId() : number {
    return this.id;
  }
  public setName(name: string) : void {
    this.name = name;
  }
}

let e1 = new Emp1(100, "Rajesh");
let e2 = new Emp1(100, "Raj");
e1.display();
e2.display();