import React from "react";
import { Circle, Users, ShieldCheck, Award, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-gray-100/60
      py-20 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center 
      justify-between gap-16 lg:gap-20"
    >
      {/* Background Glow Accents for Premium Feel */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-200/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Left Image Area with Modern Floating Badge */}
      <div className="flex-1 w-full lg:mr-8 relative order-2 lg:order-1 flex justify-center">
        <div className="relative w-full max-w-md lg:max-w-lg">
          
          {/* Main Blob Image Container */}
          <div
            className="w-full h-[350px] sm:h-[420px] lg:h-[480px]
            overflow-hidden shadow-2xl relative z-10 rounded-[40%_60%_70%_30%/40%_50%_60%_60%] 
            border-8 border-white bg-white transition-all duration-700 hover:rounded-[50%_50%_50%_50%]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=800&auto=format&fit=crop&q=80"
              alt="About Agency"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Premium Floating Badge (Added for Modern Touch) */}
          <div 
            className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-8 bg-white/90 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-3.5"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 font-bold">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-gray-900 font-bold text-base">10+ Years</h4>
              <p className="text-gray-500 text-xs font-medium">Industry Excellence</p>
            </div>
          </div>

          {/* Decorative Rings */}
          <div className="hidden sm:block absolute -top-6 -right-6 w-20 h-20 border-2 border-pink-400/40 rounded-full z-0 pointer-events-none animate-pulse"></div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 w-full max-w-2xl mx-auto lg:mx-0 space-y-6 relative z-20 order-1 lg:order-2">
        
        {/* Section Header */}
        <div data-aos="fade-left" data-aos-duration="1000">
          <span className="text-xs uppercase tracking-widest font-bold text-pink-600 bg-pink-50 px-3 py-1.5 rounded-full inline-block mb-3">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 font-normal leading-tight">
            Agency <br className="hidden sm:block" />
            <span className="font-bold text-gray-900">
              Overview<span className="text-green-500">.</span>
            </span>
          </h2>

          <div className="flex gap-2.5 mt-4">
            <span className="w-3.5 h-3.5 rounded-full border-2 border-pink-500 inline-block bg-pink-100"></span>
            <span className="w-3.5 h-3.5 rounded-full border-2 border-yellow-500 inline-block bg-yellow-100"></span>
            <span className="w-3.5 h-3.5 rounded-full border-2 border-green-500 inline-block bg-green-100"></span>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          We craft high-performing digital experiences and professional solutions designed to elevate your brand. Driven by innovation, quality, and precision, our expert team turns complex challenges into seamless results.
        </p>

        {/* Two Premium Feature Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-pink-50 mb-4">
              <Users className="text-pink-600 w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1.5">
              Expert Team
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Dedicated professionals focused on delivering exceptional quality.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-green-50 mb-4">
              <ShieldCheck className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1.5">
              Trusted Quality
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Rigorous standards ensuring reliable and long-lasting results.
            </p>
          </div>
        </div>

        {/* Optional Interactive CTA Link */}
        <div className="pt-2" data-aos="fade-up" data-aos-delay="400">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold text-gray-900 hover:text-pink-600 transition-colors group"
          >
            <span>Discover more about our vision</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;