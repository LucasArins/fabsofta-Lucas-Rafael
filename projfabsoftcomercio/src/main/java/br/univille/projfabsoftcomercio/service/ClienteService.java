package br.univille.projfabsoftcomercio.service;

import java.util.List;

import br.univille.projfabsoftcomercio.entity.Cliente;

public interface ClienteService {
    Cliente save(Cliente cliente);
    List<Cliente> getAll();
    Cliente getById(long id);
    Cliente delete(long id);
}