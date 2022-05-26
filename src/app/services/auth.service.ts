import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserEntity} from "../Entities/user.entity";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASEURL: string = environment.baseURL;
  constructor(
    private readonly _http: HttpClient,
  ) {}

  login(user: UserEntity){
    return this._http.post<string>(this.BASEURL+"auth/signin", user).subscribe(
      (res) => {
        localStorage.setItem('token', res);
        console.log(res);
      },
    (er) => {

    }
    );
  }
}
