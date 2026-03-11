import { describe, test, expect } from "vitest";
import { Cardio } from "../../src/modi/entities/Cardio";


describe("Cardio training", () => {
  test("crating a Cardio entitie", () => {
    const cardio = new Cardio("cinta", 3, 120, "carrera", 200);

    expect(cardio.activity).toBe("cinta");
    expect(cardio.distanceKm).toBe(3);
    expect(cardio.durationMin).toBe(120);
    expect(cardio.type).toBe("carrera");
    expect(cardio.caloriesBurned).toBe(200);
  });

  test("throws on invalid data", () => {
    expect(() => new Cardio("", 5, 30, "carrera", 300)).toThrow();
    expect(() => new Cardio("Run", -1, 30, "carrera", 300)).toThrow();
    expect(() => new Cardio("Run", 5, 0, "carrera", 300)).toThrow();
    expect(() => new Cardio("Run", 5, 30, "", 300)).toThrow();
    expect(() => new Cardio("Run", 5, 30, "carrera", -10)).toThrow();
  });

  test("checking summary", () => {
    const cardio = new Cardio("cinta", 3, 120, "carrera", 200);

    expect(cardio.summary()).toBe("cinta - 3km");
  });

  test("checking calories", () => {
    const cardio = new Cardio("cinta", 3, 120, "carrera", 200);

    expect(cardio.calories()).toBe(200);
  });

});
