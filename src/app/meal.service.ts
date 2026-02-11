import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

   private api = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  searchByFirstLetter(letter: string): Observable<any> {
    return this.http.get(`${this.api}/search.php?f=${letter}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.api}/categories.php`);
  }

  filterByCategory(category: string): Observable<any> {
    return this.http.get(`${this.api}/filter.php?c=${category}`);
  }

  getAreas(): Observable<any> {
    return this.http.get(`${this.api}/list.php?a=list`);
  }

  filterByArea(area: string): Observable<any> {
    return this.http.get(`${this.api}/filter.php?a=${area}`);
  }

  getMealById(id: string): Observable<any> {
    return this.http.get(`${this.api}/lookup.php?i=${id}`);
  }
}
