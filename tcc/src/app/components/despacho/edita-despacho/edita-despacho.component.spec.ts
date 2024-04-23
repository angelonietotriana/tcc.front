import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaDespachoComponent } from './edita-despacho.component';

describe('EditaDespachoComponent', () => {
  let component: EditaDespachoComponent;
  let fixture: ComponentFixture<EditaDespachoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditaDespachoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
