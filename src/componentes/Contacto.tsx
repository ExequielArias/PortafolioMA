import { useState } from "react";
import { Mail, MapPin, Phone, Send, Copy, Check } from "lucide-react";
import { Button } from "../interfaz/boton";
import { Input } from "../interfaz/entrada";
import { Textarea } from "../interfaz/area-texto";
import { Card, CardContent } from "../interfaz/tarjeta";
import { motion } from "framer-motion";

export function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola Matías! Te contacto desde tu portafolio.\n\n📋 *Datos de contacto:*\n👤 Nombre: ${formData.name}\n📧 Email: ${formData.email}\n📌 Asunto: ${formData.subject}\n\n💬 *Mensaje:*\n${formData.message}`;
    const phoneNumber = "5493512937346";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleCopyMessage = () => {
    const message = `Hola Matías! Te contacto desde tu portafolio.\n\n📋 Datos de contacto:\n👤 Nombre: ${formData.name}\n📧 Email: ${formData.email}\n📌 Asunto: ${formData.subject}\n\n💬 Mensaje:\n${formData.message}`;
    const textarea = document.createElement('textarea');
    textarea.value = message;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Contacto desde portafolio: ${formData.subject}`);
    const body = encodeURIComponent(`Hola Matías,\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nAsunto: ${formData.subject}\n\nMensaje:\n${formData.message}`);
    window.location.href = `mailto:exequielarias932@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopy = () => {
    const text = "exequielarias932@gmail.com";
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-4">Contacto</h2>
          <motion.div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4" initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
          <p className="text-slate-600 max-w-2xl mx-auto px-4">¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacerlo realidad</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div className="lg:col-span-1 space-y-4 sm:space-y-6" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {[
              { icon: Mail, title: "Email", content: "exequielarias932@gmail.com", color: "blue", showButton: true },
              { icon: Phone, title: "Teléfono", content: "+54 351 293 7346", color: "purple" },
              { icon: MapPin, title: "Ubicación", content: "Argentina", color: "cyan" }
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + index * 0.1 }} whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}>
                <Card className="border-slate-200 backdrop-blur-sm bg-white/90">
                  <CardContent className="pt-5 sm:pt-6 p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`} whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                        <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${item.color}-600`} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                        <p className="text-slate-600 text-xs sm:text-sm break-all">{item.content}</p>
                        {item.showButton && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="sm" className="mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 h-8" onClick={handleCopy}>
                              {copied ? (<Check className="h-3 w-3 sm:h-4 sm:w-4" />) : (<Copy className="h-3 w-3 sm:h-4 sm:w-4" />)}
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-5 sm:p-6 rounded-xl text-white" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}>
              <h3 className="mb-2 text-sm sm:text-base">Disponibilidad</h3>
              <p className="text-blue-50 text-xs sm:text-sm">Actualmente disponible para proyectos freelance y colaboraciones</p>
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Card className="border-slate-200 backdrop-blur-sm bg-white/90">
              <CardContent className="pt-5 sm:pt-6 p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs sm:text-sm text-slate-600">Nombre completo</label>
                      <Input id="name" name="name" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required className="h-10 sm:h-11" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs sm:text-sm text-slate-600">Email</label>
                      <Input id="email" name="email" type="email" placeholder="tu@email.com" value={formData.email} onChange={handleChange} required className="h-10 sm:h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs sm:text-sm text-slate-600">Asunto</label>
                    <Input id="subject" name="subject" placeholder="¿En qué puedo ayudarte?" value={formData.subject} onChange={handleChange} required className="h-10 sm:h-11" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs sm:text-sm text-slate-600">Mensaje</label>
                    <Textarea id="message" name="message" placeholder="Cuéntame sobre tu proyecto..." rows={6} value={formData.message} onChange={handleChange} required className="text-sm" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">Enviar mensaje<Send className="ml-2 h-4 w-4" /></Button>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="button" variant="outline" size="lg" onClick={handleEmailSend} className="flex-1 text-sm"><Mail className="mr-2 h-4 w-4" />Enviar por Email</Button>
                    <Button type="button" variant="outline" size="lg" onClick={handleCopyMessage} className="flex-1 text-sm">{copied ? (<> <Check className="mr-2 h-4 w-4" /> ¡Copiado!</>) : (<> <Copy className="mr-2 h-4 w-4" /> Copiar mensaje</>)}</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
