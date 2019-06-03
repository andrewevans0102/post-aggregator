import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAggregatorComponent } from './post-aggregator.component';

describe('PostAggregatorComponent', () => {
  let component: PostAggregatorComponent;
  let fixture: ComponentFixture<PostAggregatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAggregatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAggregatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
