import { Step } from "../domain/Step";
import { Repository } from "../interfaces/Repository";
import { SearchByName } from "../interfaces/SearchByName";
import { SearchByTags } from "../interfaces/SearchByTags";

/**
 * Implementación en memoria de un repositorio de pasos.
 */
export class InMemoryStepRepository
  implements Repository<Step, string>, SearchByName<Step>, SearchByTags<Step>
{
  private items: Step[] = [];

  add(item: Step): void {
    if (this.items.some(s => s.id === item.id)) {
      throw new Error("Paso duplicado");
    }
    this.items.push(item);
  }

  remove(id: string): void {
    const idx = this.items.findIndex(s => s.id === id);
    if (idx === -1) throw new Error("Paso no encontrado");
    this.items.splice(idx, 1);
  }

  getById(id: string): Step | undefined {
    return this.items.find(s => s.id === id);
  }

  getAll(): Step[] {
    return [...this.items];
  }

  searchByName(name: string): Step[] {
    return this.items.filter(s =>
      s.nombre.toLowerCase().includes(name.toLowerCase())
    );
  }

  searchByTags(tags: string[]): Step[] {
    return this.items.filter(s =>
      tags.every(t => s.etiquetas.includes(t))
    );
  }
}
