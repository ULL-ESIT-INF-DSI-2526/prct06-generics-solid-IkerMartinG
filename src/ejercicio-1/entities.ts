// ======================================================================
// src/galaxy/entities.ts
// ======================================================================

export class JediMaster {
  constructor(
    private _id: string,
    private _nombre: string,
    private _afiliacion: string,
    private _nivelPoder: number,
    private _añoFormacion: number,
    private _planetaOrigen: string,
  ) {}

  get id() { return this._id; }
  get nombre() { return this._nombre; }
  get afiliacion() { return this._afiliacion; }
  get nivelPoder() { return this._nivelPoder; }
  get añoFormacion() { return this._añoFormacion; }
  get planetaOrigen() { return this._planetaOrigen; }

  set nombre(v: string) {
    if (!v.trim()) throw new Error("Nombre inválido.");
    this._nombre = v;
  }
  set afiliacion(v: string) {
    if (!v.trim()) throw new Error("Afiliación inválida.");
    this._afiliacion = v;
  }
  set nivelPoder(v: number) {
    if (v < 0) throw new Error("Nivel de poder inválido.");
    this._nivelPoder = v;
  }
  set añoFormacion(v: number) {
    this._añoFormacion = v;
  }
  set planetaOrigen(v: string) {
    if (!v.trim()) throw new Error("Planeta inválido.");
    this._planetaOrigen = v;
  }
}

export class Starship {
  constructor(
    private _id: string,
    private _nombre: string,
    private _afiliacion: string,
    private _clase: number,
    private _añoConstruccion: number,
    private _planetaOrigen: string,
  ) {}

  get id() { return this._id; }
  get nombre() { return this._nombre; }
  get afiliacion() { return this._afiliacion; }
  get clase() { return this._clase; }
  get añoConstruccion() { return this._añoConstruccion; }
  get planetaOrigen() { return this._planetaOrigen; }

  set nombre(v: string) {
    if (!v.trim()) throw new Error("Nombre inválido.");
    this._nombre = v;
  }
  set afiliacion(v: string) {
    if (!v.trim()) throw new Error("Afiliación inválida.");
    this._afiliacion = v;
  }
  set clase(v: number) {
    if (v < 0) throw new Error("Clase inválida.");
    this._clase = v;
  }
  set añoConstruccion(v: number) {
    this._añoConstruccion = v;
  }
  set planetaOrigen(v: string) {
    if (!v.trim()) throw new Error("Planeta inválido.");
    this._planetaOrigen = v;
  }
}

export class Holocron {
  constructor(
    private _id: string,
    private _nombre: string,
    private _afiliacion: string,
    private _nivelConocimiento: number,
    private _añoCreacion: number,
    private _planetaOrigen: string,
  ) {}

  get id() { return this._id; }
  get nombre() { return this._nombre; }
  get afiliacion() { return this._afiliacion; }
  get nivelConocimiento() { return this._nivelConocimiento; }
  get añoCreacion() { return this._añoCreacion; }
  get planetaOrigen() { return this._planetaOrigen; }

  set nombre(v: string) {
    if (!v.trim()) throw new Error("Nombre inválido.");
    this._nombre = v;
  }
  set afiliacion(v: string) {
    if (!v.trim()) throw new Error("Afiliación inválida.");
    this._afiliacion = v;
  }
  set nivelConocimiento(v: number) {
    if (v < 0) throw new Error("Nivel de conocimiento inválido.");
    this._nivelConocimiento = v;
  }
  set añoCreacion(v: number) {
    this._añoCreacion = v;
  }
  set planetaOrigen(v: string) {
    if (!v.trim()) throw new Error("Planeta inválido.");
    this._planetaOrigen = v;
  }
}
