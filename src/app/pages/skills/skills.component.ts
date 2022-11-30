import { Component, OnInit } from '@angular/core';
import { SKILLS } from 'src/app/datas/skills.data';
import { Skill } from 'src/app/models/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillList: Skill[] = SKILLS;

  constructor() { }

  ngOnInit(): void {
    console.log(this.skillList);
    this.selectSkill(this.skillList[0]);
  }

  selectSkill(skill: Skill) {
    console.log(`${skill.name}`);
  }

}
