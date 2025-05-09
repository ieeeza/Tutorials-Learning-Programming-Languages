import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    showCard = false;

    toggleCard() {
        this.showCard = !this.showCard;
        console.log("func")
    }

    name = "";
    numero = undefined;
    descricao = ""
    contatos: { id: number; name: string; numero: number; descricao: string }[] = [];
    private proxId = 1;

    adicionarContato() {
        if (!this.name || !this.numero || !this.descricao) {
            alert("Preencha todos os campos!");
            return;
        }

        this.contatos.push({
            id: this.proxId++,
            name: this.name,
            numero: this.numero,
            descricao: this.descricao
        })

        this.name = "";
        this.numero = undefined;
        this.descricao = "";
        this.showCard = false;
    }
}
