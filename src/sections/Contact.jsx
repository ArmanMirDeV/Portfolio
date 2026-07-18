import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useForm } from '../hooks/useForm';
import Button from '../components/ui/Button';
import { CheckCircle, Mail, Phone, MessageCircle } from 'lucide-react';

const FloatingInput = ({ name, value, onChange, error, type = 'text', label }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value;

  return (
    <div className="relative">
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full bg-slate-900/50 border ${error ? 'border-red-500' : 'border-slate-700'} rounded-xl py-4 px-5 text-white placeholder-transparent focus:outline-none focus:border-primary transition-all duration-300 peer`}
        placeholder={label}
      />
      <label
        className={`absolute left-5 transition-all duration-300 pointer-events-none ${
          isActive
            ? '-top-2.5 text-xs text-primary bg-slate-900 px-1'
            : 'top-3.5 text-sm text-slate-500'
        }`}
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-1.5 ml-1">{error}</p>}
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validate = (values) => {
    let errors = {};
    if (!values.name) errors.name = 'Name is required';
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(values.email)) {
      errors.email = 'Please enter a valid Gmail address';
    }
    if (!values.message) errors.message = 'Message is required';
    return errors;
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit, setValues } = useForm(
    { name: '', email: '', phone: '', subject: '', message: '' },
    validate
  );

  const onSubmit = async () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMsg('Email service is not configured. Please contact via social links.');
      return;
    }

    setErrorMsg('');
    try {
      emailjs.init(publicKey);
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setShowSuccess(true);
      setValues({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMsg('Failed to send message. Please try again or contact via socials.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden section-divider">
      <div className="absolute inset-0 bg-slate-900/30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 border border-slate-700/30 bg-slate-800/20 backdrop-blur-md overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
                GET IN TOUCH
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Let's build something <span className="text-gradient">amazing</span> together.
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Have a project in mind, a question, or just want to say hello?
                Feel free to reach out! I'm always open to discussing new opportunities.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'mirarman8583@gmail.com', href: 'mailto:mirarman8583@gmail.com' },
                  { icon: Phone, label: 'Call', value: '+880 1795100168', href: 'tel:+8801795100168' },
                  { icon: MessageCircle, label: 'WhatsApp', value: '+880 1795100168', href: 'https://wa.me/8801795100168' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="flex items-center gap-4 group cursor-pointer" target={label === 'WhatsApp' ? '_blank' : undefined} rel="noopener noreferrer">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</p>
                      <p className="text-white font-bold group-hover:text-primary transition-colors text-sm">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <form ref={formRef} onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit); }} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FloatingInput name="name" value={values.name} onChange={handleChange} error={errors.name} label="Your Name" />
                <FloatingInput name="email" value={values.email} onChange={handleChange} error={errors.email} type="email" label="Your Email" />
                <FloatingInput name="phone" value={values.phone} onChange={handleChange} type="tel" label="Phone (Optional)" />
                <FloatingInput name="subject" value={values.subject} onChange={handleChange} label="Subject" />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-slate-900/50 border ${errors.message ? 'border-red-500' : 'border-slate-700'} rounded-xl py-4 px-5 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors resize-none`}
                  placeholder="Your Message"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.message}</p>}
              </div>

              {errors.submit && <p className="text-red-500 text-sm text-center">{errors.submit}</p>}
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button type="submit" variant="primary" className="w-full" isLoading={isSubmitting}>
                  Send Message
                </Button>
                <a
                  href={`https://wa.me/8801795100168?text=${encodeURIComponent(`Hi Arman, I'm ${values.name || 'someone'}. ${values.message || "I'd like to talk about a project."}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold transition-all shadow-lg shadow-green-500/10 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Fast Send
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Animation */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 rounded-2xl bg-green-600/90 backdrop-blur-md text-white font-bold flex items-center gap-3 shadow-2xl shadow-green-500/30"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.3, 1] }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-6 h-6" />
            </motion.div>
            Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
