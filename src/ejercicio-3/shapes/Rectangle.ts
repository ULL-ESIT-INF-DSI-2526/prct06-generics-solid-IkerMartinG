import { Shape } from "../interfaces/Shape";

/**
 * Representa un rectángulo definido por su ancho y alto.
 */
export class Rectangle implements Shape {
  /**
   * @param width Ancho del rectángulo.
   * @param height Alto del rectángulo.
   */
  constructor(public width: number, public height: number) {}

  /**
   * Calcula el área del rectángulo.
   */
  area(): number {
    return this.width * this.height;
  }
}
