import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionVisibilityService {
  private sectionVisibility = new BehaviorSubject<{ [key: string]: boolean }>({});
  visibility$ = this.sectionVisibility.asObservable();

  constructor() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.sectionVisibility.next({ ...this.sectionVisibility.value, [entry.target.id]: entry.isIntersecting });
      });
    });

    const sections = document.querySelectorAll('.section'); // Asegúrate de que tus secciones tengan esta clase
    sections.forEach(section => observer.observe(section));
  }
}