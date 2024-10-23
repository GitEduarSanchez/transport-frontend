import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
;
import { Observable } from 'rxjs';
import { Producto } from '../models/producto-models';

@Injectable({
  providedIn: 'root',
})
export class productoService {
  private apiUrl = 'https://localhost:5000/api/producto';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}

