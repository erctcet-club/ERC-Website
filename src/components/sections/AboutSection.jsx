import React from 'react';
import { 
  Bot, 
  Plane, 
  Cpu, 
  Brain, 
  Zap, 
  Cog,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

export default function AboutSection() {
  const domains = [
    {
      title: "Robotics & Kinematics",
      desc: "Differential drive UGVs, inverse kinematics, 2D LiDAR SLAM, and ROS2 navigation nodes.",
      icon: Bot,
      accent: "#1560D4"
    },
    {
      title: "UAV & Flight Systems",
      desc: "Autonomous multirotor dynamics, custom carbon airframes, PX4 autopilot, and telemetry links.",
      icon: Plane,
      accent: "#D62828"
    },
    {
      title: "Embedded Firmware",
      desc: "Bare-metal ARM Cortex-M micro-architecture, FreeRTOS multitasking kernels, and SPI/I2C/CAN bus.",
      icon: Cpu,
      accent: "#12181F"
    },
    {
      title: "Edge AI & Vision",
      desc: "TensorRT-accelerated YOLO models, stereo depth perception, and AprilTags fiducial tracking.",
      icon: Brain,
      accent: "#1560D4"
    },
    {
      title: "High-Speed PCB Design",
      desc: "Controlled impedance multi-layer routing, internal power planes, SMD soldering, and SPICE.",
      icon: Zap,
      accent: "#D62828"
    },
    {
      title: "Automation & Control",
      desc: "Closed-loop PID process control, industrial sensor networks, and smart actuator integration.",
      icon: Cog,
      accent: "#12181F"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-[#12181F]/10">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1560D4]/10 border border-[#1560D4]/30 text-[#1560D4] font-mono text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              TCET Technical Laboratory
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-[#12181F] leading-tight">
              An applied engineering lab for builders.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-[#12181F]/75 text-sm sm:text-base leading-relaxed">
            <p>
              The <strong>Electronics &amp; Robotics Club (ERC)</strong> is the student-led engineering collective of <strong>Thakur College of Engineering &amp; Technology (TCET)</strong>, Mumbai. We operate as a hands-on applied laboratory where undergraduates turn core electronics, control theory, and software into real-world autonomous machines.
            </p>
            <p>
              From custom 4-layer flight computer PCBs and multirotor airframes to ROS2-powered autonomous mobile robots and edge AI perception nodes, our projects are conceived, breadboarded, soldered, and coded by students across departments.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#12181F]">
              <span className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Hands-on Prototyping
              </span>
              <span className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Interdisciplinary Collaboration
              </span>
              <span className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Open Hardware &amp; Code
              </span>
            </div>
          </div>

        </div>

        {/* Compact Engineering Domains Representation */}
        <div className="space-y-6 pt-4">
          <div className="border-t border-[#12181F]/10 pt-8 flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black font-heading text-[#12181F]">
              Core Technical Disciplines
            </h3>
            <span className="text-xs font-mono text-[#12181F]/50 hidden sm:inline">
              FOCUS AREAS // 2026-27
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {domains.map((dom) => {
              const Icon = dom.icon;
              return (
                <div
                  key={dom.title}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-5 rounded-xl bg-[#F7F8FA] border border-[#12181F]/8 hover:border-[#12181F]/25 hover:shadow-xs transition-all duration-200 group"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: `${dom.accent}12`, color: dom.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold font-heading text-base text-[#12181F] group-hover:text-[#1560D4] transition-colors">
                    {dom.title}
                  </h4>
                  <p className="text-xs text-[#12181F]/70 mt-1.5 leading-relaxed font-sans">
                    {dom.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
