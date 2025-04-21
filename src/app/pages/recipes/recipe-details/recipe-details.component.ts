import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../../core/models/recipe.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  styleUrls: [ './recipe-details.component.scss' ]
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe = {
    "id": "1",
    "name": "Egg Manchurian",
    "category": "Appetizer",
    "time": "30 Mins",
    "thumbnail": "assets/img/recepie/recpie_1.png",
    "description": "A spicy Indo-Chinese dish made with boiled eggs tossed in a tangy Manchurian sauce.",
    "ingredients": [
      "4 boiled eggs",
      "1 onion, chopped",
      "2 tbsp soy sauce",
      "1 tbsp chili sauce",
      "1 tsp ginger-garlic paste",
      "Salt and pepper to taste"
    ],
    "instructions": "Cut the boiled eggs in halves. Sauté onions and ginger-garlic paste, add sauces and toss eggs until coated. Serve hot."
  };

  constructor() { }

  ngOnInit(): void { }

  toggleEdit() {
  }
}
