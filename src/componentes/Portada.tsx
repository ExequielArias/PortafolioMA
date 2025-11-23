import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../interfaz/boton";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";

export function Portada() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut
    }
  };

  // Definimos los enlaces sociales aquí para tenerlos centralizados
  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/ExequielArias" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/exequiel-arias/" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-4 sm:space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
                Disponible para proyectos
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hola, soy <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Matías Arias</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Analista de Sistemas & Desarrollador de Software
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full sm:w-auto"
                >
                  Contactar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto"
                >
                  Ver servicios
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {/* Mapeamos el array de enlaces sociales */}
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url} // <-- Aquí se asigna el enlace dinámicamente
                  target="_blank" // Opcional: abre enlace en una nueva pestaña
                  rel="noopener noreferrer" // Buenas prácticas de seguridad para enlaces externos
                  className="p-2.5 sm:p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                  aria-label={social.label}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-first lg:order-last mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square max-w-sm sm:max-w-md mx-auto"
              animate={floatingAnimation}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 z-10" />
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center">
                <div className="text-center space-y-3 sm:space-y-4 p-6 sm:p-8">
                  <motion.div
                    className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-3xl sm:text-4xl"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    MA
                  </motion.div>
                  <p className="text-slate-700 text-sm sm:text-base">Matías Exequiel Arias Carrasco</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-sm bg-white/90"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
            >
              <p className="text-xs sm:text-sm text-slate-600">Experiencia en</p>
              <p className="text-lg sm:text-2xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Desarrollo Full Stack</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}