import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail implements OnInit {
  recipe?: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.recipeService.detalhesPorId(id).subscribe((recipe) => {
      this.recipe = recipe;
      console.log('Receita detalhe:', recipe);
    });
  }
}
