import { Injectable } from '@angular/core';
import { RecipesData } from '../data/recipes.data';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService extends RecipesData {

  public constructor(private http: HttpClient) {
    super()
  }

  public getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`/assets/data/recipes.json`);
  }

  createRecipe(): Observable<Recipe> {
    return of();
  }

  getRecipeById(id: string): Observable<Recipe> {
    return of();
  }
}
