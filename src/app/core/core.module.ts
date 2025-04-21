import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesData } from './data/recipes.data';
// import { RecipesService } from './services/recipes.service';
import { RecipesService } from './mocks/recipes.service';

const DATA_SERVICES: Provider[] = [
  { provide: RecipesData, useClass: RecipesService }
]

const CORE_PROVIDERS = [
  ...DATA_SERVICES,
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ...CORE_PROVIDERS
  ]
})
export class CoreModule {
}
