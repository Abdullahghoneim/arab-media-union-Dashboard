import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/News.service';
import { Router } from '@angular/router';

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

  constructor(private newsService:NewsService, private router: Router) { }

  ngOnInit() {
  }
  addNew(data) {
    this.newsService.addNew(this.new)
    this.new.title = ''; 
    this.new.body = ''; 
    this.new.src = ''; 
    this.router.navigate(['/'])
  }
}
