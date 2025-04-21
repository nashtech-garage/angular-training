import { TestBed } from '@angular/core/testing';

import { RecipesService } from './recipes.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RecipesService', () => {
  let service: RecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        { provide: HttpHandler, useValue: {} },
      ],
    });
    service = TestBed.inject(RecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
