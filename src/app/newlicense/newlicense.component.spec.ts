import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlicenseComponent } from './newlicense.component';

describe('NewlicenseComponent', () => {
  let component: NewlicenseComponent;
  let fixture: ComponentFixture<NewlicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewlicenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
