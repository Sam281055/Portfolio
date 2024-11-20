import { Component } from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {

  descripcion="Soy un Fullstack Developer Junior con experiencia en desarrollo de aplicaciones y microservicios. Actualmente estudiante de segundo año de Licenciatura en Análisis de Sistemas, con conocimientos prácticos en diversas tecnologías como Java Spring, Angular y Node.js. Tengo experiencia en el desarrollo de soluciones robustas para el sector bancario y gestión de datos complejos, junto con habilidades en pruebas unitarias y diseño de software escalable."
  hello="Hola Soy Sam!";
  language="";

  constructor(
    private checkLanguageSvc:checkLanguageService
  ){}
  
  ngOnInit(): void {
    this.language = this.checkLanguageSvc.check();
    this.setValues();
  }

  setValues() {
    if (this.language == 'EN') {
      this.hello="Hi, I'm Sam!";
      this.descripcion="I am a Junior Fullstack Developer with experience in developing applications and microservices. Currently, I am a second-year student pursuing a Bachelor's degree in Systems Analysis, with practical knowledge of various technologies such as Java Spring, Angular, and Node.js. I have experience in building robust solutions for the banking sector and managing complex data, alongside skills in unit testing and designing scalable software."
    } else if (this.language == 'ES') {
      this.hello="Hola Soy Sam!";
      this.descripcion="Soy un Fullstack Developer Junior con experiencia en desarrollo de aplicaciones y microservicios. Actualmente estudiante de segundo año de Licenciatura en Análisis de Sistemas, con conocimientos prácticos en diversas tecnologías como Java Spring, Angular y Node.js. Tengo experiencia en el desarrollo de soluciones robustas para el sector bancario y gestión de datos complejos, junto con habilidades en pruebas unitarias y diseño de software escalable."
    }
  }
}
