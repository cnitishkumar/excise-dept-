import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemidComponent } from './homemid.component';

describe('HomemidComponent', () => {
  let component: HomemidComponent;
  let fixture: ComponentFixture<HomemidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomemidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomemidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
