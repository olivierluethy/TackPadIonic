import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginButtonDisabled: boolean = true;

  // formGroup erstellen
  loginForm: FormGroup; 

  constructor(
    private auth: AuthService,
    private router: Router,
    public formBuilder: FormBuilder,
    private menuCtrl: MenuController
) {
    this.loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });
}

  ngOnInit() {
    this.loginForm = new FormGroup({
      lastname: new FormControl(null),
      firstname: new FormControl(null),
      email: new FormControl(null)
    });
  }

  sendContactForm() {
    console.log("Do something fancy with the form...");
    console.log("Lastname: " + this.loginForm.get('lastname').value);
    console.log("Firstname: " + this.loginForm.get('firstname').value);
    console.log("Email: " + this.loginForm.get('email').value);
  }

}
