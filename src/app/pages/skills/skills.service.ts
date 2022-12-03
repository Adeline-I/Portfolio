import { Injectable } from '@angular/core';
import { SKILLS } from 'src/app/datas/skills.data';
import { Skill } from 'src/app/models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkillsList(): Skill[] {
    return SKILLS;
  }
}
