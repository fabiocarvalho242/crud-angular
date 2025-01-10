import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: false,

  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})

export class CursosComponent implements OnInit {

  cursos: Curso[] | undefined;
  displayedColumns = ['nome', 'categoria', 'descricao'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cursos = this.route.snapshot.data['cursos'];
  }
}
