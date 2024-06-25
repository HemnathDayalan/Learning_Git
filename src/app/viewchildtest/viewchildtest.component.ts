import { Component, ElementRef, input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchildtest',
  standalone: true,
  imports: [],
  templateUrl: './viewchildtest.component.html',
  styleUrl: './viewchildtest.component.css'
})
export class ViewchildtestComponent {
  inputValue: string = '';

  onInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    console.log('Input value:', this.inputValue);
  }
}
