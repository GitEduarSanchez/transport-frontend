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

  getdescargue(): Observable<descargue[]> {
    return this.http.get<descargue[]>(this.apiUrl);
  }
  getdescargueById(id: number): Observable<descargue> {
    return this.http.get<descargue>(`${this.apiUrl}/${id}`);
  }

  createdescargue(descargue: descargue): Observable<descargue> {
    return this.http.post<descargue>(this.apiUrl, descargue);
  }

  updatedescargue(id: number, descargue: descargue): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, descargue);
  }

  deletedescargue(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
