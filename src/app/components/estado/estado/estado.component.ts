import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Estado } from '../models/estado-model';
import { EstadoService } from '../service/estado.service';

@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css'],
  providers: [EstadoService],
})
export class EstadoComponent implements OnInit {
  estados: Estado[] = [];
  selectedEstado: Estado | null = null;

  constructor(private estadoService: EstadoService) {}

  ngOnInit(): void {
    this.getEstados();
  }

  getEstados(): void {
    this.estadoService.getEstado().subscribe(
      (data) => {
        this.estados = data;
      },
      (error) => {
        console.error('Error al obtener los estados:', error);
      }
    );
  }

  addEstado(estado: Estado): void {
    this.estadoService.createEstado(estado).subscribe(
      (newEstado) => {
        this.estados.push(newEstado);
      },
      (error) => {
        console.error('Error al agregar el estado:', error);
      }
    );
  }

  updateConductor(estado: Estado): void {
    this.estadoService.updateEstado(estado.id, estado).subscribe(
      () => {
        const index = this.estados.findIndex((c) => c.id === estado.id);
        if (index !== -1) {
          this.estados[index] = estado;
        }
      },
      (error) => {
        console.error('Error al actualizar el estado:', error);
      }
    );
  }

  deleteEstado(id: number): void {
    this.estadoService.deleteEstado(id).subscribe(
      () => {
        this.estados = this.estados.filter((c) => c.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el estado:', error);
      }
    );
  }

  selectEstado(estado: Estado): void {
    this.selectedEstado = estado;
  }

  clearSelection(): void {
    this.selectedEstado = null;
  }
}
