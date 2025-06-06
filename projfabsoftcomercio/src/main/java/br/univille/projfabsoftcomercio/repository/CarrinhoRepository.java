package br.univille.projfabsoftcomercio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projfabsoftcomercio.entity.Carrinho;

@Repository
public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {

}