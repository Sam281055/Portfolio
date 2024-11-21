import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-arrow-down-button',
    imports: [CommonModule],
    templateUrl: './arrow-down-button.component.html',
    styleUrl: './arrow-down-button.component.css',
    standalone: true
})
export class ArrowDownButtonComponent {
  @Input() section!:string;
  scrollToSection() {
    const element = document.getElementById(this.section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
