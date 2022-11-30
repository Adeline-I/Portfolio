import { Component, OnInit } from '@angular/core';
import { MAKINGS } from 'src/app/datas/making.data';
import { Making } from 'src/app/models/making.model';

@Component({
  selector: 'app-making',
  templateUrl: './making.component.html',
  styleUrls: ['./making.component.scss']
})
export class MakingComponent implements OnInit {

  makingList: Making[] = MAKINGS;

  constructor() { }

  ngOnInit(): void {
    console.table(this.makingList);
    this.selectMaking(this.makingList[1]);
  }

  selectMaking(making: Making) {
    console.log(`${making.title}`);
  }

}
