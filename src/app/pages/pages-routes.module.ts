import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'recipes',
        loadChildren: () => import('./recipes/recipes.module')
          .then(m => m.RecipesModule),
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class PagesRoutesModule {
}
