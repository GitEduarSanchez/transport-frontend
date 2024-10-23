import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViajeOrigen } from '../models/ViajeOrigen-model';
import { Observable } from 'rxjs';
import { ViajeOrigenComponent } from '../viaje-origen.component';

@Injectable({
  providedIn: 'root'
})
export class ViajeOrigenService {
private apiUrl = 'https://localhost:5000/api/viajeorigen';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<ViajeOrigen[]> {
    return this.http.get<ViajeOrigen[]>(this.apiUrl);
  }
}
