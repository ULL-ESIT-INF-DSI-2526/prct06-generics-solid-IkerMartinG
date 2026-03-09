// ======================================================================
// tests/basicGalacticCollection.spec.ts
// ======================================================================

import { describe, test, expect } from "vitest";
import { BasicGalacticCollection } from "../../src/ejercicio-1/BasicGalacticCollection";

class Dummy {
  constructor(private _id: string, private _nombre: string) {}
  get id() { return this._id; }
  get nombre() { return this._nombre; }
}

class DummyCollection extends BasicGalacticCollection<Dummy> {}

describe("BasicGalacticCollection", () => {
  test("añadir y obtenerTodos", () => {
    const c = new DummyCollection();
    c.añadir(new Dummy("1", "Luke"));
    const all = c.obtenerTodos();
    expect(all.length).toBe(1);
    expect(all[0].nombre).toBe("Luke");
  });

  test("ID duplicado lanza error", () => {
    const c = new DummyCollection();
    c.añadir(new Dummy("1", "A"));
    expect(() => c.añadir(new Dummy("1", "B"))).toThrow();
  });

  test("eliminar existente", () => {
    const c = new DummyCollection();
    c.añadir(new Dummy("1", "A"));
    c.eliminar("1");
    expect(c.obtenerTodos().length).toBe(0);
  });

  test("eliminar inexistente lanza error", () => {
    const c = new DummyCollection();
    expect(() => c.eliminar("X")).toThrow();
  });

  test("buscarPorNombre", () => {
    const c = new DummyCollection();
    c.añadir(new Dummy("1", "Luke Skywalker"));
    c.añadir(new Dummy("2", "Leia Organa"));
    const res = c.buscarPorNombre("Luke");
    expect(res.length).toBe(1);
    expect(res[0].id).toBe("1");
  });
});
