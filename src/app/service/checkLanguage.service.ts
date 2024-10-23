import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class checkLanguageService {
  constructor() {}

  check(): string {
    let language = window.localStorage.getItem('language') || 'EN';
    console.log(language);

    if (!language) {
      language = 'EN';
    }
    return language;
  }

  change(language: string): void {
    if (language != window.localStorage.getItem('language')) {
      window.localStorage.setItem('language', language);
      window.location.reload();
    }
  }
}
