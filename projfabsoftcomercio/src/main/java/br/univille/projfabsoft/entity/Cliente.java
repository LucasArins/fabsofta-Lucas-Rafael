package br.univille.projfabsoft.entity;

import java.util.List;

public class Cliente {
    private Long id;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    private String nome;
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    private String celular;
    public String getCelular() {
        return celular;
    }
    public void setCelular(String celular) {
        this.celular = celular;

    }
    private String endereco;
    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;

    }
    private String cpf;
    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;

    }
    private List<Pedido> pedidos;
    public List<Pedido> getPedidos() {
        return pedidos;
    }
    public void setPedidos(List<Pedido> pedidos) {
        this.pedidos = pedidos;

    }
    private List<Produto> favoritos;
    public List<Produto> getFavoritos() {
        return favoritos;
    }
    public void setFavoritos(List<Produto> favoritos) {
        this.favoritos = favoritos;
    }
}