import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { EmailServiceService } from "../../services/email-service.service";

@Component({
    selector: "app-home",
    imports: [FormsModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.scss",
})
export class HomeComponent {
    constructor(private readonly emailService: EmailServiceService, private readonly router: Router) {}
    email: string = "";
    password: string = "";

    login() {
        if (this.email && this.password) {
            this.emailService.setEmail(this.email);
            this.router.navigate(["/loged"]);
        } else {
            alert("Todos os campos precisar estar preenchidos!");
        }
    }

    forget() {
        alert("Esqueceu a senha é its over pro betinha!");
    }
}
