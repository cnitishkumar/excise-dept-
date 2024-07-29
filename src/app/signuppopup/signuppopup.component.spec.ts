import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuppopupComponent } from './signuppopup.component';

describe('SignuppopupComponent', () => {
  let component: SignuppopupComponent;
  let fixture: ComponentFixture<SignuppopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignuppopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignuppopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
