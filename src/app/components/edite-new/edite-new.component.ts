import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/News.service';
import {Router , ActivatedRoute } from '@angular/router'
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
  constructor(private newService: NewsService, private router: ActivatedRoute, private route:Router) { }

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
}
