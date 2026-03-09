import { Chef } from "../domain/Chef";
import { Repository } from "../interfaces/Repository";
import { SearchByName } from "../interfaces/SearchByName";
import { SearchByFollowers } from "../interfaces/SearchByFollowers";


/**
 * Implementación en memoria de un repositorio de chefs.
 */
export class InMemoryChefRepository
  implements Repository<Chef, string>, SearchByName<Chef>, SearchByFollowers<Chef>
{
  private items: Chef[] = [];

  add(item: Chef): void {
    if (this.items.some(c => c.id === item.id)) {
      throw new Error("Chef duplicado");
    }
    this.items.push(item);
  }

  remove(id: string): void {
    const idx = this.items.findIndex(c => c.id === id);
    if (idx === -1) throw new Error("Chef no encontrado");
    this.items.splice(idx, 1);
  }

  getById(id: string): Chef | undefined {
    return this.items.find(c => c.id === id);
  }

  getAll(): Chef[] {
    return [...this.items];
  }

  searchByName(name: string): Chef[] {
    return this.items.filter(c =>
      c.nombre.toLowerCase().includes(name.toLowerCase())
    );
  }

  searchByMinFollowers(min: number): Chef[] {
    return this.items.filter(c => c.seguidores >= min);
  }
}
