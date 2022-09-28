import { Component, OnInit } from '@angular/core';
import { SourceItem } from '../SourceItem';
import { SourcesStoreService } from '../sources-store.service';

@Component({
  selector: 'app-news-feed-list',
  templateUrl: './news-feed-list.component.html',
  styleUrls: ['./news-feed-list.component.css'],
})
export class NewsFeedListComponent implements OnInit {
  constructor(private storage: SourcesStoreService) {}

  sources: SourceItem[] = [];

  title?: string;

  description?: string;

  url?: string;

  image?: string;

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
      image: this.image,
      title: this.title,
      description: this.description,
      url: `http://localhost:8080?feedUrl=${this.url}`,
    });

    this.title = '';
    this.description = '';
    this.url = '';
    this.image = '';

    this.storage.saveSources(this.sources);
  }

  ngOnInit(): void {
    this.sources = this.storage.loadSources();
  }
}
