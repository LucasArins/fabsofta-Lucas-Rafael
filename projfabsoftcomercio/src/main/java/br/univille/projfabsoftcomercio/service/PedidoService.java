package br.univille.projfabsoftcomercio.service;

import br.univille.projfabsoftcomercio.entity.Pedido;
import br.univille.projfabsoftcomercio.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface PedidoService {

    List<Pedido> getAllPedidos();

    Optional<Pedido> getPedidoById(Long id);

    Pedido savePedido(Pedido pedido);

    void deletePedido(Long id);
}