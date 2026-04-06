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
import { ArrowDownButtonComponent } from '../../components/arrow-down-button/arrow-down-button.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { Project } from '../../interfaces/project.interface';
import ScrollReveal from 'scrollreveal';
import { WorkService } from '../../service/work.service';
import { StrapiResponse } from '../../interfaces/strapi-response.interface';
import { WorkData } from '../../interfaces/work-data.interface';

@Component({
    selector: 'app-work',
    imports: [CommonModule, ArrowDownButtonComponent, ProjectCardComponent],
    templateUrl: './work.component.html',
    styleUrl: './work.component.css',
    standalone: true
})
export class WorkComponent implements OnInit, AfterViewInit {
  language = '';
  helloTitle:String = '';
  helloSubtitle:String = '';
  projects: Project[] = [];
  @ViewChildren('sectionElement') sectionElements!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.setValues(this.checkLanguageSvc.check());
  }
  constructor(
    private checkLanguageSvc:checkLanguageService,
    private workSvc:WorkService
  ){}
  ngAfterViewInit(): void {
    this.initScrollReveal();
  }

  setValues(language:String) {
    
    this.workSvc.getProyects(language).subscribe((a:StrapiResponse<Project>)=>{
      this.projects = a.data;
    });

    this.workSvc.getWorkData(language).subscribe((a:StrapiResponse<WorkData>)=>{
      this.helloTitle = a.data[0].helloTitle;
      this.helloSubtitle = a.data[0].helloSubtitle;
    })
  }

  initScrollReveal() {
    const sr = ScrollReveal();

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
    }, 0);
  }

}
