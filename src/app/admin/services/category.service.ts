import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'category/getAll');
  }

  addCategory(name: String): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'category/add', {
      name
    });
  }
}
