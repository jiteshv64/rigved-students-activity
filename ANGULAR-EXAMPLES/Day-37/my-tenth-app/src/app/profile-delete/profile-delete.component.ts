import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-delete',
  templateUrl: './profile-delete.component.html',
  styleUrls: ['./profile-delete.component.css']
})
export class ProfileDeleteComponent implements OnInit {

  constructor(private service : ProfileService) { }

  ngOnInit(): void {
  }

  id : FormControl = new FormControl('');
  deleteProfile() {
    this.service.deleteProfile(this.id.value);
    
  }

}
