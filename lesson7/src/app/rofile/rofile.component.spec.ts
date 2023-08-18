import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RofileComponent } from './rofile.component';

describe('RofileComponent', () => {
  let component: RofileComponent;
  let fixture: ComponentFixture<RofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RofileComponent]
    });
    fixture = TestBed.createComponent(RofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
