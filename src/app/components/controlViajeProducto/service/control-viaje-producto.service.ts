import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { controlViajeProducto } from '../models/controlViajeProducto-model';

@Injectable({
  providedIn: 'root'
})
export class controlViajeProductoService {
  getcontrolViajeProducto() {
    throw new Error("Method not implemented.");
  }
  private apiUrl = 'https://localhost:5000/api/conductor';
  constructor(private http: HttpClient) { }

  getControlViajeProducto(): Observable<controlViajeProducto[]> {
    return this.http.get<controlViajeProducto[]>(this.apiUrl);
}
}
