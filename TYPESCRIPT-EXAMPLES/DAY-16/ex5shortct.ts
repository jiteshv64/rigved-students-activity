class Student {
  constructor(public name: string, public age: number){}
  display(): void {
    document.write(`<p>Name : ${this.name}, Age : ${this.age}</p>`);
  }
}

let s1 = new Student("Bruce", 30);
s1.display();