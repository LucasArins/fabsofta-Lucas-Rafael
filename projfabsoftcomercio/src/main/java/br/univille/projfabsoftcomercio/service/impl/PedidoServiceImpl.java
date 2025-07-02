package br.univille.projfabsoftcomercio.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoftcomercio.entity.Pedido;
import br.univille.projfabsoftcomercio.repository.PedidoRepository;
import br.univille.projfabsoftcomercio.service.PedidoService;

@Service
public class PedidoServiceImpl implements PedidoService {

    @Autowired
    private PedidoRepository repository;

    @Override
    public Pedido savePedido(Pedido pedido) {
        return repository.save(pedido);
    }

    @Override
    public List<Pedido> getAllPedidos() {
        return repository.findAll();
    }

    @Override
    public Optional<Pedido> getPedidoById(Long id) {
        return repository.findById(id);
    }


    @Override
    public void deletePedido(Long id) {
        repository.deleteById(id);
    }
}