import { Component, OnInit } from '@angular/core';
// import {";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  revealed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  reveal() {
    this.revealed = !this.revealed;

  }

}
