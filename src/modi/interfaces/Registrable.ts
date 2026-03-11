/**
 * Interfaz genérica que representa un entrenamiento registrable.
 *
 * @typeParam T - Tipo del resumen del entrenamiento.
 */
export interface Registrable<T> {
  /**
   * Devuelve el resumen del entrenamiento.
   */
  summary(): T;

  /**
   * Devuelve las calorías quemadas estimadas.
   */
  calories(): number;
}