import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe','simple test','https://media.istockphoto.com/id/1599002141/photo/woman-serving-two-bowls-of-pumpkin-soup-for-thanksgiving-meal.jpg?s=1024x1024&w=is&k=20&c=KXQ-z_CjgdJO9n46plLfDbdudn-uhMcCiO4fIAjPLTQ=')
    ];

}
