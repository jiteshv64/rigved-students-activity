import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  constructor(private _service: AccountService) { }

  ngOnInit(): void {
  }

  data: any | undefined=undefined

  _id = new FormControl('')
  handleGet(id:number){
    // console.log(id);
    this._service.deleteUser(id).subscribe((m)=>{
      this.data = m;
    })
  }

}
