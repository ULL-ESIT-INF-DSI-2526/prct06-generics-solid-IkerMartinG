// ======================================================================
// src/galaxy/interfaces.ts
// ======================================================================

/**
 * Registro genérico mínimo de una colección galáctica.
 */
export interface GalacticRegistry<T> {
  añadir(item: T): void;
  eliminar(id: string): void;
  obtenerTodos(): T[];
}

/** Búsqueda por nombre. */
export interface SearchByName<T> {
  buscarPorNombre(nombre: string): T[];
}

/** Búsqueda por afiliación. */
export interface SearchByAffiliation<T> {
  buscarPorAfiliacion(afiliacion: string): T[];
}

/** Búsqueda por nivel de poder / clase / conocimiento. */
export interface SearchByPower<T> {
  buscarPorPoder(poder: number): T[];
}

/** Búsqueda por año. */
export interface SearchByYear<T> {
  buscarPorAño(año: number): T[];
}

/** Búsqueda por planeta. */
export interface SearchByPlanet<T> {
  buscarPorPlaneta(planeta: string): T[];
}
