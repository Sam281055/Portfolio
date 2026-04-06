import { Component } from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';
import { WorkExperience } from '../../interfaces/work-experience.interface';
import { WorkService } from '../../service/work.service';
import { StrapiResponse } from '../../interfaces/strapi-response.interface';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  language = '';
  experienceLabel = 'Experiencia';
  position = '';
  actualy= '';
  workExperients: WorkExperience[] = [];


  constructor(private checkLanguageSvc: checkLanguageService, private workSvc:WorkService) {}

  ngOnInit(): void {
    this.language = this.checkLanguageSvc.check();
    this.setValues();
  }

  setValues() {
      this.workSvc.getWorkExperience(this.language).subscribe((a:StrapiResponse<WorkExperience>)=>{
        this.workExperients = a.data;
      });
    if (this.language === 'EN') {
      this.actualy= "Actually";
      this.experienceLabel = 'Experience';
      this.position = 'Position';
    } else {
      this.experienceLabel = 'Experiencia';
      this.actualy= "Actual";
      this.position = 'Cargo';

    }
  }
}
