import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { itemNavbar } from '../../interfaces/items.interface';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { utilService } from '../../service/utils.service';

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

  constructor(
    private utilSvc:utilService
  ){}

  ngOnInit(): void {
    this.set(this.language);
  }

  set(language:string){
    if(language === 'EN'){
      this.Items = [
        {title: 'Work', rout:'/work'},
        {title: 'About', rout:'/about'},
        {title: 'Resume', rout:'/resume'},
        {title: 'Projects', rout:'/projects'}
      ]
    }
    else if(language === 'ES'){
      this.Items = [
        {title: 'Experiencia', rout:'/work'},
        {title: 'Sobre mi', rout:'/about'},
        {title: 'Resumen', rout:'/resume'},
        {title: 'Projectos', rout:'/projects'}
      ]
    }
  }

  Router(rout:string){
    console.log("router");
    
    this.utilSvc.goRoute(rout);
  }

}
