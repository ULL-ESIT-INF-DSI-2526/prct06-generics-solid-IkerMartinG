/**
 * Interfaz para búsquedas por etiquetas.
 */
export interface SearchByTags<T> {
  searchByTags(tags: string[]): T[];
}
