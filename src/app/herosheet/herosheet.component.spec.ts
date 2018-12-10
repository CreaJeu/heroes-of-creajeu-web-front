import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosheetComponent } from './herosheet.component';

describe('HerosheetComponent', () => {
  let component: HerosheetComponent;
  let fixture: ComponentFixture<HerosheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
