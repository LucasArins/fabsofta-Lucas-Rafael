package br.univille.entity;

public class Pokemon {
    private String nome;

    //construtor
    public Pokemon(String nome) {
        this.nome = nome;
        
    }

    //retorna o nome do Pokemon
    public String toString(){
        return this.nome;
    }
}