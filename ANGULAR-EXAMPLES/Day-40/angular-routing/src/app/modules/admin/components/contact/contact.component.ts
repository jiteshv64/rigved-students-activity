import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private auth : AuthService) { }

  ngOnInit(): void {
  }

  // profileForm: new FormGroup = this.builder.group({
  //   fullname: ['', Validators.required],
  //   email: ['', Validators.required],
  //   subjects: ['', Validators.required],
  //   message: ['', Validators.required],
  // });

  profileForm = new FormGroup({
    fullname: new FormControl ('', Validators.required),
    email: new FormControl ('', Validators.required),
    subjects: new FormControl ('', Validators.required),
    message: new FormControl ('', Validators.required),
  });

  saveForm() {
    this.auth.saveProfile(this.profileForm.value);
    console.log(this.profileForm.value);
  }

}
