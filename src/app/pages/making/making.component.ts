import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMakingComponent } from 'src/app/components/dialog-making/dialog-making.component';
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
    private makingService: MakingService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.makingList = this.makingService.getMakingList();
  }

  openDialog(title: string, description: string, link: string) {
    this.dialog.open(DialogMakingComponent, {
      disableClose: true,
      data: {
        title: title,
        text: description,
        labelClose: 'Fermer',
        labelLink: 'En voir +',
        link: link,
      }
    });
  }

}
