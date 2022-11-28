import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator';
  input: any = '';

  valueEntered(input: string) {
    this.input += input;
  }

  clearInput() {
    this.input = '';
  }

  calculateResult() {
    let separator;
    if (
      this.input.includes('+') ||
      this.input.includes('-') ||
      this.input.includes('x') ||
      this.input.includes('÷')
    ) {
      if (this.input.indexOf('+') >= 0) {
        separator = '+';
      } else if (this.input.indexOf('-') >= 0) {
        separator = '-';
      } else if (this.input.indexOf('x') >= 0) {
        separator = 'x';
      } else {
        separator = '÷';
      }

      const inputValue = this.input.split(separator);
      switch (separator) {
        case '+':
          this.input = String(+inputValue[0] + +inputValue[1]);
          break;
        case '-':
          this.input = String(+inputValue[0] - +inputValue[1]);
          break;
        case 'x':
          this.input = String(+inputValue[0] * +inputValue[1]);
          break;
        case '÷':
          this.input = String(+inputValue[0] / +inputValue[1]);
          break;
      }
    }
  }
}
