import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeList} from './pages/recipe-list/recipe-list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RecipeList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('recipebook-frontend');
}
