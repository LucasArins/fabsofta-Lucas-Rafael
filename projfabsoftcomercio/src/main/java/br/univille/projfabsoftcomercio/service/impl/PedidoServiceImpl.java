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
    public List<Pedido> getAllPedidos() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllPedidos'");
    }

    @Override
    public Optional<Pedido> getPedidoById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPedidoById'");
    }

    @Override
    public Pedido savePedido(Pedido pedido) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'savePedido'");
    }

    @Override
    public void deletePedido(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deletePedido'");
    }
}