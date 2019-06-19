import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginationApiService } from './pagination-api.service';
import { User } from 'src/modules/user/components/user/user.model';

@Injectable()
export class ApiService {

  constructor(private http: Http, private paginationApiService: PaginationApiService) {
  }

  fetchUsers(page): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=' + page).pipe(map(response => response.json().data ));
  }

  fetchPaginationInfo(): Observable<any> {
    return this.paginationApiService.fetchPaginationInfo();
  }

  fetchUserById(id: number): Observable<User> {
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(map(response => response.json().data));
  }

}
