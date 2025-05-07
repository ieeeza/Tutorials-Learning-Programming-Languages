import { Component, inject } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
	private enviaFormularioService = inject(EnviaFormularioService);
	name = 'César';
	idButton = 'Salve';
	meuBool = false;
	deveMostrarTitulo = false;
	listItens = ['salve', 'kfsadsajda', 'a'];
	atualizaBool(valor: boolean) {
		this.meuBool = valor;
	}

	submit() {
		this.enviaFormularioService.enviaInformaçãoBackend(
			'Enviando mentiras hehehehe'
		);
	}
}
