/**
 * Búsqueda por nombre.
 */
export interface SearchByName<T> {
  buscarPorNombre(nombre: string): T[];
}

/**
 * Búsqueda por afiliación (República, Imperio, Sith, Independiente).
 */
export interface SearchByAffiliation<T> {
  buscarPorAfiliacion(afiliacion: string): T[];
}

/**
 * Búsqueda por nivel de poder o clase.
 */
export interface SearchByPower<T> {
  buscarPorPoder(poder: number): T[];
}

/**
 * Búsqueda por año de construcción o formación.
 */
export interface SearchByYear<T> {
  buscarPorAño(año: number): T[];
}

/**
 * Búsqueda por planeta de origen.
 */
export interface SearchByPlanet<T> {
  buscarPorPlaneta(planeta: string): T[];
}

/**
 * Interfaz principal del registro galáctico.
 * Se compone de múltiples interfaces pequeñas (ISP).
 */
export interface GalacticRegistry<T>
  extends SearchByName<T>,
    SearchByAffiliation<T>,
    SearchByPower<T>,
    SearchByYear<T>,
    SearchByPlanet<T> {
  añadir(item: T): void;
  eliminar(id: string): void;
  obtenerTodos(): T[];
}
