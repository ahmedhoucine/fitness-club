import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquitationComponent } from './equitation.component';

describe('EquitationComponent', () => {
  let component: EquitationComponent;
  let fixture: ComponentFixture<EquitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquitationComponent]
    });
    fixture = TestBed.createComponent(EquitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
