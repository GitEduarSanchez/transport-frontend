import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../Models/Ciudad-model';
import { CiudadService } from '../Service/ciudad.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-Ciudad',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css'],
  providers: [CiudadService],
})
export class CiudadComponent implements OnInit {
  Ciudad: Ciudad[] = [];
  selectedCiudad: Ciudad | null = null;

  constructor(private CiudadService: CiudadService) {}

  ngOnInit(): void {
    this.getCiudad();
  }

  getCiudad(): void {
    this.CiudadService.getCiudad().subscribe(
      (data) => {
        this.Ciudad = data;
      },
      (error) => {
        console.error('Error al obtener las Ciudades:', error);
      }
    );
  }

  addCiudad(Ciudad: Ciudad): void {
    this.CiudadService.createCiudad(Ciudad).subscribe(
      (newCiudad) => {
        this.Ciudad.push(newCiudad);
      },
      (error) => {
        console.error('Error al agregar la Ciudad:', error);
      }
    );
  }

  updateCiudad(Ciudad: Ciudad): void {
    this.CiudadService.updateCiudad(Ciudad.id, Ciudad).subscribe(
      () => {
        const index = this.Ciudad.findIndex((c) => c.id === Ciudad.id);
        if (index !== -1) {
          this.Ciudad[index] = Ciudad;
        }
      },
      (error) => {
        console.error('Error al actualizar las Ciudades:', error);
      }
    );
  }

  deleteCiudad(id: number): void {
    this.CiudadService.deleteCiudad(id).subscribe(
      () => {
        this.Ciudad = this.Ciudad.filter((c) => c.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el Ciudad:', error);
      }
    );
  }

  selectCiudad(Ciudad: Ciudad): void {
    this.selectedCiudad = Ciudad;
  }

  clearSelection(): void {
    this.selectedCiudad = null;
  }
}
