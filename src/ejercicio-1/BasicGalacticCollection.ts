import {
  GalacticRegistry,
  SearchByName,
  SearchByAffiliation,
  SearchByPower,
  SearchByYear,
  SearchByPlanet,
} from "../../src/ejercicio-1/interfaces";

/**
 * Clase abstracta genérica que implementa la lógica común
 * de cualquier colección galáctica.
 */
export abstract class BasicGalacticCollection<
  T extends { id: string; nombre: string },
> implements GalacticRegistry<T> {
  protected _items: T[];

  constructor() {
    this._items = [];
  }

  añadir(item: T): void {
    if (this._items.some((i) => i.id === item.id)) {
      throw new Error("ID duplicado.");
    }
    this._items.push(item);
  }

  eliminar(id: string): void {
    const idx = this._items.findIndex((i) => i.id === id);
    if (idx === -1) throw new Error("Elemento no encontrado.");
    this._items.splice(idx, 1);
  }

  obtenerTodos(): T[] {
    return [...this._items];
  }

  buscarPorNombre(nombre: string): T[] {
    return this._items.filter((i) => i.nombre.includes(nombre));
  }

  // Métodos específicos que deben implementar las subclases
  abstract buscarPorAfiliacion(afiliacion: string): T[];
  abstract buscarPorPoder(poder: number): T[];
  abstract buscarPorAño(año: number): T[];
  abstract buscarPorPlaneta(planeta: string): T[];
}
