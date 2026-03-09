// ======================================================================
// src/galaxy/JediMasterCollection.ts
// ======================================================================

import { BasicGalacticCollection } from "./BasicGalacticCollection";
import { JediMaster } from "./entities";
import {
  SearchByAffiliation,
  SearchByPower,
  SearchByYear,
  SearchByPlanet,
} from "./interfaces";

export class JediMasterCollection
  extends BasicGalacticCollection<JediMaster>
  implements
    SearchByAffiliation<JediMaster>,
    SearchByPower<JediMaster>,
    SearchByYear<JediMaster>,
    SearchByPlanet<JediMaster>
{
  buscarPorAfiliacion(a: string): JediMaster[] {
    return this._items.filter(i => i.afiliacion === a);
  }

  buscarPorPoder(p: number): JediMaster[] {
    return this._items.filter(i => i.nivelPoder === p);
  }

  buscarPorAño(a: number): JediMaster[] {
    return this._items.filter(i => i.añoFormacion === a);
  }

  buscarPorPlaneta(p: string): JediMaster[] {
    return this._items.filter(i => i.planetaOrigen === p);
  }
}
