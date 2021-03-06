import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageThreeComponent } from './sample-page-three.component';

describe('SamplePageThreeComponent', () => {
  let component: SamplePageThreeComponent;
  let fixture: ComponentFixture<SamplePageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
