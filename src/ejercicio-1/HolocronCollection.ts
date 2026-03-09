// ======================================================================
// src/galaxy/HolocronCollection.ts
// ======================================================================

import { BasicGalacticCollection } from "./BasicGalacticCollection";
import { Holocron } from "./entities";
import {
  SearchByAffiliation,
  SearchByPower,
  SearchByYear,
  SearchByPlanet,
} from "./interfaces";

export class HolocronCollection
  extends BasicGalacticCollection<Holocron>
  implements
    SearchByAffiliation<Holocron>,
    SearchByPower<Holocron>,
    SearchByYear<Holocron>,
    SearchByPlanet<Holocron>
{
  buscarPorAfiliacion(a: string): Holocron[] {
    return this._items.filter(i => i.afiliacion === a);
  }

  buscarPorPoder(n: number): Holocron[] {
    return this._items.filter(i => i.nivelConocimiento === n);
  }

  buscarPorAño(a: number): Holocron[] {
    return this._items.filter(i => i.añoCreacion === a);
  }

  buscarPorPlaneta(p: string): Holocron[] {
    return this._items.filter(i => i.planetaOrigen === p);
  }
}
