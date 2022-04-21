import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-find-one-account',
  templateUrl: './find-one-account.component.html',
  styleUrls: ['./find-one-account.component.css']
})
export class FindOneAccountComponent implements OnInit {

  constructor(private _service:AccountService) { }

  ngOnInit(): void {
  }
  data: any | undefined = undefined;

  _id = new FormControl('');

  handleGet(id:number){
    this._service.getOneUser(id).subscribe((m) => {
      this.data = m;
    });
  }

}
