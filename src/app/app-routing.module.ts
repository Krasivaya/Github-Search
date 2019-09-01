import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsComponent } from './gs/gs.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'gs', component: GsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo:"/gs", pathMatch:"full" },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
