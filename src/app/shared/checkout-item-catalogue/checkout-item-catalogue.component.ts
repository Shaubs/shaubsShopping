import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'checkout-item-catalogue',
  templateUrl: './checkout-item-catalogue.component.html',
  styleUrls: ['./checkout-item-catalogue.component.scss']
})
export class CheckoutItemCatalogueComponent implements OnInit {

  constructor() { }
  Items = [1, 2, 3]
  @Output() totalPrice = new EventEmitter<number>();

  ngOnInit(): void {
  }

  delete(item: number) {
    this.Items.splice(item, 1)
    this.totalPrice.emit(900)

  }

}
