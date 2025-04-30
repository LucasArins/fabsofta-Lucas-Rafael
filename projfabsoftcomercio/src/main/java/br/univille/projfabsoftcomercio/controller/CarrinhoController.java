package br.univille.projfabsoftcomercio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.projfabsoftcomercio.entity.Carrinho;
import br.univille.projfabsoftcomercio.service.CarrinhoService;

@RestController
@RequestMapping("/ap1/v1/carrinho")
public class CarrinhoController {

    @Autowired
    private CarrinhoService service;

    @GetMapping
    public ResponseEntity<List<Carrinho>> getAll() {
        var lista = service.getAll();
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Carrinho> create(@RequestBody Carrinho carrinho) {
        if (carrinho == null) {
            return ResponseEntity.badRequest().build();
        }
        var novoCarrinho = service.save(carrinho);
        return new ResponseEntity<>(novoCarrinho, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Carrinho> update(@PathVariable long id, @RequestBody Carrinho carrinho) {
        if (id <= 0 || carrinho == null) {
            return ResponseEntity.badRequest().build();
        }
        var existente = service.getById(id);
        if (existente == null) {
            return ResponseEntity.notFound().build();
        }

        existente.setCliente(carrinho.getCliente());
        existente.setProdutos(carrinho.getProdutos());
        service.save(existente);

        return new ResponseEntity<>(existente, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Carrinho> delete(@PathVariable long id) {
        if (id <= 0) {
            return ResponseEntity.badRequest().build();
        }
        var carrinho = service.getById(id);
        if (carrinho == null) {
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<>(carrinho, HttpStatus.OK);
    }
}