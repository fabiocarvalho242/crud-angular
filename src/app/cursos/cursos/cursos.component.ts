import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';
import { CursosService } from '../services/cursos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos',
  standalone: false,

  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})

export class CursosComponent implements OnInit {

  cursos$!: Observable<Curso[]>;
  displayedColumns = ['nome', 'categoria', 'descricao'];

  constructor(private cursoService: CursosService) {}

  ngOnInit(): void {
    this.cursos$ = this.cursoService.list();

  }
}
