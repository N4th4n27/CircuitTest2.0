import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-dietac',
  templateUrl: './dietac.component.html',
  styleUrls: ['./dietac.component.css']
})
export class DietacComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }
  navigate = () => {

    this._router.navigate(['/calculad'])

  }
}
