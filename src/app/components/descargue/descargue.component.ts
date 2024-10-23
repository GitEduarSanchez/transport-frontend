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

  descargue(private descargueService: descargueService) {}

  ngOnInit(): void {
    this.getdescargues();
  }

  getdescargues(): void {
    this.descargueService.getdescargue().subscribe(
      (data) => {
        this.descargue = data;
      },
      (error) => {
        console.error('Error al obtener los conductores:', error);
      }
    );
  }

  adddescargue(descargue: descargue): void {
    this.descargueService.createdescargue(descargue).subscribe(
      (newdescargue) => {
        this.descargue.push(newdescargue);
      },
      (error) => {
        console.error('Error al agregar el descargue:', error);
      }
    );
  }

  updatedescargue(descargue: descargue): void {
    this.descargueService.updatedescargue(descargue.id, descargue).subscribe(
      () => {
        const index = this.descargue.findIndex((c) => c.id === descargue.id);
        if (index !== -1) {
          this.descargue[index] = descargue;
        }
      },
      (error) => {
        console.error('Error al actualizar el descargue:', error);
      }
    );
  }

  deletedescargue(id: number): void {
    this.descargueService.deletedescargue(id).subscribe(
      () => {
        this.descargue = this.descargue.filter((c) => c.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el descargue:', error);
      }
    );
  }

  selectdescargue(descargue: descargue): void {
    this.selecteddescargue = descargue;
  }

  clearSelection(): void {
    this.selecteddescargue = null;
  }
}
