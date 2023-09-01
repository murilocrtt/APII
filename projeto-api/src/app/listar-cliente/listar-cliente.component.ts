import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/Cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})

export class ListarClienteComponent {
  public clientes: Cliente[] = [];
  private _clienteService: any;
  constructor(private_clienteService: ClienteService, private _router: Router) { }
  ngOnInit(): void {
    this.listarClientes();
  }
  listarClientes(): void {
    this._clienteService.getClientes().subscribe(
      (retornaCliente: { id: number; nome: string; endereco: string; }[]) => {
        this.clientes = retornaCliente.map(
          (item: { id: number; nome: string; endereco: string; }) => {
            return new Cliente(
              item.id,
              item.nome,
              item.endereco
            );
          }
        )
      }
    )
  }
}
