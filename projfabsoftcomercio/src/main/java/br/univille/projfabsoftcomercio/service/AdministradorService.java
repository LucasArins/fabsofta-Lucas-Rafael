package br.univille.projfabsoftcomercio.service;

import java.util.List;
import br.univille.projfabsoftcomercio.entity.Administrador;

public interface AdministradorService {
    Administrador save(Administrador administrador);
    List<Administrador> getAll();
    Administrador getById(long id);
    Administrador delete(long id);
}