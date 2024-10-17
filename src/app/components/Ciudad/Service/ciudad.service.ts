import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from '../Models/Ciudad-model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  
  private apiUrl = 'https://localhost:5000/api/Ciudad';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.apiUrl);
  }
}
