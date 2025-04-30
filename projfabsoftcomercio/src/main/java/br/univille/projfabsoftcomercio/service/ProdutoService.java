package br.univille.projfabsoftcomercio.service;

import java.util.List;
import br.univille.projfabsoftcomercio.entity.Produto;

public interface ProdutoService {
    Produto save(Produto produto);
    List<Produto> getAll();
    Produto getById(long id);
    Produto delete(long id);
}