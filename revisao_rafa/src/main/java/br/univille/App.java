package br.univille;

import br.univille.entity.Cidade;
import br.univille.entity.Pessoa;
import br.univille.entity.Pokemon;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");

        Cidade jlle = new Cidade();
        jlle.setNome("Joinville");
        jlle.setEstado("Santa Catarina");

        Pokemon jigglypuff = new Pokemon("jigglypuff");
        Pokemon pikachu = new Pokemon("pikachu");

        //instancia
        Pessoa mariazinha = new Pessoa("Mariazinha");
        Pessoa zezinho = new Pessoa();
        zezinho.setNome("Zezinho");
        zezinho.setCidade(jlle);
        zezinho.getListaPokemon().add(jigglypuff); //pegar a lista e adicionar um item
        zezinho.getListaPokemon().add(pikachu);
        //zezinho.getListaPokemon().add(123);   # da erro pois não e pokemon
        //zezinho.getListaPokemon().add(oioi); # da erro pois não e pokemon

        /*
        for(int i=0;i<zezinho.getListaPokemon().size();i++){
            System.out.println(zezinho.getListaPokemon().get(i));
        }
        */

        for(Pokemon umPokemon: zezinho.getListaPokemon()){ //pega o Pokemon da lista, coloca no umPokemon e entra no for.
            System.out.println(umPokemon); //jigglypuff e depois pikachu
        }



        System.out.println(mariazinha);
        System.out.println(zezinho);

    }
}
