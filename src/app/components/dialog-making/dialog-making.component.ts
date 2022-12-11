import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-making',
  templateUrl: './dialog-making.component.html',
  styleUrls: ['./dialog-making.component.scss']

})
export class DialogMakingComponent implements OnInit {

  title: string = '';
  labelClose: string = '';
  labelLink: string = '';
  link: string = '';

  pictureArray: any = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.title = data.title;
    this.labelClose = data.labelClose;
    this.labelLink = data.labelLink;
    this.link = data.link;
    
    this.pictureArray = [data.pictureArray];
  }

  ngOnInit(): void {
  }

}
