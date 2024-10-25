import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { checkLanguageService } from './service/checkLanguage.service';
import { RouterOutlet } from '@angular/router';
import 'animate.css';
import { FooterComponent } from "./components/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
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
