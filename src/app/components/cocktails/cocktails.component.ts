import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail } from '../../models/cocktail.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-cocktails',
  imports: [CommonModule, RouterModule, MatProgressSpinnerModule, MatCardModule],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.css'
})
export class CocktailsComponent implements OnInit {

  cocktails: Cocktail[] = [];

  viewType: 'list' | 'grid' = 'list';

  constructor(private cocktailService: CocktailsService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktailsByCategory('Cocktail').subscribe(data => {
      this.cocktails = data.drinks;
    });
  }

  toggleView(type: 'list' | 'grid') {
    this.viewType = type;
  }

}
