import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class MovieService{
    constructor (private http: HttpClient){}

    getMovie(t: string){
        let params = new HttpParams()
        .set('t', t);
        return this.http.get('http://www.omdbapi.com/?apikey=a5d4ec64&s=', {params});
    }
}