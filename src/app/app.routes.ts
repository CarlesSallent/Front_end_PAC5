import { Routes } from '@angular/router';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';

export const routes: Routes = [
  {path: '', component: CocktailsComponent},
  {path: 'cocktail/:id', component: CocktailComponent},
  {path: '**', component: CocktailsComponent}
];
