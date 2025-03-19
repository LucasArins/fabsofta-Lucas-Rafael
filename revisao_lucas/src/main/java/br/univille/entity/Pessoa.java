package br.univille.entity;

import java.util.ArrayList;

public class Pessoa {
    //atributo (variável)
    private String nome;
    private  long id;
    private String endereco;
    private ArrayList listaPokemon;

    public ArrayList getListaPokemon() {
        return listaPokemon;
    }
    public void setListaPokemon(ArrayList listaPokemon) {
        this.listaPokemon = listaPokemon;
    }
    public long getid(){
        return id;

    }
    //Construtor (mesmo nome da classe, não tem retorno)
    public Pessoa(String nome) {
        //this referencia a classe
        this.nome = nome;
    }
    //Dois métodos com assinatura semelhante = polimorfismo
    public Pessoa() {
        
    }

    //método
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    //Sobreescrita de método (overwrite)
    @Override
    public String toString(){
        
        return super.toString() + getNome();
    }
    
}