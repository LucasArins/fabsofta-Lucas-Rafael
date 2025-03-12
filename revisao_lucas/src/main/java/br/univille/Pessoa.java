package br.univille;
public class Pessoa {

 //atributo (variável)
 private String nome;

 //método
 //construtor (mesmo nome da claase, nao tem)
 public Pessoa (String nome ){
    this.nome = nome ; 
}
@Override
public String  toString (){
    return super.toString() + getNome();
}
public Pessoa(){

} 
 public String getNome() {
     return nome;
 }

 public void setNome(String nome) {
     this.nome = nome;
 }
}
