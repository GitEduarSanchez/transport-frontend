import { Component } from '@angular/core';
import { Conductor } from './models/conductor-model';
import { ConductorService } from './service/conductor.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-conductor',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css'],
  providers: [ConductorService],
})
export class ConductorComponent {
  conductors: Conductor[] = [];

  constructor(private userService: ConductorService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.conductors = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}
