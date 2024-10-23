import { Component } from '@angular/core';
import { CiudadService } from '../Service/ciudad.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Ciudad } from '../Models/Ciudad-model';

@Component({
  selector: 'app-Ciudad',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css'],
  providers: [CiudadService],
})
export class CiudadComponent {
  Ciudad: Ciudad[] = [];

  constructor(private userService: CiudadService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.Ciudad = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}
