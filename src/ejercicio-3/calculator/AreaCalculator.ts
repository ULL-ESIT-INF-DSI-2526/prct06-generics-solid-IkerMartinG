import { Shape } from "../interfaces/Shape";

/**
 * Servicio encargado de calcular el área de cualquier figura geométrica.
 * 
 * Cumple OCP: no necesita modificarse al añadir nuevas figuras.
 */
export class AreaCalculator {
  /**
   * Calcula el área de una figura geométrica.
   * @param shape Figura que implementa la interfaz Shape.
   */
  area(shape: Shape): number {
    return shape.area();
  }
}
