import { Component } from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';
import { ExperienceComponent } from '../experience/experience.component';
import { ArrowDownButtonComponent } from '../../components/arrow-down-button/arrow-down-button.component';
import { AboutService } from '../../service/about.service';
import { StrapiResponse } from '../../interfaces/strapi-response.interface';
import { About } from '../../interfaces/about.interface';

@Component({
    selector: 'app-about',
    imports: [ExperienceComponent, ArrowDownButtonComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {

  descripcion:String = "";
  
  hello:String = "";
  language = "";
  img:String="";
  constructor(
    private checkLanguageSvc: checkLanguageService,
    private aboutSvc: AboutService
  ) {}

  ngOnInit(): void {
    this.language = this.checkLanguageSvc.check();
    this.setValues(this.language);
  }

  setValues(language:String) {
    this.aboutSvc.getAboutData(language).subscribe((a:StrapiResponse<About>)=>{
      this.img="https://res.cloudinary.com/dcrbdm4i2/image/upload/v1774824140/SamDefault_igr8a6.png";
      this.hello = a.data[0].hello;
      this.descripcion = a.data[0].descripcion;
    })
  }
}