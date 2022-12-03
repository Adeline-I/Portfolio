import { Injectable } from '@angular/core';
import { EDUCATIONS } from 'src/app/datas/education.data';
import { Education } from 'src/app/models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  getEducationList(): Education[] {
    return EDUCATIONS;
  }
}
