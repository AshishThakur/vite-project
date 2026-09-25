import React from "react";
import { Star, ShieldCheck, Zap } from "lucide-react";

const Company = () => {
  return (
    <section
      id="company"
      className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 tracking-tight">
            Why Our <span className="font-bold text-gray-900">Company</span> <span className="text-emerald-500 font-bold">?</span>
          </h2>
          <div className="flex justify-center gap-2.5 mt-4">
            <span className="w-3.5 h-3.5 rounded-full border-2 border-pink-400 inline-block bg-pink-100"></span>
            <span className="w-3.5 h-3.5 rounded-full border-2 border-yellow-400 inline-block bg-yellow-100"></span>
            <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald-400 inline-block bg-emerald-100"></span>
          </div>
        </div>

        {/* Main Grid: Left Custom Organic Shape & Right Gradient Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Organic Blob Shape Card containing Features */}
          <div 
            className="lg:col-span-7 bg-white p-8 sm:p-12 shadow-2xl shadow-gray-100 border border-gray-100 relative"
            style={{
              borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%"
            }}
            data-aos="fade-right"
          >
            <div className="space-y-8 max-w-lg mx-auto">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0 mt-1">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Excellence Guaranteed</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione porro labore facere, explicabo ipsam illo deleniti.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 flex-shrink-0 mt-1">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Trust & Reliability</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione porro labore facere, explicabo ipsam illo deleniti.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-2xl bg-pink-50 text-pink-600 border border-pink-100 flex-shrink-0 mt-1">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Innovation Driven</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione porro labore facere, explicabo ipsam illo deleniti.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Vibrant Gradient Card with Stats */}
          <div className="lg:col-span-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="bg-gradient-to-tr from-rose-500 via-orange-500 to-amber-500 text-white p-8 sm:p-10 rounded-[36px] shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
              
              {/* Background Glow Ring Details */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full border-4 border-white/20 pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full border-4 border-white/20 pointer-events-none"></div>

              {/* Card Header */}
              <div className="text-center relative z-10 mb-10">
                <div className="w-14 h-14 mx-auto bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/30 text-white shadow-inner">
                  <Star className="w-7 h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
                  98% Customer Satisfaction
                </h3>
                <p className="text-white/90 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quaerat perferendis optio expedita.
                </p>
              </div>

              {/* Stats Numbers Row */}
              <div className="relative z-10 grid grid-cols-3 gap-2 pt-6 border-t border-white/20 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-black">500+</div>
                  <div className="text-[10px] sm:text-xs text-white/80 mt-0.5 font-medium">Projects Completed</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black">10+</div>
                  <div className="text-[10px] sm:text-xs text-white/80 mt-0.5 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black">99%</div>
                  <div className="text-[10px] sm:text-xs text-white/80 mt-0.5 font-medium">Success Rate</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Company;