import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StrapiResponse } from '../interfaces/strapi-response.interface';
import { NavbarData } from '../interfaces/navbar-data.interface';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor(private http: HttpClient) {}

  private url = environment.backendUrl;

  getNavbarData(language: String) {
    return this.http.get<StrapiResponse<NavbarData>>(
      this.url + '/api/navbars?locale=' + language.toLowerCase(),
    );
  }
}
