import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RecipeService } from '../../services/recipe';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.css',
})
export class RecipeForm {
  recipe: Recipe = {
    nome: '',
    categoria: '',
    tempoPreparo: 0,
    porcoes: 0,
    ingredientes: [],
    modoPreparo: [],
    dataCadastro: new Date(),
    imagemUrl: '',
  };

  ingredientes = '';
  modoPreparo = '';
  mensagemSucesso = '';
  mensagemErro = '';

  constructor(
    private recipeService: RecipeService,
    private router: Router,
  ) {}

  voltar(): void {
    window.location.href = '/';
  }

  salvar() {
    this.recipe.ingredientes = this.ingredientes
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    this.recipe.modoPreparo = this.modoPreparo
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    this.recipeService.salvar(this.recipe).subscribe({
      next: () => {
        alert('Receita cadastrada com sucesso!');
        window.location.replace('http://localhost:4200/');
      },

      error: (error) => {
        (alert(this.mensagemErro = 'Erro ao salvar a receita.'), error);
      },
    });
  }
}
