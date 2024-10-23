import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { Producto } from "../models/producto-models";
import { ProductoService } from "../service/producto.service";


@Component({
  selector: 'app-Producto',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [ProductoService],
})
export class ProductoComponent {
  Producto: Producto[] = [];

  constructor(private userService: ProductoService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.Producto = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}
