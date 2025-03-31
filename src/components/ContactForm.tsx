
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Formulario enviado",
        description: "¡Gracias por tu interés! Te contactaremos pronto.",
      });
      setFormData({
        name: '',
        email: '',
        instagram: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="signup-form" className="py-16 md:py-20 bg-evo-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-evo-dark-brown mb-8 text-center">
            Deja tus datos aquí
          </h2>
          
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-evo-dark-brown font-medium mb-2">Nombre</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                  className="w-full border-evo-brown/20 focus:border-evo-pink focus:ring-evo-pink"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-evo-dark-brown font-medium mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full border-evo-brown/20 focus:border-evo-pink focus:ring-evo-pink"
                />
              </div>
              
              <div>
                <label htmlFor="instagram" className="block text-evo-dark-brown font-medium mb-2">Instagram (opcional)</label>
                <Input
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="@tusocialmedia"
                  className="w-full border-evo-brown/20 focus:border-evo-pink focus:ring-evo-pink"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-evo-dark-brown font-medium mb-2">Mensaje (opcional)</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame un poco sobre ti y tu negocio..."
                  className="w-full border-evo-brown/20 focus:border-evo-pink focus:ring-evo-pink"
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-evo-pink hover:bg-evo-dark-pink text-white font-medium py-3 rounded-md transition-colors"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar información'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
