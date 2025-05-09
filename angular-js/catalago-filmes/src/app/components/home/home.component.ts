import { Component } from "@angular/core";
import { MovieService } from "../../services/fetch-data.service";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-home",
    imports: [FormsModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.scss",
})
export class HomeComponent {
    filmeNome = "";
    resultado: any;

    constructor(private movieService: MovieService) {}

    buscarFilme() {
        this.movieService.buscarFilme(this.filmeNome).subscribe({
            next: (res: any) => (this.resultado = res),
            error: (err: any) => console.error(err),
        });
    }
}
