package br.univille.entity;

import java.security.PublicKey;
import java.util.ArrayList;

public class Pessoa {
    // atributo (variavel)
    private long id;
    private String endereco;
    private String nome;
    private Cidade cidade;

    private ArrayList listaPokemon = new ArrayList<Pokemon>(); //especifiquei que pode aceitar somente Pokemon

    public ArrayList<Pokemon> getListaPokemon() {
        return listaPokemon;
    }

    public void setListaPokemon(ArrayList<Pokemon> listaPokemon) {
        this.listaPokemon = listaPokemon;
    }

    public Cidade getCidade() {
        return cidade;
    }

    public void setCidade(Cidade cidade) {
        this.cidade = cidade;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    // Construtor (mesmo nome da classe, nao tem classe, nao tem retorno)
    public Pessoa(String nome) {
        // this diferencia a classe
        this.nome= nome;
    }

    //Sobreescrita de metodo (overwrite)
    @Override
    public String toString(){
        return super.toString() + getNome(); // volta o pai (br.univille.Pessoa@36baf30c) e o nome (Mariazinha) = 
    }

    // Dois metodos com aassinatura semelhante = polimorfismo
    public Pessoa() {

    }

    //metodo
    public String getNome() {
        return nome;
    }

    //metodo
    public void setNome (String nome) {
        this.nome= nome;
    }

}
