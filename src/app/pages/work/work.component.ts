import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { checkLanguageService } from '../../service/checkLanguage.service';
import 'animate.css';
@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent implements OnInit {
  language = '';
  helloTitle = '';
  helloSubtitle = '';

  constructor(private checkLanguageSvc: checkLanguageService) {}

  ngOnInit(): void {
    this.language = this.checkLanguageSvc.check();
    this.setValues();
  }

  setValues() {
    if (this.language == 'EN') {
      this.helloTitle = "Hello i'm Sam";
      this.helloSubtitle = 'FullStack Developer';
    } else if (this.language == 'ES') {
      this.helloTitle = "Hola soy Sam";
      this.helloSubtitle = 'FullStack Developer';
    }
  }
}
