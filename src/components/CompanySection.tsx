import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Building, Target, Globe } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function CompanySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const investors = [
    "Peak XV Partners", "Stellaris Venture Partners", "Matrix Partners", 
    "Angel investors from Google, LinkedIn, Workday"
  ];

  const values = [
    {
      icon: Users,
      title: "Recruiter-First",
      description: "Every feature designed with recruiter workflows in mind",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building,
      title: "AI-Native",
      description: "Built from ground up for autonomous intelligence",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Designed for enterprise deployment worldwide",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="company" className="py-10 px-6 relative overflow-hidden" ref={ref}>
      {/* Premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Compact header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-xl px-6 py-3 rounded-full mb-4 border border-white/40 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Building className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-800">About OrcHire</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Built by <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Recruiters</span>. 
            Backed by <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Innovators</span>.
          </h2>
          <p className="text-lg text-gray-600">
            A team of domain experts and technology leaders united by a shared vision
          </p>
        </motion.div>

        {/* Compact Investors */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-center mb-4">Backed by Leading Investors</h3>
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/40">
            <div className="grid md:grid-cols-2 gap-4">
              {investors.map((investor, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center justify-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/70 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-gray-700 font-medium text-center">{investor}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Compact Company Values */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-white/40 shadow-lg hover:bg-white/70 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg mb-4 mx-auto`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2 text-gray-800">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}