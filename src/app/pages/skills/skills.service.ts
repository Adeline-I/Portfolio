import { Injectable } from '@angular/core';
import { CMS } from 'src/app/datas/skills/cms.data';
import { DATABASE } from 'src/app/datas/skills/database.data';
import { DESIGN } from 'src/app/datas/skills/design.data';
import { DEVELOPMENT_TOOL } from 'src/app/datas/skills/development-tool.data';
import { FRAMEWORK } from 'src/app/datas/skills/framework.data';
import { LANGUAGE } from 'src/app/datas/skills/language.data';
import { PROJECT_MANAGEMENT } from 'src/app/datas/skills/project-management.data';
import { Skill } from 'src/app/models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getCmsList(): Skill[] {
    return CMS;
  }
  getDatabaseList(): Skill[] {
    return DATABASE;
  }
  getDesignList(): Skill[] {
    return DESIGN;
  }
  getDevlopmentToolList(): Skill[] {
    return DEVELOPMENT_TOOL;
  }
  getFrameworkList(): Skill[] {
    return FRAMEWORK;
  }
  getLanguageList(): Skill[] {
    return LANGUAGE;
  }
  getProjectManagementList(): Skill[] {
    return PROJECT_MANAGEMENT;
  }

}
