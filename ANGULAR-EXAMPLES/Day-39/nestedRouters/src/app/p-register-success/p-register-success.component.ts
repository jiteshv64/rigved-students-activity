import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-p-register-success',
  templateUrl: './p-register-success.component.html',
  styleUrls: ['./p-register-success.component.css']
})
export class PRegisterSuccessComponent implements OnInit {
  // profileId : number | undefined = undefined;
  n : string | undefined = undefined;

  constructor(private _ar : ActivatedRoute) { }

  ngOnInit(): void {
    // this._ar.params.subscribe((p: Params) => {
    //   this.profileId = p['pid'] 
    // });

    this._ar.params.subscribe((p: Params) =>{
      this.n = p['name']
    });
  }

}
