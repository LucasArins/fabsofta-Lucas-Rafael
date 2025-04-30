package br.univille.projfabsoftcomercio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projfabsoftcomercio.entity.Favorito;

@Repository
public interface FavoritoRepository extends JpaRepository<Favorito, Long> {

}