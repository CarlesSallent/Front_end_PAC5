import { Component, input, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cocktail } from '../../models/cocktail.interface';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cocktail-card',
  imports: [MatProgressSpinnerModule, MatCardModule],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.css'
})
export class CocktailCardComponent {

  @Input() cocktail!: Cocktail;

  constructor(private router: Router) {}
  goToDetail(): void {
    this.router.navigate(['/cocktail', this.cocktail.idDrink]);
  }

}
