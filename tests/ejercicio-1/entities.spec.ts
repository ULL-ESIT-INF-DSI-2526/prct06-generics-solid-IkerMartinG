// ======================================================================
// tests/entities.spec.ts
// ======================================================================

import { describe, test, expect } from "vitest";
import { JediMaster, Starship, Holocron } from "../../src/ejercicio-1/entities";

describe("Entities – cobertura completa", () => {

  // -----------------------------
  // JEDI MASTER
  // -----------------------------
  test("JediMaster: getters y setters cubiertos", () => {
    const j = new JediMaster("1", "Yoda", "República", 99, -500, "Dagobah");

    // Getters
    expect(j.id).toBe("1");
    expect(j.nombre).toBe("Yoda");
    expect(j.afiliacion).toBe("República");
    expect(j.nivelPoder).toBe(99);
    expect(j.añoFormacion).toBe(-500);
    expect(j.planetaOrigen).toBe("Dagobah");

    // Setters válidos
    j.nombre = "Maestro Yoda";
    j.afiliacion = "Consejo Jedi";
    j.nivelPoder = 100;
    j.añoFormacion = -450;
    j.planetaOrigen = "Coruscant";

    expect(j.nombre).toBe("Maestro Yoda");
    expect(j.afiliacion).toBe("Consejo Jedi");
    expect(j.nivelPoder).toBe(100);
    expect(j.añoFormacion).toBe(-450);
    expect(j.planetaOrigen).toBe("Coruscant");

    // Setters inválidos (cobertura de throw)
    expect(() => (j.nombre = "")).toThrow();
    expect(() => (j.afiliacion = "")).toThrow();
    expect(() => (j.nivelPoder = -1)).toThrow();
    expect(() => (j.planetaOrigen = "")).toThrow();
  });

  // -----------------------------
  // STARSHIP
  // -----------------------------
  test("Starship: getters y setters cubiertos", () => {
    const s = new Starship("2", "X-Wing", "República", 3, 10, "Corellia");

    // Getters
    expect(s.id).toBe("2");
    expect(s.nombre).toBe("X-Wing");
    expect(s.afiliacion).toBe("República");
    expect(s.clase).toBe(3);
    expect(s.añoConstruccion).toBe(10);
    expect(s.planetaOrigen).toBe("Corellia");

    // Setters válidos
    s.nombre = "X-Wing T-65B";
    s.afiliacion = "Alianza Rebelde";
    s.clase = 4;
    s.añoConstruccion = 12;
    s.planetaOrigen = "Yavin";

    expect(s.nombre).toBe("X-Wing T-65B");
    expect(s.afiliacion).toBe("Alianza Rebelde");
    expect(s.clase).toBe(4);
    expect(s.añoConstruccion).toBe(12);
    expect(s.planetaOrigen).toBe("Yavin");

    // Setters inválidos
    expect(() => (s.nombre = "")).toThrow();
    expect(() => (s.afiliacion = "")).toThrow();
    expect(() => (s.clase = -1)).toThrow();
    expect(() => (s.planetaOrigen = "")).toThrow();
  });

  // -----------------------------
  // HOLOCRON
  // -----------------------------
  test("Holocron: getters y setters cubiertos", () => {
    const h = new Holocron("3", "Holocron Jedi", "República", 5, -1000, "Jedha");

    // Getters
    expect(h.id).toBe("3");
    expect(h.nombre).toBe("Holocron Jedi");
    expect(h.afiliacion).toBe("República");
    expect(h.nivelConocimiento).toBe(5);
    expect(h.añoCreacion).toBe(-1000);
    expect(h.planetaOrigen).toBe("Jedha");

    // Setters válidos
    h.nombre = "Holocron Sagrado";
    h.afiliacion = "Jedi";
    h.nivelConocimiento = 10;
    h.añoCreacion = -900;
    h.planetaOrigen = "Coruscant";

    expect(h.nombre).toBe("Holocron Sagrado");
    expect(h.afiliacion).toBe("Jedi");
    expect(h.nivelConocimiento).toBe(10);
    expect(h.añoCreacion).toBe(-900);
    expect(h.planetaOrigen).toBe("Coruscant");

    // Setters inválidos
    expect(() => (h.nombre = "")).toThrow();
    expect(() => (h.afiliacion = "")).toThrow();
    expect(() => (h.nivelConocimiento = -1)).toThrow();
    expect(() => (h.planetaOrigen = "")).toThrow();
  });

});
