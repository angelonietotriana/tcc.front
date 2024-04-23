import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DespachoService } from '../../../servicios/despacho/despacho.service';
import { IDespachoUpdate } from '../../../servicios/interface/IDespachoUpdate';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-edita-despacho',
  standalone: true,
  imports:  [MenuComponent, FormsModule, ReactiveFormsModule ],
  templateUrl: './edita-despacho.component.html',
  styleUrl: './edita-despacho.component.css'
})
export class EditaDespachoComponent {

  editaDespacho = new FormGroup({
    numeroDocumentoRemitente: new FormControl('', Validators.required),
    numeroEnvio: new FormControl('', Validators.nullValidator),
    idNuevoEstado: new FormControl('', Validators.nullValidator),
  });

  constructor(private apiDespacho:DespachoService,
    private router: Router,
    private toastr: ToastrService) {

}

public onProcess(form:any) {

  if (form != null && this.editaDespacho.valid) {

      let sendUpdateReserva:IDespachoUpdate = {
        numero_documento_remitente : form["numeroDocumentoRemitente"],
        numero_envio : form["numeroEnvio"] !== null && form["numeroEnvio"].trim().length !== 0 ? form["numeroEnvio"] : "",
        id_nuevo_estado: form["idNuevoEstado"] !== null && form["idNuevoEstado"].trim().length !== 0 ? form["idNuevoEstado"]: "",
      }

      this.apiDespacho.updateDespacho(sendUpdateReserva)
      .subscribe({
      next: (updateReservaResponse) => {
        this.showSuccess();
        setTimeout(() =>this.router.navigate(['/lista-despacho']), 3000);

      },
      error: (val) => {
      this.showError('Se presentó un error al editar el Despacho');
      console.log("en error")
      },
      });

      this.editaDespacho.reset();

  } else {
    this.showError('Se presentó un error por falta de datos obligatorios.');
  }
}

showSuccess() {
this.toastr.success('Despacho fue editado correctamente', 'Edición despacho');
}

showError(mensaje:string) {
this.toastr.error(mensaje, 'Edición despacho');
}

}
