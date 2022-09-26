import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedItem } from '../FeedItem';
import { RssFeedService } from '../rss-feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent implements OnInit {
  constructor(private route: ActivatedRoute, private rss: RssFeedService) {}

  title?: string;

  description?: string;

  link?: string;

  items?: FeedItem[];

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');

    if (!title) {
      // TODO: Navigate back to the main page
      return;
    }

    this.rss.getFeedByTitle(title).subscribe((feed) => {
      if (!feed) {
        // TODO: Navigate back to the main page
        // TODO: Error modal or something...
        return;
      }

      this.title = feed.title;
      this.description = feed.description;
      this.link = feed.link;
      this.items = feed.items;
    });
  }
}
