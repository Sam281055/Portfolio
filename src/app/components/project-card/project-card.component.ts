import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-project-card',
    imports: [CommonModule],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.css',
    standalone: true
})
export class ProjectCardComponent{
  @Input() title!: string;
  @Input() projectNumber!: string;
  @Input() btnTxt!: string;
  @Input() btnTxt2!: string;
  @Input() description!: string;
  @Input() link!: string;
  @Input() imgPath!: string;


  
}
