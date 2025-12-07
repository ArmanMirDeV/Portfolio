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

                            <Button 
                                type="submit" 
                                variant="primary" 
                                className="w-full"
                                isLoading={isSubmitting}
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
