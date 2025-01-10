import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosResolver } from './cursos/cursos.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'cursos', pathMatch: 'full' },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    resolve: { cursos: CursosResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
