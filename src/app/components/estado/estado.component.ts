import { Component } from '@angular/core';
import { Estado } from './models/estado-model';
import { EstadoService } from './service/estado.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css'],
  providers: [EstadoService],
})
export class EstadoComponent {
  estados: Estado[] = [];

  constructor(private userService: EstadoService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.estados = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}
