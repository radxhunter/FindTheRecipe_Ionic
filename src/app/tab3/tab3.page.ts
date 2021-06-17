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
  url: any;
  cuisineType: any = 'Italian';
  dietLabel: any = 'low-fat';
  dishType: any;
  type: any = 'Lunch';
  kind: any = 'Fish';
  constructor(private recipeData: RecipeService) {}

  ngOnInit(){
    this.tytul = this.recipeData.title;
    /*this.recipeData.getRecipiesByDiet(this.type,'low-fat').subscribe((data: any) => {
      console.log(data);
    });*/
  }

  searchForRecipies() {
    this.recipeData.getFullRecipies(this.kind, this.dietLabel, this.cuisineType, this.type).subscribe((data: any) => {
      this.recipies = data.hits;
      console.log(data);
    });
  }
}
