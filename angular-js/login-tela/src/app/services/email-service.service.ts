import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root",
})
export class EmailServiceService {
    constructor() {}

    private _email: string = "";

    setEmail(email: string) {
        this._email = email;
    }

    getEmail(): string {
        return this._email;
    }
}
