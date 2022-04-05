import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-name',
  templateUrl: './emp-name.component.html',
  styleUrls: ['./emp-name.component.css']
})
export class EmpNameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  firstname : string | undefined = undefined;
  lastname : string | undefined = undefined;
  array : Array <{fname : string, lname : string}> = []

  save(fn : string, ln : string) : void {
    this.firstname = fn;
    this.lastname = ln;
    let obj = {fname : this.firstname, lname : this.lastname}
    this.array.push(obj)
  }

}
