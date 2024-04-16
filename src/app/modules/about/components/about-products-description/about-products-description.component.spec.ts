import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProductsDescriptionComponent } from './about-products-description.component';

describe('AboutProductsDescriptionComponent', () => {
  let component: AboutProductsDescriptionComponent;
  let fixture: ComponentFixture<AboutProductsDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutProductsDescriptionComponent]
    });
    fixture = TestBed.createComponent(AboutProductsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
