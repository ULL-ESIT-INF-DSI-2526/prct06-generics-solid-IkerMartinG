import { describe, test, expect } from "vitest";
import { Strength } from "../../src/modi/entities/Strength";


describe("Strength training", () => {
  test("crating a Strength entitie", () => {
    const fuerza = new Strength("peso muerto", 100, 4, 12, 40);

    expect(fuerza.exercise).toBe("peso muerto");
    expect(fuerza.weightKg).toBe(100);
    expect(fuerza.sets).toBe(4);
    expect(fuerza.reps).toBe(12);
    expect(fuerza.caloriesPerSet).toBe(40);
  });

  test("throws on invalid data", () => {
    expect(() => new Strength("", 100, 4, 12, 40)).toThrow();
    expect(() => new Strength("peso muerto", -100, 4, 12, 40)).toThrow();
    expect(() => new Strength("peso muerto", 100, -4, 12, 40)).toThrow();
    expect(() => new Strength("peso muerto", 100, 4, -12, 40)).toThrow();
    expect(() => new Strength("peso muerto", 100, 4, 12, -40)).toThrow();
  });

  test("checking summary", () => {
    const fuerza = new Strength("peso muerto", 100, 4, 12, 40);

    expect(fuerza.summary()).toStrictEqual({ exercise: fuerza.exercise, weightKg: fuerza.weightKg });
  });

  test("checking calories", () => {
    const fuerza = new Strength("peso muerto", 100, 4, 12, 40);

    expect(fuerza.calories()).toBe(160);
  });

});
