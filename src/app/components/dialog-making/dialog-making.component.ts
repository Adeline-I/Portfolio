import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-making',
  templateUrl: './dialog-making.component.html',
  styleUrls: ['./dialog-making.component.scss']

})
export class DialogMakingComponent implements OnInit {

  title: string = '';
  text: string = '';
  labelClose: string = '';
  labelLink: string = '';
  link: string = '';

  slides: any = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.title = data.title;
    this.text = data.text;
    this.labelClose = data.labelClose;
    this.labelLink = data.labelLink;
    this.link = data.link;
    
  this.slides = [
    { src: data.picture1 },
    { src: data.picture2 },
    { src: data.picture3 },
    { src: data.picture4 }
  ];
  }

  ngOnInit(): void {
  }

}
