import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-store-account',
  templateUrl: './store-account.component.html',
  styleUrls: ['./store-account.component.css'],
})
export class StoreAccountComponent implements OnInit {
  constructor(
    private _service: AccountService,
    private _builder: FormBuilder
  ) {}

  ngOnInit(): void {}

  info: any | undefined = undefined;

  userForm: FormGroup = this._builder.group({
    _id: [''],
    name: [''],
    salary: [''],
    address : this._builder.group({
    state: [''],
    city: [''],
    pincode: [''],
    })
    
  });

  handleSubmit() {
    this._service.storeUser(this.userForm.value).subscribe(
      (data) => {
        this.info = data;
      },
      (errors) => {
        console.log(errors?.error.message);
      }
    );
  }
}
