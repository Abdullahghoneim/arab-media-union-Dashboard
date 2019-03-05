import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router'
import { NewsService } from 'src/app/services/News.service';
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  id: string; 
  new; 
  showImg: boolean = false; 
  constructor(private router: ActivatedRoute, private newsService: NewsService
  , private route: Router
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id']; 
    this.newsService.getNew(this.id).subscribe(indeviduleNew => {
      this.new = indeviduleNew; 
    } )
  }
  deleteNew()
  {
    let c = confirm('هل متاكد من خذف الخبر ؟')
    if (c == true) {
      this.newsService.deleteNew(this.id)  
      this.route.navigate(['/'])      
    }
  }
}
