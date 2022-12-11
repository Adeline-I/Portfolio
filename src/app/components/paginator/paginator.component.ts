import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() pictureArray!: any[];
  pageSlice!: any[];
  endIndex!: number;
  
  hidePageSize = true;
  showFirstLastButtons = true;

  constructor() {}

  ngOnInit(): void {
    this.pageSlice = this.pictureArray[0].slice(0, 1);
  }

  OnPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.pictureArray[0].length) {
      endIndex = this.pictureArray[0].length;
    }
    this.pageSlice = this.pictureArray[0].slice(startIndex, endIndex);
  }

}
