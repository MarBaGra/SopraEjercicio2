import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSuccessComponent } from './save-success.component';

describe('SaveSuccessComponent', () => {
  let component: SaveSuccessComponent;
  let fixture: ComponentFixture<SaveSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveSuccessComponent]
    });
    fixture = TestBed.createComponent(SaveSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
