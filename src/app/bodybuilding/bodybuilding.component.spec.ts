import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodybuildingComponent } from './bodybuilding.component';

describe('BodybuildingComponent', () => {
  let component: BodybuildingComponent;
  let fixture: ComponentFixture<BodybuildingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodybuildingComponent]
    });
    fixture = TestBed.createComponent(BodybuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
