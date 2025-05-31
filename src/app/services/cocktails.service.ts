import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  getCocktailsByCategory(category: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/filter.php?c=${category}`);
}

  getCocktailById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup.php?i=${id}`);
  }
}
