import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IDespacho } from '../interface/IDespacho';
import { IDespachoUpdate } from '../interface/IDespachoUpdate';

const baseUrl = "despacho";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DespachoService {

  url:string = "http://localhost:8990/";

  constructor(private http:HttpClient) { }


public getDespachoBy(despacho:IDespacho):Observable<IDespacho> {

    const documentoRemitente = despacho.documento_remitente;
    const numeroEnvio = despacho.numero_envio;

    let direccion = this.url + baseUrl + "/"+ documentoRemitente +"/"+numeroEnvio;
    return this.http.get<IDespacho>(direccion).pipe(retry(1), catchError(this.handleError));
}

public getListDespachos(documentoRemitente:number):Observable<IDespacho> {

  let direccion = this.url + baseUrl + "/" + documentoRemitente + "/NULL";
  console.log("url get:"+ direccion);
  return this.http.get<IDespacho>(direccion).pipe(retry(1), catchError(this.handleError));
}

public saveDespacho(despacho:IDespacho):Observable<IDespacho> {
  let direccion = this.url + baseUrl+"/crea";
  return this.http.post<IDespacho>(direccion, despacho, httpOptions);
}

public updateDespacho(despacho:IDespachoUpdate):Observable<IDespacho> {
  let direccion = this.url + baseUrl + "/cambiaEstado";
  return this.http.put<IDespacho>(direccion, despacho, httpOptions);
}



private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    console.error('A ocurrido un error:', error.error);
  } else {

    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  return throwError(() => new Error('Algo malo ha ocurrido en el back de Despachos. Intente nuevamente luego'));
}
}
