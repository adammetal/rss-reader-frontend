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

  title?: string;

  description?: string;

  url?: string;

  addNew(): void {
    if (!this.title || !this.title.length) {
      return;
    }

    if (!this.description || !this.description.length) {
      return;
    }

    if (!this.url || !this.url.length) {
      return;
    }

    this.sources.push({
      title: this.title,
      description: this.description,
      url: `http://localhost:8080?feedUrl=${this.url}`,
    });

    this.title = '';
    this.description = '';
    this.url = '';
  }
}
