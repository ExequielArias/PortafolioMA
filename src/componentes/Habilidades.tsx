import { Code2, Database, Globe, Layers, Monitor, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    icon: Globe,
    title: "Desarrollo Web Frontend",
    color: "blue",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "TailwindCSS", "Angular", "React"]
  },
  {
    icon: Monitor,
    title: "Aplicaciones de Escritorio",
    color: "purple",
    skills: ["C#", ".NET Framework", "Windows Forms", "WPF"]
  },
  {
    icon: Database,
    title: "Bases de Datos",
    color: "cyan",
    skills: ["SQL Server", "Supabase", "Diseño de BD", "Consultas Optimizadas"]
  },
  {
    icon: Workflow,
    title: "Metodologías",
    color: "green",
    skills: ["SCRUM", "Desarrollo Ágil", "Git", "Control de Versiones"]
  },
  {
    icon: Code2,
    title: "Lenguajes",
    color: "orange",
    skills: ["JavaScript", "TypeScript", "C#", "SQL", "HTML/CSS"]
  },
  {
    icon: Layers,
    title: "Frameworks & Librerías",
    color: "pink",
    skills: ["Angular", "TailwindCSS", ".NET", "Entity Framework"]
  }
];

const colorClasses: Record<string, { bg: string; icon: string; badge: string }> = {
  blue: { bg: "bg-blue-100", icon: "text-blue-600", badge: "bg-blue-50 text-blue-700" },
  purple: { bg: "bg-purple-100", icon: "text-purple-600", badge: "bg-purple-50 text-purple-700" },
  cyan: { bg: "bg-cyan-100", icon: "text-cyan-600", badge: "bg-cyan-50 text-cyan-700" },
  green: { bg: "bg-green-100", icon: "text-green-600", badge: "bg-green-50 text-green-700" },
  orange: { bg: "bg-orange-100", icon: "text-orange-600", badge: "bg-orange-50 text-orange-700" },
  pink: { bg: "bg-pink-100", icon: "text-pink-600", badge: "bg-pink-50 text-pink-700" },
};

export function Habilidades() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
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
          <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-4">Habilidades Técnicas</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-slate-600 max-w-2xl mx-auto px-4">Un conjunto completo de tecnologías modernas para desarrollar soluciones innovadoras</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color];
            const Icon = category.icon;

            return (
              <motion.div
                key={index}
                className="bg-slate-50 p-5 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/80"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${colors.icon}`} />
                </motion.div>

                <h3 className="mb-3 sm:mb-4 text-base sm:text-lg">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className={`px-2.5 py-1 sm:px-3 ${colors.badge} rounded-full text-xs sm:text-sm`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + skillIndex * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
