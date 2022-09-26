import { FeedItem } from './FeedItem';

export interface Feed {
  items: FeedItem[];
  link: string;
  title: string;
  description: string;
}
