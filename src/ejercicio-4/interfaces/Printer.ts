/**
 * Interfaz para dispositivos capaces de imprimir.
 */
export interface Printer {
  /**
   * Imprime un documento.
   * @param doc Contenido del documento.
   */
  print(doc: string): void;
}
