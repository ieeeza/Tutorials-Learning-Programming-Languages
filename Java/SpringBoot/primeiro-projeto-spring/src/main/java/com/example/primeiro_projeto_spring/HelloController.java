package com.example.primeiro_projeto_spring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class HelloController {
    
    @GetMapping("/Hello")
    public String Hello() {
        return "Ola Mundo!";
    }
    
}
