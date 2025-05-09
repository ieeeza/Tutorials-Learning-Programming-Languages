package com.example.primeiro_projeto_spring.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.primeiro_projeto_spring.exceptions.RecursoNaoEncontradoException;
import com.example.primeiro_projeto_spring.model.Produto;
import com.example.primeiro_projeto_spring.repository.ProdutoRepository;

@Service
public class ProdutoService {
    private final ProdutoRepository produtoRepository;

    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public List<Produto> listaProdutos() {
        return produtoRepository.findAll();
    }

    public Produto buscarPorId(Long id) {
        return produtoRepository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Produto com ID " + id + " não encontrado!"));
    }

    public Produto salvarProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    public void deletarProduto(Long id) {
        if (!produtoRepository.existsById(id)) {
            throw new RecursoNaoEncontradoException("Produto com ID" + id + "não encontrado!");
        }

        produtoRepository.deleteById(id);
    }
}
