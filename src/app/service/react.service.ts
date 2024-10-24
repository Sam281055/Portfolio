import { Injectable } from '@angular/core';
import { createRoot } from 'react-dom/client';

@Injectable({providedIn: 'root'})
export class ReactService {
    
    constructor(
    ) { }
    
    renderReactComponent(idRender:any, ReactComponent:any){
        const root = createRoot(idRender);
        root.render(ReactComponent);
    }

}