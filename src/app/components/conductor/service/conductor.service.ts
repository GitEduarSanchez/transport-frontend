import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conductor } from '../models/conductor-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConductorService {
  private apiUrl = 'https://localhost:5000/api/conductor';

  constructor(private http: HttpClient) {}

  getConductor(): Observable<Conductor[]> {
    return this.http.get<Conductor[]>(this.apiUrl);
  }
  getConductorById(id: number): Observable<Conductor> {
    return this.http.get<Conductor>(`${this.apiUrl}/${id}`);
  }

  createConductor(conductor: Conductor): Observable<Conductor> {
    return this.http.post<Conductor>(this.apiUrl, conductor);
  }

  updateConductor(id: number, conductor: Conductor): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, conductor);
  }

  deleteConductor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
