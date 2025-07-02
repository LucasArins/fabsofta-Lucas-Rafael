import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCarrinhoComponent } from './form-carrinho.component';

describe('FormCarrinhoComponent', () => {
  let component: FormCarrinhoComponent;
  let fixture: ComponentFixture<FormCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCarrinhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
