import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  items : undefined | any [] = undefined;

  constructor(public service : ProfileService) { }

  ngOnInit(): void {
    this.items = this.service.getProfile();
  }

}
