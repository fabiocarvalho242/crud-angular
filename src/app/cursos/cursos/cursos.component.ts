import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: false,

  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})

export class CursosComponent implements OnInit {

  cursos: Curso[] = [];

  displayedColumns = ['nome', 'categoria', 'descricao'];

  constructor(private cursoService: CursosService) {
    this.cursos = this.cursoService.list();
   }

  ngOnInit(): void {
  }

}
