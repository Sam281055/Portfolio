import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-project-card',
    imports: [CommonModule],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.css'
})
export class ProjectCardComponent implements OnDestroy{
  @Input() title!: string;
  @Input() projectNumber!: string;
  @Input() btnTxt!: string;
  @Input() btnTxt2!: string;
  @Input() description!: string;
  @Input() link!: string;
  @Input() imgPath!: string;
  ngOnDestroy(): void {
    // Aquí puedes liberar recursos, cancelar suscripciones, etc.
    console.log('ProjectCardComponent destroyed');
  }
}
