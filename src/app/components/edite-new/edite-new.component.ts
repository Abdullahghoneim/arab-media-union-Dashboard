import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/News.service';
import { Router, ActivatedRoute } from '@angular/router'
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edite-new',
  templateUrl: './edite-new.component.html',
  styleUrls: ['./edite-new.component.scss']
})
export class EditeNewComponent implements OnInit {
  id: string; 
  new = {
    title: '', 
    body: '', 
    src: ''
  }
  complate: boolean = false;
  downloadURL: Observable<string>;
  imgPath;
  URL;
  constructor(private newService: NewsService, private router: ActivatedRoute, private route: Router,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.id =  this.router.snapshot.params['id']; 
    this.newService.getNew(this.id).subscribe(indevidulNew => {
      this.new = indevidulNew;
    })
  }
  updateNew() {
    this.newService.updateNew(this.id, this.new);
    this.route.navigate([`/new-details/${this.id}`])
  }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `news/${event.target.files[0].name}`
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL()
        this.downloadURL.subscribe(url => {
          this.URL = url;
          this.new.src = url;
          this.complate = true;
        })
      })
    )
    .subscribe()
  
  }
}
