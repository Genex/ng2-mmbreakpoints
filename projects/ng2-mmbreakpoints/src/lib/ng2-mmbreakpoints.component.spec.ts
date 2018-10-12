import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2MmbreakpointsComponent } from './ng2-mmbreakpoints.component';

describe('Ng2MmbreakpointsComponent', () => {
  let component: Ng2MmbreakpointsComponent;
  let fixture: ComponentFixture<Ng2MmbreakpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2MmbreakpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2MmbreakpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
