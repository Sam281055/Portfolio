import { Routes } from '@angular/router';
import { WorkComponent } from './pages/work/work.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: "work", component:WorkComponent},
    { path: "about", component:AboutComponent},
    { path: "**", redirectTo:"work", pathMatch:'full'}
];
