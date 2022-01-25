import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registerButtonDisabled: boolean = true;
  // formGroup erstellen
  registerForm: FormGroup; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required,
          Validators.minLength(2)]),
      email: new FormControl('',  Validators.email),
      password: new FormControl('', [Validators.required,
          Validators.minLength(2)]),
      password_repeat: new FormControl('', [Validators.required,
              Validators.minLength(2)]),
  });
  }
  sendContactForm() {
    console.log("Do something fancy with the form...");
    console.log("Username: " + this.registerForm.get('username').value);
    console.log("Email: " + this.registerForm.get('email').value);
    console.log("Password: " + this.registerForm.get('password').value);
  }

}
