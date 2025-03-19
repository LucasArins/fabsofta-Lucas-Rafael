package br.univille;

import br.univille.entity.Pessoa;
import br.univille.entity.Pokemon;
import br.univille.entity.Cidade;

public class App {
    public static void main(String[] args) {
        //System.out.println("Hello world!");

        Cidade joinville = new Cidade();
        joinville.setNome("Joinville");
        joinville.setEstado("Santa Catarina");
        
        Pokemon jigglypuff = new Pokemon("Jigglypuff");
        Pokemon porygon = new Pokemon("Porygon");
        
        Pessoa zezinho = new Pessoa ("Zezinho");
        for(int i=0;i<zezinho.getListaPokemon().size();i++){
            System.out.println(zezinho.getListaPokemon().get(i));
        }
        for(Pokemon umPokemon)

        zezinho.setNome("Zezinho da silva Sauro");
        zezinho.setCidade(joinville);

        zezinho.getListaPokemon().add(jigglypuff);
        zezinho.getListaPokemon().add(porygon);
        for(var umPokemon : zezinho.getListaPokemon()){
            System.out.println(umPokemon);
        }


        Pessoa mariazinha = new Pessoa ();
        mariazinha.setNome("Mariazinha");


        System.out.println(zezinho);
        System.out.println(mariazinha);
    }
}