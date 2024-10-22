import { Component } from '@angular/core';
import { Concepto } from './models/concepto-model';
import { ConceptoService } from './service/concepto.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-concepto',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css'],
  providers: [ConceptoService],
})
export class ConceptoComponent {
  concepto: Concepto[] = [];

  constructor(private userService: ConceptoService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.concepto = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}