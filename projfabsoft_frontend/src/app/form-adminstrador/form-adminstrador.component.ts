import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Adicione esta linha
import { Administrador } from '../model/administrador';
import { AdministradorService } from '../service/administrador.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-adminstrador',
  templateUrl: './form-adminstrador.component.html',
  styleUrls: ['./form-adminstrador.component.css'],
  imports: [FormsModule, RouterModule], // Adicione RouterModule aqui
  providers: [AdministradorService]
})
export class FormAdminstradorComponent {
  administrador: Administrador = new Administrador();

  constructor(
    private administradorService: AdministradorService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      this.administradorService.getAdministradorById(id).subscribe(administrador => {
        this.administrador = administrador;
      });
    }
  }

  salvar() {
    this.administradorService.saveAdministrador(this.administrador)
      .subscribe(() => {
        this.router.navigate(['administradores']);
      });
  }
}
