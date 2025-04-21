import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

export abstract class RecipesData {
  abstract getRecipes(): Observable<Recipe[]>;
  abstract getRecipeById(id: string): Observable<Recipe>;
  abstract createRecipe(): Observable<Recipe>;
}
