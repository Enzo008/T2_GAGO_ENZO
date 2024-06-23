import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta4',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './pregunta4.component.html',
  styleUrl: './pregunta4.component.css'
})
export class Pregunta4Component {
  horasTrabajadas: number = 0;
  mostrarSalario = false;
  salarioSemanal: number = 0;

  calcularSalario(): void {
    const tarifaNormal = 16;
    const tarifaExtra = 20;
    const horasNormales = this.horasTrabajadas > 40 ? 40 : this.horasTrabajadas;
    const horasExtras = this.horasTrabajadas > 40 ? this.horasTrabajadas - 40 : 0;

    this.salarioSemanal = (horasNormales * tarifaNormal) + (horasExtras * tarifaExtra);
    this.mostrarSalario = true;
  }
}
