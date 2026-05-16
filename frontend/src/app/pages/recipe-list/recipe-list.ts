import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe';
import { Recipe } from '../../models/recipe.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList implements OnInit {
  recipes: Recipe[] = [];
  recipesFiltered: Recipe[] = [];
  buscar = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.listar().subscribe((recipes) => {
      this.recipes = recipes;
      this.recipesFiltered = recipes;
    });
  }

  filtrarReceitas(): void {
    const termo = this.normalizarTexto(this.buscar);

    this.recipesFiltered = this.recipes.filter((recipe) =>
      this.normalizarTexto(recipe.nome).includes(termo),
    );
  }

  private normalizarTexto(valor: string): string {
    return valor
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }
}
