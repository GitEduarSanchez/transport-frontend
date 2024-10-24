import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Producto } from '../models/producto-models';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl = 'https://localhost:5000/api/producto';

  constructor(private http: HttpClient) {}

  getProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  getProductoById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  createProducto(Producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, Producto);
  }

  updateProducto(id: number, producto: Producto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, producto);
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
