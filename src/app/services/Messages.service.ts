import { Injectable } from '@angular/core'; 
import { AngularFireDatabase , AngularFireList , AngularFireObject } from "@angular/fire/database";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class MessagesServices { 
    messgaeList: AngularFireList<any[]>
    messageObject: AngularFireObject<any>
    message: Observable<any>;
    constructor(private db: AngularFireDatabase) {
        this.messgaeList = this.db.list("messages")
        this.message = this.messgaeList
          .snapshotChanges()
          .pipe(
            map(changes =>
              changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
          );
    }
    
    getMessages() {
        return this.message;
  }
  getMessage(id) {
    this.messageObject = this.db.object(`messages/${id}`)
    this.message = this.messageObject.valueChanges()
    return this.message;
  }
  deleteMessage(id) {
    this.messageObject.remove()
  }
}