import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SourceItem } from './SourceItem';

@Injectable({
  providedIn: 'root',
})
export class SourcesStoreService {
  constructor() {}

  loadSources(): SourceItem[] {
    const raw: string | null = localStorage.getItem('sources');
    const sources: SourceItem[] = JSON.parse(raw ?? '[]');
    return sources;
  }

  saveSources(sources: SourceItem[]): void {
    localStorage.setItem('sources', JSON.stringify(sources));
  }
}
