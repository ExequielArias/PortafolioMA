import { Portada } from "./componentes/Portada";
import { AcercaDe } from "./componentes/AcercaDe";
import { Habilidades } from "./componentes/Habilidades";
import { Servicios } from "./componentes/Servicios";
import { Contacto } from "./componentes/Contacto";
import { PiePagina } from "./componentes/PiePagina";

export default function Aplicacion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Portada />
      <AcercaDe />
      <Habilidades />
      <Servicios />
      <Contacto />
      <PiePagina />
    </div>
  );
}
