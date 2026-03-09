import { Step, StepProps } from "./Step";

/**
 * Paso que requiere alcanzar una temperatura concreta.
 */
export class StepWithTemperature extends Step {
  constructor(props: StepProps, private temperaturaObjetivo: number) {
    super(props);
  }

  /** Temperatura objetivo del paso. */
  get temperatura() {
    return this.temperaturaObjetivo;
  }
}
