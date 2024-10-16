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

  getUsers(): Observable<Conductor[]> {
    return this.http.get<Conductor[]>(this.apiUrl);
  }
}
