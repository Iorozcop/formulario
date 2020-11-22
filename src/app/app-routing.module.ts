import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { FechaComponent } from './components/fecha/fecha.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent,
  },
  {
    path:'inicio',
    component: InicioComponent,
  },
  {
    path:'formulario',
    component: FormularioComponent,
  },
  {
    path: 'fecha',
    component: FechaComponent,
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
