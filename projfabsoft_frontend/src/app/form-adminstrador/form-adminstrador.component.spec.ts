import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdminstradorComponent } from './form-adminstrador.component';

describe('FormAdminstradorComponent', () => {
  let component: FormAdminstradorComponent;
  let fixture: ComponentFixture<FormAdminstradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAdminstradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAdminstradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
