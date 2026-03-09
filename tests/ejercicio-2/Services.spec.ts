import { describe, test, expect } from "vitest";
import { DefaultRecipeTimeEstimator } from "../../src/ejercicio-2/services/DefaultRecipeTimeEstimator";
import { Recipe } from "../../src/ejercicio-2/domain/Recipe";
import { Step } from "../../src/ejercicio-2/domain/Step";

describe("RecipeTimeEstimator service", () => {
  test("countSteps and estimateTime with optional steps", () => {
    const step1 = new Step({
      id: "s1",
      nombre: "Cortar",
      descripcion: "Cortar verduras",
      duracionMinutos: 10,
      opcional: false,
      etiquetas: [],
    });
    const step2 = new Step({
      id: "s2",
      nombre: "Hornear",
      descripcion: "Hornear a 180º",
      duracionMinutos: 20,
      opcional: true,
      etiquetas: [],
    });

    const recipe = new Recipe({
      id: "r1",
      nombre: "Verduras al horno",
      año: 2024,
      descripcion: "Receta con paso opcional",
      pasos: [step1, step2],
    });

    const estimator = new DefaultRecipeTimeEstimator();
    expect(estimator.countSteps(recipe)).toBe(2);

    const time = estimator.estimateTime(recipe);
    expect(time.min).toBe(10);
    expect(time.max).toBe(30);
  });
});
