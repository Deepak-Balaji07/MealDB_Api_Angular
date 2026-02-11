import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent {
  meal: any;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.mealService.getMealById(id).subscribe(res => {
      this.meal = res.meals[0];
    });
  }

  goBack() {
    this.router.navigate(['/meals']);
  }
}
