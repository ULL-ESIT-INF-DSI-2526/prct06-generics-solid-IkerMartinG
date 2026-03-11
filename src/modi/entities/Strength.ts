import { Registrable } from "../interfaces/Registrable";

/**
 * Representa el resumen de un entrenamiento de fuerza.
 * @typeParam exercise - Tipo de ejercicio
 * @typeParam weightKg - Peso utilizado en kilogramos
 */
export interface StrengthSummary {
  exercise: string;
  weightKg: number;
}

/**
 * Representa un entrenamiento de fuerza.
 *
 * Implementa Registrable<StrengthSummary>.
 */
export class Strength implements Registrable<StrengthSummary> {
  private readonly _exercise: string;
  private readonly _weightKg: number;
  private readonly _sets: number;
  private readonly _reps: number;
  private readonly _caloriesPerSet: number;

  /**
   * @param exercise - Nombre del ejercicio.
   * @param weightKg - Peso utilizado en kilogramos.
   * @param sets - Número de series.
   * @param reps - Número de repeticiones por serie.
   * @param caloriesPerSet - Calorías quemadas por serie.
   * @throws Error Si algún dato es inválido.
   */
  constructor(
    exercise: string,
    weightKg: number,
    sets: number,
    reps: number,
    caloriesPerSet: number,
  ) {
    if (!exercise.trim()) throw new Error("Invalid exercise");
    if (weightKg <= 0) throw new Error("Invalid weight");
    if (sets <= 0) throw new Error("Invalid sets");
    if (reps <= 0) throw new Error("Invalid reps");
    if (caloriesPerSet <= 0) throw new Error("Invalid calories");

    this._exercise = exercise;
    this._weightKg = weightKg;
    this._sets = sets;
    this._reps = reps;
    this._caloriesPerSet = caloriesPerSet;
  }

  get exercise(): string {
    return this._exercise;
  }

  get weightKg(): number {
    return this._weightKg;
  }

  get sets(): number {
    return this._sets;
  }

  get reps(): number {
    return this._reps;
  }

  get caloriesPerSet(): number {
    return this._caloriesPerSet;
  }

  summary(): StrengthSummary {
    return {
      exercise: this._exercise,
      weightKg: this._weightKg,
    };
  }

  calories(): number {
    return this._sets * this._caloriesPerSet;
  }
}
