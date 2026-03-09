// ======================================================================
// tests/jediMasterCollection.spec.ts
// ======================================================================

import { describe, test, expect } from "vitest";
import { JediMasterCollection } from "../../src/ejercicio-1/JediMasterCollection";
import { JediMaster } from "../../src/ejercicio-1/entities";

describe("JediMasterCollection", () => {
  test("búsquedas específicas", () => {
    const c = new JediMasterCollection();
    const j1 = new JediMaster("1", "Yoda", "República", 99, -500, "Dagobah");
    const j2 = new JediMaster("2", "Darth Vader", "Imperio", 95, -20, "Tatooine");
    c.añadir(j1);
    c.añadir(j2);

    expect(c.buscarPorAfiliacion("República")).toEqual([j1]);
    expect(c.buscarPorPoder(95)).toEqual([j2]);
    expect(c.buscarPorAño(-500)).toEqual([j1]);
    expect(c.buscarPorPlaneta("Tatooine")).toEqual([j2]);
  });

  test("buscarPorNombre heredado", () => {
    const c = new JediMasterCollection();
    const j = new JediMaster("3", "Obi-Wan Kenobi", "República", 90, -40, "Stewjon");
    c.añadir(j);
    const res = c.buscarPorNombre("Obi-Wan");
    expect(res.length).toBe(1);
    expect(res[0].id).toBe("3");
  });
});
