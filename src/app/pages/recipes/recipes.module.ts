import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutesModule } from './recipes-routes.module';
import { RecipesComponent } from './recipes.component';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeFormComponent,
    RecipeListComponent,
    RecipeCardComponent
  ],
  imports: [
    CoreModule,
    RecipesRoutesModule,
    ReactiveFormsModule,
    CommonModule,
    RouterOutlet
  ]
})
export class RecipesModule { }
