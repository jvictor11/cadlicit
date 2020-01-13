import { AuthService } from './../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    const credentials = this.loginForm.value;
    this.authService.login(credentials)
      .subscribe(
        user => {
          this.snackBar.open(`Bem vindo, ${user.name}!`, 'Ok', { duration: 3000 });
          this.router.navigateByUrl('/main');
        },
        error => {
          console.error(error);
          this.snackBar.open(error.error.message, 'Ok', { duration: 3000 });
        }
      );
  }

}
