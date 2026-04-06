import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StrapiResponse } from '../interfaces/strapi-response.interface';
import { About } from '../interfaces/about.interface';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private http: HttpClient) {}

  private url = environment.backendUrl;

  getAboutData(language: String) {
    return this.http.get<StrapiResponse<About>>(
      this.url + '/api/abouts?locale=' + language.toLowerCase(),
    );
  }
}
