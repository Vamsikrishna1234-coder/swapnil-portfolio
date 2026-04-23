import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaBehance,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const socials = [
    {
      icon: <FaInstagram size={18} />,
      name: "Instagram",
      link: "https://www.instagram.com/_mr_swapnil_1804?utm_source=qr&igsh=MXcyOTY2bHl2a2VzcA%3D%3D",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/swapnil-jakkan-9a092b161/",
    },
    {
      icon: <FaFacebookF size={18} />,
      name: "Facebook",
      link: "https://www.facebook.com/share/1RUQGgZtRi/",
    },
    {
      icon: <FaBehance size={18} />,
      name: "Behance",
      link: "https://www.behance.net/sunnysunny9",
    },
    {
      icon: <FaWhatsapp size={18} />,
      name: "WhatsApp",
      link: "https://wa.me/918919163630",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#070b14] text-white px-6 md:px-10 py-28"
      id="contact"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-cyan-400/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-[0.25em] hover:bg-cyan-400 hover:text-black hover:scale-105">
            Contact Me
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl font-bold">
            Let's Build Something{" "}
            <span className="text-cyan-300">Creative</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/65 text-lg">
            Need branding, motion graphics, packaging, UI/UX or creative
            campaigns? Let's connect and turn your ideas into impactful visuals.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/20">
                  <Phone className="text-cyan-300" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Phone</p>
                  <p className="text-lg font-medium">
                    +91 8919 163 630
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/20">
                  <Mail className="text-cyan-300" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Email</p>
                  <p className="text-lg font-medium break-all">
                    swapnil.jakkan@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/20">
                  <MapPin className="text-cyan-300" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Location</p>
                  <p className="text-lg font-medium">
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>
            </div>

            {/* Follow Me */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/55 mb-5">Follow Me</p>

              <div className="flex flex-wrap gap-4">
                {socials.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 hover:border-cyan-300/40 hover:bg-cyan-400/10 transition"
                  >
                    <span className="text-cyan-300">
                      {item.icon}
                    </span>
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-8">
              Send Message
            </h3>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 resize-none"
              ></textarea>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    "0 0 25px rgba(34,211,238,0.35)",
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/45">
        © 2026 Swapnil Jakkan. All Rights Reserved.
      </div>
    </section>
  );
}