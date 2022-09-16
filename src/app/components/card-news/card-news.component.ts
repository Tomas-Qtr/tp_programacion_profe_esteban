import { Component, OnInit } from '@angular/core';
import { CardNew } from 'src/app/models/card-new';
import { CardNewService } from 'src/app/servicios/card-new.service';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})
export class CardNewsComponent implements OnInit {
  news:CardNew[];
  constructor(private servicionNews:CardNewService) { }

  ngOnInit(): void {
    this.servicionNews.getNews().subscribe(colNew=>{
      this.news=colNew;
      console.log(colNew)
    })
  }

}
