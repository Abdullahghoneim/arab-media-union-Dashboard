import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { EditeNewComponent } from './components/edite-new/edite-new.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'add-new', component: AddNewComponent }, 
  { path: 'new-details/:id', component: NewsDetailsComponent }, 
  {path: 'edite-new/:id', component: EditeNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
