import { Component, OnInit } from '@angular/core';
import { IshopCard } from "../../../models/IshopCard.model";
import { Inavbar } from "../../../models/navbar.model";

@Component({
  selector: 'bagBig-shop-front',
  templateUrl: './bagBig-shop-front.component.html',
  styleUrls: ['./bagBig-shop-front.component.scss']
})
export class bagBigShopFrontComponent implements OnInit {

  constructor() { }
  img_video_src = '';// '../../../assets/bannerSummer2.jpg';
  isVideo: boolean = false;
  categories: Array<IshopCard> = [];
  navBar: Array<Inavbar> = [{ title: 'About Us', link: '/home' },
  { title: 'Customised Requests', link: '/home' }]//  { title: 'Contact Us', link: '/home' },

  logoImg = '../../../assets/logo.png';


  ngOnInit(): void {
    this.categories = [
      {
        title: 'SOCKS',
        desc: 'for everyday wear',
        contentUrl: '/home',
        imgUrl: '../../../assets/socks1.jpeg',
      },
      {
        title: 'BAGS',
        desc: 'for groceries',
        contentUrl: '/home',
        imgUrl: '../../../assets/bag.jpg'
      },
      {
        title: 'BANDANAS',
        desc: 'for sunny days',
        contentUrl: '/home',
        imgUrl: '../../../assets/bandanas.jpg'
      }
    ]
  }

}
