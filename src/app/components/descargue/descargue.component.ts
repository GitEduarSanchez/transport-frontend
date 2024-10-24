import { Component, OnInit } from '@angular/core';
import { descargue } from './models/descargue-model';
import { descargueService } from './service/descargue.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-descargue',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './descargue.component.html',
  styleUrls: ['./descargue.component.css'],
  providers: [descargueService],
})
export class descargueComponent implements OnInit {
  Descargue: descargue[] = [];
  selectedDescargue: descargue | null = null;

  constructor(private descargueService: descargueService) {}

  ngOnInit(): void {
    this.getdescargues();
  }

  getdescargues(): void {
    this.descargueService.getdescargue().subscribe(
      (data) => {
        this.Descargue = data;
      },
      (error) => {
        console.error('Error al obtener los descargues:', error);
      }
    );
  }

  addDescargue(Descargue: descargue): void {
    this.descargueService.createdescargue(Descargue).subscribe(
      (newDescargue) => {
        this.Descargue.push(newDescargue);
      },
      (error) => {
        console.error('Error al agregar el descargue:', error);
      }
    );
  }

  updateDescargue(Descargue: descargue): void {
    this.descargueService.updatedescargue(Descargue.id, Descargue).subscribe(
      () => {
        const index = this.Descargue.findIndex((c) => c.id === Descargue.id);
        if (index !== -1) {
          this.Descargue[index] = Descargue;
        }
      },
      (error) => {
        console.error('Error al actualizar el descargue:', error);
      }
    );
  }

  deleteDescargue(id: number): void {
    this.descargueService.deletedescargue(id).subscribe(
      () => {
        this.Descargue = this.Descargue.filter((c) => c.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el descargue:', error);
      }
    );
  }

  selectDescargue(Descargue: descargue): void {
    this.selectedDescargue = Descargue;
  }

  clearSelection(): void {
    this.selectedDescargue = null;
  }
}
