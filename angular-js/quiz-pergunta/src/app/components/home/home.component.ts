import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    tempo: number = 0;
    pontuacao: number = 0;
    pergunta = ["SALVE ESSA É UMA PERGUNTA MUITO GRANDE SOBRE QUANTOS ANOS VOCE TEM"];
    respostas = [];
}
