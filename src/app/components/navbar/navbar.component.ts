import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { itemNavbar } from '../../interfaces/items.interface';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { utilService } from '../../service/utils.service';
import { Router } from '@angular/router';
import { NavbarService } from '../../service/navbar.service';
import { StrapiResponse } from '../../interfaces/strapi-response.interface';
import { NavbarData } from '../../interfaces/navbar-data.interface';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, LanguageSelectorComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  
  @Input() language!: string;
  
  Items: itemNavbar[] = [];
  isModal: boolean = false;
  resumeLink:String="";
  resume:String="";
  logo:String="./LOGO.png";
  title:String="";
  constructor(
    private utilSvc:utilService,
    private router:Router,
    private navSvc:NavbarService
  ){}

  ngOnInit(): void {
    this.set(this.language);
    this.checkScreenSize();
  }

  set(language:string){
    this.navSvc.getNavbarData(language).subscribe((a:StrapiResponse<NavbarData>)=>{
      const data = a.data[0];
      this.resume = data.resumeText;
      this.resumeLink = data.resumeLink;
      this.Items = data.items;
      this.logo = data.logo;
      this.title = data.title;
    });
  }

  Router(rout:string){
    this.utilSvc.goRoute(rout);
    this.toggleModal();
  }


  isModalOpen = false;
  isMobile = false;

  @HostListener('window:resize')
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
