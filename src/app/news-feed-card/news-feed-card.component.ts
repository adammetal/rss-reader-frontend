import { Component, Input } from '@angular/core';
import { SourceItem } from '../SourceItem';

@Component({
  selector: 'app-news-feed-card',
  templateUrl: './news-feed-card.component.html',
  styleUrls: ['./news-feed-card.component.css'],
})
export class NewsFeedCardComponent {
  constructor() {}

  @Input()
  source!: SourceItem
}
