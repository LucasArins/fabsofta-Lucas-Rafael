package br.univille.view;

import javax.swing.JFrame;

public class FormPessoa extends JFrame{
    public FormPessoa(){
        setSize(500,500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);

    } 
    public static void main (String[] args) {
        new FormPessoa();
    }
    
}
