/**
 * Interfaz para búsquedas por número mínimo de seguidores.
 */
export interface SearchByFollowers<T> {
  searchByMinFollowers(min: number): T[];
}
