import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'abt-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  // Custom public methods

  onSubmit() {
    const values = this.userForm.value;

    console.log(values);
  }

  // Custom private methods

  // Getters and setters

  get emailControl() {
    return this.userForm.get('email');
  }

}
