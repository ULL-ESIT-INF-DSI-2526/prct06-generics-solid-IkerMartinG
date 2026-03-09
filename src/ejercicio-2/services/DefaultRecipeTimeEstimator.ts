import { Recipe } from "../domain/Recipe";
import { Step } from "../domain/Step";
import { RecipeTimeEstimator } from "./RecipeTimeEstimator";

/**
 * Implementación por defecto del estimador de tiempos de receta.
 */
export class DefaultRecipeTimeEstimator implements RecipeTimeEstimator {
  countSteps(recipe: Recipe): number {
    return recipe.pasos.length;
  }

  estimateTime(recipe: Recipe): { min: number; max: number } {
    let min = 0;
    let max = 0;

    recipe.pasos.forEach((step: Step) => {
      if (step.opcional) {
        max += step.duracionMinutos;
      } else {
        min += step.duracionMinutos;
        max += step.duracionMinutos;
      }
    });

    return { min, max };
  }
}
