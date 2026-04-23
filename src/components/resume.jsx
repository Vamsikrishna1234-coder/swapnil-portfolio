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
      className="fixed right-0 bottom-8 z-50 group"
    >
      <div className="flex flex-col items-center justify-center gap-3 bg-cyan-400 text-black px-3 py-5 rounded-r-2xl shadow-2xl font-semibold min-w-[30px]">
        
        {/* Icon Animation */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <Download size={20} />
        </motion.div>

        {/* Vertical Text */}
        <span
          className="text-[11px] tracking-[0.25em] font-bold uppercase"
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