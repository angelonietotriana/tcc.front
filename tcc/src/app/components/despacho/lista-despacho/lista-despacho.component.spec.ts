import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDespachoComponent } from './lista-despacho.component';

describe('ListaDespachoComponent', () => {
  let component: ListaDespachoComponent;
  let fixture: ComponentFixture<ListaDespachoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDespachoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
