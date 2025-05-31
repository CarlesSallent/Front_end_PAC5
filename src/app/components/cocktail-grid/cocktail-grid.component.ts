import { Component, Input } from '@angular/core';
import { Cocktail } from '../../models/cocktail.interface';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-grid',
  imports: [CommonModule, RouterModule],
  templateUrl: './cocktail-grid.component.html',
  styleUrl: './cocktail-grid.component.css'
})
export class CocktailGridComponent {

  @Input() cocktails: Cocktail[] = [];

  constructor(private router: Router) {}

  goToDetail(id: string) {
    this.router.navigate(['/cocktail', id]);
  }

}
