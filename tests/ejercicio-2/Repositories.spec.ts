import { describe, test, expect } from "vitest";
import { InMemoryChefRepository } from "../../src/ejercicio-2/repositories/InMemoryChefRepository";
import { InMemoryRecipeRepository } from "../../src/ejercicio-2/repositories/InMemoryRecipeRepository";
import { InMemoryStepRepository } from "../../src/ejercicio-2/repositories/InMemoryStepRepository";
import { Chef } from "../../src/ejercicio-2/domain/Chef";
import { Recipe } from "../../src/ejercicio-2/domain/Recipe";
import { Step } from "../../src/ejercicio-2/domain/Step";

describe("In-memory repositories", () => {
  test("Chef repository: add, get, search, remove", () => {
    const repo = new InMemoryChefRepository();
    const chef = new Chef({
      id: "c1",
      nombre: "Iker",
      seguidores: 12000,
      recetario: [],
    });

    repo.add(chef);
    expect(repo.getAll().length).toBe(1);
    expect(repo.getById("c1")).toBe(chef);

    expect(repo.searchByName("ik").length).toBe(1);
    expect(repo.searchByMinFollowers(10000).length).toBe(1);
    expect(repo.searchByMinFollowers(20000).length).toBe(0);

    repo.remove("c1");
    expect(repo.getAll().length).toBe(0);
  });

  test("Recipe repository: add, search by name and year range", () => {
    const repo = new InMemoryRecipeRepository();
    const r1 = new Recipe({
      id: "r1",
      nombre: "Tortilla",
      año: 2020,
      descripcion: "Tortilla clásica",
      pasos: [],
    });
    const r2 = new Recipe({
      id: "r2",
      nombre: "Tortilla moderna",
      año: 2023,
      descripcion: "Versión moderna",
      pasos: [],
    });

    repo.add(r1);
    repo.add(r2);

    expect(repo.searchByName("tortilla").length).toBe(2);
    expect(repo.searchByYearRange(2021, 2024)).toEqual([r2]);
  });

  test("Chef repository: add duplicate throws error", () => {
    const repo = new InMemoryChefRepository();
    const chef = new Chef({
      id: "c1",
      nombre: "Iker",
      seguidores: 12000,
      recetario: [],
    });
  
    repo.add(chef);
    expect(() => repo.add(chef)).toThrow("Chef duplicado");
  });
  
  test("Chef repository: remove non-existing throws error", () => {
    const repo = new InMemoryChefRepository();
    expect(() => repo.remove("nope")).toThrow("Chef no encontrado");
  });
  
  test("Chef repository: getById returns undefined when not found", () => {
    const repo = new InMemoryChefRepository();
    expect(repo.getById("missing")).toBeUndefined();
  });
  
  test("Chef repository: searchByName returns empty array when no match", () => {
    const repo = new InMemoryChefRepository();
    const chef = new Chef({
      id: "c1",
      nombre: "Iker",
      seguidores: 12000,
      recetario: [],
    });
    repo.add(chef);
  
    expect(repo.searchByName("zzz")).toEqual([]);
  });

  test("Recipe repository: add duplicate throws error", () => {
    const repo = new InMemoryRecipeRepository();
    const r = new Recipe({
      id: "r1",
      nombre: "Tortilla",
      año: 2020,
      descripcion: "desc",
      pasos: [],
    });
  
    repo.add(r);
    expect(() => repo.add(r)).toThrow("Receta duplicada");
  });
  
  test("Recipe repository: remove non-existing throws error", () => {
    const repo = new InMemoryRecipeRepository();
    expect(() => repo.remove("nope")).toThrow("Receta no encontrada");
  });
  
  test("Recipe repository: getById returns undefined when not found", () => {
    const repo = new InMemoryRecipeRepository();
    expect(repo.getById("missing")).toBeUndefined();
  });
  
  test("Recipe repository: searchByName returns empty array when no match", () => {
    const repo = new InMemoryRecipeRepository();
    const r = new Recipe({
      id: "r1",
      nombre: "Tortilla",
      año: 2020,
      descripcion: "desc",
      pasos: [],
    });
    repo.add(r);
  
    expect(repo.searchByName("zzz")).toEqual([]);
  });
  
  test("Recipe repository: searchByYearRange returns empty array when no match", () => {
    const repo = new InMemoryRecipeRepository();
    const r = new Recipe({
      id: "r1",
      nombre: "Tortilla",
      año: 2020,
      descripcion: "desc",
      pasos: [],
    });
    repo.add(r);
  
    expect(repo.searchByYearRange(2025, 2030)).toEqual([]);
  });

  test("Step repository: add duplicate throws error", () => {
    const repo = new InMemoryStepRepository();
    const s = new Step({
      id: "s1",
      nombre: "Cortar",
      descripcion: "desc",
      duracionMinutos: 10,
      opcional: false,
      etiquetas: ["corte"],
    });
  
    repo.add(s);
    expect(() => repo.add(s)).toThrow("Paso duplicado");
  });
  
  test("Step repository: remove non-existing throws error", () => {
    const repo = new InMemoryStepRepository();
    expect(() => repo.remove("nope")).toThrow("Paso no encontrado");
  });
  
  test("Step repository: getById returns undefined when not found", () => {
    const repo = new InMemoryStepRepository();
    expect(repo.getById("missing")).toBeUndefined();
  });
  
  test("Step repository: searchByName returns empty array when no match", () => {
    const repo = new InMemoryStepRepository();
    const s = new Step({
      id: "s1",
      nombre: "Cortar",
      descripcion: "desc",
      duracionMinutos: 10,
      opcional: false,
      etiquetas: ["corte"],
    });
    repo.add(s);
  
    expect(repo.searchByName("zzz")).toEqual([]);
  });
  
  test("Step repository: searchByTags returns empty array when no match", () => {
    const repo = new InMemoryStepRepository();
    const s = new Step({
      id: "s1",
      nombre: "Cortar",
      descripcion: "desc",
      duracionMinutos: 10,
      opcional: false,
      etiquetas: ["corte"],
    });
    repo.add(s);
  
    expect(repo.searchByTags(["horno"])).toEqual([]);
  });
  

  test("Step repository: add, search by name and tags", () => {
    const repo = new InMemoryStepRepository();
    const s1 = new Step({
      id: "s1",
      nombre: "Cortar",
      descripcion: "Cortar verduras",
      duracionMinutos: 10,
      opcional: false,
      etiquetas: ["corte", "cuchillo"],
    });
    const s2 = new Step({
      id: "s2",
      nombre: "Hornear",
      descripcion: "Hornear a 180º",
      duracionMinutos: 20,
      opcional: true,
      etiquetas: ["horno"],
    });

    repo.add(s1);
    repo.add(s2);

    expect(repo.searchByName("cortar")).toEqual([s1]);
    expect(repo.searchByTags(["corte"])).toEqual([s1]);
    expect(repo.searchByTags(["horno"])).toEqual([s2]);
    expect(repo.searchByTags(["corte", "cuchillo"])).toEqual([s1]);
    expect(repo.searchByTags(["corte", "horno"]).length).toBe(0);
  });
});
