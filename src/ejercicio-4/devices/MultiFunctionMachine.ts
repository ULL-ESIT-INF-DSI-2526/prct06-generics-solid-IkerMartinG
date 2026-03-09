import { Printer } from "../interfaces/Printer";
import { Scanner } from "../interfaces/Scanner";
import { Fax } from "../interfaces/Fax";

/**
 * Máquina multifunción que soporta impresión, escaneo y fax.
 */
export class MultiFunctionMachine implements Printer, Scanner, Fax {
  print(doc: string): void {
    console.log("Printing:", doc);
  }

  scan(doc: string): string {
    return `Scanned: ${doc}`;
  }

  fax(doc: string): void {
    console.log("Fax sent:", doc);
  }
}
