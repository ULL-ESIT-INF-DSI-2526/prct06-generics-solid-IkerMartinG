import { describe, test, expect } from "vitest";
import { Strength } from "../../src/modi/entities/Strength";
import { Cardio } from "../../src/modi/entities/Cardio";
import { TrainingLog } from "../../src/modi/core/TrainingLog";

describe("TrainingLog collection", () => {
  test("Add operation", () => {
    const logs = new TrainingLog();
    const fuerza = new Strength("peso muerto", 100, 4, 12, 40);
    const cardio = new Cardio("cinta", 3, 120, "carrera", 200);

    logs.add(fuerza);
    logs.add(cardio);

    expect(logs.get(0)).toBe(fuerza);
    expect(logs.get(1)).toBe(cardio);
  });

  test("Remove operation", () => {
    const logs = new TrainingLog();
    const fuerza = new Strength("peso muerto", 100, 4, 12, 40);
    const cardio = new Cardio("cinta", 3, 120, "carrera", 200);

    logs.add(fuerza);
    logs.add(cardio);
    logs.remove(0);

    expect(logs.get(0)).toBe(cardio);
  });

  test("Size operation", () => {
    const logs = new TrainingLog();
    const fuerza = new Strength("peso muerto", 100, 4, 12, 40);
    const cardio = new Cardio("cinta", 3, 120, "carrera", 200);

    logs.add(fuerza);
    logs.add(cardio);

    expect(logs.size()).toBe(2);
  });

  test("Remove operation invalid index", () => {
    const logs = new TrainingLog();
    const fuerza = new Strength("peso muerto", 100, 4, 12, 40);
    const cardio = new Cardio("cinta", 3, 120, "carrera", 200);

    logs.add(fuerza);
    logs.add(cardio);

    expect(() => logs.remove(6)).toThrowError("Index out of bounds");
  });

  test("Get operation invalid index", () => {
    const logs = new TrainingLog();
    const fuerza = new Strength("peso muerto", 100, 4, 12, 40);
    const cardio = new Cardio("cinta", 3, 120, "carrera", 200);

    logs.add(fuerza);
    logs.add(cardio);

    expect(() => logs.get(7)).toThrowError("Index out of bounds");
  });

  test("filter works", () => {
    const logs = new TrainingLog();
    const cardio = new Cardio("cinta", 3, 120, "carrera", 340); // 340 calorias
    const fuerza = new Strength("peso muerto", 100, 4, 12, 40); // 160 calorias

    logs.add(cardio);
    logs.add(fuerza);

    const filtered = logs.filter((e) => e.calories() > 300);

    expect(filtered.size()).toBe(1);
    expect(filtered.get(0)).toBe(cardio);
  });

  test("totalBurn operation", () => {
    const logs = new TrainingLog();
    const fuerza = new Strength("peso muerto", 100, 4, 12, 40);
    const cardio = new Cardio("cinta", 3, 120, "carrera", 200);

    logs.add(fuerza);
    logs.add(cardio);

    expect(logs.totalBurn()).toBe(200 + fuerza.calories());
  });
});
