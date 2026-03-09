/**
 * Interfaz para dispositivos capaces de escanear.
 */
export interface Scanner {
  /**
   * Escanea un documento y devuelve su contenido.
   * @param doc Documento a escanear.
   */
  scan(doc: string): string;
}
