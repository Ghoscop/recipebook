export interface Recipe {
  id?: number;
  nome: string;
  categoria: string;
  tempoPreparo: number;
  porcoes: number;
  ingredientes: string[];
  modoPreparo: string[];
  dataCadastro: Date;
  imagemUrl?: string;
}
