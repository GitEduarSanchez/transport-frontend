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

  getUsers(): Observable<Concepto[]> {
    return this.http.get<Concepto[]>(this.apiUrl);
  }
}