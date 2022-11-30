import { Component, OnInit } from '@angular/core';
import { EDUCATIONS } from 'src/app/datas/education.data';
import { Education } from 'src/app/models/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = EDUCATIONS;

  constructor() { }

  ngOnInit(): void {
    console.table(this.educationList);
    this.selectEducation(this.educationList[1]);
  }

  selectEducation(education: Education) {
    console.log(`${education.degree}`);
  }

}
