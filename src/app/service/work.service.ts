import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StrapiResponse } from '../interfaces/strapi-response.interface';
import { WorkData } from '../interfaces/work-data.interface';
import { WorkExperience } from '../interfaces/work-experience.interface';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  constructor(private http: HttpClient) {}

    private url = environment.backendUrl;

  getProyects(language:String){
    return this.http.get<StrapiResponse<Project>>(this.url+"/api/works?locale=" + language.toLowerCase());
  }

  getWorkData(language:String){
    return this.http.get<StrapiResponse<WorkData>>(this.url + "/api/workdatas?locale=" + language.toLowerCase());
  }
  
  getWorkExperience(language:String){
    return this.http.get<StrapiResponse<WorkExperience>>(this.url+"/api/work-experiences?locale=" + language.toLowerCase())
  }
}
