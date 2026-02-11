import { Component } from '@angular/core';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent {
   meals: any[] = [];
  categories: any[] = [];
  areas: any[] = [];

  firstLetter = '';
  selectedCategory = '';
  selectedArea = '';
  noResultFound = false;


  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadAreas();
  }

  loadCategories() {
    this.mealService.getCategories().subscribe(res => {
      this.categories = res.categories;
    });
  }

  loadAreas() {
    this.mealService.getAreas().subscribe(res => {
      this.areas = res.meals;
    });
  }

  searchByFirstLetter() {
  this.noResultFound = false;

  if (!this.firstLetter) return;

  this.mealService.searchByFirstLetter(this.firstLetter).subscribe({
    next: (res) => {
      this.meals = res.meals || [];
      this.noResultFound = this.meals.length === 0;
    },
    error: () => {
      this.meals = [];
      this.noResultFound = true;
    }
  });
}

searchByCategory() {
  this.noResultFound = false;

  if (!this.selectedCategory) return;

  this.mealService.filterByCategory(this.selectedCategory).subscribe({
    next: (res) => {
      this.meals = res.meals || [];
      this.noResultFound = this.meals.length === 0;
    },
    error: () => {
      this.meals = [];
      this.noResultFound = true;
    }
  });
}

searchByArea() {
  this.noResultFound = false;

  if (!this.selectedArea) return;

  this.mealService.filterByArea(this.selectedArea).subscribe({
    next: (res) => {
      this.meals = res.meals || [];
      this.noResultFound = this.meals.length === 0;
    },
    error: () => {
      this.meals = [];
      this.noResultFound = true;
    }
  });
}

}
