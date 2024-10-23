import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class utilService {
    constructor(
        private router:Router
    ) { }
    
    goRoute(rout:string){
        this.router.navigate(['/'+ rout]);
    }
}