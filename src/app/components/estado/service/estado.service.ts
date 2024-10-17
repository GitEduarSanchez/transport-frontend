import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../models/estado-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  private apiUrl = 'https://localhost:5000/api/estado';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.apiUrl);
  }
}
