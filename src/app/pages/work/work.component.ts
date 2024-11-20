import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';
import 'animate.css';
import { ArrowDownButtonComponent } from '../../components/arrow-down-button/arrow-down-button.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { Project } from '../../interfaces/project.interface';
import ScrollReveal from 'scrollreveal';

@Component({
    selector: 'app-work',
    imports: [CommonModule, ArrowDownButtonComponent, ProjectCardComponent],
    templateUrl: './work.component.html',
    styleUrl: './work.component.css'
})
export class WorkComponent implements OnInit, AfterViewInit {
  language = '';
  helloTitle = '';
  helloSubtitle = '';
  projects: Project[] = [];
  @ViewChildren('sectionElement') sectionElements!: QueryList<ElementRef>;
  constructor(
    private checkLanguageSvc: checkLanguageService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.language = this.checkLanguageSvc.check();
    this.setValues();
  }
  ngAfterViewInit(): void {
    this.initScrollReveal();
  }

  setValues() {
    if (this.language == 'EN') {
      this.helloTitle = "Hello i'm Sam";
      this.helloSubtitle = 'FullStack Developer';
      this.projects = [
        {
          projectNumber: '01',
          title: 'Ecomerce',
          btnTxt: 'Angular',
          btnTxt2: 'Landing Page',
          description: 'A Ecomerce design width Angular',
          imgPath: '/Ecomerce.jpeg',
          link: 'https://sam281055.github.io/ecomerce/',
          sectionRedirect: 'Ecomerce2',
          idSection: 'inicio',
        },
        {
          projectNumber: '02',
          title: 'Ecomerce',
          btnTxt: 'Next.js',
          btnTxt2: 'Ecomerce',
          description: 'A Ecomerce design width Next.js',
          imgPath: '/Ecomerce 2.png',
          link: 'https://inventory-management-dashboard-orcin.vercel.app/',
          sectionRedirect: 'footer',
          idSection: 'Ecomerce2',
        },
      ];
    } else if (this.language == 'ES') {
      this.helloTitle = 'Hola soy Sam';
      this.helloSubtitle = 'FullStack Developer';
      this.projects = [
        {
          projectNumber: '01',
          title: 'Ecomerce',
          btnTxt: 'Angular',
          btnTxt2: 'Landing Page',
          description: 'Ecomerce personalizado hecho con Angular',
          imgPath: '/Ecomerce.jpeg',
          link: 'https://sam281055.github.io/ecomerce/',
          sectionRedirect: 'Ecomerce2',
          idSection: 'inicio',
        },
        {
          projectNumber: '02',
          title: 'Ecomerce',
          btnTxt: 'Next.js',
          btnTxt2: 'Ecomerce',
          description: 'Ecomerce hecho con Next.js',
          imgPath: '/Ecomerce 2.png',
          link: 'https://inventory-management-dashboard-orcin.vercel.app/',
          sectionRedirect: 'footer',
          idSection: 'Ecomerce2',
        },
      ];
    }
  }

  initScrollReveal() {
    const sr = ScrollReveal();

    // Asegúrate de que los elementos están disponibles en el DOM
    setTimeout(() => {
      this.sectionElements.forEach((element) => {
        sr.reveal(element.nativeElement, {
          distance: '50px',
          duration: 600,
          easing: 'ease-in-out',
          opacity: 0,
          scale: 0.9,
          afterReveal: () => {
            console.log('Component revealed:', element.nativeElement.id);
          },
          beforeReveal: () => {
            console.log('Component about to be revealed:', element.nativeElement.id);
          }
        });
      });
    }, 0); // El timeout asegura que el DOM esté listo
  }
}
