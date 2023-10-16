import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsItemComponent } from './results-item.component';

describe('ResultsItemComponent', () => {
  let component: ResultsItemComponent;
  let fixture: ComponentFixture<ResultsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsItemComponent]
    });
    fixture = TestBed.createComponent(ResultsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
