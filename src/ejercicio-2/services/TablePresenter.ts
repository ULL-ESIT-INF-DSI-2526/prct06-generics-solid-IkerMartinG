/**
 * Servicio genérico para presentar datos en formato tabla.
 */
export interface TablePresenter<T> {
  present(items: T[]): void;
}
