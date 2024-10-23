import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { destino } from '../models/destino-model';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {
  private apiUrl = 'https://localhost:5000/api/destino';

  constructor(private http: HttpClient) { }
  getUsers(): Observable<destino[]>{
    return this.http.get<destino[]>(this.apiUrl);
  }
}
