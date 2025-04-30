package br.univille.projfabsoftcomercio.service;

import java.util.List;
import br.univille.projfabsoftcomercio.entity.Carrinho;

public interface CarrinhoService {
    Carrinho save(Carrinho carrinho);
    List<Carrinho> getAll();
    Carrinho getById(long id);
    Carrinho delete(long id);
}