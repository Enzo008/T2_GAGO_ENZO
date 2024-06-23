import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario: string, password: string): boolean{
    const usuarioValido = 'gago';
    const passwordValida = '12345';

    const esAutenticado = usuario === usuarioValido && password === passwordValida;

    if (esAutenticado) {
      sessionStorage.setItem("isLogged", "true");
    }

    return esAutenticado;
  }

  logout():void{
    sessionStorage.clear()    
  }

  isLogged():boolean{
    return !!sessionStorage.getItem("isLogged");
  }

}
