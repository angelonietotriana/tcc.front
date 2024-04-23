import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuComponent } from '../../menu/menu.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DespachoService } from '../../../servicios/despacho/despacho.service';
import { IDespacho } from '../../../servicios/interface/IDespacho';



@Component({
  selector: 'app-lista-despacho',
  standalone: true,
  imports:  [MenuComponent, DecimalPipe, FormsModule, ReactiveFormsModule, NgbCollapseModule],
  templateUrl: './lista-despacho.component.html',
  styleUrl: './lista-despacho.component.css'
})
export class ListaDespachoComponent implements OnInit {
  despachos: IDespacho[] = [];

  filtroDespacho = new FormGroup({
    documentoRemitente: new FormControl('',Validators.required)
  });

  constructor(private apiDespacho:DespachoService,
              private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {

  }

  onProcess(form:any) {

    let documentoRemitente:number = form["documentoRemitente"];

    if (documentoRemitente != null && documentoRemitente != undefined && this.filtroDespacho.valid)
    {
      this.apiDespacho.getListDespachos(documentoRemitente)
      .subscribe({
        next: (despachoResponse:any) => {

          if(despachoResponse != null || despachoResponse != undefined) {
            const data = despachoResponse.Response;
            console.log(JSON.parse(JSON.stringify(data)));
            this.despachos = JSON.parse(JSON.stringify(data))
          }
        this.showSuccess();
      },
      error: (err) => {
        console.log(err);
      }
      });

    } else {
      this.showError('Búsqueda','Falta el documento del remitente')
    }

  }
  showSuccess() {
    this.toastr.success('Búsqueda', 'Ok');
  }
  showError(titulo:string, mensaje:string) {
    this.toastr.error(titulo, mensaje);
  }


}
