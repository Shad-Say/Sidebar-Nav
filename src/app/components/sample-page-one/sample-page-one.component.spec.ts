import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageOneComponent } from './sample-page-one.component';

describe('SamplePageOneComponent', () => {
  let component: SamplePageOneComponent;
  let fixture: ComponentFixture<SamplePageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
