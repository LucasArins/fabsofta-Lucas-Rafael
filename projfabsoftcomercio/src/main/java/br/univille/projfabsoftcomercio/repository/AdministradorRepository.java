package br.univille.projfabsoftcomercio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projfabsoftcomercio.entity.Administrador;

@Repository
public interface AdministradorRepository extends JpaRepository<Administrador, Long> {

}