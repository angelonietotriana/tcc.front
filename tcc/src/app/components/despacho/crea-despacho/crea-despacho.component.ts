import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DespachoService } from '../../../servicios/despacho/despacho.service';
import { IDespacho } from '../../../servicios/interface/IDespacho';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-crea-despacho',
  standalone: true,
  imports:  [MenuComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './crea-despacho.component.html',
  styleUrl: './crea-despacho.component.css'
})
export class CreaDespachoComponent {

  creaDespacho = new FormGroup({
    ciudadOrigen: new FormControl('', Validators.required),
    ciudadDestino: new FormControl('', Validators.required),
    nombreRemitente: new FormControl('', Validators.required),
    nombreDestinatario: new FormControl('0', Validators.required),
    direccionRemitente: new FormControl('', Validators.required),
    direccionDestinatario: new FormControl('', Validators.required),
    documentoRemitente: new FormControl('', Validators.required),
    documentoDestinatario: new FormControl('0', Validators.required),
    celRemitente: new FormControl('', Validators.required),
    celDestinatario: new FormControl('', Validators.required),
    idMercancia: new FormControl('', Validators.required),
    peso: new FormControl('', Validators.required),
    tipoEnvio: new FormControl('', Validators.required),
    tipoEntrega: new FormControl('', Validators.required),
    valorCobrado: new FormControl('', Validators.required),
    valorACobrar: new FormControl('', Validators.required),
    observaciones: new FormControl('', Validators.required),
  });



  constructor(private apiDespacho:DespachoService,
              private router: Router,
              private toastr: ToastrService) { }

  public onProcess(form:any) {

    if (form != null && this.creaDespacho.valid) {
      let sendInfoBase:IDespacho = {

        fecha_creacion: null,
        ciudad_origen: form["ciudadOrigen"],
        ciudad_destino: form["ciudadDestino"],
        direccion_remitente: form["direccionRemitente"],
        direccion_destinatario: form["direccionDestinatario"],
        nombre_remitente: form["nombreRemitente"],
        nombre_destinatario: form["nombreDestinatario"],
        documento_remitente: form["documentoRemitente"],
        documento_destinatario: form["documentoDestinatario"],
        celular_remitente: form["celRemitente"],
        celular_destinatario: form["celDestinatario"],
        id_mercancia: form["idMercancia"],
        numero_envio: form["numeroEnvio"],
        id_estado: 1,
        id_despacho: null,
        peso_envio: form["peso"],
        tipo_envio: form["tipoEnvio"],
        tipo_entrega: form["tipoEntrega"],
        valor_cobrado: form["valorCobrado"],
        valor_a_cobrar: form["valorACobrar"],
        observaciones: form["observaciones"],
      }

      //console.log(sendInfoBase);

      this.apiDespacho.saveDespacho(sendInfoBase)
      .subscribe({
        next: (despachoResponse) => {
          if(despachoResponse != null || despachoResponse != undefined) {
            console.log(JSON.stringify(despachoResponse));
            this.showSuccess();
            this.creaDespacho.reset();
            setTimeout(() =>this.router.navigate(['/lista-despacho']), 3000);
          }
        },
        error: (val) => {
          this.showError("Se preentó un error al crear el despacho.");
          console.log("en error")

        },
      });

    } else {
      this.showError('Se presentó un error por falta de datos obligatorios.');
    }
  }

  showSuccess() {
    this.toastr.success('Despacho creado correctamente', 'Creación despacho');
  }

  showError(mensaje:string) {
    this.toastr.error(mensaje, 'Creación despacho');
  }

}
