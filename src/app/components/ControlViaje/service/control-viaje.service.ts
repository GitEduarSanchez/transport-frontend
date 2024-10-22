import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlViaje } from '../control-viaje/models/controlviaje-model';

@Injectable({
  providedIn: 'root',
})
export class ControlViajeService {
  private apiUrl = 'https://localhost:5000/api/controlviaje';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<ControlViaje[]> {
    return this.http.get<ControlViaje[]>(this.apiUrl);
  }
}
