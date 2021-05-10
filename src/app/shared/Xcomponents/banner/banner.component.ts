import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  @Input('img_video_src') public img_video_src: string;
  @Input('isVideo') public isVideo: boolean;
  @Input('heading') public heading: string;
  @Input('subline') public subline: string;

  ngOnInit(): void {
  }

}
