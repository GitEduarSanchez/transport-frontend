import { Component, OnInit } from '@angular/core';


import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../service/producto.service';
import { Producto } from '../models/producto-models';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [ProductoService],
})
export class ProductoComponent implements OnInit {
  producto: Producto[] = [];
  selectedProducto: Producto | null = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(): void {
    this.productoService.getProducto().subscribe(
      (data) => {
        this.producto = data;
      },
      (error) => {
        console.error('Error al obtener los producto:', error);
      }
    );
  }

  addProducto(producto: Producto): void {
    this.productoService.createProducto(producto).subscribe(
      (newProducto) => {
        this.producto.push(newProducto);
      },
      (error) => {
        console.error('Error al agregar el producto:', error);
      }
    );
  }

  updateProducto(producto: Producto): void {
    this.productoService.updateProducto(producto.id, producto).subscribe(
      () => {
        const index = this.producto.findIndex((c) => c.id === producto.id);
        if (index !== -1) {
          this.producto[index] = producto;
        }
      },
      (error) => {
        console.error('Error al actualizar el producto:', error);
      }
    );
  }

  deleteProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(
      () => {
        this.producto = this.producto.filter((c) => c.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el producto:', error);
      }
    );
  }

  selectProducto(producto: Producto): void {
    this.selectedProducto = producto;
  }

  clearSelection(): void {
    this.selectedProducto = null;
  }
}
