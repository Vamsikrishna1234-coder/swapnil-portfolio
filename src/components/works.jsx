// import React, { useState } from "react";

// import { motion, AnimatePresence } from "framer-motion";

// import {
//   X,
//   ChevronLeft,
//   ChevronRight,
//  ZoomIn,
//   ZoomOut,
// } from "lucide-react";

// /* =========================================
//    BRANDING
// ========================================= */

// import brandThumb1 from "../assets/branding/thumbs/thumb1.jpeg";
// import brandThumb2 from "../assets/branding/thumbs/thumb1.jpeg";
// import brandThumb3 from "../assets/branding/thumbs/thumb1.jpeg";
// import brandThumb4 from "../assets/branding/thumbs/thumb1.jpeg";
// import brandThumb5 from "../assets/branding/thumbs/thumb1.jpeg";
// import brandThumb6 from "../assets/branding/thumbs/thumb1.jpeg";

// import brandPdf1 from "../assets/branding/brand1.pdf";
// import brandPdf2 from "../assets/branding/brand2.pdf";
// import brandPdf3 from "../assets/branding/brand3.pdf";

// import brand4 from "../assets/branding/brand4.jpg";
// import brand5 from "../assets/branding/brand5.jpg";
// import brand6 from "../assets/branding/brand6.jpg";

// /* =========================================
//    PACKAGE DESIGN
// ========================================= */

// import packThumb1 from "../assets/package/thumbs/thumb1.jpeg";
// import packThumb2 from "../assets/package/thumbs/thumb1.jpeg";
// import packThumb3 from "../assets/package/thumbs/thumb1.jpeg";
// import packThumb4 from "../assets/package/thumbs/thumb1.jpeg";

// import packPdf1 from "../assets/package/pack1.pdf";
// import packPdf2 from "../assets/package/pack2.pdf";

// import pack3 from "../assets/package/pack3.jpg";
// import pack4 from "../assets/package/pack4.jpg";

// /* =========================================
//    BROCHURE
// ========================================= */

// import broThumb1 from "../assets/brochure/thumbs/thumb1.jpeg";
// import broThumb2 from "../assets/brochure/thumbs/thumb1.jpeg";
// import broThumb3 from "../assets/brochure/thumbs/thumb1.jpeg";
// import broThumb4 from "../assets/brochure/thumbs/thumb1.jpeg";
// import broThumb5 from "../assets/brochure/thumbs/thumb1.jpeg";

// import broPdf1 from "../assets/brochure/bro1.pdf";
// import broPdf2 from "../assets/brochure/bro2.pdf";
// import broPdf3 from "../assets/brochure/bro3.pdf";
// import broPdf4 from "../assets/brochure/bro4.pdf";
// import broPdf5 from "../assets/brochure/bro5.pdf";

// /* =========================================
//    MAGAZINES
// ========================================= */

// import mag1 from "../assets/magazines/thumbs/thumb1.jpeg";
// import mag2 from "../assets/magazines/thumbs/thumb1.jpeg";
// import mag3 from "../assets/magazines/thumbs/thumb1.jpeg";
// import mag4 from "../assets/magazines/thumbs/thumb1.jpeg";
// import mag5 from "../assets/magazines/thumbs/thumb1.jpeg";

// /* =========================================
//    POSTERS
// ========================================= */

// import post1 from "../assets/posters/thumbs/thumb1.jpeg";
// import post2 from "../assets/posters/thumbs/thumb1.jpeg";
// import post3 from "../assets/posters/thumbs/thumb1.jpeg";
// import post4 from "../assets/posters/thumbs/thumb1.jpeg";
// import post5 from "../assets/posters/thumbs/thumb1.jpeg";
// import post6 from "../assets/posters/thumbs/thumb1.jpeg";

// /* =========================================
//    PROJECT WORKS
// ========================================= */

// import projThumb1 from "../assets/projects/thumbs/thumb1.jpeg";
// import projThumb2 from "../assets/projects/thumbs/thumb1.jpeg";
// import projThumb3 from "../assets/projects/thumbs/thumb1.jpeg";
// import projThumb4 from "../assets/projects/thumbs/thumb1.jpeg";

// import projPdf1 from "../assets/projects/proj1.pdf";
// import projPdf2 from "../assets/projects/proj2.pdf";
// import projPdf3 from "../assets/projects/proj3.pdf";
// import projPdf4 from "../assets/projects/proj4.pdf";

// export default function WorksSection() {

//   const worksData = {

//     Branding: [

//       {
//         type: "pdf",
//         thumbnail: brandThumb1,
//         file: brandPdf1,
//       },

//       {
//         type: "pdf",
//         thumbnail: brandThumb2,
//         file: brandPdf2,
//       },

//       {
//         type: "pdf",
//         thumbnail: brandThumb3,
//         file: brandPdf3,
//       },

//       {
//         type: "image",
//         thumbnail: brandThumb4,
//         file: brand4,
//       },

//       {
//         type: "image",
//         thumbnail: brandThumb5,
//         file: brand5,
//       },

//       {
//         type: "image",
//         thumbnail: brandThumb6,
//         file: brand6,
//       },

//     ],

//     "Package Design": [

//       {
//         type: "pdf",
//         thumbnail: packThumb1,
//         file: packPdf1,
//       },

//       {
//         type: "pdf",
//         thumbnail: packThumb2,
//         file: packPdf2,
//       },

//       {
//         type: "image",
//         thumbnail: packThumb3,
//         file: pack3,
//       },

//       {
//         type: "image",
//         thumbnail: packThumb4,
//         file: pack4,
//       },

//     ],

//     Brochure: [

//       {
//         type: "pdf",
//         thumbnail: broThumb1,
//         file: broPdf1,
//       },

//       {
//         type: "pdf",
//         thumbnail: broThumb2,
//         file: broPdf2,
//       },

//       {
//         type: "pdf",
//         thumbnail: broThumb3,
//         file: broPdf3,
//       },

//       {
//         type: "pdf",
//         thumbnail: broThumb4,
//         file: broPdf4,
//       },

//       {
//         type: "pdf",
//         thumbnail: broThumb5,
//         file: broPdf5,
//       },

//     ],

//     Magazines: [

//       {
//         type: "image",
//         thumbnail: mag1,
//         file: mag1,
//       },

//       {
//         type: "image",
//         thumbnail: mag2,
//         file: mag2,
//       },

//       {
//         type: "image",
//         thumbnail: mag3,
//         file: mag3,
//       },

//       {
//         type: "image",
//         thumbnail: mag4,
//         file: mag4,
//       },

//       {
//         type: "image",
//         thumbnail: mag5,
//         file: mag5,
//       },

//     ],

//     Posters: [

//       {
//         type: "image",
//         thumbnail: post1,
//         file: post1,
//       },

//       {
//         type: "image",
//         thumbnail: post2,
//         file: post2,
//       },

//       {
//         type: "image",
//         thumbnail: post3,
//         file: post3,
//       },

//       {
//         type: "image",
//         thumbnail: post4,
//         file: post4,
//       },

//       {
//         type: "image",
//         thumbnail: post5,
//         file: post5,
//       },

//       {
//         type: "image",
//         thumbnail: post6,
//         file: post6,
//       },

//     ],

//     "Project Works": [

//       {
//         type: "pdf",
//         thumbnail: projThumb1,
//         file: projPdf1,
//       },

//       {
//         type: "pdf",
//         thumbnail: projThumb2,
//         file: projPdf2,
//       },

//       {
//         type: "pdf",
//         thumbnail: projThumb3,
//         file: projPdf3,
//       },

//       {
//         type: "pdf",
//         thumbnail: projThumb4,
//         file: projPdf4,
//       },

//     ],

//   };

//   const categories = Object.keys(worksData);

//   const [activeTab, setActiveTab] =
//     useState("Branding");

//   const [lightbox, setLightbox] =
//     useState(false);

//   const [currentIndex, setCurrentIndex] =
//     useState(0);

//   const [zoom, setZoom] =
//     useState(1);

//   const currentItems =
//     worksData[activeTab];

//   const imageOnly =
//     currentItems.filter(
//       (item) => item.type === "image"
//     );

//   const openItem = (item) => {

//     if (item.type === "image") {

//       const index =
//         imageOnly.findIndex(
//           (img) =>
//             img.file === item.file
//         );

//       setCurrentIndex(index);

//       setZoom(1);

//       setLightbox(true);

//     } else {

//       window.open(
//         item.file,
//         "_blank"
//       );

//     }
//   };

//   const nextImage = () => {

//     setCurrentIndex(
//       (prev) =>
//         (prev + 1) %
//         imageOnly.length
//     );

//     setZoom(1);
//   };

//   const prevImage = () => {

//     setCurrentIndex(
//       (prev) =>
//         (prev - 1 + imageOnly.length) %
//         imageOnly.length
//     );

//     setZoom(1);
//   };

//   return (

//     <section
//       id="works"
//       className="
//         relative
//         bg-[#070b14]
//         text-white
//         px-6
//         md:px-10
//         py-28
//         overflow-hidden
//       "
//     >

//       {/* BACKGROUND GLOW */}

//       <div className="absolute inset-0">

//         <div
//           className="
//             absolute
//             top-0
//             left-0
//             w-[500px]
//             h-[500px]
//             bg-cyan-400/10
//             blur-[140px]
//             rounded-full
//           "
//         />

//         <div
//           className="
//             absolute
//             bottom-0
//             right-0
//             w-[500px]
//             h-[500px]
//             bg-blue-500/10
//             blur-[140px]
//             rounded-full
//           "
//         />

//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">

//         {/* HEADING */}

//         <div className="text-center mb-2">

//           {/* TOP BUTTON */}

          

//           <div className="text-center inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-[0.25em] hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300">
//            My Works
//           </div>


//           </div>

//           {/* TITLE */}

//           <h2
//             className="
//               mt-5
//               text-5xl
//               md:text-5xl
//               font-bold
//               leading-tight
//               text-center
//               mt-8
//             "
//           >

//             <span className="text-white">
//               Creative
//             </span>{" "}

//             <span
//               className="
//                 bg-gradient-to-r
//                 from-cyan-300
//                 via-cyan-400
//                 to-blue-500
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Portfolio
//             </span>

//           </h2>

//         </div>

//         {/* TABS */}

//         <div
//           className="
//             flex
//             flex-wrap
//             justify-center
//             gap-5
//             mt-5
//           "
//         >

//           {categories.map((cat, i) => (

//             <button
//               key={i}
//               onClick={() =>
//                 setActiveTab(cat)
//               }
//               className={`
//                 px-5
//                 py-3
//                 rounded-full
//                 transition-all
//                 duration-300
//                 ${
//                   activeTab === cat
//                     ? "bg-cyan-400 text-black"
//                     : "bg-white/10 text-white hover:bg-white/20"
//                 }
//               `}
//             >
//               {cat}
//             </button>

//           ))}

//         </div>

//         {/* GRID */}

//         <div
//           className="
//             mt-14
//             grid
//             sm:grid-cols-2
//             lg:grid-cols-3
//             gap-6
//           "
//         >

//           {currentItems.map((item, i) => (

//             <motion.div
//               key={i}
//               whileHover={{
//                 y: -8,
//               }}
//               onClick={() =>
//                 openItem(item)
//               }
//               className="
//                 cursor-pointer
//                 rounded-3xl
//                 overflow-hidden
//                 border
//                 border-white/10
//                 bg-white/5
//                 backdrop-blur-sm
//                 group
//               "
//             >

//               {/* THUMBNAIL */}

//               <div className="overflow-hidden">

//                 <img
//                   src={item.thumbnail}
//                   alt="thumbnail"
//                   className="
//                     w-full
//                     h-[320px]
//                     object-cover
//                     group-hover:scale-110
//                     transition
//                     duration-700
//                   "
//                 />

//               </div>

//             </motion.div>

//           ))}

//         </div>

      

//       {/* LIGHTBOX */}

//       <AnimatePresence>

//         {lightbox && (

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             exit={{
//               opacity: 0,
//             }}
//             className="
//               fixed
//               inset-0
//               z-[100]
//               bg-black/95
//               flex
//               items-center
//               justify-center
//               p-4
//             "
//           >

//             {/* CLOSE */}

//             <button
//               onClick={() =>
//                 setLightbox(false)
//               }
//               className="
//                 absolute
//                 top-6
//                 right-6
//                 bg-white/10
//                 hover:bg-white/20
//                 transition
//                 p-3
//                 rounded-full
//               "
//             >
//               <X />
//             </button>

//             {/* PREV */}

//             <button
//               onClick={prevImage}
//               className="
//                 absolute
//                 left-6
//                 top-1/2
//                 -translate-y-1/2
//                 bg-white/10
//                 hover:bg-white/20
//                 transition
//                 p-3
//                 rounded-full
//               "
//             >
//               <ChevronLeft />
//             </button>

//             {/* NEXT */}

//             <button
//               onClick={nextImage}
//               className="
//                 absolute
//                 right-6
//                 top-1/2
//                 -translate-y-1/2
//                 bg-white/10
//                 hover:bg-white/20
//                 transition
//                 p-3
//                 rounded-full
//               "
//             >
//               <ChevronRight />
//             </button>

//             {/* ZOOM CONTROLS */}

//             <div
//               className="
//                 absolute
//                 bottom-8
//                 flex
//                 gap-4
//               "
//             >

//               <button
//                 onClick={() =>
//                   setZoom((z) =>
//                     Math.max(1, z - 0.2)
//                   )
//                 }
//                 className="
//                   bg-white/10
//                   hover:bg-white/20
//                   transition
//                   p-3
//                   rounded-full
//                 "
//               >
//                 <ZoomOut />
//               </button>

//               <button
//                 onClick={() =>
//                   setZoom((z) =>
//                     Math.min(3, z + 0.2)
//                   )
//                 }
//                 className="
//                   bg-white/10
//                   hover:bg-white/20
//                   transition
//                   p-3
//                   rounded-full
//                 "
//               >
//                 <ZoomIn />
//               </button>

//             </div>

//             {/* MAIN IMAGE */}

//             <motion.img
//               key={currentIndex}
//               src={
//                 imageOnly[currentIndex]?.file
//               }
//               initial={{
//                 opacity: 0,
//                 scale: 0.9,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: zoom,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//               className="
//                 max-h-[90vh]
//                 object-contain
//                 rounded-2xl
//               "
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

/* =========================================
   BRANDING
========================================= */

import brandThumb1 from "../assets/branding/thumbs/bhagyathumb.jpeg";
import brandThumb2 from "../assets/branding/thumbs/Ramadevi.jpeg";
import brandThumb3 from "../assets/branding/thumbs/srk.jpeg";
import brandThumb4 from "../assets/branding/thumbs/anumah.jpeg";
import brandThumb5 from "../assets/branding/thumbs/HKgastro.jpeg";
import brandThumb6 from "../assets/branding/thumbs/INIburger.jpeg";

import brandPdf1 from "../assets/branding/brand1.pdf";
import brandPdf2 from "../assets/branding/brand2.pdf";
import brandPdf3 from "../assets/branding/brand3.pdf";

import brand4 from "../assets/branding/brand4.jpg";
import brand5 from "../assets/branding/brand5.jpg";
import brand6 from "../assets/branding/brand6.jpg";

/* =========================================
   PACKAGE DESIGN
========================================= */

import packThumb1 from "../assets/package/thumbs/Fusionthumb.jpeg";
import packThumb2 from "../assets/package/thumbs/Mobile copy.jpeg";
import packThumb3 from "../assets/package/thumbs/Butterflow.png";
import packThumb4 from "../assets/package/pack4.jpg";

import packPdf1 from "../assets/package/pack1.pdf";
import packPdf2 from "../assets/package/mobpackage.pdf";

import pack3 from "../assets/package/pack3.jpg";
import pack4 from "../assets/package/pack4.jpg";

/* =========================================
   BROCHURE
========================================= */

import broThumb1 from "../assets/brochure/thumbs/Legacy Folder.jpeg";
import broThumb2 from "../assets/brochure/thumbs/Avenue Brochure.jpeg";
import broThumb3 from "../assets/brochure/thumbs/Nisarga Resorts.jpeg";
import broThumb4 from "../assets/brochure/thumbs/Greenfield Brochure.jpeg";
import broThumb5 from "../assets/brochure/thumbs/Nisarga Main.jpeg";

import broPdf1 from "../assets/brochure/bro1.pdf";
import broPdf2 from "../assets/brochure/bro2.pdf";
import broPdf3 from "../assets/brochure/bro3.pdf";
import broPdf4 from "../assets/brochure/bro4.pdf";
import broPdf5 from "../assets/brochure/bro5.pdf";

/* =========================================
   MAGAZINES
========================================= */

import mag1 from "../assets/magazines/thumbs/magimg1.jpeg";
import mag2 from "../assets/magazines/thumbs/magimg2.jpeg";
import mag3 from "../assets/magazines/thumbs/magimg3.jpeg";
import mag4 from "../assets/magazines/thumbs/magimg4.jpeg";
import mag5 from "../assets/magazines/thumbs/magimg5.jpeg";
import mag6 from "../assets/magazines/thumbs/magimg6.jpeg";


import magimg1 from "../assets/magazines/mag1.jpg"
import magimg2 from "../assets/magazines/mag2.jpg"
import magimg3 from "../assets/magazines/mag3.jpg"
import magimg4 from "../assets/magazines/mag4.jpg"
import magimg5 from "../assets/magazines/mag5.jpg"
import magimg6 from "../assets/magazines/mag6.jpg"

/* =========================================
   POSTERS
========================================= */

import post1 from "../assets/posters/thumbs/post1.jpeg";
import post2 from "../assets/posters/thumbs/Toy Poster.jpeg";
import post3 from "../assets/posters/thumbs/post3.jpeg";
import post4 from "../assets/posters/thumbs/Hair Poster.jpeg";
import post5 from "../assets/posters/thumbs/AP Poster.jpeg";
import post6 from "../assets/posters/thumbs/post6.jpeg";


import postimg1 from "../assets/posters/post1.jpg"
import postimg2 from "../assets/posters/Lego-Poster.jpg"
import postimg3 from "../assets/posters/post3.jpg"
import postimg4 from "../assets/posters/Hairposter.jpg"
import postimg5 from "../assets/posters/AP-poster.jpg"
import postimg6 from "../assets/posters/post6.jpg"

/* =========================================
   PROJECT WORKS
========================================= */

import projThumb1 from "../assets/projects/thumbs/Unify.jpeg";
import projThumb2 from "../assets/projects/thumbs/PE.jpeg";
import projThumb3 from "../assets/projects/thumbs/Miniproject.jpeg";
import projThumb4 from "../assets/projects/thumbs/Heritage.jpeg";

import projPdf1 from "../assets/projects/proj1.pdf";
import projPdf2 from "../assets/projects/proj2.pdf";
import projPdf3 from "../assets/projects/proj3.pdf";
import projPdf4 from "../assets/projects/proj4.pdf";

export default function WorksSection() {

  const worksData = {

    Branding: [
      {
        type: "pdf",
        thumbnail: brandThumb1,
        file: brandPdf1,
      },

      {
        type: "pdf",
        thumbnail: brandThumb2,
        file: brandPdf2,
      },

      {
        type: "pdf",
        thumbnail: brandThumb3,
        file: brandPdf3,
      },

      {
        type: "image",
        thumbnail: brandThumb4,
        file: brand4,
      },

      {
        type: "image",
        thumbnail: brandThumb5,
        file: brand5,
      },

      {
        type: "image",
        thumbnail: brandThumb6,
        file: brand6,
      },
    ],

    "Package Design": [
      {
        type: "pdf",
        thumbnail: packThumb1,
        file: packPdf1,
      },

      {
        type: "pdf",
        thumbnail: packThumb2,
        file: packPdf2,
      },

      {
        type: "image",
        thumbnail: packThumb3,
        file: pack3,
      },

      {
        type: "image",
        thumbnail: packThumb4,
        file: pack4,
      },
    ],

    Brochure: [
      {
        type: "pdf",
        thumbnail: broThumb1,
        file: broPdf1,
      },

      {
        type: "pdf",
        thumbnail: broThumb2,
        file: broPdf2,
      },

      {
        type: "pdf",
        thumbnail: broThumb3,
        file: broPdf3,
      },

      {
        type: "pdf",
        thumbnail: broThumb4,
        file: broPdf4,
      },

      {
        type: "pdf",
        thumbnail: broThumb5,
        file: broPdf5,
      },
    ],

    Magazines: [
      {
        type: "image",
        thumbnail: mag1,
        file: magimg1,
      },

      {
        type: "image",
        thumbnail: mag2,
        file: magimg2,
      },

      {
        type: "image",
        thumbnail: mag3,
        file: magimg3,
      },

      {
        type: "image",
        thumbnail: mag4,
        file: magimg4,
      },

      {
        type: "image",
        thumbnail: mag5,
        file: magimg5,
      },
      {
        type: "image",
        thumbnail: mag6,
        file: magimg6,
      },
    ],

    Posters: [
      {
        type: "image",
        thumbnail: post1,
        file: postimg1,
      },

      {
        type: "image",
        thumbnail: post2,
        file: postimg2,
      },

      {
        type: "image",
        thumbnail: post3,
        file: postimg3,
      },

      {
        type: "image",
        thumbnail: post4,
        file: postimg4,
      },

      {
        type: "image",
        thumbnail: post5,
        file: postimg5,
      },

      {
        type: "image",
        thumbnail: post6,
        file: postimg6,
      },
    ],

    "Project Works": [
      {
        type: "pdf",
        thumbnail: projThumb1,
        file: projPdf1,
      },

      {
        type: "pdf",
        thumbnail: projThumb2,
        file: projPdf2,
      },

      {
        type: "pdf",
        thumbnail: projThumb3,
        file: projPdf3,
      },

      {
        type: "pdf",
        thumbnail: projThumb4,
        file: projPdf4,
      },
    ],
  };

  const categories = Object.keys(worksData);

  const [activeTab, setActiveTab] =
    useState("Branding");

  const [lightbox, setLightbox] =
    useState(false);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [zoom, setZoom] =
    useState(1);

  const currentItems =
    worksData[activeTab] || [];

  const imageOnly =
    currentItems.filter(
      (item) => item.type === "image"
    );

  const openItem = (item) => {

    if (item.type === "image") {

      const index =
        imageOnly.findIndex(
          (img) =>
            img.file === item.file
        );

      setCurrentIndex(index);

      setZoom(1);

      setLightbox(true);

    } else {

      window.open(
        item.file,
        "_blank"
      );

    }
  };

  const nextImage = () => {

    setCurrentIndex(
      (prev) =>
        (prev + 1) %
        imageOnly.length
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
      className="
        relative
        bg-[#070b14]
        text-white
        px-6
        md:px-10
        py-28
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0">

        <div
          className="
            absolute
            top-0
            left-0
            w-[500px]
            h-[500px]
            bg-cyan-400/10
            blur-[140px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[500px]
            h-[500px]
            bg-blue-500/10
            blur-[140px]
            rounded-full
          "
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-2">

          {/* TOP BUTTON */}

          <div
            className="
              inline-flex
              px-4
              py-2
              rounded-full
              bg-white/10
              border
              border-white/10
              text-xs
              uppercase
              tracking-[0.25em]
              hover:bg-cyan-400
              hover:text-black
              hover:scale-105
              transition
              duration-300
            "
          >
            My Works
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-2
              text-5xl
              md:text-5xl
              font-bold
              leading-tight
              text-center
            "
          >

            <span className="text-white">
              Creative
            </span>{" "}

            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              Portfolio
            </span>

          </h2>

        </div>

        {/* TABS */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-5
            mt-10
          "
        >

          {categories.map((cat, i) => (

            <button
              key={i}
              onClick={() =>
                setActiveTab(cat)
              }
              className={`
                px-5
                py-3
                rounded-full
                transition-all
                duration-300
                ${
                  activeTab === cat
                    ? "bg-cyan-400 text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }
              `}
            >
              {cat}
            </button>

          ))}

        </div>

        {/* GRID */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -40,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mt-14
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >

            {currentItems.map((item, i) => (

              <motion.div
                key={`${activeTab}-${i}`}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                onClick={() =>
                  openItem(item)
                }
                className="
                  cursor-pointer
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-sm
                  group
                "
              >

                <div className="overflow-hidden">

                  <img
                    src={item.thumbnail}
                    alt="thumbnail"
                    className="
                      w-full
                      h-[320px]
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700
                    "
                  />

                </div>

              </motion.div>

            ))}

          </motion.div>

        </AnimatePresence>

      </div>

      {/* LIGHTBOX */}

      <AnimatePresence>

        {lightbox && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/95
              flex
              items-center
              justify-center
              p-4
            "
          >

            <button
              onClick={() =>
                setLightbox(false)
              }
              className="
                absolute
                top-6
                right-6
                bg-white/10
                hover:bg-white/20
                transition
                p-3
                rounded-full
              "
            >
              <X />
            </button>

            <button
              onClick={prevImage}
              className="
                absolute
                left-6
                top-1/2
                -translate-y-1/2
                bg-white/10
                hover:bg-white/20
                transition
                p-3
                rounded-full
              "
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className="
                absolute
                right-6
                top-1/2
                -translate-y-1/2
                bg-white/10
                hover:bg-white/20
                transition
                p-3
                rounded-full
              "
            >
              <ChevronRight />
            </button>

            <div
              className="
                absolute
                bottom-8
                flex
                gap-4
              "
            >

              <button
                onClick={() =>
                  setZoom((z) =>
                    Math.max(1, z - 0.2)
                  )
                }
                className="
                  bg-white/10
                  hover:bg-white/20
                  transition
                  p-3
                  rounded-full
                "
              >
                <ZoomOut />
              </button>

              <button
                onClick={() =>
                  setZoom((z) =>
                    Math.min(3, z + 0.2)
                  )
                }
                className="
                  bg-white/10
                  hover:bg-white/20
                  transition
                  p-3
                  rounded-full
                "
              >
                <ZoomIn />
              </button>

            </div>

            <motion.img
              key={currentIndex}
              src={
                imageOnly[currentIndex]?.file
              }
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: zoom,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                max-h-[90vh]
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