package br.univille.projfabsoftcomercio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoftcomercio.entity.Carrinho;
import br.univille.projfabsoftcomercio.repository.CarrinhoRepository;
import br.univille.projfabsoftcomercio.service.CarrinhoService;

@Service
public class CarrinhoServiceImpl implements CarrinhoService {

    @Autowired
    private CarrinhoRepository repository;

    @Override
    public Carrinho save(Carrinho carrinho) {
        return repository.save(carrinho);
    }

    @Override
    public List<Carrinho> getAll() {
        return repository.findAll();
    }

    @Override
    public Carrinho getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent())
            return retorno.get();
        return null;
    }

    @Override
    public Carrinho delete(long id) {
        var carrinho = getById(id);
        if (carrinho != null)
            repository.deleteById(id);
        return carrinho;
    }
}