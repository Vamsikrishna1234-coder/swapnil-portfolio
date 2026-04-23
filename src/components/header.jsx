{/* <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full border border-purple-200 bg-white shadow-lg px-6 py-4">
          <img
              src={logo}   // import your logo image
              alt="Swapnil Jakkan Logo"
              className="w-10 h-10 md:w-80 md:h-12 object-contain rounded-full shadow-md"
            />

          <nav className="hidden md:flex gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                whileHover={{ y: -3 }}
                className="relative text-sm font-medium text-purple-600 hover:text-purple-600 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-cyan-600"></span>
            <span className="w-4 h-[2px] bg-cyan-600 ml-auto"></span>
          </button>
        </div>
      </header> */}






import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import logo from "../assets/swapnil logo.png";   
import heroImg from "../assets/swapnil portfolio.jpg";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Works", link: "#works" },
  { name: "Contact", link: "#contact" },
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.12]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [0, 4]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070b14] text-white scroll-smooth"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 80, 0],
            y: [0, 60, 0],
          }}
          transition={{ repeat: Infinity, duration: 14 }}
          className="absolute -top-20 -left-20 w-[460px] h-[460px] rounded-full bg-cyan-400/20 blur-[130px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ repeat: Infinity, duration: 16 }}
          className="absolute bottom-0 right-0 w-[430px] h-[430px] rounded-full bg-purple-400/20 blur-[140px]"
        />
      </div>

      {/* Navbar */}
      
<header className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4 md:py-6">
  <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full border border-purple-200 bg-white shadow-lg px-4 md:px-6 py-3 md:py-4">

    {/* Perfect Responsive Logo */}
    <div className="flex items-center">
      <img
        src={logo}
        alt="Swapnil Jakkan Logo"
        className="h-10 w-auto sm:h-12 md:h-12 lg:h-14 object-contain transition-all duration-300"
      />
    </div>

    {/* Desktop Nav */}
    <nav className="hidden md:flex gap-8">
      {navItems.map((item, i) => (
        <motion.a
          key={i}
          href={item.link}
          whileHover={{ y: -3 }}
          className="relative text-sm font-medium text-purple-600 hover:text-purple-600 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all"
        >
          {item.name}
        </motion.a>
      ))}
    </nav>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(true)}
      className="md:hidden flex flex-col gap-1"
    >
      <span className="w-6 h-[2px] bg-cyan-600"></span>
      <span className="w-4 h-[2px] bg-cyan-600 ml-auto"></span>
    </button>
  </div>
</header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#070b14]/95 backdrop-blur-xl flex flex-col"
          >
            <div className="px-6 py-6 flex justify-between">
              <h2 className="text-white text-lg">MENU</h2>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-4xl text-white"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <div className="relative z-10 min-h-screen px-6 md:px-10 pt-28 pb-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div style={{ y: textY }}>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-[0.25em]">
                BFA Applied Art
              </div>

              <div className="inline-flex px-4 py-2 rounded-full bg-cyan-400/15 border border-cyan-400/20 text-xs uppercase tracking-[0.25em] text-cyan-300">
                5+ Years of Creative Design Experience
              </div>
            </div>

            <div className="mt-8">
              <h2 className="typing-main text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                I'm <span className="text-cyan-300">Swapnil Jakkan</span>
              </h2>

              <h3 className="typing-sub mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90">
                Art Direction & Branding
              </h3>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-8 max-w-xl text-white/70 text-lg leading-relaxed"
            >
              Senior Graphic Designer with 5+ years of experience in creating impactful visual designs across branding, advertising, and digital platforms. Skilled in Adobe Creative Suite, with a strong ability to translate ideas into compelling visuals that enhance brand identity and drive engagement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#works"
                className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition"
              >
                View Works →
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-white text-cyan-600 font-semibold hover:bg-blue-50 transition"
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              style={{
                scale: imageScale,
                rotate: imageRotate,
              }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[430px]"
            >
              {/* Borders */}
              <motion.div
                animate={{ rotate: [0, 5, 0], y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute inset-0 rounded-[34px] border border-cyan-400/30 -rotate-6"
              />

              <motion.div
                animate={{ rotate: [0, -4, 0], y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute inset-0 rounded-[34px] border border-blue-400/20 rotate-6"
              />

              {/* TOP BADGE LEFT SIDE */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-5 -left-5 z-20 px-5 py-3 rounded-2xl bg-purple-400 text-black shadow-xl"
              >
                <p className="font-bold text-sm">Adobe Expert</p>
                <p className="text-xs text-white/80">Id • PS • AI • Ar • Pr</p>
              </motion.div>

              {/* IMAGE */}
              <div className="relative rounded-[34px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                <img
                  src={heroImg}
                  alt="Swapnil Jakkan"
                  className="w-full h-[520px] sm:h-[580px] object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#070b14] to-transparent">
                  <h3 className="text-2xl font-semibold">Swapnil Jakkan</h3>

                  <p className="text-white/60 mt-2 text-sm">
                    Graphic Designer • Brand Specialist
                  </p>
                </div>
              </div>

              {/* BOTTOM BADGE RIGHT SIDE */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-5 -right-5 z-20 px-5 py-3 rounded-2xl bg-cyan-400 text-black shadow-xl"
              >
                <p className="font-bold text-sm">Creative Vision</p>
                <p className="text-xs text-black/70">Branding • Motion</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Typing CSS */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .typing-main {
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          animation: typing1 2.5s steps(24,end) infinite;
        }

        .typing-sub {
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          animation: typing2 2s steps(22,end) infinite;
          animation-delay: 0.6s;
        }

        @keyframes typing1 {
          0% { width: 0 }
          40% { width: 100% }
          70% { width: 100% }
          100% { width: 0 }
        }

        @keyframes typing2 {
          0% { width: 0 }
          40% { width: 100% }
          70% { width: 100% }
          100% { width: 0 }
        }
      `}</style>
    </section>
  );
}