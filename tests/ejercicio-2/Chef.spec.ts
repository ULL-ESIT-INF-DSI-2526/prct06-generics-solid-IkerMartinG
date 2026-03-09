import { describe, test, expect } from "vitest";
import { Chef } from "../../src/ejercicio-2/domain/Chef";
import { Recipe } from "../../src/ejercicio-2/domain/Recipe";
import { Step } from "../../src/ejercicio-2/domain/Step";

describe("Chef entity", () => {
  test("Chef getters and addRecipe", () => {
    const step = new Step({
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
      pasos: [step],
    });

    const chef = new Chef({
      id: "c1",
      nombre: "Iker Chef",
      seguidores: 10000,
      recetario: [recipe],
    });

    expect(chef.id).toBe("c1");
    expect(chef.nombre).toBe("Iker Chef");
    expect(chef.seguidores).toBe(10000);
    expect(chef.recetario.length).toBe(1);

    const recipe2 = new Recipe({
      id: "r2",
      nombre: "Ensalada",
      año: 2023,
      descripcion: "Ensalada fresca",
      pasos: [],
    });

    chef.addRecipe(recipe2);
    expect(chef.recetario.length).toBe(2);
  });
});
