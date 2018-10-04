import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrutableComponent } from './feature/enrutable/enrutable.component';

const routes: Routes = [
  {
    path: 'enrutable',
    component: EnrutableComponent
  },
  {
    path: 'info',
    loadChildren: './info/info.module#InfoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
