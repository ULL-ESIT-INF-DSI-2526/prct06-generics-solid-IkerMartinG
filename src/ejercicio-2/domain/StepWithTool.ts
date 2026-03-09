import { Step, StepProps } from "./Step";

/**
 * Paso que requiere una herramienta específica.
 */
export class StepWithTool extends Step {
  /**
   * @param props Propiedades base del paso.
   * @param herramienta Herramienta necesaria para realizar el paso.
   */
  constructor(props: StepProps, private herramienta: string) {
    super(props);
  }

  /** Herramienta necesaria para el paso. */
  get herramientaNecesaria() {
    return this.herramienta;
  }
}
