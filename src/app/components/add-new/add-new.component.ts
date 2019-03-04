import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/News.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  new = {
    title  : '', 
    body : '', 
    src : ''
  }

  constructor(private newsService:NewsService) { }

  ngOnInit() {
  }
  addNew(data) {
    this.newsService.addNew(this.new)
    this.new.title = ''; 
    this.new.body = ''; 
    this.new.src = ''; 
    
  }

}
