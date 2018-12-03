import { Injectable, 
         ClassProvider,  
         FactoryProvider, 
         InjectionToken} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

export const WINDOW = new InjectionToken('WindowToken');

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }
}
