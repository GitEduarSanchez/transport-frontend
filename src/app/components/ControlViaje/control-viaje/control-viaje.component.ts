import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ControlViajeService } from '../service/control-viaje.service';
import { ControlViaje } from '../service/models/controlviaje-model';

@Component({
  selector: 'app-controlviaje',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './control-viaje.component.html',
  styleUrls: ['./control-viaje.component.css'],
  providers: [ControlViajeService],
})
export class ControlViajeComponent {
  controlviajes: ControlViaje[] = [];

  constructor(private userService: ControlViajeService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.controlviajes = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}
