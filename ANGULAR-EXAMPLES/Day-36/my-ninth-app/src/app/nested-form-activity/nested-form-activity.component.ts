import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form-activity',
  templateUrl: './nested-form-activity.component.html',
  styleUrls: ['./nested-form-activity.component.css']
})
export class NestedFormActivityComponent implements OnInit {

  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
  }


  profile = this.builder.group({
    firstname : ['', Validators.compose([
      Validators.minLength(4), Validators.required
    ])],
    lastname : ['',Validators.compose([
      Validators.minLength(4), Validators.required
    ])],
    address : this.builder.group({
      city : ['', [Validators.required, Validators.minLength(1)]],
      state : ['', [Validators.required, Validators.minLength(1)]],
      pincode : ['', Validators.compose([
        Validators.maxLength(6), Validators.minLength(1), Validators.required
      ])]
    }),
  });

  handleSubmit() {
    console.log(this.profile.value);
    this.profile.reset({});
  }

}
