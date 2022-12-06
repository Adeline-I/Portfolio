import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skills.model';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  cmsList!: Skill[];
  databaseList!: Skill[];
  designList!: Skill[];
  devlopmentToolList!: Skill[];
  frameworkList!: Skill[];
  languageList!: Skill[];
  projectManagementList!: Skill[];

  constructor(
    private skillsService: SkillsService
  ) { }

  ngOnInit(): void {
    this.cmsList = this.skillsService.getCmsList();
    this.databaseList = this.skillsService.getDatabaseList();
    this.designList = this.skillsService.getDesignList();
    this.devlopmentToolList = this.skillsService.getDevlopmentToolList();
    this.frameworkList = this.skillsService.getFrameworkList();
    this.languageList = this.skillsService.getLanguageList();
    this.projectManagementList = this.skillsService.getProjectManagementList();
  }
}
