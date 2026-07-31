import React from "react";
import { motion } from "motion/react";

import {
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#work" },
  { name: "Skills", href: "#skill" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    name: "GitHub",
    href: "https://github.com/Abdulrauf0767/",
  },
  
  {
    icon: <FaLinkedinIn />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abdul-rauf-47574a361",
  },
  {
    icon: <FaWhatsapp />,
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=923148659943",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#111111] text-white border-t border-white/10 overflow-hidden">

      {/* ───────── BACKGROUND GLOW ───────── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-20">

        {/* ───────── CTA SECTION ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pb-20 border-b border-white/10"
        >
          <div className="max-w-4xl">

            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-4">
              Let’s Connect
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-[-0.04em] leading-[1.05]">
              Let's Build Something That Works
            </h2>

            <p className="text-neutral-400 mt-6 text-sm sm:text-base leading-relaxed max-w-2xl">
              I build custom business systems that help growing businesses
              manage operations, reduce manual work, and turn complex
              workflows into practical software.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="
                inline-flex
                items-center
                gap-3
                mt-10
                px-8
                py-3.5
                rounded-full
                bg-white
                text-black
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.25em]
                font-semibold
                transition-all
              "
            >
              Let’s Talk
            </motion.a>
          </div>
        </motion.div>

        {/* ───────── FOOTER GRID ───────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 py-16">

          {/* ───────── LEFT ───────── */}
          <div>
            <h3 className="text-lg font-light uppercase tracking-[0.25em]">
              Business Systems Developer
            </h3>

            <p className="text-neutral-500 mt-5 text-sm leading-relaxed max-w-sm">
                I build practical software systems around real business workflows,
                with experience across logistics, restaurant operations, desktop
                applications, and modern web platforms.
            </p>
          </div>

          {/* ───────── CENTER LINKS ───────── */}
          <div className="sm:text-center">
            <h3 className="text-lg font-light uppercase tracking-[0.25em]">
              Navigation
            </h3>

            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="
                      text-sm
                      text-neutral-400
                      hover:text-white
                      transition-all
                      duration-300
                      uppercase
                      tracking-[0.15em]
                    "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ───────── RIGHT SOCIALS ───────── */}
          <div className="lg:text-right">
            <h3 className="text-lg font-light uppercase tracking-[0.25em]">
              Social
            </h3>

            <div className="mt-6 flex lg:justify-end gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.92 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="
                    w-12
                    h-12
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    flex
                    items-center
                    justify-center
                    text-lg
                    text-neutral-300
                    hover:text-white
                    hover:border-white/20
                    hover:bg-white/10
                    transition-all
                    duration-300
                  "
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <p className="text-neutral-500 text-sm mt-6">
              Available for freelance & full-stack projects.
            </p>
          </div>
        </div>

        {/* ───────── BOTTOM BAR ───────── */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs tracking-[0.15em] uppercase text-neutral-600 text-center md:text-left">
            © {new Date().getFullYear()} Abdul Rauf — All Rights Reserved
          </p>

          <p className="text-xs tracking-[0.15em] uppercase text-neutral-600 text-center md:text-right">
            Built With React • Tailwind • MERN Stack
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;