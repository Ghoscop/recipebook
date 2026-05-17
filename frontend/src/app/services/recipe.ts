import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';


@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private api = 'http://localhost:8080/api/receitas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.api);
  }

  salvar(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>('http://localhost:8080/api/receitas', recipe);
  }

  detalhesPorId(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.api}/${id}`);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
