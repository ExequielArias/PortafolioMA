import { Award, Briefcase, Code2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function AcercaDe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-4">Sobre Mí</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            className="space-y-4 sm:space-y-6 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p className="text-slate-600" variants={itemVariants}>
              Soy Matías Exequiel Arias Carrasco, un apasionado analista de sistemas y desarrollador de software, comprometido con la creación de soluciones tecnológicas innovadoras y eficientes.
            </motion.p>

            <motion.p className="text-slate-600" variants={itemVariants}>
              Mi enfoque se centra en desarrollar aplicaciones web modernas y aplicaciones de escritorio robustas, siempre buscando las mejores prácticas y tecnologías actuales para entregar productos de alta calidad.
            </motion.p>

            <motion.p className="text-slate-600" variants={itemVariants}>
              Trabajo con metodologías ágiles como SCRUM, lo que me permite adaptarme rápidamente a las necesidades del cliente y entregar resultados en tiempos óptimos.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: GraduationCap, title: "Formación", desc: "Analista en Sistemas", color: "blue" },
              { icon: Code2, title: "Especialidad", desc: "Desarrollo Full Stack", color: "purple" },
              { icon: Briefcase, title: "Modalidad", desc: "Trabajo Independiente", color: "cyan" },
              { icon: Award, title: "Metodología", desc: "SCRUM Ágil", color: "green" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${item.color}-600`} />
                </motion.div>
                <h3 className="mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
