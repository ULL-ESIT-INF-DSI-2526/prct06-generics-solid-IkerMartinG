import { describe, test, expect } from "vitest";
import { Recipe } from "../../src/ejercicio-2/domain/Recipe";
import { Step } from "../../src/ejercicio-2/domain/Step";

describe("Recipe entity", () => {
  test("Recipe getters and addStep", () => {
    const step1 = new Step({
      id: "s1",
      nombre: "Cortar",
      descripcion: "Cortar verduras",
      duracionMinutos: 10,
      opcional: false,
      etiquetas: ["corte"],
    });

    const recipe = new Recipe({
      id: "r1",
      nombre: "Verduras salteadas",
      año: 2024,
      descripcion: "Receta sencilla",
      pasos: [step1],
    });

    expect(recipe.id).toBe("r1");
    expect(recipe.nombre).toBe("Verduras salteadas");
    expect(recipe.año).toBe(2024);
    expect(recipe.descripcion).toBe("Receta sencilla");
    expect(recipe.pasos.length).toBe(1);

    const step2 = new Step({
      id: "s2",
      nombre: "Saltear",
      descripcion: "Saltear en sartén",
      duracionMinutos: 5,
      opcional: false,
      etiquetas: ["salteado"],
    });

    recipe.addStep(step2);
    expect(recipe.pasos.length).toBe(2);
  });
});
