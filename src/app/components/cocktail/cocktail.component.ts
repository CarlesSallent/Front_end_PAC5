import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail } from '../../models/cocktail.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cocktail',
  imports: [CommonModule, RouterModule],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.css'
})
export class CocktailComponent implements OnInit {

  cocktail: Cocktail | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cocktailsService: CocktailsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.cocktailsService.getCocktailById(id).subscribe(response => {
      this.cocktail = response.drinks?.[0] || null;
      console.log('Cocktail carregat:', this.cocktail);
    });
  }
  

  goBack(): void {
    this.router.navigate(['/']);
  }
  
}
