import { Recipe } from "../domain/Recipe";

/**
 * Servicio para estimar tiempos de una receta.
 */
export interface RecipeTimeEstimator {
  countSteps(recipe: Recipe): number;
  estimateTime(recipe: Recipe): { min: number; max: number };
}
