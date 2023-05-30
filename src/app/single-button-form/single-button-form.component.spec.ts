import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleButtonFormComponent } from './single-button-form.component';

describe('SingleButtonFormComponent', () => {
  let component: SingleButtonFormComponent;
  let fixture: ComponentFixture<SingleButtonFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleButtonFormComponent]
    });
    fixture = TestBed.createComponent(SingleButtonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
