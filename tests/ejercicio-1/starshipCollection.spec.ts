// ======================================================================
// tests/starshipCollection.spec.ts
// ======================================================================

import { describe, test, expect } from "vitest";
import { StarshipCollection } from "../../src/ejercicio-1/StarshipCollection";
import { Starship } from "../../src/ejercicio-1/entities";

describe("StarshipCollection", () => {
  test("búsquedas específicas", () => {
    const c = new StarshipCollection();
    const s1 = new Starship("1", "X-Wing", "República", 3, 10, "Corellia");
    const s2 = new Starship("2", "TIE Fighter", "Imperio", 2, 5, "Fondor");
    c.añadir(s1);
    c.añadir(s2);

    expect(c.buscarPorAfiliacion("Imperio")).toEqual([s2]);
    expect(c.buscarPorPoder(3)).toEqual([s1]);
    expect(c.buscarPorAño(5)).toEqual([s2]);
    expect(c.buscarPorPlaneta("Corellia")).toEqual([s1]);
  });

  test("buscarPorNombre heredado", () => {
    const c = new StarshipCollection();
    const s = new Starship("3", "Millennium Falcon", "Independiente", 4, 0, "Corellia");
    c.añadir(s);
    const res = c.buscarPorNombre("Millennium");
    expect(res.length).toBe(1);
    expect(res[0].id).toBe("3");
  });
});
