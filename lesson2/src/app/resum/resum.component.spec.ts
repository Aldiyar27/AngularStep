import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumComponent } from './resum.component';

describe('ResumComponent', () => {
  let component: ResumComponent;
  let fixture: ComponentFixture<ResumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumComponent]
    });
    fixture = TestBed.createComponent(ResumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
