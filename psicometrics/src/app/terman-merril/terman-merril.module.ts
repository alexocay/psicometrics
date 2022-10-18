import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SeerieUnoComponent } from './seerie-uno/seerie-uno.component';
import { SerieDosComponent } from './serie-dos/serie-dos.component';
import { SerieTresComponent } from './serie-tres/serie-tres.component';
import { SerieCuatroComponent } from './serie-cuatro/serie-cuatro.component';
import { SerieCincoComponent } from './serie-cinco/serie-cinco.component';
import { SerieSieteComponent } from './serie-siete/serie-siete.component';
import { SerieSeisComponent } from './serie-seis/serie-seis.component';
import { SerieOchoComponent } from './serie-ocho/serie-ocho.component';
import { SerieNueveComponent } from './serie-nueve/serie-nueve.component';
import { SerieDiezComponent } from './serie-diez/serie-diez.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'serieUno', component: SeerieUnoComponent }, 
  { path: 'serieDos', component: SerieDosComponent },
  { path: 'serieTres', component: SerieTresComponent }, 
  { path: 'serieCuatro', component: SerieCuatroComponent }, 
  { path: 'serieCinco', component: SerieCincoComponent }, 
  { path: 'serieSeis', component: SerieSeisComponent },
  { path: 'serieSiete', component: SerieSieteComponent },
  { path: 'serieOcho', component: SerieOchoComponent },
  { path: 'serieNueve', component: SerieNueveComponent },
  { path: 'serieDiez', component: SerieDiezComponent },
];

@NgModule({
  declarations: [
    SeerieUnoComponent,
    SerieDosComponent,
    SerieTresComponent,
    SerieCuatroComponent,
    SerieCincoComponent,
    SerieSieteComponent,
    SerieSeisComponent,
    SerieOchoComponent,
    SerieNueveComponent,
    SerieDiezComponent
  ],
  imports: [
    CommonModule,  RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class TermanMerrilModule { }
