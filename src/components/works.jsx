import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

/* ===============================
   IMPORT YOUR IMAGES HERE
   Replace paths with your files
================================= */

import draw1 from "../assets/Portfolio4.jpg"; 
import draw2 from "../assets/Portfolio13.jpg"; 
import draw3 from "../assets/Portfolio4.jpg";
import draw4 from "../assets/Portfolio13.jpg";
import draw5 from "../assets/Portfolio4.jpg";

import ill1 from "../assets/swapnil portfolio.jpg";
import ill2 from "../assets/swapnil portfolio.jpg";
import ill3 from "../assets/swapnil portfolio.jpg";
import ill4 from "../assets/swapnil portfolio.jpg";
import ill5 from "../assets/swapnil portfolio.jpg";

import brand1 from "../assets/swapnil portfolio.jpg";
import brand2 from "../assets/swapnil portfolio.jpg";
import brand3 from "../assets/swapnil portfolio.jpg";
import brand4 from "../assets/swapnil portfolio.jpg";
import brand5 from "../assets/swapnil portfolio.jpg";

import pack1 from "../assets/swapnil portfolio.jpg";
import pack2 from "../assets/swapnil portfolio.jpg";
import pack3 from "../assets/swapnil portfolio.jpg";
import pack4 from "../assets/swapnil portfolio.jpg";
import pack5 from "../assets/swapnil portfolio.jpg";

import motion1 from "../assets/swapnil portfolio.jpg";
import motion2 from "../assets/swapnil portfolio.jpg";
import motion3 from "../assets/swapnil portfolio.jpg";
import motion4 from "../assets/swapnil portfolio.jpg";
import motion5 from "../assets/swapnil portfolio.jpg";



import photo1 from "../assets/swapnil portfolio.jpg";
import photo2 from "../assets/swapnil portfolio.jpg";
import photo3 from "../assets/swapnil portfolio.jpg";
import photo4 from "../assets/swapnil portfolio.jpg";
import photo5 from "../assets/swapnil portfolio.jpg";



import ui1 from "../assets/swapnil portfolio.jpg";
import ui2 from "../assets/swapnil portfolio.jpg";
import ui3 from "../assets/swapnil portfolio.jpg";
import ui4 from "../assets/swapnil portfolio.jpg";
import ui5 from "../assets/swapnil portfolio.jpg";



import proj1 from "../assets/swapnil portfolio.jpg";
import proj2 from "../assets/swapnil portfolio.jpg";
import proj3 from "../assets/swapnil portfolio.jpg";
import proj4 from "../assets/swapnil portfolio.jpg";
import proj5 from "../assets/swapnil portfolio.jpg";

/* =============================== */

export default function WorksSection() {
  const worksData = {
    Drawing: [draw1, draw2, draw3, draw4, draw5],
    Illustrations: [ill1, ill2, ill3, ill4, ill5],
    Branding: [brand1, brand2, brand3, brand4, brand5],
    "Package Design": [pack1, pack2, pack3, pack4, pack5],
    "Motion Graphic": [motion1, motion2, motion3, motion4, motion5],
    Photography: [photo1, photo2, photo3, photo4, photo5],
    "UI/UX": [ui1, ui2, ui3, ui4, ui5],
    "Project Works": [proj1, proj2, proj3, proj4, proj5],
  };

  const categories = Object.keys(worksData);

  const [activeTab, setActiveTab] = useState("Drawing");
  const [lightbox, setLightbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const currentImages = worksData[activeTab];

  const openImage = (index) => {
    setCurrentIndex(index);
    setZoom(1);
    setLightbox(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
    setZoom(1);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length
    );
    setZoom(1);
  };

  return (
    <section id="works" className="relative bg-[#070b14] text-white px-6 md:px-10 py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-[0.25em] hover:bg-cyan-400 hover:text-black hover:scale-105">
            My Works
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl md:text-5xl font-bold">
            Creative <span className="text-cyan-300">Portfolio</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(item)}
              className={`px-5 py-3 rounded-full text-sm transition ${
                activeTab === item
                  ? "bg-cyan-400 text-black font-semibold"
                  : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentImages.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              onClick={() => openImage(i)}
              className="cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-white/5"
            >
              <img
                src={img}
                alt="work"
                className="w-full h-[280px] object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full"
            >
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-white/10 p-3 rounded-full"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-white/10 p-3 rounded-full"
            >
              <ChevronRight size={28} />
            </button>

            {/* Zoom Controls */}
            <div className="absolute bottom-8 flex gap-4">
              <button
                onClick={() => setZoom((z) => Math.max(1, z - 0.2))}
                className="bg-white/10 p-3 rounded-full text-white"
              >
                <ZoomOut size={22} />
              </button>

              <button
                onClick={() => setZoom((z) => Math.min(3, z + 0.2))}
                className="bg-white/10 p-3 rounded-full text-white"
              >
                <ZoomIn size={22} />
              </button>
            </div>

            {/* Image */}
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: zoom }}
              transition={{ duration: 0.3 }}
              src={currentImages[currentIndex]}
              alt="preview"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}