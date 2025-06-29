import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Administrador } from '../model/administrador';
import { AdministradorService } from '../service/administrador.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
  imports: [CommonModule],
  providers: [AdministradorService, Router]
})
export class AdministradorComponent {
  public listaAdministradores: Administrador[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;
  private administradorSelecionado!: Administrador;

  constructor(
    private administradorService: AdministradorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.administradorService.getAdministradores().subscribe(resposta => {
      this.listaAdministradores = resposta;
    });
  }

  novo() {
    this.router.navigate(['administradores/novo']);
  }

  alterar(administrador: Administrador) {
    this.router.navigate(['administradores/alterar', administrador.id]);
  }

  abrirConfirmacao(administrador: Administrador) {
    this.administradorSelecionado = administrador;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.administradorService.excluirAdministrador(this.administradorSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.administradorService.getAdministradores().subscribe(
          administradores => {
            this.listaAdministradores = administradores;
          }
        );
      },
      error => {
        console.error('Erro ao excluir administrador:', error);
      }
    );
  }
}
