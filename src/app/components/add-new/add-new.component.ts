import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/News.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  lstNew = {
    title  : '', 
    body : '', 
    src : ''
  }
  downloadURL: Observable<string>;
  imgPath;
  URL;
  constructor(private newsService: NewsService, private router: Router,
    private storage: AngularFireStorage
  
  ) { }

  ngOnInit() {

  }
  addNew(data) {
    this.newsService.addNew(this.lstNew)
    this.router.navigate(['/'])
  }
  uploadFile(event) {   
    const file = event.target.files[0];
    const filePath = event.target.files[0].name
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL()
        this.downloadURL.subscribe(url => {
          this.URL = url;
          this.lstNew.src = url;
        } )
      })
   )
    .subscribe()
  
  }
}
