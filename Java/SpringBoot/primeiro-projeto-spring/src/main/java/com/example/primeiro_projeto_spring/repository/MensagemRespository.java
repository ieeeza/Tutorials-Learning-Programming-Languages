package com.example.primeiro_projeto_spring.repository;

import org.springframework.stereotype.Repository;

@Repository
public class MensagemRespository {
    
    public String obterMensagem() {
        return "Ola do repositorio";
    }
}
