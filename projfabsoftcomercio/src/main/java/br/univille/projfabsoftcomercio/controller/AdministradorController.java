package br.univille.projfabsoftcomercio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.projfabsoftcomercio.entity.Administrador;
import br.univille.projfabsoftcomercio.service.AdministradorService;

@RestController
@RequestMapping("/ap1/v1/administrador")
public class AdministradorController {

    @Autowired
    private AdministradorService service;

    @GetMapping
    public ResponseEntity<List<Administrador>> getAll() {
        var lista = service.getAll();
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Administrador> create(@RequestBody Administrador administrador) {
        if (administrador == null) {
            return ResponseEntity.badRequest().build();
        }
        var novoAdministrador = service.save(administrador);
        return new ResponseEntity<>(novoAdministrador, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Administrador> update(@PathVariable long id, @RequestBody Administrador administrador) {
        if (id <= 0 || administrador == null) {
            return ResponseEntity.badRequest().build();
        }
        var existente = service.getById(id);
        if (existente == null) {
            return ResponseEntity.notFound().build();
        }

        existente.setNome(administrador.getNome());
        existente.setEmail(administrador.getEmail());
        service.save(existente);

        return new ResponseEntity<>(existente, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Administrador> delete(@PathVariable long id) {
        if (id <= 0) {
            return ResponseEntity.badRequest().build();
        }
        var administrador = service.getById(id);
        if (administrador == null) {
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<>(administrador, HttpStatus.OK);
    }
}