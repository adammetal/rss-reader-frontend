import { Component } from '@angular/core';
import { SourceItem } from '../SourceItem';
import sourceList from '../sourceList';

@Component({
  selector: 'app-news-feed-list',
  templateUrl: './news-feed-list.component.html',
  styleUrls: ['./news-feed-list.component.css'],
})
export class NewsFeedListComponent {
  constructor() {}

  sources: SourceItem[] = sourceList;
}
