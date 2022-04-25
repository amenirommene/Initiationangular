import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonFilsProductComponent } from './mon-fils-product.component';

describe('MonFilsProductComponent', () => {
  let component: MonFilsProductComponent;
  let fixture: ComponentFixture<MonFilsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonFilsProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonFilsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
