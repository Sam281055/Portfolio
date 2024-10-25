import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';
import 'animate.css';
import { ArrowDownButtonComponent } from '../../components/arrow-down-button/arrow-down-button.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, ArrowDownButtonComponent, ProjectCardComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent implements OnInit, AfterViewInit {
  language = '';
  helloTitle = '';
  helloSubtitle = '';
  projects:Project[]=[];
  constructor(
    private checkLanguageSvc: checkLanguageService,
  ) {}

  ngOnInit(): void {
    this.language = this.checkLanguageSvc.check();
    this.setValues();
  }
  ngAfterViewInit(): void {
  }

  setValues() {
    if (this.language == 'EN') {
      this.helloTitle = "Hello i'm Sam";
      this.helloSubtitle = 'FullStack Developer';
      this.projects = [
        {projectNumber:"01",
          title:"Ecomerce",
          btnTxt: "Angular",
          btnTxt2: "Landing Page",
          description: "A Ecomerce design width Angular",
          imgPath: "/Ecomerce.jpeg",
          link:"https://sam281055.github.io/ecomerce/",
          sectionRedirect:"Ecomerce2",
          idSection: "inicio"
         },
         {
          projectNumber:"02",
          title:"Ecomerce",
          btnTxt: "Next.js",
          btnTxt2: "Ecomerce",
          description: "A Ecomerce design width Next.js",
          imgPath: "/Ecomerce 2.png",
          link:"https://inventory-management-dashboard-orcin.vercel.app/",
          sectionRedirect: "contacto",
          idSection: "Ecomerce2"
         }
      ]
    } else if (this.language == 'ES') {
      this.helloTitle = "Hola soy Sam";
      this.helloSubtitle = 'FullStack Developer';
      this.projects = [
        {projectNumber:"01",
          title:"Ecomerce",
          btnTxt: "Angular",
          btnTxt2: "Landing Page",
          description: "Ecomerce personalizado hecho con Angular",
          imgPath: "/Ecomerce.jpeg",
          link:"https://sam281055.github.io/ecomerce/",
          sectionRedirect:"Ecomerce2",
          idSection: "inicio"
         },
         {
          projectNumber:"02",
          title:"Ecomerce",
          btnTxt: "Next.js",
          btnTxt2: "Ecomerce",
          description: "Ecomerce hecho con Next.js",
          imgPath: "/Ecomerce 2.png",
          link:"https://inventory-management-dashboard-orcin.vercel.app/",
          sectionRedirect: "contacto",
          idSection:"Ecomerce2"
         }
      ]
    }
  }

}
