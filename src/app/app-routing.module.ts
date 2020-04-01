import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoPibComponent} from './info-pib/info-pib.component'


const routes: Routes = [
  {path: 'informacion-pib', component:InfoPibComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
