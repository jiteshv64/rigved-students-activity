import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-login',
  templateUrl: './profile-login.component.html',
  styleUrls: ['./profile-login.component.css']
})
export class ProfileLoginComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  username = new FormControl('');
  handleLogin() {
    let name = this.username.value;
    this._router.navigate(['/store']); 
    console.log(name);

    sessionStorage.setItem('un', name);
  }

}
