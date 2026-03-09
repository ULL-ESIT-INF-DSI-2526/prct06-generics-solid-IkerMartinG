import { Shape } from "../interfaces/Shape";

/**
 * Representa un círculo definido por su radio.
 */
export class Circle implements Shape {
  /**
   * @param radius Radio del círculo.
   */
  constructor(public radius: number) {}

  /**
   * Calcula el área del círculo.
   */
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
