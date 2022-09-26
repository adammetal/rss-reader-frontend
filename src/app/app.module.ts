import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsFeedCardComponent } from './news-feed-card/news-feed-card.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsFeedListComponent } from './news-feed-list/news-feed-list.component';

@NgModule({
  declarations: [AppComponent, NewsFeedCardComponent, NewsFeedComponent, NewsFeedListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
