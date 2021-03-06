import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageTwoComponent } from './sample-page-two.component';

describe('SamplePageTwoComponent', () => {
  let component: SamplePageTwoComponent;
  let fixture: ComponentFixture<SamplePageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
