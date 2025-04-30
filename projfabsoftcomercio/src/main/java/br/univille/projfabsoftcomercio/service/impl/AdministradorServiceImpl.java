package br.univille.projfabsoftcomercio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoftcomercio.entity.Administrador;
import br.univille.projfabsoftcomercio.repository.AdministradorRepository;
import br.univille.projfabsoftcomercio.service.AdministradorService;

@Service
public class AdministradorServiceImpl implements AdministradorService {

    @Autowired
    private AdministradorRepository repository;

    @Override
    public Administrador save(Administrador administrador) {
        return repository.save(administrador);
    }

    @Override
    public List<Administrador> getAll() {
        return repository.findAll();
    }

    @Override
    public Administrador getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent())
            return retorno.get();
        return null;
    }

    @Override
    public Administrador delete(long id) {
        var administrador = getById(id);
        if (administrador != null)
            repository.deleteById(id);
        return administrador;
    }
}