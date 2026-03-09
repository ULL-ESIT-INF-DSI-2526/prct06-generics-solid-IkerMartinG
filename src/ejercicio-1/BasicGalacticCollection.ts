// ======================================================================
// src/galaxy/BasicGalacticCollection.ts
// ======================================================================

import { GalacticRegistry, SearchByName } from "./interfaces";

export abstract class BasicGalacticCollection<
  T extends { id: string; nombre: string }
> implements GalacticRegistry<T>, SearchByName<T>
{
  protected _items: T[] = [];

  añadir(item: T): void {
    if (this._items.some(i => i.id === item.id)) {
      throw new Error("ID duplicado.");
    }
    this._items.push(item);
  }

  eliminar(id: string): void {
    const idx = this._items.findIndex(i => i.id === id);
    if (idx === -1) throw new Error("Elemento no encontrado.");
    this._items.splice(idx, 1);
  }

  obtenerTodos(): T[] {
    return [...this._items];
  }

  buscarPorNombre(nombre: string): T[] {
    return this._items.filter(i => i.nombre.includes(nombre));
  }
}
