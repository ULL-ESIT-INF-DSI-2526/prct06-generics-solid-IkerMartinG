import { Fax } from "../interfaces/Fax";

/**
 * Cliente que solo depende de la capacidad de enviar fax.
 */
export function sendFax(machine: Fax, doc: string) {
  machine.fax(doc);
}
