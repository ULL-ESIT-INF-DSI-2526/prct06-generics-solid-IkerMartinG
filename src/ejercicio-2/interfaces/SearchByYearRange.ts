/**
 * Interfaz para búsquedas por rango de años.
 */
export interface SearchByYearRange<T> {
  searchByYearRange(from: number, to: number): T[];
}
