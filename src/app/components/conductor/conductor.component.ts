import { Component, OnInit } from '@angular/core';
import { Conductor } from './models/conductor-model';
import { ConductorService } from './service/conductor.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conductor',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css'],
  providers: [ConductorService],
})
export class ConductorComponent implements OnInit {
  conductor: Conductor[] = [];
  selectedConductor: Conductor | null = null;

  constructor(private conductorService: ConductorService) {}

  ngOnInit(): void {
    this.getConductors();
  }

  getConductors(): void {
    this.conductorService.getConductor().subscribe(
      (data) => {
        this.conductor = data;
      },
      (error) => {
        console.error('Error al obtener los conductores:', error);
      }
    );
  }

  addConductor(conductor: Conductor): void {
    this.conductorService.createConductor(conductor).subscribe(
      (newConductor) => {
        this.conductor.push(newConductor);
      },
      (error) => {
        console.error('Error al agregar el conductor:', error);
      }
    );
  }

  updateConductor(conductor: Conductor): void {
    this.conductorService.updateConductor(conductor.id, conductor).subscribe(
      () => {
        const index = this.conductor.findIndex((c) => c.id === conductor.id);
        if (index !== -1) {
          this.conductor[index] = conductor;
        }
      },
      (error) => {
        console.error('Error al actualizar el conductor:', error);
      }
    );
  }

  deleteConductor(id: number): void {
    this.conductorService.deleteConductor(id).subscribe(
      () => {
        this.conductor = this.conductor.filter((c) => c.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el conductor:', error);
      }
    );
  }

  selectConductor(conductor: Conductor): void {
    this.selectedConductor = conductor;
  }

  clearSelection(): void {
    this.selectedConductor = null;
  }
}
