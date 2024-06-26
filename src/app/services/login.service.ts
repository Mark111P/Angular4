import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class UserService{
    constructor (private http: HttpClient){}

    addUser(login: string, password: string){
        let params = new HttpParams()
        .set('login', login)
        .set('password', password);
        return this.http.get('http://localhost:3333/addUser', {params});
    }
    getLogins(){
        return this.http.get('http://localhost:3333/getLogins');
    }
}