import React from "react";
import { Heart, Award, Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50/60 pt-32 pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
      
      {/* Background Glow Accents for Premium Feel */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        
        {/* Left Content Area */}
        <div className="flex-1 w-full max-w-2xl space-y-6 text-center lg:text-left">
          
          {/* Top Pill Tag */}
          <div data-aos="fade-right" data-aos-duration="800">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-pink-600 bg-pink-50 px-3.5 py-1.5 rounded-full border border-pink-100/60 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Next-Gen Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 tracking-tight leading-tight"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Professionals <br />
            <span className="font-bold text-gray-900">
              Service<span className="text-green-500 font-bold">.</span>
            </span>
          </h1>

          {/* Three Small Circles */}
          <div 
            className="flex gap-2.5 justify-center lg:justify-start pt-1"
            data-aos="fade-right" 
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <span className="w-3.5 h-3.5 rounded-full border-2 border-pink-500 inline-block bg-pink-100"></span>
            <span className="w-3.5 h-3.5 rounded-full border-2 border-yellow-500 inline-block bg-yellow-100"></span>
            <span className="w-3.5 h-3.5 rounded-full border-2 border-green-500 inline-block bg-green-100"></span>
          </div>

          {/* Description Text */}
          <p 
            className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            Elevate your standards with our expert solutions. We deliver top-tier quality, dedicated support, and unmatched reliability for your business growth.
          </p>

          {/* Two Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            
            {/* Card 1 */}
            <div 
              className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-100 border border-gray-100/80 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-pink-50 mb-4 shadow-sm">
                <Heart className="text-pink-500 w-6 h-6 fill-pink-100" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">
                Service Subtitle One
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>

            {/* Card 2 */}
            <div 
              className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-100 border border-gray-100/80 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-yellow-50 mb-4 shadow-sm">
                <Award className="text-yellow-500 w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">
                Service Subtitle Two
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" data-aos="fade-up" data-aos-delay="500">
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gray-900 text-white font-medium hover:bg-pink-600 transition-colors shadow-lg shadow-gray-900/10 text-center flex items-center justify-center gap-2 group"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Right Organic Shape Image Area with Floating Badge */}
        <div 
          className="flex-1 w-full flex justify-center lg:justify-end relative"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
            
            {/* Organic Blob Image */}
            <div className="w-full h-[360px] sm:h-[430px] lg:h-[500px] overflow-hidden shadow-2xl rounded-[60%_40%_30%_60%/60%_30%_70%_30%] border-8 border-white bg-white relative transition-all duration-700 hover:rounded-[50%_50%_50%_50%]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80"
                alt="Service Setup"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Trust Badge */}
            <div 
              className="absolute -bottom-6 left-4 sm:bottom-8 sm:-left-6 bg-white/90 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-3"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 font-bold">
                ⭐
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-sm">4.9 / 5.0</h4>
                <p className="text-gray-500 text-xs font-medium">Trusted by 2k+ clients</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;