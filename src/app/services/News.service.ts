import {Injectable} from '@angular/core'
import { AngularFireDatabase , AngularFireList , AngularFireObject } from "@angular/fire/database";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable()

export class NewsService {
  newList: AngularFireList<any[]>
  newObject: AngularFireObject<any>
  lastNews: Observable<any>;
  new: Observable<any>;
  constructor(private db: AngularFireDatabase) {
    this.newList = this.db.list("news")
    this.lastNews = this.newList
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
  getNews() {
    return this.lastNews;
  }
  addNew(data) {
    this.newList.push(data)
  }
  getNew(id) {
    this.newObject = this.db.object(`news/${id}`)
    this.new = this.newObject.valueChanges()
    return this.new;
  }
  deleteNew(id) {
   this.db.list(`news/${id}`).remove()
  }
  updateNew(id , data) {
    this.newObject.update(data)
  }
}