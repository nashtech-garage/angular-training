import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RecipeListComponent
  },
  {
    path: 'new',
    component: RecipeFormComponent
  },
  {
    path: ':id/edit',
    component: RecipeFormComponent
  },
  {
    path: ':id/details',
    component: RecipeDetailsComponent
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutesModule { }
