import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userList = 
  [
    {
      name:"Alex", gender: "Male", address: {state:"KA", city:"BLR"}
    },
    {
      name:"Jennifer", gender: "Female", address: {state:"MH", city:"MBI"}
    },
    {
      name:"Zaheer", gender: "Male", address: {state:"MH", city:"PUN"}
    }
  ]
}
