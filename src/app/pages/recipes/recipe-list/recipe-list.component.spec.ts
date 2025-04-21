import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListComponent } from './recipe-list.component';
import { RecipesData } from '../../../core/data/recipes.data';
import { of } from 'rxjs';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;
  let service: RecipesData;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListComponent ],
      providers: [
        {
          provide: RecipesData,
          useValue: {
            getRecipes: jasmine.createSpy('getRecipes').and.returnValue(of([]))
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {}
        }
      ],
      imports: [
        CommonModule,
        RouterLink,
        RouterModule,
        RouterOutlet
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RecipeListComponent);
    service = TestBed.inject(RecipesData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getRecipes', () => {
    expect(service.getRecipes).toHaveBeenCalled();
  })
});
