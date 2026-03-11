import { Registrable } from "../interfaces/Registrable";

export class TrainingLog<T extends Registrable<unknown>> {
  private readonly _items: T[] = [];

  /**
   * Añade un entrenamiento al registro.
   */
  add(entry: T): void {
    this._items.push(entry);
  }

  /**
   * Elimina un entrenamiento por índice.
   *
   * @throws Error Si el índice es inválido.
   */
  remove(index: number): void {
    if (!Number.isInteger(index) || index < 0 || index >= this._items.length) {
      throw new Error("Index out of bounds");
    }
    this._items.splice(index, 1);
  }

  /**
   * Obtiene un entrenamiento por índice.
   *
   * @throws Error Si el índice es inválido.
   */
  get(index: number): T {
    if (!Number.isInteger(index) || index < 0 || index >= this._items.length) {
      throw new Error("Index out of bounds");
    }
    return this._items[index];
  }

  /**
   * Número de entrenamientos registrados.
   */
  size(): number {
    return this._items.length;
  }

  /**
   * Filtra entrenamientos según un predicado.
   */
  filter(predicate: (entry: T, index: number) => boolean): TrainingLog<T> {
    const result = new TrainingLog<T>();
    this._items.forEach((entry, index) => {
      if (predicate(entry, index)) result.add(entry);
    });
    return result;
  }

  /**
   * Devuelve la suma total de calorías quemadas.
   */
  totalBurn(): number {
    return this._items.reduce((acc, e) => acc + e.calories(), 0);
  }
}
