import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';
import 'animate.css';
import ProjectDashboard from '../../react/components/test.component';
import ProjectCard from '../../react/components/project.component';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { ReactService } from '../../service/react.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent implements OnInit, AfterViewInit {
  language = '';
  helloTitle = '';
  helloSubtitle = '';

  constructor(
    private checkLanguageSvc: checkLanguageService,
    private reactSvc: ReactService,
    private elementRef:ElementRef
  ) {}

  ngOnInit(): void {
    this.language = this.checkLanguageSvc.check();
    this.setValues();
  }
  ngAfterViewInit(): void {
    this.render();
  }

  setValues() {
    if (this.language == 'EN') {
      this.helloTitle = "Hello i'm Sam";
      this.helloSubtitle = 'FullStack Developer';
    } else if (this.language == 'ES') {
      this.helloTitle = "Hola soy Sam";
      this.helloSubtitle = 'FullStack Developer';
    }
  }
  render(){
    const container = this.elementRef.nativeElement.querySelector('#react');
    const projects = this.elementRef.nativeElement.querySelector('#react-project');
    this.reactSvc.renderReactComponent(container, ProjectDashboard());
    this.reactSvc.renderReactComponent(projects, ProjectCard({title:'title', description:'description', link:'link'}));
  }    
  
}
