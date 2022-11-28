import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
recipeSelected=new EventEmitter<Recipe>(); 

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel ', 
      'This is a Simple Teste', 
      'https://th.bing.com/th/id/OIP.u4fxL_PZwHzo5SBZDYmeHAHaE7?pid=ImgDet&rs=1',
       [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',32)
      ]),
       new Recipe(
      'Big Fat Burger',
       'This is a Simple Teste',
        'https://th.bing.com/th/id/R.9266faf08fd49e8b85c065a3fddedfea?rik=v2OC9yazd6%2bGdg&pid=ImgRaw&r=0',
        [
          new Ingredient('Bunds',2),
          new Ingredient('Meat',1)
        ])
  ];
  constructor(private slService:ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients:Ingredient){
    this.slService.addIngredient(ingredients);
    
  }

  getRacipe(index:number){
    return this.recipes[index];
  }

}
