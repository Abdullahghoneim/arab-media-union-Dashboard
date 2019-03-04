import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/News.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.news = news.reverse(); 
      console.log(this.news)
    })
  }
}
