import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaDespachoComponent } from './crea-despacho.component';

describe('CreaDespachoComponent', () => {
  let component: CreaDespachoComponent;
  let fixture: ComponentFixture<CreaDespachoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreaDespachoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
