import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationList!: Education[];

  constructor(
    private educationService: EducationService
  ) { }

  ngOnInit(): void {
    this.educationList = this.educationService.getEducationList();
  }
}
