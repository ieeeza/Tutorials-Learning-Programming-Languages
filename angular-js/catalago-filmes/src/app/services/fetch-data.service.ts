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
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZkM2FlOGEyMzllMGY5MWI2NjAzZjQzMWVlMWFkMiIsIm5iZiI6MTc0NjgwMDQwMi40OTcsInN1YiI6IjY4MWUwZjEyMTVjZjhhMjEwYzBiMmZmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3wwgvU2mrloVGuOe365ndu24B4f9VvV3OU04jiVwjzA",
        });

        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

        return this.http.get(url, { headers });
    }
}
