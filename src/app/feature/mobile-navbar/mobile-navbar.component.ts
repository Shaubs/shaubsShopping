import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent implements OnInit {

  activeUrl: string;

  constructor(private route: Router) { }
  tabs = [{ 'name': 'Shaubs', 'url': '/home', 'icon': 'S', 'active': false, 'color': 'black' },
  { 'name': 'Favorites', 'url': '/favorites', 'icon': 'favorite', 'active': false, 'color': 'black' },
  { 'name': 'MyOrders', 'url': '/myOrders', 'icon': 'list', 'active': false, 'color': 'black' },
  { 'name': 'MyBag', 'url': '/bag', 'icon': 'shopping_bag', 'active': false, 'color': 'black' },]

  ngOnInit(): void {
  }
  select(selectedtab: string) {
    this.tabs.forEach((tab) => {
      console.log(tab.name, selectedtab)
      if (tab.name === selectedtab) {
        tab.active = true;
        tab.color = 'white';
        this.activeUrl = tab.url;
        this.route.navigateByUrl(this.activeUrl)
      }
      else {
        tab.active = false;
        tab.color = 'black';
      }
    });


  }
}
