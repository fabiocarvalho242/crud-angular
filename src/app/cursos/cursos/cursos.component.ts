import { Component } from '@angular/core';
import { Curso } from '../models/curso';

@Component({
  selector: 'app-cursos',
  standalone: false,

  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

  cursos: Curso[] = [];
  displayedColumns = ['nome', 'categoria'];

  constructor() {
   }

  ngOnInit(): void {
  }

}
