import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  userName = '';
  userEmail = '';
  userMessage = '';

  userPhones = [''];

  sendEmail(form: NgForm) {
    console.log(form);
  }
  addUserPhone() {
    this.userPhones.push('');
  }
  removeUserPhone(i: number) {
    this.userPhones.splice(i, 1);
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
