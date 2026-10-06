import { Component, OnInit } from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';
import { FooterService } from '../../service/footer.service';
import { StrapiResponse } from '../../interfaces/strapi-response.interface';
import { footerData } from '../../interfaces/footer.interface';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  title:String = '';
  social:String = '';
  mail:String = '';
  language = '';
  linkedin:String='';
  cv:String='';
  constructor(
    private checkLanguageSvc: checkLanguageService,
    private footerSvc: FooterService
  ) {}

  ngOnInit() {
    this.language = this.checkLanguageSvc.check();
    this.setValues();
  }

  setValues() {
    this.footerSvc.getFooterData(this.language).subscribe((a:StrapiResponse<footerData>)=>{
      const data = a.data[0];
      this.title = data.title;
      this.social = data.social;
      this.mail = data.mail;
      this.linkedin = data.linkedinUrl;
      this.cv = data.cvUrl;
    });
  }
}
