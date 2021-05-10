import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-catalogue',
  templateUrl: './imageCatalogue.component.html',
  styleUrls: ['./imageCatalogue.component.scss']
})
export class ImageCatalogueComponent implements OnInit {

  constructor() { }

  @Input('categories') categories: Array<any> = [];
  ngOnInit(): void {
  }

}
