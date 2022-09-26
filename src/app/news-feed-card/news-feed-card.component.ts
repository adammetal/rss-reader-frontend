import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-feed-card',
  templateUrl: './news-feed-card.component.html',
  styleUrls: ['./news-feed-card.component.css'],
})
export class NewsFeedCardComponent {
  constructor() {}

  @Input()
  title: string = 'News feed title';

  @Input()
  description: string = 'News feed description';

  @Input()
  url: string = '';
}
