import {Injectable} from '@angular/core'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";
  import { Observable } from "rxjs";
  import { map } from "rxjs/operators";
  import { HttpClient } from "@angular/common/http";
@Injectable()

export class NewsService {
  lastNews: Observable<any>;
  new: Observable<any>;
  constructor(private db: AngularFireDatabase) {
    this.lastNews = this.db
      .list("news")
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
    this.db.list('news').push(data)
  }
}