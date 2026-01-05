import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm } from "../hooks/useForm";
import Button from "../components/ui/Button";

const Contact = () => {
    const formRef = useRef();

    const validate = (values) => {
        let errors = {};
        if (!values.name) errors.name = "Name is required";
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email is invalid";
        }
        if (!values.message) errors.message = "Message is required";
        return errors;
    };

    const {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        setValues
    } = useForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    }, validate);


    const onSubmit = async () => {
        try {
             
            await emailjs.sendForm(
                "service_urxba8f",
                "template_b699f16",
                formRef.current,
                "tnBzDB8iHuTcb8RZr"
            );
            alert("Message sent successfully!");
           
        } catch (error) {
            console.error("EmailJS Error:", error);
           
             throw new Error("Failed to send message. Please Contact Via Socials");
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/50 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="relative rounded-3xl p-8 sm:p-12 border border-slate-700 bg-slate-800/40 backdrop-blur-md overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
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

                            <div className="space-y-6 mt-4">
                                <a href="mailto:mirarman8583@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Email Me</p>
                                        <p className="text-white font-bold group-hover:text-primary transition-colors">mirarman8583@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+8801795100168" className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Call Me</p>
                                        <p className="text-white font-bold group-hover:text-primary transition-colors">+880 1795100168</p>
                                    </div>
                                </a>

                                <a href="https://wa.me/8801795100168" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.031 2c-5.506 0-9.969 4.463-9.969 9.969 0 1.763.456 3.425 1.256 4.869L2 22l5.356-1.394c1.406.8 3.013 1.25 4.675 1.25 5.506 0 9.969-4.463 9.969-9.969 0-5.506-4.463-9.969-9.969-9.969zm4.846 14.161c-.218.614-1.272 1.154-1.741 1.214-.469.06-1.046.06-2.946-.689-2.094-.829-3.444-2.969-3.549-3.109-.105-.14-1.026-1.365-1.026-2.603 0-1.239.645-1.848.874-2.098.229-.25.5-.31.666-.31.156.006.354-.059.554.43.201.489.689 1.679.749 1.799.06.12.1.259.02.419-.08.16-.12.259-.24.399-.12.14-.25.31-.359.419-.111.12-.229.25-.098.479.131.229.581.959 1.246 1.554.854.76 1.574 1.004 1.799 1.114a.434.434 0 00.612-.098c.119-.139.516-.606.654-.814.14-.208.271-.174.456-.111.186.063 1.171.553 1.372.654.202.101.336.151.385.234.05.083.05.479-.168 1.093z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">WhatsApp</p>
                                        <p className="text-white font-bold group-hover:text-primary transition-colors">+880 1795100168</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <form ref={formRef} onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit); }} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Your Name"
                                        className={`w-full bg-slate-900/50 border ${errors.name ? 'border-red-500' : 'border-slate-700'} rounded-lg py-4 px-5 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors`}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                
                                <input
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    type="tel"
                                    placeholder="Phone Number (Optional)"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-4 px-5 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                                />

                                <div>
                                    <input
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="Your Email"
                                        className={`w-full bg-slate-900/50 border ${errors.email ? 'border-red-500' : 'border-slate-700'} rounded-lg py-4 px-5 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors`}
                                    />
                                     {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                <input
                                    name="subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-4 px-5 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Your Message"
                                    className={`w-full bg-slate-900/50 border ${errors.message ? 'border-red-500' : 'border-slate-700'} rounded-lg py-4 px-5 text-white placeholder-slate-500 focus:outline-none focus:border-primary resize-none transition-colors`}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>
                            
                            {errors.submit && <p className="text-red-500 text-sm text-center">{errors.submit}</p>}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Button 
                                    type="submit" 
                                    variant="primary" 
                                    className="w-full"
                                    isLoading={isSubmitting}
                                >
                                    Send Message
                                </Button>
                                <a 
                                    href={`https://wa.me/8801795100168?text=${encodeURIComponent(`Hi Arman, I'm ${values.name || 'someone'}. ${values.message || "I'd like to talk about a project."}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 py-4 px-5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold transition-all shadow-lg shadow-green-500/10 active:scale-[0.98]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.031 2c-5.506 0-9.969 4.463-9.969 9.969 0 1.763.456 3.425 1.256 4.869L2 22l5.356-1.394c1.406.8 3.013 1.25 4.675 1.25 5.506 0 9.969-4.463 9.969-9.969 0-5.506-4.463-9.969-9.969-9.969zm4.846 14.161c-.218.614-1.272 1.154-1.741 1.214-.469.06-1.046.06-2.946-.689-2.094-.829-3.444-2.969-3.549-3.109-.105-.14-1.026-1.365-1.026-2.603 0-1.239.645-1.848.874-2.098.229-.25.5-.31.666-.31.167 0 .333.006.479.012.156.006.354-.059.554.43.201.489.689 1.679.749 1.799.06.12.1.259.02.419-.08.16-.12.259-.24.399-.12.14-.25.31-.359.419-.111.12-.229.25-.098.479.131.229.581.959 1.246 1.554.854.76 1.574 1.004 1.799 1.114a.434.434 0 00.612-.098c.119-.139.516-.606.654-.814.14-.208.271-.174.456-.111.186.063 1.171.553 1.372.654.202.101.336.151.385.234.05.083.05.479-.168 1.093z" />
                                    </svg>
                                    WhatsApp Fast Send
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
