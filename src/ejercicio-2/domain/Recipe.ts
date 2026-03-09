import { Step } from "./Step";

/**
 * Propiedades necesarias para crear una receta.
 */
export interface RecipeProps {
  id: string;
  nombre: string;
  año: number;
  descripcion: string;
  pasos: Step[];
}

/**
 * Representa una receta compuesta por varios pasos.
 */
export class Recipe {
  constructor(private props: RecipeProps) {}

  get id() { return this.props.id }
  get nombre() { return this.props.nombre }
  get año() { return this.props.año }
  get descripcion() { return this.props.descripcion }
  get pasos() { return [...this.props.pasos] }

  /**
   * Añade un nuevo paso a la receta.
   */
  addStep(step: Step) {
    this.props.pasos.push(step);
  }
}
