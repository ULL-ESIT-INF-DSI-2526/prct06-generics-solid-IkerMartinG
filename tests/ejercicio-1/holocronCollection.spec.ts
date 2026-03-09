// ======================================================================
// tests/holocronCollection.spec.ts
// ======================================================================

import { describe, test, expect } from "vitest";
import { HolocronCollection } from "../../src/ejercicio-1/HolocronCollection";
import { Holocron } from "../../src/ejercicio-1/entities";

describe("HolocronCollection", () => {
  test("búsquedas específicas", () => {
    const c = new HolocronCollection();
    const h1 = new Holocron("1", "Holocron Jedi", "República", 5, -1000, "Jedha");
    const h2 = new Holocron("2", "Holocron Sith", "Sith", 9, -800, "Moraband");
    c.añadir(h1);
    c.añadir(h2);

    expect(c.buscarPorAfiliacion("Sith")).toEqual([h2]);
    expect(c.buscarPorPoder(5)).toEqual([h1]);
    expect(c.buscarPorAño(-800)).toEqual([h2]);
    expect(c.buscarPorPlaneta("Jedha")).toEqual([h1]);
  });

  test("buscarPorNombre heredado", () => {
    const c = new HolocronCollection();
    const h = new Holocron("3", "Holocron Antiguo", "Independiente", 7, -1500, "Unknown");
    c.añadir(h);
    const res = c.buscarPorNombre("Antiguo");
    expect(res.length).toBe(1);
    expect(res[0].id).toBe("3");
  });
});
