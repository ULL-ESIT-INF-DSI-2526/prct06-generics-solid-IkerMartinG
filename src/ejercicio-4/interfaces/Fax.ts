/**
 * Interfaz para dispositivos capaces de enviar faxes.
 */
export interface Fax {
  /**
   * Envía un fax con el documento indicado.
   * @param doc Documento a enviar.
   */
  fax(doc: string): void;
}
