import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Languages,
  Sparkles,
  Pen,
  Brush,
} from "lucide-react";

import idIcon from "../assets/software Icon_Id.svg";
import psIcon from "../assets/software Icon_PS.svg";
import aiIcon from "../assets/software Icon_Ai.svg";
import aeIcon from "../assets/software Icon_Ae.svg";
import prIcon from "../assets/software Icon_Pr.svg";
import lrIcon from "../assets/software Icon_Lr.svg";
import figmaIcon from "../assets/software Icon_Figma.svg";
import corelIcon from "../assets/software Icon_CDR.svg";



export default function About() {
  const skills = [
    { name: "InDesign", icon: idIcon },
    { name: " Photoshop", icon: psIcon },
    { name: " Illustrator", icon: aiIcon },
    { name: " After Effects", icon: aeIcon },
    { name: " Premiere Pro", icon: prIcon },
    { name: " LightRoom", icon: lrIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "Coreldraw", icon: corelIcon },
  ];

  const creativeFields = [
    "Logos & Branding",
    "Packaging",
    "Advertisements (Print & Digital)",
    "Social Media Graphics",
    "Websites & Apps",
    "Book Covers & Layouts",
    "Brochures & Magazines",
    "Posters & Flyers",
  ];

  const experiences = [
    {
      year: "2020 – 2021",
      role: "Jr. Graphic Designer",
      company: "Jayas Media",
      location: "Visakhapatnam",
    },
    {
      year: "2021",
      role: "Jr. Graphic Designer",
      company: "Dezign Square",
      location: "Kakinada",
    },
    {
      year: "2021 – 2024",
      role: "Graphic Designer",
      company: "KreAdz Advertising",
      location: "Hyderabad",
    },
    {
      year: "2024 – Present",
      role: "Senior Graphic Designer",
      company: "Tact Advertising",
      location: "Hyderabad",
    },
  ];

  const languages = ["English", "Telugu", "Hindi"];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#070b14] text-white px-6 md:px-10 py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 80, 0],
            y: [0, 60, 0],
          }}
          transition={{ repeat: Infinity, duration: 14 }}
          className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-cyan-400/20 blur-[130px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ repeat: Infinity, duration: 16 }}
          className="absolute bottom-0 right-0 w-[430px] h-[430px] rounded-full bg-purple-500/20 blur-[140px]"
        />

        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          whileHover={{ y: -4 }}
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-[0.25em] transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105">
            About Me
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl md:text-5xl font-semibold transition-all duration-300 hover:tracking-wide">
            Swapnil <span className="text-cyan-300">Jakkan</span>
          </h2>

          <p className="mt-4 text-xl text-white/70">
            Senior Graphic Designer
          </p>

          <p className="max-w-3xl mx-auto mt-6 text-white/65 leading-relaxed text-lg">
            A skilled graphic designer with a BFA in Applied Art from Dr. YSR
            Architecture and Fine Arts University, experienced since 2020.
            Proficient in Adobe and Corel, combining creativity and technical
            skills to deliver effective design solutions.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8 h-full">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                y: -6,
                rotateX: 2,
                rotateY: -2,
                boxShadow:
                  "0 25px 40px rgba(34,211,238,0.12)",
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap
                  className="text-cyan-300"
                  size={22}
                />
                <h3 className="text-2xl font-semibold">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-cyan-300 font-medium">
                    Graduation
                  </p>
                  <p className="mt-1 text-lg">
                    Dr. YSR Architecture and Fine Arts
                    University
                  </p>
                  <p className="text-white/60">
                    Bachelor Of Fine Arts (BFA) – Applied
                    Art
                  </p>
                </div>

                <div>
                  <p className="text-cyan-300 font-medium">
                    Intermediate
                  </p>
                  <p className="mt-1 text-lg">
                    Saketa Junior & Degree College
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills + Languages + Contact */}
            
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                y: -6,
                rotateX: 2,
                rotateY: -2,
                boxShadow:
                  "0 25px 40px rgba(34,211,238,0.12)",
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex-1 transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <Brush className="text-cyan-300" size={20} />
                <h4 className="text-xl font-semibold">Design Skills</h4>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {skills.map((skill, i) => (
                  
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.08,
                      rotate: -3,
                      y: -8,
                    }}
                    className="group rounded-2xl bg-cyan-400/10 border border-cyan-400/20 p-4 text-center transition-all duration-500 hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-purple-500/10 hover:border-cyan-300/40 hover:shadow-[0_18px_30px_rgba(34,211,238,0.18)]"
                  >
                  
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 object-contain mx-auto mb-3 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6"
                    />
                    <p className="text-sm font-semibold text-cyan-300">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Languages */}
              <div className="border-t border-white/10 pt-8">
                <div className="flex items-center gap-3 mb-5">
                  <Languages
                    className="text-cyan-300"
                    size={20}
                  />
                  <h4 className="text-xl font-semibold">
                    Languages
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {languages.map((lang, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                      }}
                      className="px-5 py-3 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                    >
                      {lang}
                    </motion.div>
                  ))}
                </div>
              </div>

              
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8 h-full">
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                y: -6,
                rotateX: 2,
                rotateY: -2,
                boxShadow:
                  "0 25px 40px rgba(34,211,238,0.12)",
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase
                  className="text-cyan-300"
                  size={22}
                />
                <h3 className="text-2xl font-semibold">
                  Work Experience
                </h3>
              </div>

              <div className="space-y-5">
                {experiences.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      x: 10,
                      scale: 1.02,
                    }}
                    className="border-l-2 border-cyan-400/40 pl-4 transition-all duration-300 hover:border-purple-400 group"
                  >
                    <p className="text-cyan-300 text-sm">
                      {item.year}
                    </p>
                    <h4 className="font-semibold text-lg mt-1">
                      {item.role}
                    </h4>
                    <p className="text-white/65">
                      {item.company}, {item.location}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Creative Fields */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                y: -6,
                rotateX: 2,
                rotateY: -2,
                boxShadow:
                  "0 25px 40px rgba(34,211,238,0.12)",
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex-1 transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles
                  className="text-cyan-300"
                  size={22}
                />
                <h3 className="text-2xl font-semibold">
                  Creative Fields
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {creativeFields.map((field, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -5,
                      scale: 1.04,
                    }}
                    className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white/80 transition-all duration-400 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-purple-500/10 hover:border-cyan-300/30 hover:text-white hover:shadow-[0_15px_25px_rgba(217,70,239,0.12)]"
                  >
                    {field}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



