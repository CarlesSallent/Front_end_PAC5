import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailGridComponent } from './cocktail-grid.component';

describe('CocktailGridComponent', () => {
  let component: CocktailGridComponent;
  let fixture: ComponentFixture<CocktailGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
