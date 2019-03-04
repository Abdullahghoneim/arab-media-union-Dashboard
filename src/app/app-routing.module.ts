import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddNewComponent } from './components/add-new/add-new.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  {path: 'add-new', component: AddNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
