import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control-activity',
  templateUrl: './form-control-activity.component.html',
  styleUrls: ['./form-control-activity.component.css']
})
export class FormControlActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstname = new FormControl('');
  lastname = new FormControl('');

}
