import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../models/estado-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private apiUrl = 'https://localhost:5000/api/estado';
  
  constructor(private http: HttpClient) {}

  getEstado(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.apiUrl);
  }
  getEstadoById(id: number): Observable<Estado> {
    return this.http.get<Estado>(`${this.apiUrl}/${id}`);
  }

  createEstado(estado: Estado): Observable<Estado> {
    return this.http.post<Estado>(this.apiUrl, estado);
  }

  updateEstado(id: number, estado: Estado): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, estado);
  }

  deleteEstado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}