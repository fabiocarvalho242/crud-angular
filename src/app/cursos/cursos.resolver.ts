import { Inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CursosService } from './services/cursos.service';
import { Curso } from './models/curso';


@Injectable({
  providedIn: 'root'
})
export class CursosResolver implements Resolve<Observable<Curso[]>> {

  constructor(@Inject(CursosService) private cursosService: CursosService) {}

  resolve(): Observable<Curso[]> {
    return this.cursosService.list();
  }
}
