import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  name : string | undefined = undefined;

  constructor(private _activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parameter : Params) => {
      this.name = parameter['name']
    });
  }

}
