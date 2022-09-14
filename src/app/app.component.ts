import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator';
  input!: string;
  valueEntered(input: string) {
    this.input += input;
  }
  clearInput() {
    this.input = '';
  }
  calculateResult() {
    const inputValue = this.input.split(' ');
    if(inputValue.length>3){
      return;
    }
    switch(inputValue[1]){
      case '+': this.input=inputValue[0]+inputValue[2];
      break;
      case '-': this.input=inputValue[0]+inputValue[2];
      break;
      case 'x': this.input=inputValue[0]+inputValue[2];
      break;
      case '+': this.input=inputValue[0]+inputValue[2];
      break;

    }
  }
}
