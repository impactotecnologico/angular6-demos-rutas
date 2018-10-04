import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrutableComponent } from './feature/enrutable/enrutable.component';
import { AuthGuard } from './guards/guard1';

const routes: Routes = [
  {
    path: 'enrutable',
    component: EnrutableComponent,
    canActivate: [AuthGuard]
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
