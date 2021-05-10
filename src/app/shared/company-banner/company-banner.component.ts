import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'company-banner',
  templateUrl: './company-banner.component.html',
  styleUrls: ['./company-banner.component.scss']
})
export class CompanyBannerComponent implements OnInit {

  @Input('img_video_src') public img_video_src: string;
  @Input('isVideo') public isVideo: boolean;
  @Input('logoImg') public logoImg: string;
  @Input('subline') public subline: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.isVideo);
  }

}
