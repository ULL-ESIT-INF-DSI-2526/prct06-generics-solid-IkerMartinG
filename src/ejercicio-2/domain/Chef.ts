import { Recipe } from "./Recipe";

/**
 * Propiedades necesarias para crear un chef.
 */
export interface ChefProps {
  id: string;
  nombre: string;
  seguidores: number;
  recetario: Recipe[];
}

/**
 * Representa un chef con un recetario asociado.
 */
export class Chef {
  constructor(private props: ChefProps) {}

  get id() { return this.props.id }
  get nombre() { return this.props.nombre }
  get seguidores() { return this.props.seguidores }
  get recetario() { return [...this.props.recetario] }

  /**
   * Añade una receta al recetario del chef.
   */
  addRecipe(recipe: Recipe) {
    this.props.recetario.push(recipe);
  }
}
