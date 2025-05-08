import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-home",
    imports: [FormsModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.scss",
})
export class HomeComponent {
    novaTarefa = "";
    tarefas: { id: number; nome: string; feita: boolean }[] = [];
    private proxId = 1;

    adicionarTarefa() {
        const nome = this.novaTarefa.trim();
        if (nome) {
            this.tarefas.push({ id: this.proxId++, nome, feita: false });
            this.novaTarefa = "";
        }
    }

    marcaFeita(tarefa: { nome: string; feita: boolean }) {
        tarefa.feita = !tarefa.feita;
    }

    remove(tarefa: { id: number; nome: string; feita: boolean }) {
        const idx = this.tarefas.indexOf(tarefa);
        if (idx > -1) {
            this.tarefas.splice(idx, 1);
        }
    }
}
