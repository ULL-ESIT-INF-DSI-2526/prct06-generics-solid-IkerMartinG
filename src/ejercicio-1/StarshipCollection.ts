// ======================================================================
// src/galaxy/StarshipCollection.ts
// ======================================================================

import { BasicGalacticCollection } from "./BasicGalacticCollection";
import { Starship } from "./entities";
import {
  SearchByAffiliation,
  SearchByPower,
  SearchByYear,
  SearchByPlanet,
} from "./interfaces";

export class StarshipCollection
  extends BasicGalacticCollection<Starship>
  implements
    SearchByAffiliation<Starship>,
    SearchByPower<Starship>,
    SearchByYear<Starship>,
    SearchByPlanet<Starship>
{
  buscarPorAfiliacion(a: string): Starship[] {
    return this._items.filter(i => i.afiliacion === a);
  }

  buscarPorPoder(c: number): Starship[] {
    return this._items.filter(i => i.clase === c);
  }

  buscarPorAño(a: number): Starship[] {
    return this._items.filter(i => i.añoConstruccion === a);
  }

  buscarPorPlaneta(p: string): Starship[] {
    return this._items.filter(i => i.planetaOrigen === p);
  }
}
