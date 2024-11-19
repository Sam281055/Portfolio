import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { itemNavbar } from '../../interfaces/items.interface';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { utilService } from '../../service/utils.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LanguageSelectorComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  
  @Input() language!: string;
  
  Items: itemNavbar[] = [];
  isModal: boolean = false;
  resume=""

  constructor(
    private utilSvc:utilService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.set(this.language);
    this.checkScreenSize();
  }

  set(language:string){
    if(language === 'EN'){
      this.Items = [
        {title: 'Works', rout:'/work'},
        {title: 'About', rout:'/about'},
      ]
      this.resume="Resume";

    }
    else if(language === 'ES'){
      this.Items = [
        {title: 'Proyectos', rout:'/work'},
        {title: 'Sobre mi', rout:'/about'},
      ]
      this.resume="Resumen";
    }
  }

  Router(rout:string){
    this.utilSvc.goRoute(rout);
    this.toggleModal();
  }

  resumeLink = 'https://drive.google.com/file/d/1BZOFLjePK3SQPlL715bl0cZqJhG6vVFv/view?usp=drive_link';
  resumeText = 'Resume';
  isModalOpen = false;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 1024; // 1024px es el breakpoint para 'lg' en Tailwind
    if (!this.isMobile) {
      this.isModalOpen = false;
    }
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  navigate(route: string) {
    this.router.navigate([route]);
    if (this.isMobile) {
      this.toggleModal();
    }
  }
}
