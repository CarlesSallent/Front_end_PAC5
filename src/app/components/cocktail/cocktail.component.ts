import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail } from '../../models/cocktail.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-cocktail',
  imports: [CommonModule, RouterModule, MatExpansionModule],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.css'
})
export class CocktailComponent implements OnInit {

  public cocktail: Cocktail | null = null;
  public ingredients: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cocktailsService: CocktailsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.cocktailsService.getCocktailById(id).subscribe(response => {
      this.cocktail = response.drinks?.[0] || null;

      this.ingredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = this.cocktail?.[`strIngredient${i}`];
        if (ingredient) {
          this.ingredients.push(ingredient);
        }
      }
    });
  }
  

  goBack(): void {
    this.router.navigate(['/']);
  }
  
}
