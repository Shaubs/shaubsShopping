import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
  AddressForm = new FormGroup({});
  AddressComponents = [];
  formInputTypes = ['string', 'email', 'string', 'number', 'string', 'number'];
  formErrorMessages = ['required', 'need valid email', 'required', 'required', 'required', 'required'];
  formButton = 'Ship It';
  Price: number;
  TakeAddress: boolean = false;
  shipItClicked: boolean = false;

  constructor() { }
  totalPrice(event) {
    this.Price = event.value
  }
  ngOnInit(): void {
    console.log(this.totalPrice)
    this.AddressForm = new FormGroup(
      {
        Name: new FormControl('', [Validators.required]),
        EmailID: new FormControl('', [Validators.required, Validators.email]),
        Address: new FormControl('', [Validators.required]),
        PinCode: new FormControl('', [Validators.required, Validators.minLength(6)]),
        City: new FormControl('', [Validators.required]),
        Phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      }
    )
    this.AddressComponents = Object.keys(this.AddressForm.value)
    console.log(this.AddressComponents)
  }

  shipItButton() {
    this.shipItClicked = true;
    setTimeout(() => {
      this.TakeAddress = true;
    }, 800);

  }

}
