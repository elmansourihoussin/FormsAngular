import { Injectable } from '@angular/core';
import { User } from '../home/user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  constructor(private http: HttpClient) { }

  postUser(user: User): Observable<any> {

    return this.http.post('https://putsreq.com/4EcPnL22gEdrjglLWWJG', user);

     // return of(user);
  }

  getItems(): Observable<string[]> {
    return of(['One', 'Tow', 'Three']);
  }

}
