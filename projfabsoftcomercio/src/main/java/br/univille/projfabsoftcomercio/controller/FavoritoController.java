package br.univille.projfabsoftcomercio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.projfabsoftcomercio.entity.Favorito;
import br.univille.projfabsoftcomercio.service.FavoritoService;

@RestController
@RequestMapping("/ap1/v1/favorito")
public class FavoritoController {

    @Autowired
    private FavoritoService service;

    @GetMapping
    public ResponseEntity<List<Favorito>> getAll() {
        var lista = service.getAll();
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Favorito> create(@RequestBody Favorito favorito) {
        if (favorito == null) {
            return ResponseEntity.badRequest().build();
        }
        var novoFavorito = service.save(favorito);
        return new ResponseEntity<>(novoFavorito, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Favorito> delete(@PathVariable long id) {
        if (id <= 0) {
            return ResponseEntity.badRequest().build();
        }
        var favorito = service.getById(id);
        if (favorito == null) {
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<>(favorito, HttpStatus.OK);
    }
}