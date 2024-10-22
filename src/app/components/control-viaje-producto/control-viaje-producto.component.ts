import { HttpClientModule } from "@angular/common/http";
import { controlViajeProducto } from "./models/controlViajeProductos-model";
import { controlViajeProductoService } from "./service/control-viaje-producto.service";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-controlViajeProducto',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './control-viaje-producto.component.html',
  styleUrls: ['./control-viaje-producto.component.css'],
  providers: [controlViajeProductoService],
})
export class ControlViajeProductoComponent {
  controlViajeProducto: controlViajeProducto[] = [];

  constructor(private userService: controlViajeProductoService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.controlViajeProducto = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}
