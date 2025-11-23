import { CheckCircle2, Code, Database, Gauge, Globe, Monitor, Smartphone, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../interfaz/tarjeta";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y responsivas con las últimas tecnologías frontend.",
    features: [
      "Sitios web responsivos",
      "Aplicaciones SPA con Angular",
      "Interfaces modernas con TailwindCSS",
      "Optimización de rendimiento"
    ]
  },
  {
    icon: Monitor,
    title: "Aplicaciones de Escritorio",
    description: "Software de escritorio robusto y eficiente para Windows con C# y .NET.",
    features: [
      "Aplicaciones Windows Forms",
      "Desarrollo en WPF",
      "Integración con sistemas existentes",
      "Interfaces intuitivas"
    ]
  },
  {
    icon: Database,
    title: "Gestión de Bases de Datos",
    description: "Diseño e implementación de bases de datos escalables y optimizadas.",
    features: [
      "Diseño de bases de datos",
      "SQL Server",
      "Supabase",
      "Optimización de consultas"
    ]
  },
  {
    icon: Code,
    title: "Desarrollo Full Stack",
    description: "Soluciones completas desde el frontend hasta el backend y base de datos.",
    features: [
      "Arquitectura completa",
      "APIs RESTful",
      "Integración frontend-backend",
      "Deploy y mantenimiento"
    ]
  },
  {
    icon: Users,
    title: "Metodología SCRUM",
    description: "Gestión ágil de proyectos con entregas incrementales y feedback continuo.",
    features: [
      "Desarrollo ágil",
      "Sprints planificados",
      "Comunicación constante",
      "Entregas iterativas"
    ]
  },
  {
    icon: Gauge,
    title: "Optimización y Mantenimiento",
    description: "Mejora continua del rendimiento y actualización de aplicaciones existentes.",
    features: [
      "Auditoría de código",
      "Mejora de rendimiento",
      "Actualización de tecnologías",
      "Soporte técnico"
    ]
  }
];

export function Servicios() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-4">Servicios</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-slate-600 max-w-2xl mx-auto px-4">Ofrezco soluciones tecnológicas integrales adaptadas a las necesidades de tu negocio</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 border-slate-200 h-full backdrop-blur-sm bg-white/90">
                  <CardHeader className="p-5 sm:p-6">
                    <motion.div
                      className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + featureIndex * 0.1 }}
                        >
                          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
