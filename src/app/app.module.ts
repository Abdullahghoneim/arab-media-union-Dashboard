import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import {FormsModule} from '@angular/forms'


// firebase
import {AngularFireModule} from '@angular/fire/'
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

// services 
import { NewsService } from './services/News.service';
import { EditeNewComponent } from './components/edite-new/edite-new.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessagesServices } from './services/Messages.service';
import { MessagesDetailsComponent } from './components/messages/messages-details/messages-details.component';

const firebase = {
  apiKey: "AIzaSyAq2oCiGtSBNqi6RlPfO1YqFd0kd9CHs-4",
  authDomain: "media-union.firebaseapp.com",
  databaseURL: "https://media-union.firebaseio.com",
  projectId: "media-union",
  storageBucket: "media-union.appspot.com",
  messagingSenderId: "251594964825"
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewsDetailsComponent,
    AddNewComponent,
    EditeNewComponent,
    MessagesComponent,
    MessagesDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule, 
    FormsModule,
    AngularFireStorageModule
  ],
  providers: [NewsService, MessagesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
