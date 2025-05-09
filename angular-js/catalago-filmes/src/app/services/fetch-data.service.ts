// movie.service.ts
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class MovieService {
    constructor(private readonly http: HttpClient) {}

    buscarFilme(query: string) {
        const headers = new HttpHeaders({
            accept: "application/json",
            Authorization:
                "Bearer
        });

        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

        return this.http.get(url, { headers });
    }
}
