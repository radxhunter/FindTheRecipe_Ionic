import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  tytul: string;
  filteredRecipies: any;
  recipies: any;
  cuisineType: any;
  dietLabels: any;
  dishType: any;
  type = 'fish';
  constructor(private recipeData: RecipeService) {}

  ngOnInit(){
    this.tytul = this.recipeData.title;
    this.recipeData.getRecipies().subscribe((data: any) =>{
      this.recipies = data.hits;
    });
    this.recipeData.getRecipiesByDiet(this.type,'low-fat').subscribe((data: any) => {
      console.log(data);
    });
  }
}
