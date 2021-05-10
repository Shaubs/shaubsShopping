import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'company-navbar',
  templateUrl: './company-navbar.component.html',
  styleUrls: ['./company-navbar.component.scss']
})
export class CompanyNavbarComponent implements OnInit {

  constructor(private route: Router) { }
  @Input('navbarLinks') navbarLinks = []
  ngOnInit(): void {
  }
  routeToPage(link: string) {
    this.route.navigateByUrl(link)
  }
}
