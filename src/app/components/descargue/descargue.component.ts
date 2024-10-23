import { Component } from '@angular/core';
import { descargue } from './models/descargue-model';
import { descargueService } from './service/descargue.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-descargue',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './descargue.component.html',
  styleUrls: ['./descargue.component.css'],
  providers: [descargueService],
})
export class descargueComponent {
  descargues: descargue[] = [];

  constructor(private userService: descargueService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.descargues = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}
