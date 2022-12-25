import {Component, Input, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-angular-countdown-timer',
  templateUrl: './angular-countdown-timer.component.html',
  styleUrls: ['./angular-countdown-timer.component.css']
})
export class AngularCountdownTimerComponent implements OnInit {
  countdown: number;
  stopNumber:number;
  @Input() initNumber: number;

  constructor() {
  }
  ngOnInit(): void {
  }

  startCountdown() {
    this.countdown = this.initNumber;
    const interval = setInterval(() => {
      if (this.countdown == 0) {
        clearInterval(interval);
      } else {
        this.countdown--;
      }
    }, 1000);
  }

  // tslint:disable-next-line:variable-name
  stopCountdown(number) {
    this.countdown = -1;
    this.stopNumber = number;
  }

  resetCountdown() {
    this.countdown = this.initNumber;
  }
}
