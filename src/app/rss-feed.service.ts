import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Feed } from './Feed';
import { SourcesStoreService } from './sources-store.service';

@Injectable({
  providedIn: 'root',
})
export class RssFeedService {
  constructor(
    private httpClient: HttpClient,
    private storage: SourcesStoreService
  ) {}

  getFeedByTitle(title: string): Observable<Feed | null> {
    const sources = this.storage.loadSources()
    const source = sources.find((source) => source.title === title);

    if (!source) {
      return of(null);
    }

    return this.httpClient.get<Feed>(source.url);
  }

  getFeedImageByTitle(title: string): Observable<string | null> {
    const sources = this.storage.loadSources()
    const source = sources.find((source) => source.title === title);

    if (!source || !source.image) {
      return of(null);
    }

    return of(source?.image);
  }
}
