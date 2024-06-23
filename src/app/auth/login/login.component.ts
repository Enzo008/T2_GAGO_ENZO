import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router,
    private authService: AuthService
  ){

  }
  
  submit(usuario: HTMLInputElement,
    password: HTMLInputElement
  ):void{
    const esAutenticado = this.authService.login(usuario.value, password.value);

    if (esAutenticado) {
      this.router.navigateByUrl("/dashboard");
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  }

}
