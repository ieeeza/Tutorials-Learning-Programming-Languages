import { Component, inject, Input, Output, EventEmitter } from "@angular/core";
import { EnviaFormularioService } from "../../services/envia-formulario.service";

@Component({
    selector: "app-home",
    imports: [],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent {
    private enviaFormularioService = inject(EnviaFormularioService);
    name = "César";
    idButton = "Salve";
    meuBool = false;
    deveMostrarTitulo = false;
    listItens = ["salve", "kfsadsajda", "a"];
    atualizaBool(valor: boolean) {
        this.meuBool = valor;
    }

    @Output() emitindoValorName = new EventEmitter<string>();

    @Input() minhaPropsDeFora!: string;
 
    submit() {
        this.emitindoValorName.emit(this.name);
        this.enviaFormularioService.enviaInformaçãoBackend("Enviando mentiras hehehehe");
    }
}
