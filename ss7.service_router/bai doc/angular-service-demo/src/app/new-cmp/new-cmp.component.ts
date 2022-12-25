import {Component, OnInit} from '@angular/core';
import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  newcomponent = 'New Component';
  todayDate: Date;

  constructor(private myService: MyserviceService) {
  }

  ngOnInit(): void {
    this.todayDate = this.myService.showTodayDate();
  }

}
