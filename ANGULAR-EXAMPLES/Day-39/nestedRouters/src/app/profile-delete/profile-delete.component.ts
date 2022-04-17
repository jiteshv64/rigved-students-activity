import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-delete',
  templateUrl: './profile-delete.component.html',
  styleUrls: ['./profile-delete.component.css']
})
export class ProfileDeleteComponent implements OnInit {

  constructor(private service : ProfileService, private _router : Router) { }

  ngOnInit(): void {
  }

  id : FormControl = new FormControl('');
  deleteProfile() {
    this.service.deleteProfile(this.id.value);
    // this._router.navigate(["/profileList"]);
    alert("Your profile has been reomved!")
  }

}