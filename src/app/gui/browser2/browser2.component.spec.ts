import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Browser2Component } from './browser2.component';

describe('Browser2Component', () => {
  let component: Browser2Component;
  let fixture: ComponentFixture<Browser2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Browser2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Browser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
