import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementlistComponent } from './achievementlist.component';

describe('AchievementlistComponent', () => {
  let component: AchievementlistComponent;
  let fixture: ComponentFixture<AchievementlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
