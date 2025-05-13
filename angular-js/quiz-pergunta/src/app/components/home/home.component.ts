import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-home",
    imports: [FormsModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
    tempo: number = 30;
    pontuacao: number = 0;
    currentIndex: number = 0;
    respostaSelecionada: string = "";
    pergunta = ["Que ano estamos?", "Quanto é 2 + 2?", "Qual o game of the year de 2025?"];
    respostas = [
        {
            id: 1,
            respostas: ["2021", "2022", "2023", "2025"],
            correta: "2025",
        },
        {
            id: 2,
            respostas: ["1", "4", "3", "5"],
            correta: "4",
        },
        {
            id: 1,
            respostas: ["Expedition 33", "ghost of yotei", "Death Stranding 2", "AC Shadows"],
            correta: "Expedition 33",
        },
    ];

    private intervalId: any;

    ngOnInit() {
        this.intervalId = setInterval(() => {
            if (this.tempo > 0) {
                this.tempo--;
            } else {
                clearInterval(this.intervalId);
                alert("Tempo esgotado!");
            }
        }, 1000);
    }

    responder() {
        if (this.respostaSelecionada == "") {
            alert("Selecione uma resposta antes de prosseguir!");
            return;
        }

        if (this.respostaSelecionada == this.respostas[this.currentIndex].correta) {
            this.pontuacao += 1;
        }

        if (this.currentIndex < this.pergunta.length - 1) {
            this.currentIndex++;
        } else {
            alert(`Fim das perguntas! Sua pontuação foi ${this.pontuacao}`);
            this.currentIndex = 0;
            this.tempo = 30;
        }
    }
}
