import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { controlViajeProducto } from '../models/controlViajeProductos-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class controlViajeProductoService {
  private apiUrl = 'https://localhost:5000/api/controlviajeproducto';

  constructor(private http: HttpClient) {}

  getcontrolViajeProducto(): Observable<controlViajeProducto[]> {
    return this.http.get<controlViajeProducto[]>(this.apiUrl);
  }

  getcontrolViajeProductoById(id: number): Observable<controlViajeProducto> {
    return this.http.get<controlViajeProducto>(`${this.apiUrl}/${id}`);
  }

  createcontrolViajeProducto(controlViajeProducto: controlViajeProducto): Observable<controlViajeProducto> {
    return this.http.post<controlViajeProducto>(this.apiUrl, controlViajeProducto);
  }

  updatecontrolViajeProducto(id: number, controlViajeProducto: controlViajeProducto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, controlViajeProducto);
  }

  deletecontrolViajeProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}