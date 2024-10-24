import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConductorService } from '../conductor/service/conductor.service';

@Component({
  selector: 'app-trailer',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css'],
  providers: [trailerService],
})
export class trailerComponent implements OnInit {
  trailer: trailer[] = [];
  selectedtrailer: trailer | null = null;

  constructor(private trailerService: trailerService) {}

  ngOnInit(): void {
    this.gettrailer();
  }

  gettrailer(): void {
    this.trailerService.gettrailer().subscribe(
      (data) => {
        this.trailer = data;
      },
      (error) => {
        console.error('Error al obtener los trailer:', error);
      }
    );
  }

  addtrailer(trailer: trailer): void {
    this.trailerService.createtrailer(trailer).subscribe(
      (newtrailer) => {
        this.trailer.push(newtrailer);
      },
      (error) => {
        console.error('Error al agregar el trailer:', error);
      }
    );
  }

  updatetrailer(trailer: trailer): void {
    this.trailerService.updatetrailer(trailer.id, trailer).subscribe(
      () => {
        const index = this.conductor.findIndex((c) => c.id === conductor.id);
        if (index !== -1) {
          this.[index] = conductor;
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

