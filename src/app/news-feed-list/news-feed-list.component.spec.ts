import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedListComponent } from './news-feed-list.component';

describe('NewsFeedListComponent', () => {
  let component: NewsFeedListComponent;
  let fixture: ComponentFixture<NewsFeedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFeedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsFeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
