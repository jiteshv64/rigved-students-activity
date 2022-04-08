import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(formValue: any) : void {
    console.log(formValue);
  }
  
  qualifications = [
    {id: 1, name: 'BE'},
    {id: 2, name: 'MBA'},
    {id: 3, name: 'MTECH'},
    {id: 4, name: 'BSC'}
  ];

  
}
