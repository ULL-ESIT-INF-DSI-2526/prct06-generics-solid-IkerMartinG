import { Printer } from "../interfaces/Printer";

/**
 * Impresora básica que solo soporta impresión.
 */
export class BasicPrinter implements Printer {
  print(doc: string): void {
    console.log("Printing:", doc);
  }
}
