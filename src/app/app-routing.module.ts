import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { EditeNewComponent } from './components/edite-new/edite-new.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessagesDetailsComponent } from './components/messages/messages-details/messages-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  // news
  { path: 'add-new', component: AddNewComponent }, 
  { path: 'new-details/:id', component: NewsDetailsComponent }, 
  {path: 'edite-new/:id', component: EditeNewComponent }, 
  // messages 
  {path: 'messages', component: MessagesComponent},
  {path: 'message-details/:id', component: MessagesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
