import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'add-new', component: AddNewComponent }, 
  {path: 'new-details/:id', component:NewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
