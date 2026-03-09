/**
 * Interfaz para búsquedas por nombre.
 */
export interface SearchByName<T> {
  searchByName(name: string): T[];
}
