import React, { useState } from 'react';
import { Brush, Code, Camera, CheckCircle, ArrowRight, Circle } from 'lucide-react';

const Services = () => {
    const [activeService, setActiveService] = useState(1);
    
    const services = [
        {
            id: 1,
            icon: <Brush className="w-5 h-5 sm:w-6 sm:h-6"/>,
            title: "UI/UX Design",
            desc: "Crafting intuitive digital experiences with deep user research, stunning wireframes, and high-end interactive prototypes.",
            features: ["User Research", "Wireframing", "Prototyping", "UI Design"],
            color: "from-pink-500 to-rose-500",
            buttonColor: "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white",
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            icon: <Code className="w-5 h-5 sm:w-6 sm:h-6"/>,
            title: "Web Development",
            desc: "Building lightning-fast, secure, and scalable web applications using cutting-edge technologies and clean modern code architectures.",
            features: ["Frontend Dev", "Backend Integration", "Performance", "SEO Optimized"],
            color: "from-amber-500 to-yellow-500",
            buttonColor: "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6"/>,
            title: "Brand Media",
            desc: "Elevating your brand presence through high-impact visual storytelling, creative direction, and professional digital assets.",
            features: ["Creative Direction", "Photography", "Visual Identity", "Post Production"],
            color: "from-emerald-500 to-teal-500",
            buttonColor: "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white",
            image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80",
        }
    ];

    return (
        <section id="services" className="relative overflow-hidden bg-gradient-to-b from-gray-50/80 via-white to-gray-50/80 py-20 px-4 sm:px-6 md:px-12 lg:px-20">
            {/* Background Glow Accents */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-pink-300/10 via-yellow-300/10 to-green-300/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                        Our <span className="font-bold text-gray-900">Services<span className="text-green-500">.</span></span>
                    </h2>
                    <div className="flex justify-center gap-2.5 mt-4">
                        <Circle className="text-pink-500 w-3.5 h-3.5 fill-pink-100"/>
                        <Circle className="text-yellow-500 w-3.5 h-3.5 fill-yellow-100"/>
                        <Circle className="text-green-500 w-3.5 h-3.5 fill-green-100"/>
                    </div>
                </div>

                {/* Service Interactive Tabs */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-12 justify-center" data-aos="fade-up" data-aos-delay="100">
                    {services.map((ser) => (
                        <button 
                            key={ser.id}
                            onClick={() => setActiveService(ser.id)}
                            className={`px-6 py-3 rounded-2xl font-semibold flex items-center gap-2.5 transition-all duration-300 text-sm sm:text-base border ${
                                activeService === ser.id 
                                ? `bg-gray-900 text-white border-gray-900 shadow-xl shadow-gray-900/10 scale-105` 
                                : `bg-white/80 backdrop-blur-md text-gray-600 border-gray-200/80 hover:bg-gray-100/80 hover:text-gray-900`
                            }`}
                        >
                            <span className={activeService === ser.id ? "text-pink-400" : "text-gray-500"}>
                                {ser.icon}
                            </span>
                            {ser.title}
                        </button>
                    ))}
                </div>

                {/* Active Service Content Card */}
                <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] shadow-2xl shadow-gray-200/50 p-6 sm:p-10 md:p-12 border border-gray-100" data-aos='fade-up' data-aos-delay="200">
                    {services.filter(ser => ser.id === activeService).map(ser => (
                        <div key={ser.id} className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center'>
                            
                            {/* Left Side Details */}
                            <div className="lg:col-span-6 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${ser.color} text-white shadow-lg`}>
                                        {ser.icon}
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                                        {ser.title}
                                    </h3>
                                </div>
                                
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                    {ser.desc}
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                                    {ser.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5 bg-gray-50/80 p-3 rounded-xl border border-gray-100">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span className="text-gray-700 text-sm font-medium">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <div className="pt-4">
                                    <button className={`px-8 py-4 rounded-2xl ${ser.buttonColor} font-semibold transition-all shadow-xl shadow-pink-500/10 hover:scale-[1.02] flex items-center gap-3 text-sm sm:text-base`}>
                                        Get This Service
                                        <ArrowRight className="h-5 w-5"/>
                                    </button>
                                </div>
                            </div>

                            {/* Right Side Image */}
                            <div className="lg:col-span-6" data-aos="zoom-in" data-aos-delay="300">
                                <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                    <img 
                                        src={ser.image} 
                                        alt={ser.title} 
                                        className="object-cover w-full h-72 sm:h-80 lg:h-96 transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;