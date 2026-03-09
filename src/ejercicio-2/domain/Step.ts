/**
 * Etiqueta asociada a un paso de receta.
 */
export type StepTag = string;

/**
 * Propiedades necesarias para crear un paso.
 */
export interface StepProps {
  /** Identificador único del paso. */
  id: string;
  /** Nombre del paso. */
  nombre: string;
  /** Descripción del paso. */
  descripcion: string;
  /** Duración estimada en minutos. */
  duracionMinutos: number;
  /** Indica si el paso es opcional. */
  opcional: boolean;
  /** Lista de etiquetas asociadas al paso. */
  etiquetas: StepTag[];
}

/**
 * Representa un paso genérico de una receta.
 */
export class Step {
  constructor(private props: StepProps) {}

  get id() { return this.props.id }
  get nombre() { return this.props.nombre }
  get descripcion() { return this.props.descripcion }
  get duracionMinutos() { return this.props.duracionMinutos }
  get opcional() { return this.props.opcional }
  get etiquetas() { return [...this.props.etiquetas] }
}
