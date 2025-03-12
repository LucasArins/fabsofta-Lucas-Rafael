package br.univille;

import java.security.PublicKey;

public class Pessoa {
    // atributo (variavel)
    private String nome;

    // Consultor (mesmo nome da classe, nao tem classe, nao tem retorno)
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
