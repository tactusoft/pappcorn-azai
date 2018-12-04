import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightLayoutComponent } from './light-layout.component';

describe('LightLayoutComponent', () => {
  let component: LightLayoutComponent;
  let fixture: ComponentFixture<LightLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
