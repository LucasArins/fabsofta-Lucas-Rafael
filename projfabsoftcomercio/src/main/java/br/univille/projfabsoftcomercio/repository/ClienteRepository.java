package br.univille.projfabsoftcomercio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projfabsoftcomercio.entity.Cliente;

@Repository
public interface ClienteRepository
        extends JpaRepository<Cliente,Long>{

}
