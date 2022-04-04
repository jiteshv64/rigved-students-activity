import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  employee = {id: 1, name: "Alex", salary: 35000}
}
