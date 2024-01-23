import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  isVisibleForm: boolean = false;
  myFrom: FormGroup;
  @Output() onAdded = new EventEmitter();

  constructor() {
    this.myFrom = new FormGroup({
      userName: new FormControl('Tom', [
        Validators.required,
        this.userNameValidator,
      ]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPhones: new FormArray([
        new FormControl('+380', Validators.required),
      ]),
    });
  }

  addUserPhone() {
    (<FormArray>this.myFrom.controls['userPhones']).push(new FormControl('+380', Validators.required));
  }

  getPhonesArray(): FormArray{
    return <FormArray>this.myFrom.controls['userPhones'];
  }

  userNameValidator(control: FormControl): {[s: string]: boolean}|null {
    return control.value === 'anonim' ? {user: true} : null;
  }

  submit() { 
    this.onAdded.emit(this.myFrom.value);
  }

  changeVisibleForm() { 
    this.isVisibleForm = !this.isVisibleForm;
  }
}
