import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {
  mostrarTotal = false;
  resultadoFinal = '';

  formDescuento = {
    cantidad: 0,
    precio: 0
  }

  calcularDescuento(): void {
    const total = this.formDescuento.cantidad * this.formDescuento.precio;
    let descuento = 0;

    if (total > 200) {
      descuento = total * 0.20;
    }

    const totalConDescuento = total - descuento;
    this.mostrarTotal = true;
    this.resultadoFinal = `El total a pagar es: $${totalConDescuento.toFixed(2)}, se aplicó un descuento de: $${descuento.toFixed(2)}`;
  }
}
