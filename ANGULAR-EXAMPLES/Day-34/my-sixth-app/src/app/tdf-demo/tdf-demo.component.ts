import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-demo',
  templateUrl: './tdf-demo.component.html',
  styleUrls: ['./tdf-demo.component.css']
})
export class TdfDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // this must send form data to the backend but we can print them in console
  formSubmit(formValue: any): void {
    console.log(formValue);
  }
}
