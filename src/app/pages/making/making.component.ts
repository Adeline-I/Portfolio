import { Component, OnInit } from '@angular/core';
import { Making } from 'src/app/models/making.model';
import { MakingService } from './making.service';

@Component({
  selector: 'app-making',
  templateUrl: './making.component.html',
  styleUrls: ['./making.component.scss']
})
export class MakingComponent implements OnInit {

  makingList!: Making[];

  constructor(
    private makingService: MakingService
  ) { }

  ngOnInit(): void {
    this.makingList = this.makingService.getMakingList();
  }
}
