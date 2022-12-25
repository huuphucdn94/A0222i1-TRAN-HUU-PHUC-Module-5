import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() {
  }

  showTodayDate() {
    const today = new Date();
    return today;
  }
}
