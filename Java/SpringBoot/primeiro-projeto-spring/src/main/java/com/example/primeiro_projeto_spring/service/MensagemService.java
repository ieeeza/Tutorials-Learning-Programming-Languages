package com.example.primeiro_projeto_spring.service;

import org.springframework.stereotype.Service;

import com.example.primeiro_projeto_spring.repository.MensagemRespository;

@Service
public class MensagemService {
    private final MensagemRespository mensagemRespository;

    public MensagemService(MensagemRespository mensagemRespository) {
        this.mensagemRespository = mensagemRespository;
    }

    public String obterMensagem() {
        return mensagemRespository.obterMensagem();
    }
}
