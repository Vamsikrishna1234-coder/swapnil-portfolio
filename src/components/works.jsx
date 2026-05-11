// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   ChevronLeft,
//   ChevronRight,
//   ZoomIn,
//   ZoomOut,
// } from "lucide-react";

// /* ===============================
//    IMPORT YOUR IMAGES HERE
//    Replace paths with your files
// ================================= */

// import draw1 from "../assets/Portfolio4.jpg"; 
// import draw2 from "../assets/Portfolio13.jpg"; 
// import draw3 from "../assets/Portfolio4.jpg";
// import draw4 from "../assets/Portfolio13.jpg";
// import draw5 from "../assets/Portfolio4.jpg";

// import ill1 from "../assets/swapnil portfolio.jpg";
// import ill2 from "../assets/swapnil portfolio.jpg";
// import ill3 from "../assets/swapnil portfolio.jpg";
// import ill4 from "../assets/swapnil portfolio.jpg";
// import ill5 from "../assets/swapnil portfolio.jpg";

// import brand1 from "../assets/swapnil portfolio.jpg";
// import brand2 from "../assets/swapnil portfolio.jpg";
// import brand3 from "../assets/swapnil portfolio.jpg";
// import brand4 from "../assets/swapnil portfolio.jpg";
// import brand5 from "../assets/swapnil portfolio.jpg";

// import pack1 from "../assets/swapnil portfolio.jpg";
// import pack2 from "../assets/swapnil portfolio.jpg";
// import pack3 from "../assets/swapnil portfolio.jpg";
// import pack4 from "../assets/swapnil portfolio.jpg";
// import pack5 from "../assets/swapnil portfolio.jpg";

// import mag1 from "../assets/magazines/mag1.jpg";
// import mag2 from "../assets/magazines/mag2.jpg";
// import mag3 from "../assets/magazines/mag3.jpg";
// import mag4 from "../assets/magazines/mag4.jpg";
// import mag5 from "../assets/magazines/mag5.jpg";



// import photo1 from "../assets/swapnil portfolio.jpg";
// import photo2 from "../assets/swapnil portfolio.jpg";
// import photo3 from "../assets/swapnil portfolio.jpg";
// import photo4 from "../assets/swapnil portfolio.jpg";
// import photo5 from "../assets/swapnil portfolio.jpg";



// import ui1 from "../assets/swapnil portfolio.jpg";
// import ui2 from "../assets/swapnil portfolio.jpg";
// import ui3 from "../assets/swapnil portfolio.jpg";
// import ui4 from "../assets/swapnil portfolio.jpg";
// import ui5 from "../assets/swapnil portfolio.jpg";



// import proj1 from "../assets/swapnil portfolio.jpg";
// import proj2 from "../assets/swapnil portfolio.jpg";
// import proj3 from "../assets/swapnil portfolio.jpg";
// import proj4 from "../assets/swapnil portfolio.jpg";
// import proj5 from "../assets/swapnil portfolio.jpg";

// /* =============================== */

// export default function WorksSection() {
//   const worksData = {
//     Drawing: [draw1, draw2, draw3, draw4, draw5],
//     Illustrations: [ill1, ill2, ill3, ill4, ill5],
//     Branding: [brand1, brand2, brand3, brand4, brand5],
//     "Package Design": [pack1, pack2, pack3, pack4, pack5],
//     "Magazine": [mag1, mag2, mag3, mag4, mag5],
//     Photography: [photo1, photo2, photo3, photo4, photo5],
//     "UI/UX": [ui1, ui2, ui3, ui4, ui5],
//     "Project Works": [proj1, proj2, proj3, proj4, proj5],
//   };

//   const categories = Object.keys(worksData);

//   const [activeTab, setActiveTab] = useState("Drawing");
//   const [lightbox, setLightbox] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [zoom, setZoom] = useState(1);

//   const currentImages = worksData[activeTab];

//   const openImage = (index) => {
//     setCurrentIndex(index);
//     setZoom(1);
//     setLightbox(true);
//   };

//   const nextImage = () => {
//     setCurrentIndex((prev) => (prev + 1) % currentImages.length);
//     setZoom(1);
//   };

//   const prevImage = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + currentImages.length) % currentImages.length
//     );
//     setZoom(1);
//   };

//   return (
//     <section id="works" className="relative bg-[#070b14] text-white px-6 md:px-10 py-28 overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/10 blur-[140px] rounded-full" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center">
//           <div className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-[0.25em] hover:bg-cyan-400 hover:text-black hover:scale-105">
//             My Works
//           </div>

//           <h2 className="mt-6 text-4xl sm:text-5xl md:text-5xl font-bold">
//             Creative <span className="text-cyan-300">Portfolio</span>
//           </h2>
//         </div>

//         {/* Tabs */}
//         <div className="mt-12 flex flex-wrap justify-center gap-3">
//           {categories.map((item, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveTab(item)}
//               className={`px-5 py-3 rounded-full text-sm transition ${
//                 activeTab === item
//                   ? "bg-cyan-400 text-black font-semibold"
//                   : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {/* Images Grid */}
//         <motion.div
//           key={activeTab}
//           initial={{ opacity: 0, y: 35 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {currentImages.map((img, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -8 }}
//               onClick={() => openImage(i)}
//               className="cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-white/5"
//             >
//               <img
//                 src={img}
//                 alt="work"
//                 className="w-full h-[280px] object-cover hover:scale-105 transition duration-500"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {lightbox && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
//           >
//             {/* Close */}
//             <button
//               onClick={() => setLightbox(false)}
//               className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full"
//             >
//               <X size={24} />
//             </button>

//             {/* Prev */}
//             <button
//               onClick={prevImage}
//               className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-white/10 p-3 rounded-full"
//             >
//               <ChevronLeft size={28} />
//             </button>

//             {/* Next */}
//             <button
//               onClick={nextImage}
//               className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-white/10 p-3 rounded-full"
//             >
//               <ChevronRight size={28} />
//             </button>

//             {/* Zoom Controls */}
//             <div className="absolute bottom-8 flex gap-4">
//               <button
//                 onClick={() => setZoom((z) => Math.max(1, z - 0.2))}
//                 className="bg-white/10 p-3 rounded-full text-white"
//               >
//                 <ZoomOut size={22} />
//               </button>

//               <button
//                 onClick={() => setZoom((z) => Math.min(3, z + 0.2))}
//                 className="bg-white/10 p-3 rounded-full text-white"
//               >
//                 <ZoomIn size={22} />
//               </button>
//             </div>

//             {/* Image */}
//             <motion.img
//                 key={currentIndex}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: zoom }}
//                 transition={{ duration: 0.3 }}
//                 src={currentImages[currentIndex]}
//                 alt="preview"
//                 className="
//                   w-full 
//                   h-auto 
//                   max-h-[100vh] 
//                   md:max-h-[90vh] 
//                   object-contain 
//                   rounded-2xl
//                 "
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }




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
   BRANDING
================================= */

import brand4 from "../assets/branding/brand4.jpg";
import brand5 from "../assets/branding/brand5.jpg";
import brand6 from "../assets/branding/brand6.jpg";

import brandPdf1 from "../assets/branding/brand1.pdf";
import brandPdf2 from "../assets/branding/brand2.pdf";
import brandPdf3 from "../assets/branding/brand3.pdf";

/* ===============================
   PACKAGE DESIGN
================================= */

import pack3 from "../assets/package/pack3.jpg";
import pack4 from "../assets/package/pack4.jpg";

import packPdf1 from "../assets/package/pack1.pdf";
import packPdf2 from "../assets/package/pack2.pdf";

/* ===============================
   MAGAZINES
================================= */

import mag1 from "../assets/magazines/mag1.jpg";
import mag2 from "../assets/magazines/mag2.jpg";
import mag3 from "../assets/magazines/mag3.jpg";
import mag4 from "../assets/magazines/mag4.jpg";
import mag5 from "../assets/magazines/mag5.jpg";

/* ===============================
   BROCHURE
================================= */

import broPdf1 from "../assets/brochure/bro1.pdf";
import broPdf2 from "../assets/brochure/bro2.pdf";
import broPdf3 from "../assets/brochure/bro3.pdf";
import broPdf4 from "../assets/brochure/bro4.pdf";
import broPdf5 from "../assets/brochure/bro5.pdf";

/* ===============================
   PROJECT WORKS
================================= */

import projPdf1 from "../assets/projects/proj1.pdf";
import projPdf2 from "../assets/projects/proj2.pdf";
import projPdf3 from "../assets/projects/proj3.pdf";
import projPdf4 from "../assets/projects/proj4.pdf";

/* ===============================
   POSTERS
================================= */

import post1 from "../assets/posters/post1.jpg";
import post2 from "../assets/posters/post2.jpg";
import post3 from "../assets/posters/post3.jpg";
import post4 from "../assets/posters/post4.jpg";
import post5 from "../assets/posters/post5.jpg";
import post6 from "../assets/posters/post6.jpg";

export default function WorksSection() {
  const worksData = {
    Branding: [
      { type: "pdf", file: brandPdf1 },
      { type: "pdf", file: brandPdf2 },
      { type: "pdf", file: brandPdf3 },
      { type: "image", file: brand4 },
      { type: "image", file: brand5 },
      { type: "image", file: brand6 },
    ],

    "Package Design": [
      { type: "pdf", file: packPdf1 },
      { type: "pdf", file: packPdf2 },
      { type: "image", file: pack3 },
      { type: "image", file: pack4 },
    ],

    Brochure: [
      { type: "pdf", file: broPdf1 },
      { type: "pdf", file: broPdf2 },
      { type: "pdf", file: broPdf3 },
      { type: "pdf", file: broPdf4 },
      { type: "pdf", file: broPdf5 },
    ],

    Magazines: [
      { type: "image", file: mag1 },
      { type: "image", file: mag2 },
      { type: "image", file: mag3 },
      { type: "image", file: mag4 },
      { type: "image", file: mag5 },
    ],

    Posters: [
      { type: "image", file: post1 },
      { type: "image", file: post2 },
      { type: "image", file: post3 },
      { type: "image", file: post4 },
      { type: "image", file: post5 },
      { type: "image", file: post6 },
    ],

    "Project Works": [
      { type: "pdf", file: projPdf1 },
      { type: "pdf", file: projPdf2 },
      { type: "pdf", file: projPdf3 },
      { type: "pdf", file: projPdf4 },
    ],
  };

  const categories = Object.keys(worksData);

  const [activeTab, setActiveTab] = useState("Branding");
  const [lightbox, setLightbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const currentImages = worksData[activeTab];

  const imageOnly = currentImages.filter(
    (item) => item.type === "image"
  );

  const openImage = (index) => {
    setCurrentIndex(index);
    setZoom(1);
    setLightbox(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % imageOnly.length
    );
    setZoom(1);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + imageOnly.length) %
        imageOnly.length
    );
    setZoom(1);
  };

  return (
    <section
      id="works"
      className="relative bg-[#070b14] text-white px-6 md:px-10 py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-[0.25em] hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300">
            My Works
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl md:text-5xl font-bold">
            Creative{" "}
            <span className="text-cyan-300">
              Portfolio
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(item)}
              className={`px-5 py-3 rounded-full text-sm transition-all duration-300 ${
                activeTab === item
                  ? "bg-cyan-400 text-black font-semibold"
                  : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentImages.map((item, i) => (

            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
            >

              {/* IMAGE CARD */}
              {item.type === "image" ? (

                <div
                  onClick={() =>
                    openImage(
                      imageOnly.findIndex(
                        (img) =>
                          img.file === item.file
                      )
                    )
                  }
                  className="cursor-pointer"
                >
                  <img
                    src={item.file}
                    alt="work"
                    className="w-full h-[280px] object-cover hover:scale-105 transition duration-500"
                  />
                </div>

              ) : (

                /* PDF CARD */
                <div className="h-[280px] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">

                  {/* Glow */}
                  <div className="absolute w-40 h-40 bg-cyan-400/20 blur-[80px] rounded-full top-0" />

                  {/* PDF Icon */}
                  <div className="relative z-10 text-7xl">
                    📄
                  </div>

                  <h3 className="relative z-10 mt-4 text-xl font-semibold">
                    Works PDF
                  </h3>

                  <p className="relative z-10 text-sm text-white/60 mt-2">
                    Click below to preview
                  </p>

                  <button
                    onClick={() =>
                      window.open(
                        item.file,
                        "_blank"
                      )
                    }
                    className="relative z-10 mt-6 px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300"
                  >
                    View PDF
                  </button>

                </div>

              )}

            </motion.div>

          ))}
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && imageOnly.length > 0 && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >

            {/* CLOSE */}
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            >
              <X size={24} />
            </button>

            {/* PREV */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            >
              <ChevronLeft size={28} />
            </button>

            {/* NEXT */}
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            >
              <ChevronRight size={28} />
            </button>

           

            {/* IMAGE */}
            <motion.img
              key={currentIndex}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: zoom,
              }}
              transition={{ duration: 0.3 }}
              src={imageOnly[currentIndex]?.file}
              alt="preview"
              className="
                w-full
                h-auto
                max-h-[100vh]
                md:max-h-[90vh]
                object-contain
                rounded-2xl
              "
            />

          </motion.div>

        )}
      </AnimatePresence>
    </section>
  );
}