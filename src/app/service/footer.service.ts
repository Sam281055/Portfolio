import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StrapiResponse } from '../interfaces/strapi-response.interface';
import { footerData } from '../interfaces/footer.interface';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private http: HttpClient) {}

  private url = environment.backendUrl;

  getFooterData(language: String) {
    return this.http.get<StrapiResponse<footerData>>(
      this.url + '/api/footers?locale=' + language.toLowerCase(),
    );
  }
}
