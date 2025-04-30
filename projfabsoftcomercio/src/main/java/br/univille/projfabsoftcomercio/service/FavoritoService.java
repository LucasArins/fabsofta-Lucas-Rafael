package br.univille.projfabsoftcomercio.service;

import java.util.List;
import br.univille.projfabsoftcomercio.entity.Favorito;

public interface FavoritoService {
    Favorito save(Favorito favorito);
    List<Favorito> getAll();
    Favorito getById(long id);
    Favorito delete(long id);
}