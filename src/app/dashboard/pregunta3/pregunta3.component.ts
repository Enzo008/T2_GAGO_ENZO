import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {
  montoPrestamo: number = 0;
  mostrarResultado = false;
  numeroCuotas: number = 0;
  valorCuota: number = 0;

  calcularCuotas(): void {
    let interes = this.montoPrestamo < 4000 ? 0.12 : 0.10;
    let montoConInteres = this.montoPrestamo + (this.montoPrestamo * interes);

    if (this.montoPrestamo > 5000) {
      this.numeroCuotas = 3;
    } else if (this.montoPrestamo < 1000) {
      this.numeroCuotas = 1;
    } else if (this.montoPrestamo >= 1000 && this.montoPrestamo <= 5000) {
      this.numeroCuotas = 2;
    } else {
      this.numeroCuotas = 5;
    }

    this.valorCuota = montoConInteres / this.numeroCuotas;
    this.mostrarResultado = true;
  }
}
