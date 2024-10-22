import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { controlViajeProducto } from '../models/controlViajeProductos-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class controlViajeProductoService {
  private apiUrl = 'https://localhost:5000/api/conductor';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<controlViajeProducto[]> {
    return this.http.get<controlViajeProducto[]>(this.apiUrl);
  }
}