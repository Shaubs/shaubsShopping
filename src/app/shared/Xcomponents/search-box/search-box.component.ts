import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  search: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  searching() {
    this.search = !this.search
  }
}
