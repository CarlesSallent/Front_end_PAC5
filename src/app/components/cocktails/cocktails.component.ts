import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail } from '../../models/cocktail.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { CocktailCardComponent } from '../cocktail-card/cocktail-card.component';
import { CocktailGridComponent } from '../cocktail-grid/cocktail-grid.component';


@Component({
  selector: 'app-cocktails',
  imports: [CommonModule, RouterModule, MatProgressSpinnerModule, MatCardModule, CocktailCardComponent, CocktailGridComponent],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.css'
})
export class CocktailsComponent implements OnInit {

  cocktails: Cocktail[] = [];

  viewType: 'grid' | 'card' = 'grid';

  constructor(private cocktailService: CocktailsService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktailsByCategory('Cocktail').subscribe(data => {
      this.cocktails = data.drinks;
      console.log(this.cocktails);
    });
  }

  toggleView(type: 'grid' | 'card') {
    this.viewType = type;
  }

}
