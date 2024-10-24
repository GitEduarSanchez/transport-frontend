import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class trailerService {
  private apiUrl = 'https://localhost:5000/api/trailer';

  constructor(private http: HttpClient) {}

  gettrailer(): Observable<trailer[]> {
    return this.http.get<trailer[]>(this.apiUrl);
  }
  gettrailerById(id: number): Observable<trailer> {
    return this.http.get<trailer>(`${this.apiUrl}/${id}`);
  }

  createtrailer(trailer: trailer): Observable<trailer> {
    return this.http.post<trailer>(this.apiUrl, trailer);
  }

  updatetrailer(id: number, trailer: trailer): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, trailer);
  }

  deletetrailer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
