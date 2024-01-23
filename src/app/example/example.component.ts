import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgClass,
    FormsModule, // двосторонній зв`язок
  ],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent {
  user = 'Tom';
  fruits = ['Orange', 'Apple', 'Kiwi'];

  isBg = false


  count = 0
  increment() { 
    this.count++;
  }
}
