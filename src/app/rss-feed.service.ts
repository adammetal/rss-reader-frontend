import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import sources from './sourceList';
import { Feed } from './Feed';

@Injectable({
  providedIn: 'root',
})
export class RssFeedService {
  constructor(private httpClient: HttpClient) {}

  getFeedByTitle(title: string): Observable<Feed | null> {
    const source = sources.find((source) => source.title === title);

    if (!source) {
      return of(null);
    }

    return this.httpClient.get<Feed>(source.url);
  }
}
