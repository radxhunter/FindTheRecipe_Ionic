import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public title = 'Recipes';
  private appId = '0df3916d';
  private appKey = 'dd198528dafc093dae2ba907b3143f5b';
  private apiRoot = `https://api.edamam.com/search?app_id=${this.appId}&app_key=${this.appKey}`;
  constructor(private http: HttpClient) {
   }

   getRecipies() {
    return this.http.get(`${this.apiRoot}&q=chicken&from=0&to=3&calories=591-722&health=alcohol-free`);
   }

   getRecipiesByDiet(type, diet) {
    return this.http.get(`${this.apiRoot}&q=${type}&d=${diet}&from=0&to=10`);
   }

   getRecipe(diet, health, cuisineType, mealType) {
    return this.http.get(`${this.apiRoot}&d=${diet}&from=0&to=10&health=${health}&cuisineType=${cuisineType}&mealType=${mealType}`);
   }
}
