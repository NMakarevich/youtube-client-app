import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingSettingsComponent } from './sorting-settings.component';

describe('SortingSettingsComponent', () => {
  let component: SortingSettingsComponent;
  let fixture: ComponentFixture<SortingSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortingSettingsComponent]
    });
    fixture = TestBed.createComponent(SortingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
