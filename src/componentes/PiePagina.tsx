import { Github, Linkedin, Mail } from "lucide-react";

export function PiePagina() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-10 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg">Matías Arias</h3>
            <p className="text-slate-400 text-sm">Analista de Sistemas y Desarrollador de Software.</p>
          </div>
          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg">Servicios</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Desarrollo Web</li>
              <li>Aplicaciones de Escritorio</li>
              <li>Bases de Datos</li>
              <li>Consultoría SCRUM</li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg">Conecta</h3>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://github.com/ExequielArias" target="blank" className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="GitHub"><Github className="h-4 w-4 sm:h-5 sm:w-5" /></a>
              <a href="https://www.linkedin.com/in/exequiel-arias/" target="blank" className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="LinkedIn"><Linkedin className="h-4 w-4 sm:h-5 sm:w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 sm:pt-8 text-center text-slate-400 text-xs sm:text-sm">
          <p>&copy; {currentYear} Matías Exequiel Arias Carrasco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
