import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  tytul: string;
  constructor(private recipeData: RecipeService) {}

  ngOnInit(){
    this.tytul = this.recipeData.title;
  }
}
