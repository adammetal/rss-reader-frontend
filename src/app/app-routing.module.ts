import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsFeedListComponent } from './news-feed-list/news-feed-list.component';

const routes: Routes = [
  { path: '', component: NewsFeedListComponent },
  { path: 'feed/:title', component: NewsFeedComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
