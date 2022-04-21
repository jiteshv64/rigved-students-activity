import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-find-all-account',
  templateUrl: './find-all-account.component.html',
  styleUrls: ['./find-all-account.component.css']
})
export class FindAllAccountComponent implements OnInit {
  users: any[] | undefined = undefined;

  constructor(private _service: AccountService) { }

  ngOnInit(): void {
  }

  handleClick(): void {
      this._service.getUsers().subscribe((data) => {
        this.users = data;
      });
    }
 
}
