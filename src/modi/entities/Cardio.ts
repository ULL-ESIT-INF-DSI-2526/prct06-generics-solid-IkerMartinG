import { Registrable } from "../interfaces/Registrable";

/**
 * Representa un entrenamiento de cardio.
 *
 * Implementa Registrable<string>.
 */
export class Cardio implements Registrable<string> {
  private readonly _activity: string;
  private readonly _distanceKm: number;
  private readonly _durationMin: number;
  private readonly _type: string;
  private readonly _calories: number;

  /**
   * @param activity - Nombre de la actividad.
   * @param distanceKm - Distancia recorrida en kilómetros.
   * @param durationMin - Duración en minutos.
   * @param type - Tipo de actividad (carrera, ciclismo, etc.).
   * @param calories - Calorías quemadas estimadas.
   * @throws Error Si algún dato es inválido.
   */
  constructor(
    activity: string,
    distanceKm: number,
    durationMin: number,
    type: string,
    calories: number,
  ) {
    if (!activity.trim()) throw new Error("Invalid activity");
    if (!type.trim()) throw new Error("Invalid type");
    if (distanceKm <= 0) throw new Error("Invalid distance");
    if (durationMin <= 0) throw new Error("Invalid duration");
    if (calories <= 0) throw new Error("Invalid calories");

    this._activity = activity;
    this._distanceKm = distanceKm;
    this._durationMin = durationMin;
    this._type = type;
    this._calories = calories;
  }

  get activity(): string {
    return this._activity;
  }

  get distanceKm(): number {
    return this._distanceKm;
  }

  get durationMin(): number {
    return this._durationMin;
  }

  get type(): string {
    return this._type;
  }

  get caloriesBurned(): number {
    return this._calories;
  }

  summary(): string {
    return `${this._activity} - ${this._distanceKm}km`;
  }

  calories(): number {
    return this._calories;
  }
}