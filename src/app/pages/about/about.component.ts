import { Component } from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';
import { ExperienceComponent } from '../experience/experience.component';
import { ArrowDownButtonComponent } from '../../components/arrow-down-button/arrow-down-button.component';

@Component({
    selector: 'app-about',
    imports: [ExperienceComponent, ArrowDownButtonComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {

  descripcion = "Soy Full Stack Developer Semi Senior con fuerte orientación backend, especializado en Java (8–21) y Spring Boot para el desarrollo de APIs REST en entornos productivos. Tengo experiencia en arquitecturas de microservicios, integración con sistemas externos y optimización de consultas SQL. Actualmente trabajo en sistemas empresariales y bancarios, enfocándome en rendimiento, escalabilidad y buenas prácticas de ingeniería.";
  
  hello = "Hola, soy Sam!";
  language = "";

  constructor(
    private checkLanguageSvc: checkLanguageService
  ) {}

  ngOnInit(): void {
    this.language = this.checkLanguageSvc.check();
    this.setValues();
  }

  setValues() {
    if (this.language === 'EN') {
      this.hello = "Hi, I'm Sam!";
      this.descripcion = "I'm a Semi Senior Full Stack Developer with a strong backend focus, specialized in Java (8–21) and Spring Boot for building REST APIs in production environments. I have experience in microservices architectures, system integrations, and SQL performance optimization. Currently working on enterprise and banking systems, focusing on scalability, performance, and clean engineering practices.";
    } else {
      this.hello = "Hola, soy Sam!";
      this.descripcion = "Soy Full Stack Developer Semi Senior con fuerte orientación backend, especializado en Java (8–21) y Spring Boot para el desarrollo de APIs REST en entornos productivos. Tengo experiencia en arquitecturas de microservicios, integración con sistemas externos y optimización de consultas SQL. Actualmente trabajo en sistemas empresariales y bancarios, enfocándome en rendimiento, escalabilidad y buenas prácticas de ingeniería.";
    }
  }
}