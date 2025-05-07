import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class EnviaFormularioService {
    constructor() {}

    enviaInformaçãoBackend(info: string) {
        console.log("Enviando mentiras...hehe.he..hehe..hehe");
    }
}
