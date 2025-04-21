import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { RecipesData } from '../../../core/data/recipes.data';
// import { Router } from '@angular/router';
import { Recipe } from '../../../core/models/recipe.model';

@Component({
  selector: 'rcp-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
  standalone: false
})
export class RecipeListComponent implements OnInit {
  public recipes: WritableSignal<Recipe[]> = signal<Recipe[]>([]);
  public searchTerm: WritableSignal<string> = signal('');
  public filteredRecipes = computed(() => {
    const keyword = this.searchTerm().toLowerCase();
    return this.recipes().filter(recipe =>
      recipe.name.toLowerCase().includes(keyword) ||
      recipe.category.toLowerCase().includes(keyword)
    );
  });

  onSearchChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
  }

  constructor(
    // private router: Router,
    private recipesData: RecipesData
  ) {}

  ngOnInit(): void {
    this.recipesData.getRecipes().subscribe({
      next: data => this.recipes.set(data),
    })
  }


  // public goToRecipeForm() {
  //   this.router.navigate(['pages/recipes/new']);
  // };
}
