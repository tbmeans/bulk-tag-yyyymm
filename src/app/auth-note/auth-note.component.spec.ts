import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthNoteComponent } from './auth-note.component';

describe('AuthNoteComponent', () => {
  let component: AuthNoteComponent;
  let fixture: ComponentFixture<AuthNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthNoteComponent]
    });
    fixture = TestBed.createComponent(AuthNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
