import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './models/Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url: string = "http://localhost:4200/clientes";
  constructor(private _httpClient: HttpClient) { }
  getClientes(): Observable<Cliente[]> {
    return this._httpClient.get<Cliente[]>(this.url);
  }
}

