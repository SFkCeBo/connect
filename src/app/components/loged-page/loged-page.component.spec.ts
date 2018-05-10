import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogedPageComponent } from './loged-page.component';

describe('LogedPageComponent', () => {
  let component: LogedPageComponent;
  let fixture: ComponentFixture<LogedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
