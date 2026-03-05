/**
 * Entidad Jedi Master.
 */
export class JediMaster {
  constructor(
    public id: string,
    public nombre: string,
    public afiliacion: string,
    public nivelPoder: number,
    public añoFormacion: number,
    public planetaOrigen: string
  ) {}
}

/**
 * Entidad Starship.
 */
export class Starship {
  constructor(
    public id: string,
    public nombre: string,
    public afiliacion: string,
    public clase: number,
    public añoConstruccion: number,
    public planetaOrigen: string
  ) {}
}

/**
 * Entidad Holocron.
 */
export class Holocron {
  constructor(
    public id: string,
    public nombre: string,
    public afiliacion: string,
    public nivelConocimiento: number,
    public añoCreacion: number,
    public planetaOrigen: string
  ) {}
}
