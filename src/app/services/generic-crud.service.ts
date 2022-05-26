import { Injectable } from '@angular/core';
import {CrudOperations} from "./crud-operations.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GenericCrudService<T, ID> implements CrudOperations<T,ID> {

  BASEURL: string = environment.baseURL;
  constructor(
    private readonly _http: HttpClient,
  ) {}

  save(t: T, url:string): Observable<T> {
    return this._http.post<T>(this.BASEURL + url, t);
  }

  update(id: ID, t: T, url:string): Observable<T> {
    return this._http.put<T>(this.BASEURL + url + "/" + id, t, {});
  }

  findOne(id: ID, url:string): Observable<T> {
    console.log(this.BASEURL+url+'/'+id);
    return this._http.get<T>(this.BASEURL+ url + "/" + id);
  }

  findByCountry(country: string, url:string): Observable<T[]>{
    return this._http.get<T[]>(this.BASEURL+url+"/"+country);
  }

  findOneByName(name:string, url:string): Observable<T>{
    return this._http.get<T>(this.BASEURL+url+"/"+name);
  }

  findAll(url:string): Observable<T[]> {
    return this._http.get<T[]>(`${this.BASEURL+ url}`);
  }

  delete(id: ID, url:string): Observable<T> {
    return this._http.delete<T>(this.BASEURL+ url + '/' + id);
  }
}
