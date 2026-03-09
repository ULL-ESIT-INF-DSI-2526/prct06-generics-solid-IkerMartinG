import { Shape } from "../interfaces/Shape";

/**
 * Representa un triángulo definido por su base y altura.
 */
export class Triangle implements Shape {
  /**
   * @param base Base del triángulo.
   * @param height Altura del triángulo.
   */
  constructor(public base: number, public height: number) {}

  /**
   * Calcula el área del triángulo.
   */
  area(): number {
    return (this.base * this.height) / 2;
  }
}
