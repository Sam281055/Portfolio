import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';
import ProjectDashboard from '../../react/components/test.component';
import ProjectCard from '../../react/components/project.component';
import ReactDOM from 'react-dom';
import { interval } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit{

  constructor(
    private elementRef: ElementRef,
    private checkLanguage:checkLanguageService

  ) {}
  ngAfterViewInit() {
    // const container = this.elementRef.nativeElement.querySelector('#react');
    
    // if (container) {
    //   // Renderiza tu componente React en el contenedor existente
    //   ReactDOM.createPortal(ProjectDashboard(), container);
    // } else {
    //   console.error('Contenedor no encontrado');
    // }
    // ReactDOM.createPortal(ProjectCard({title:'Projectos', description:'Descripcion', link:'Link'}), projects);
  }
}
