import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamDescriptionComponent } from './about-team-description.component';

describe('AboutTeamDescriptionComponent', () => {
  let component: AboutTeamDescriptionComponent;
  let fixture: ComponentFixture<AboutTeamDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTeamDescriptionComponent]
    });
    fixture = TestBed.createComponent(AboutTeamDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
