import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit {

  i: number = 0;
  carouselItems = [{
    Sno: 1,
    isVideo: false,
    img_video_src: '../../../assets/bag.jpg',
    heading: 'Company 1',
    subline: 'abcd '
  }, {
    Sno: 2,
    isVideo: false,
    img_video_src: '../../../assets/logo.png',
    heading: 'Company 2',
    subline: 'abcdsdsfsfsdsdvsdvasdv '
  }, {
    Sno: 3,
    isVideo: false,
    img_video_src: '../../../assets/bandanas.jpg',
    heading: 'Company 3',
    subline: 'abcdsdcsdczjjjjjjjjjjjjjjjjjjjj '
  }]
  isVideo = this.carouselItems[this.i].isVideo
  img_video_src = this.carouselItems[this.i].img_video_src;
  heading = '';
  subline = '';

  limit: number = this.carouselItems.length - 1;
  k = 0;

  constructor() { }

  ngOnInit(): void {
    this.switchImage(true)
  }

  button(right: boolean) {
    this.k = 1; //stop automatic switching in carousel
    this.switchImage(right)
  }
  switchImage(next: boolean) {
    console.log("button pressed")
    this.i = (next) ? ((this.i < this.limit) ? this.i + 1 : 0) : ((this.i > 0) ? this.i - 1 : this.limit)
    this.isVideo = this.carouselItems[this.i].isVideo
    this.img_video_src = this.carouselItems[this.i].img_video_src;
    this.heading = this.carouselItems[this.i].heading;
    this.subline = this.carouselItems[this.i].subline;
    if (this.k < 1) {
      setTimeout(() => {
        this.switchImage(next)
      }, 4000)
    }


  }

}
