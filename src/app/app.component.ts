import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mobile: boolean = false;
  menu: boolean = false;
  iconSpin: boolean = false;
  MenuOptions = [{ 'name': 'Customer Care', 'url': '' }, { 'name': 'Wallet', 'url': '' }, { 'name': 'Live Events', 'url': '' }]
  ngOnInit() {
    console.log(window.screen.width)
    if (window.screen.width <= 545) { // 545px portrait
      this.mobile = true;
    }
    console.log(this.mobile)
  }
  menuClicked() {
    this.iconSpin = true;
    setTimeout(() => {
      this.menu = !this.menu; this.iconSpin = false;
    }, 1050);

  }

}
