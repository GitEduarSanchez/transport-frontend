import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { descargue } from '../models/descargue-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class descargueService {
  private apiUrl = 'https://localhost:5000/api/descargue';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<descargue[]> {
    return this.http.get<descargue[]>(this.apiUrl);
  }
}
