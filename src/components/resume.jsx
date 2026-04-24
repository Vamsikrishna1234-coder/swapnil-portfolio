import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import resumeFile from "../assets/Swapnil_Resume.pdf";

export default function ResumeFloat() {
  return (
    <motion.a
      href={resumeFile}
      download
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ x: 6, scale: 1.05 }}
      className="fixed right-6 bottom-8 z-50 group"
    >
      <div className="relative overflow-hidden flex flex-col items-center justify-center gap-3 px-2 py-5 rounded-xl min-w-[32px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]">

        {/* Glass Shine */}
        <motion.div
          animate={{ x: ["-120%", "120%"] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent skew-x-12"
        />

        {/* Glow Pulse */}
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-purple-400/10"
        />

        {/* Icon */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="relative z-10 text-purple-300"
        >
          <Download size={20} />
        </motion.div>

        {/* Vertical Text */}
        <span
          className="relative z-10 text-[11px] tracking-[0.25em] font-bold uppercase text-white"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(360deg)",
          }}
        >
          Resume
        </span>
      </div>
    </motion.a>
  );
}