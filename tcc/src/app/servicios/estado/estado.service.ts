import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IEstado } from '../interface/IEstado';

const baseUrl = "estado";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class EstadoService {
  url:string = "http://localhost:8990/";

  constructor(private http:HttpClient) { }


public getListaEstados():Observable<IEstado> {
    let direccion = this.url + baseUrl+"/consulta";
    return this.http.get<IEstado>(direccion).pipe(retry(1), catchError(this.handleError));
}

public getEstadoById(Estado:IEstado):Observable<IEstado> {
  let direccion = this.url + baseUrl + "/nombreEstado/${idEstado}";
  return this.http.put<IEstado>(direccion, Estado, httpOptions);
}


private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    console.error('A ocurrido un error:', error.error);
  } else {

    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  return throwError(() => new Error('Algo malo ha ocurrido en el back de Estados. Intente nuevamente luego'));
}

}
