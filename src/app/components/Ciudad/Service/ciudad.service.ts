import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from '../Models/Ciudad-model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  
  private apiUrl = 'https://localhost:5000/api/Ciudad';

  constructor(private http: HttpClient) {}

  getCiudad(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.apiUrl);
  }
  getCiudadById(id: number): Observable<Ciudad> {
    return this.http.get<Ciudad>(`${this.apiUrl}/${id}`);
  }

  createCiudad(Ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(this.apiUrl, Ciudad);
  }

  updateCiudad(id: number, Ciudad: Ciudad): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, Ciudad);
  }

  deleteCiudad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
