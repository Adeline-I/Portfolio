import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skills.model';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillList!: Skill[];

  constructor(
    private skillsService: SkillsService
  ) { }

  ngOnInit(): void {
    this.skillList = this.skillsService.getSkillsList();
  }
}
