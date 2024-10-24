import { HttpClientModule } from "@angular/common/http";
import { controlViajeProducto } from "./models/controlViajeProductos-model";
import { controlViajeProductoService } from "./service/control-viaje-producto.service";
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlViajeProducto',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './control-viaje-producto.component.html',
  styleUrls: ['./control-viaje-producto.component.css'],
  providers: [controlViajeProductoService],
})
export class controlViajeProductoComponent implements OnInit {
  controlViajeProducto: controlViajeProducto[] = [];
  selectedcontrolViajeProducto: controlViajeProducto | null = null;

  constructor(private controlViajeProductoService: controlViajeProductoService) {}

  ngOnInit(): void {
    this.getcontrolViajeProducto();
  }

  getcontrolViajeProducto(): void {
    this.controlViajeProductoService.getcontrolViajeProducto().subscribe(
      (data) => {
        this.controlViajeProducto = data;
      },
      (error) => {
        console.error('Error al obtener los controlViajeProducto:', error);
      }
    );
  }

  addcontrolViajeProducto(controlViajeProducto: controlViajeProducto): void {
    this.controlViajeProductoService.createcontrolViajeProducto(controlViajeProducto).subscribe(
      (newcontrolViajeProducto) => {
        this.controlViajeProducto.push(newcontrolViajeProducto);
      },
      (error) => {
        console.error('Error al agregar el controlViajeProducto:', error);
      }
    );
  }

  updatecontrolViajeProducto(controlViajeProducto: controlViajeProducto): void {
    this.controlViajeProductoService.updatecontrolViajeProducto(controlViajeProducto.idControlViajeProducto, controlViajeProducto).subscribe(
      () => {
        const index = this.controlViajeProducto.findIndex((c) => c.idControlViajeProducto === controlViajeProducto.idControlViajeProducto);
        if (index !== -1) {
          this.controlViajeProducto[index] = controlViajeProducto;
        }
      },
      (error) => {
        console.error('Error al actualizar el controlViajeProducto:', error);
      }
    );
  }

  deletecontrolViajeProducto(id: number): void {
    this.controlViajeProductoService.deletecontrolViajeProducto(id).subscribe(
      () => {
        this.controlViajeProducto = this.controlViajeProducto.filter((c) => c.idControlViajeProducto !== id);
      },
      (error) => {
        console.error('Error al eliminar el controlViajeProducto:', error);
      }
    );
  }

  selectcontrolViajeProducto(controlViajeProducto: controlViajeProducto): void {
    this.selectedcontrolViajeProducto = controlViajeProducto;
  }

  clearSelection(): void {
    this.selectedcontrolViajeProducto = null;
  }
}