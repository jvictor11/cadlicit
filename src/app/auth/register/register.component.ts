import { AuthService } from './../auth.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password1: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]]
  }, { validator: this.matchPassword });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit() {
  }

  matchPassword(group: FormGroup) {
    if (group) {
      const password1 = group.controls.password1.value;
      const password2 = group.controls.password2.value;
      if (password1 === password2) {
        return null;
      }
    }
    return {match: false};
  }

  onSubmit() {
    const u: User = { ...this.formRegister.value,
                      password: this.formRegister.value.password1
                    };
    this.authService.register(u)
        .subscribe(
          (u) => {
            this.snackBar.open(
              `Usuário Registrado com Sucesso, Seja Bem Vindo(a) ${u.name}`,
              'OK', { duration: 3000 }
            );
            this.router.navigateByUrl('/auth/login');
          },
          (error) => {
            console.error(error);
            this.snackBar.open(
              error.error.message,
              'OK', { duration: 3000 }
            );
          }
        );

  }

}
