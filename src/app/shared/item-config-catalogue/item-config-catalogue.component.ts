import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'item-config-catalogue',
  templateUrl: './item-config-catalogue.component.html',
  styleUrls: ['./item-config-catalogue.component.scss']
})
export class ItemConfigCatalogueComponent implements OnInit {

  constructor() { }
  Items = [1, 2, 3, 4, 5, 6, 7, 8];
  ShelfName = 'Socks: for every mood';

  ngOnInit(): void {
  }

}
