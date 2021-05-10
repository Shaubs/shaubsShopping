import { Component, OnInit } from '@angular/core';
import { Inavbar } from "../../../models/navbar.model";

@Component({
  selector: 'bagBig-shelf',
  templateUrl: './bagBig-shelf.component.html',
  styleUrls: ['./bagBig-shelf.component.scss']
})
export class bagBigShelfComponent implements OnInit {

  constructor() { }
  img_video_src = '';//'../../../assets/logo.png';
  isVideo: boolean = false;
  logoImg = '../../../assets/logo.png';
  navBar: Array<Inavbar> = [{ title: 'About Us', link: '/home' },
  { title: 'Other Products', link: '/shop' },
  { title: 'Customised Requests', link: '/home' }] // { title: 'Contact Us', link: '/home' },


  ngOnInit(): void {
  }

}
