import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import ProjectDashboard from './react/components/test.component';
import ProjectCard from './react/components/project.component';
import ReactDOM from 'react-dom';
import { NavbarComponent } from './components/navbar/navbar.component';
import { checkLanguageService } from './service/checkLanguage.service';
import { RouterOutlet } from '@angular/router';
import 'animate.css';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit, OnInit {
  language = '';
  constructor(
    private checkLanguage:checkLanguageService

  ) {}

  ngOnInit(): void {
    this.language = this.checkLanguage.check();
  }
  
  ngAfterViewInit() {
  
    
 
  }


 



}
