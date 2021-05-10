import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Inavbar } from "../../../models/navbar.model";


@Component({
  selector: 'app-flossmeter-shop-front',
  templateUrl: './flossmeter-shop-front.component.html',
  styleUrls: ['./flossmeter-shop-front.component.scss']
})
export class FlossmeterShopFrontComponent implements OnInit {
  img_video_src = '../../../assets/dia/dia4.jpg';
  isVideo: boolean = false;
  logoImg = '../../../assets/dia/dia0.jpg';
  categories = [];
  outerPackageHeight: any;
  dir = "../../../assets/dia/";
  Wall = ['dia1.jpg', 'dia2.jpg', 'dia3.jpg', 'dia5.jpg', 'dia6.jpg', 'dia7.jpg',
    'dia9.jpg', 'dia10.jpg', 'dia11.jpg', 'dia12.jpg', 'dia13.jpg', 'dia14.jpg', 'dia4.jpg']
  navBar: Array<Inavbar> = [{ title: 'About Us', link: '/home' },
  { title: 'Other Products', link: '/shop' },
  { title: 'Customised Requests', link: '/home' }]

  constructor() {

  }

  // ngAfterViewInit() {
  //   this.outerPackageHeight = document.querySelector<HTMLElement>(".categoriesLayer").offsetHeight
  //   this.setHeight()
  //   //document.getElementsByClassName("") = this.outerPackageHeight
  // }


  ngOnInit(): void {
    this.categories = [
      {
        title: 'bookmarks',
        desc: '',
        contentUrl: '/home',
        imgUrl: '../../../assets/dia11.jpg',
      },
      {
        title: 'notebooks',
        desc: 'for',
        contentUrl: '/home',
        imgUrl: '../../../assets/dia12.jpg'
      },
      {
        title: 'wallpaper',
        desc: 'for sunny days',
        contentUrl: '/home',
        imgUrl: '../../../assets/dia13.jpg'
      },
      {
        title: 'bookmarks',
        desc: '',
        contentUrl: '/home',
        imgUrl: '../../../assets/dia11.jpg',
      },
      {
        title: 'bookmarks',
        desc: '',
        contentUrl: '/home',
        imgUrl: '../../../assets/dia11.jpg',
      }
    ];
    //this.shuffle(this.Wall)

    // let outerPackage = document.getElementsByClassName("OuterPackageOfLayer") as HTMLCollectionOf<HTMLElement>
    // this.outerPackageHeight = catPackage[0].style.height;
    // console.log(this.outerPackageHeight)
  }
  // private shuffle(array) {
  //   var currentIndex = array.length, temporaryValue, randomIndex;

  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {

  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }
  //   setTimeout(() => {
  //     this.Wall = array;
  //     this.shuffle(this.Wall);
  //   }, 9000);

  // }

}
