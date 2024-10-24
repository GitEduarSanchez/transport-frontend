import { Component, OnInit } from '@angular/core';
import { Concepto } from './models/concepto-model';
import { ConceptoService } from './service/concepto.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-concepto',
  standalone: true,
  imports: [CommonModule, HttpClientModule,FormsModule],
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css'],
  providers: [ConceptoService],
})
export class ConceptoComponent implements OnInit {
  concepto: Concepto[] = [];
  selectedConcepto: Concepto | null = null;
  

  constructor(private conceptoService: ConceptoService) {}

  ngOnInit(): void {
    this.getConcepto();
  }

  getConcepto(): void {
    this.conceptoService.getConcepto().subscribe(
      (data) => {
        this.concepto = data;
      },
      (error) => {
        console.error('Error al obtener los conceptos:', error);
      }
    );
  }

  addConcepto(concepto: Concepto): void {
    this.conceptoService.createConcepto(concepto).subscribe(
      (newConcepto) => {
        this.concepto.push(newConcepto);
      },
      (error) => {
        console.error('Error al agregar el concepto:', error);
      }
    );
  }

  updateConcepto(concepto: Concepto): void {
    this.conceptoService.updateConcepto(concepto.IdConcepto, concepto).subscribe(
      () => {
        const index = this.concepto.findIndex((c) => c.IdConcepto === concepto. IdConcepto);
        if (index !== -1) {
          this.concepto[index] = concepto;
        }
      },
      (error) => {
        console.error('Error al actualizar el concepto', error);
      }
    );
  }

  deleteConcepto(IdConcepto: number): void {
    this.conceptoService.deleteConcepto(IdConcepto).subscribe(
      () => {
        this.concepto = this.concepto.filter((c) => c.IdConcepto !== IdConcepto);
      },
      (error) => {
        console.error('Error al eliminar el concepto:', error);
      }
    );
  }

  selectConcepto(concepto: Concepto  ): void {
    this.selectedConcepto = concepto; 
    
  }
  

  clearSelection(): void {
    this.selectedConcepto = null;
  }
}
