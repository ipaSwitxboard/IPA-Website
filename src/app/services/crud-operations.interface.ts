import { Observable } from 'rxjs';

export interface CrudOperations<T, ID> {
  save(t: T, url:string): Observable<T>;
  update(id: ID, t: T, url:string): Observable<T>;
  findOne(id: ID, url:string): Observable<T>;
  findAll(url:string): Observable<T[]>;
  delete(id: ID, url:string): Observable<any>;
}
