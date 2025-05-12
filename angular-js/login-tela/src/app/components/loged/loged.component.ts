import { Component } from '@angular/core';
import { EmailServiceService } from '../../services/email-service.service';

@Component({
    selector: "app-loged",
    imports: [],
    templateUrl: "./loged.component.html",
    styleUrl: "./loged.component.scss",
})
export class LogedComponent {
    constructor(private readonly emailService: EmailServiceService) {}

    email = "";

    ngOnInit() {
        this.email = this.emailService.getEmail();
    }
}
