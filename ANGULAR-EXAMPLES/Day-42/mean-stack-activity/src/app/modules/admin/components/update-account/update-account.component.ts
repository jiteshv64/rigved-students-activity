import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css'],
})
export class UpdateAccountComponent implements OnInit {
  constructor(private _service: AccountService) {}


  data: any | undefined = undefined;
  users: any  | undefined = undefined;
  id = new FormControl('');
  salary = new FormControl('');

  handleUpdate(){
    let id = this.id.value;
    let salary = this.salary.value;
    this._service.updateUser(id,salary,this.data).subscribe((data) =>{
      this.users = data
    })
  }
  
  ngOnInit(): void {}

  
}
