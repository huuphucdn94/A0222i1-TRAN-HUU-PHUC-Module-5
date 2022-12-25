import { Component, OnInit } from '@angular/core';
import {Calculator} from '../calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculator: Calculator = new class implements Calculator {
    firstNumber: number;
    operator: string;
    result: number;
    secondNumber: number;
  };

  constructor() { }

  ngOnInit(): void {
  }

  changeFirstNumber(target: any) {
    this.calculator.firstNumber = parseInt(target.value);
  }


  changeOperator(target: any) {
    this.calculator.operator = target.value;
  }

  changeSecondNumber(target: any) {
    this.calculator.secondNumber = parseInt(target.value);
  }

  calculate() {
    switch (this.calculator.operator) {
      case '+': this.calculator.result = this.calculator.firstNumber + this.calculator.secondNumber; break;
      case '-': this.calculator.result = this.calculator.firstNumber - this.calculator.secondNumber; break;
      case 'x': this.calculator.result = this.calculator.firstNumber * this.calculator.secondNumber; break;
      case ':': this.calculator.result = this.calculator.firstNumber / this.calculator.secondNumber; break;
    }
    // console.log(typeof this.calculator.firstNumber);
  }
}
