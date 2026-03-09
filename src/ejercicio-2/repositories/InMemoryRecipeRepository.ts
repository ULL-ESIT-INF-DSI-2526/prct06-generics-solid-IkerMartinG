import { Recipe } from "../domain/Recipe";
import { Repository } from "../interfaces/Repository";
import { SearchByName } from "../interfaces/SearchByName";
import { SearchByYearRange } from "../interfaces/SearchByYearRange";

/**
 * Implementación en memoria de un repositorio de recetas.
 */
export class InMemoryRecipeRepository
  implements Repository<Recipe, string>, SearchByName<Recipe>, SearchByYearRange<Recipe>
{
  private items: Recipe[] = [];

  add(item: Recipe): void {
    if (this.items.some(r => r.id === item.id)) {
      throw new Error("Receta duplicada");
    }
    this.items.push(item);
  }

  remove(id: string): void {
    const idx = this.items.findIndex(r => r.id === id);
    if (idx === -1) throw new Error("Receta no encontrada");
    this.items.splice(idx, 1);
  }

  getById(id: string): Recipe | undefined {
    return this.items.find(r => r.id === id);
  }

  getAll(): Recipe[] {
    return [...this.items];
  }

  searchByName(name: string): Recipe[] {
    return this.items.filter(r =>
      r.nombre.toLowerCase().includes(name.toLowerCase())
    );
  }

  searchByYearRange(from: number, to: number): Recipe[] {
    return this.items.filter(r => r.año >= from && r.año <= to);
  }
}
