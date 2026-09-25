import React from 'react';
import { Mail, Phone, MapPin, Send, Circle } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            id: 1,
            icon: <Mail className="w-6 h-6" />,
            iconBg: "bg-pink-100",
            iconColor: "text-pink-600",
            title: "Email Us",
            content: "info@example.com",
            aosDelay: "200"
        },
        {
            id: 2,
            icon: <Phone className="w-6 h-6" />,
            iconBg: "bg-yellow-100",
            iconColor: "text-yellow-600",
            title: "Call Us",
            content: "+123 456 7890",
            aosDelay: "250"
        },
        {
            id: 3,
            icon: <MapPin className="w-6 h-6" />,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            title: "Our Location",
            content: "123 Main Street, City, Country",
            aosDelay: "300"
        },
    ];

    return (
        <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-gray-50/80 via-white to-gray-50/80 py-20 px-4 sm:px-6 md:px-12 lg:px-20">
            {/* Background Glow Accents */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-pink-300/10 via-yellow-300/10 to-green-300/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                        Get in <span className="font-bold text-gray-900">Touch<span className="text-green-500">.</span></span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-3">
                        Have a project in mind or want to collaborate? Reach out to us and let's create something extraordinary.
                    </p>
                    <div className="flex justify-center gap-2.5 mt-4">
                        <Circle className="text-pink-500 w-3.5 h-3.5 fill-pink-100"/>
                        <Circle className="text-yellow-500 w-3.5 h-3.5 fill-yellow-100"/>
                        <Circle className="text-green-500 w-3.5 h-3.5 fill-green-100"/>
                    </div>
                </div>

                {/* Grid Layout: Contact Info & Form */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Side: Contact Cards (Span 5) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-4">
                            {contactInfo.map((info) => (
                                <div 
                                    key={info.id}
                                    data-aos="fade-right"
                                    data-aos-delay={info.aosDelay}
                                    className="flex items-center gap-5 p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-gray-100 shadow-xl shadow-gray-100/60 hover:shadow-2xl hover:border-pink-500/30 transition-all duration-300 group"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${info.iconBg} ${info.iconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{info.title}</h4>
                                        <p className="text-base sm:text-lg font-bold text-gray-900 mt-0.5">{info.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Modern Banner inside Left Column */}
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white relative overflow-hidden shadow-2xl border border-gray-800" data-aos="fade-right" data-aos-delay="350">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl pointer-events-none"></div>
                            <h3 className="text-xl font-bold mb-2">Let's build together</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Our team is available 24/7 to answer your queries and discuss potential partnerships.
                            </p>
                            <span className="inline-block text-xs font-semibold text-pink-400 uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                                Fast Response Guaranteed
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Modern Glass Form (Span 7) */}
                    <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
                        <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-8 sm:p-10 shadow-2xl shadow-gray-200/50 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Send us a message</h3>
                            
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Your Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="John Doe" 
                                            className="w-full px-4 py-3.5 rounded-2xl bg-gray-50/80 border border-gray-200 focus:border-pink-500 focus:bg-white focus:outline-none transition-all text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Your Email</label>
                                        <input 
                                            type="email" 
                                            placeholder="john@example.com" 
                                            className="w-full px-4 py-3.5 rounded-2xl bg-gray-50/80 border border-gray-200 focus:border-pink-500 focus:bg-white focus:outline-none transition-all text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Subject</label>
                                    <input 
                                        type="text" 
                                        placeholder="Project Discussion / Inquiry" 
                                        className="w-full px-4 py-3.5 rounded-2xl bg-gray-50/80 border border-gray-200 focus:border-pink-500 focus:bg-white focus:outline-none transition-all text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Message</label>
                                    <textarea 
                                        rows="4" 
                                        placeholder="Write your message here..." 
                                        className="w-full px-4 py-3.5 rounded-2xl bg-gray-50/80 border border-gray-200 focus:border-pink-500 focus:bg-white focus:outline-none transition-all text-sm resize-none"
                                    ></textarea>
                                </div>

                                <div>
                                    <button 
                                        type="submit" 
                                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-semibold shadow-xl shadow-pink-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-base"
                                    >
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;