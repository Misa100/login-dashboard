import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email : any;
  password : any;

  constructor(private authService: AuthService, private router : Router){}

  onLogin() {
    const obj = {
      email: this.email,
      password: this.password
    };
    this.authService.login(obj).subscribe({
        next: (data) => {
            this.router.navigate(['/dashboard/dashboard']);
        },
        error: (error) => {
            console.error('Erreur lors de la connexion', error);
        }
    });
}

  onGoogleLogin() {
    this.authService.googleLogin();
  }
}
