import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectCardComponent {
  @Input() title!:string;
  @Input() projectNumber!:string;
  @Input() btnTxt!:string;
  @Input() btnTxt2!:string;
  @Input() description!:string;
  @Input() link!:string;
  @Input() imgPath!:string;
  
}