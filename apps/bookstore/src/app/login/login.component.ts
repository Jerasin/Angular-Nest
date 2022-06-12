import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../auth/index';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'web-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    public authService: AuthService,
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    console.log(`ngOnInit is Running...`);
  }

  registerPage() {
    this.router.navigate(['users']);
  }

  async login() {
    const { email, password } = this.loginForm.value;
    const result = await this.authService.SignIn(email, password);
    console.log(result);

    return result;
  }
}
