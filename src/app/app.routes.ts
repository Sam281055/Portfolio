import { Routes } from '@angular/router';
import { WorkComponent } from './pages/work/work.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    { path: "work", component:WorkComponent},
    { path: "about", component:AboutComponent},
    { path: "resume", component:ResumeComponent},
    { path: "projects", component:ProjectsComponent},
    { path: "**", redirectTo:"work", pathMatch:'full'}
];
