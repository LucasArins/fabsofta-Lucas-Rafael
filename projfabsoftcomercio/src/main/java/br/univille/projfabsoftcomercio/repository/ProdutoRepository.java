package br.univille.projfabsoftcomercio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projfabsoftcomercio.entity.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}