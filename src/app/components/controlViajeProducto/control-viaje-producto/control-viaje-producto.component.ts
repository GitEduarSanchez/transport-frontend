import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { controlViajeProducto } from "../models/controlViajeProducto-model";
import { controlViajeProductoService } from "../service/control-viaje-producto.service";



@Component({
  selector: 'app-controlViajeProducto',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './control-viaje-Producto.component.html',
  styleUrls: ['./control-viaje-producto.component.css'],
  providers: [controlViajeProductoService],
})
export class controlViajeProductoComponent {
  controlViajeProducto: controlViajeProducto[] = [];

  constructor(private userService: controlViajeProductoService) {}

  ngOnInit(): void {
    this.userService.getcontrolViajeProducto().subscribe(
      (data) => {
        this.controlViajeProducto = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}