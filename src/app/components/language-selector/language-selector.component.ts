import { Component, Input } from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';

@Component({
    selector: 'app-language-selector',
    imports: [],
    templateUrl: './language-selector.component.html',
    styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  @Input() language!:string;
  constructor(
    private LanguageService:checkLanguageService
  ) {}

  changeLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const newLanguage = selectElement.value;
    this.LanguageService.change(newLanguage);  
  }
}
