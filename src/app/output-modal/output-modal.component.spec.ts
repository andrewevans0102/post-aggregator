import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputModalComponent } from './output-modal.component';

describe('OutputModalComponent', () => {
  let component: OutputModalComponent;
  let fixture: ComponentFixture<OutputModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
