import { Component, OnInit } from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  title = '';
  social = '';
  mail = 'SL281055@gmail.com';
  language = '';
  constructor(private checkLanguageSvc: checkLanguageService) {}

  ngOnInit() {
    this.language = this.checkLanguageSvc.check();
    this.setValues();
  }

  setValues() {
    if(this.language == "EN"){
      this.title = "Let’s Build Something Together";
      this.social = "Social";
    }
    else if(this.language == "ES"){
      this.title = "Desarrollemos algo juntos!";
      this.social = "Redes Sociales";
    }
  }
}
