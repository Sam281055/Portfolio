import { Component } from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';
import { workExperience } from '../../interfaces/work.experience.interface';

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
  workExperients: workExperience[] = [];


  constructor(private checkLanguageSvc: checkLanguageService) {}

  ngOnInit(): void {
    this.language = this.checkLanguageSvc.check();
    this.setValues();
  }

  setValues() {
    if (this.language === 'EN') {
      this.actualy= "Actually";
      this.experienceLabel = 'Experience';
      this.position = 'Position';
      this.workExperients = [
        {
          title: 'SODEP S.A',
          position: 'Semi Senior Full Stack Developer',
          startDate: '2025-04',
          endDate: '',
          isCurrent: true,
          listDo: [
            'Developed and enhanced enterprise management and inventory systems in production, delivering functional improvements and performance optimizations.',
            'Integrated external services and legacy systems to ensure seamless data flow and system interoperability.',
            'Designed and implemented REST APIs using Java Spring Boot for enterprise-grade applications.',
            'Optimized SQL queries and improved performance in critical database operations.',
          ],
          location: 'Asunción, Paraguay',
        },
        {
          title: 'Consultores Informáticos S.A',
          position: 'Full Stack Developer Junior',
          startDate: '2024-12',
          endDate: '2025-03',
          isCurrent: false,
          listDo: [
            'Developed microservices using Java Spring for banking systems.',
            'Implemented unit testing and contract validation to ensure system reliability.',
            'Built REST APIs for financial business logic, including transactional control and validations.',
          ],
          location: 'Asunción, Paraguay',
        },
      ];
    } else {
      this.experienceLabel = 'Experiencia';
      this.actualy= "Actual";
      this.position = 'Cargo';
      this.workExperients = [
        {
          title: 'Sodep S.A',
          position: 'FullStack semiSenior',
          startDate: '2025-04-01',
          endDate: '',
          isCurrent: true,
          listDo: [
            'Desarrollo y evolución de sistemas empresariales de gestión e inventario en producción, implementando mejoras funcionales y optimizaciones de rendimiento.',
            'Integración con servicios externos y sistemas legados.',
            'Diseño e implementación de APIs REST en Java Spring Boot para sistemas empresariales en producción.',
            'Optimización de consultas SQL y mejora del rendimiento en operaciones críticas de base de datos.',
          ],
          location: 'Asunción-Py',
        },
        {
          title: 'Consultores informaticos S.A',
          position: 'FullStack junior',
          startDate: '2024-12',
          endDate: '2025-03',
          isCurrent: false,
          listDo: [
            'Desarrollo de microservicios en Java Spring para sistemas bancarios.',
            'Implementación de pruebas unitarias y validaciones contractuales.',
            'Implementación de APIs REST para lógica de negocio financiera, incluyendo validaciones contractuales y control transaccional.',
          ],
          location: 'Asunción-Py',
        },
      ];
    }
  }
}
