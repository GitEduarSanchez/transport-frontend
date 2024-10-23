import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concepto } from '../models/concepto-model';

@Injectable({
  providedIn: 'root',
})
export class ConceptoService {
  private apiUrl = 'https://localhost:5000/api/concepto';

  constructor(private http: HttpClient) {}

  getConcepto(): Observable<Concepto[]> {
    return this.http.get<Concepto[]>(this.apiUrl);
  }
  getConceptoById(IdConcepto: number): Observable<Concepto> {
    return this.http.get<Concepto>(`${this.apiUrl}/${IdConcepto}`);
  }

  createConcepto(concepto: Concepto): Observable<Concepto> {
    return this.http.post<Concepto>(this.apiUrl, concepto);
  }

  updateConcepto(IdConcepto: number, concepto: Concepto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${IdConcepto}`, concepto);
  }

  deleteConcepto(IdConcepto: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${IdConcepto}`);
  }
}