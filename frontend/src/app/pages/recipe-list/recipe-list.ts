import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe';
import { Recipe } from '../../models/recipe.model';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
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
      console.log('Receitas carregadas do backend:', recipes);
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

  abrirDetalhes(id: number): void {
    window.location.href = `/receita/${id}`;
  }

  private normalizarTexto(valor: string): string {
    return valor
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  receitasSelecionadas: number[] = [];

  alternarSelecao(id: number): void {
    if (this.receitasSelecionadas.includes(id)) {
      this.receitasSelecionadas = this.receitasSelecionadas.filter((item) => item !== id);
    } else {
      this.receitasSelecionadas.push(id);
    }
  }

  excluirSelecionadas(): void {
    if (this.receitasSelecionadas.length === 0) {
      return;
    }

    const confirmar = confirm('Deseja excluir as receitas selecionadas?');

    if (!confirmar) {
      return;
    }

    let concluidas = 0;
    const total = this.receitasSelecionadas.length;

    this.receitasSelecionadas.forEach((id) => {
      this.recipeService.deletar(id).subscribe({
        next: () => {
          concluidas++;

          if (concluidas === total) {
            window.location.reload();
          }
        },
        error: (erro) => {
          console.error(erro);
        },
      });
    });
  }
}
