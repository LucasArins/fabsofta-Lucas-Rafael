package br.univille.view;

import javax.swing.JFrame;
import javax.swing.JLabel;

public class FormPessoa extends JFrame{

    public FormPessoa() {
        setSize(500,500);
        setTitle("Minha Janelinha");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JLabel label = new JLabel("Eu não acredito");

        getContentPane().add(label);
        setVisible(true);
    }

    public static void main(String[] args){
        new FormPessoa();
    }
}
