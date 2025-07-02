package br.univille.projfabsoftcomercio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.projfabsoftcomercio.entity.Produto;
import br.univille.projfabsoftcomercio.service.ProdutoService;

@RestController
@RequestMapping("/api/v1/produto")
public class ProdutoController {

    @Autowired
    private ProdutoService service;

    @GetMapping()
    public ResponseEntity<List<Produto>> getAll() {
        var lista = service.getAll();
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> getProdutoId(@PathVariable Long id) {
        var produto = service.getById(id);

        return new ResponseEntity<Produto>(produto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Produto> create(@RequestBody Produto produto) {
        if (produto == null) {
            return ResponseEntity.badRequest().build();
        }
        var novoProduto = service.save(produto);
        return new ResponseEntity<>(novoProduto, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> update(@PathVariable long id, @RequestBody Produto produto) {
        if (id <= 0 || produto == null) {
            return ResponseEntity.badRequest().build();
        }
        var existente = service.getById(id);
        if (existente == null) {
            return ResponseEntity.notFound().build();
        }

        existente.setNome(produto.getNome());
        existente.setDescricao(produto.getDescricao());
        existente.setPreco(produto.getPreco());
        existente.setQuantidadeEstoque(produto.getQuantidadeEstoque());
        service.save(existente);

        return new ResponseEntity<>(existente, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Produto> delete(@PathVariable long id) {
        if (id <= 0) {
            return ResponseEntity.badRequest().build();
        }
        var produto = service.getById(id);
        if (produto == null) {
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<>(produto, HttpStatus.OK);
    }
}