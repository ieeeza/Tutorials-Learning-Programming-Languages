package com.example.primeiro_projeto_spring.exceptions;

public class RecursoNaoEncontradoException extends RuntimeException {
    public RecursoNaoEncontradoException(String Mensagem) {
        super(Mensagem);
    }
}
