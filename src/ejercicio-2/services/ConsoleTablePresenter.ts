import { TablePresenter } from "./TablePresenter";

/**
 * Implementación de TablePresenter que usa console.table.
 */
export class ConsoleTablePresenter<T extends object>
  implements TablePresenter<T>
{
  present(items: T[]): void {
    console.table(items);
  }
}
