package br.univille.projfabsoftcomercio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoftcomercio.entity.Favorito;
import br.univille.projfabsoftcomercio.repository.FavoritoRepository;
import br.univille.projfabsoftcomercio.service.FavoritoService;

@Service
public class FavoritoServiceImpl implements FavoritoService {

    @Autowired
    private FavoritoRepository repository;

    @Override
    public Favorito save(Favorito favorito) {
        return repository.save(favorito);
    }

    @Override
    public List<Favorito> getAll() {
        return repository.findAll();
    }

    @Override
    public Favorito getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent())
            return retorno.get();
        return null;
    }

    @Override
    public Favorito delete(long id) {
        var favorito = getById(id);
        if (favorito != null)
            repository.deleteById(id);
        return favorito;
    }
}