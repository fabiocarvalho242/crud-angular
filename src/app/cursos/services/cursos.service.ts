import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }

  list(): Curso[] {
    return [
      { _id: '1', nome: 'Angular', descricao: 'Curso de Angular', categoria: 'Front-end' },
      { _id: '2', nome: 'React', descricao: 'Curso de React', categoria: 'Front-end' },
      { _id: '3', nome: 'Vue', descricao: 'Curso de Vue', categoria: 'Front-end' },
    ];
  }
}
