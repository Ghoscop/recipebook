import { Routes } from '@angular/router';
import { RecipeList } from './pages/recipe-list/recipe-list';
import { RecipeForm } from './pages/recipe-form/recipe-form';
import { RecipeDetail } from './pages/recipe-detail/recipe-detail';


export const routes: Routes = [
  {
    path: '',
    component: RecipeList,
  },
  {
    path: 'nova-receita',
    component: RecipeForm,
  },
  {
    path: 'receita/:id',
    component: RecipeDetail,
  },
];
