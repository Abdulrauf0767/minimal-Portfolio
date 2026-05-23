import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#151515] text-white border-t border-white/10">

      <div className="max-w-full mx-auto px-4 py-20">

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-[-0.03em]">
              Let’s Build Something Powerful
            </h2>

            <p className="text-neutral-400 mt-4 text-sm md:text-base leading-relaxed">
              I help startups and businesses turn ideas into scalable MERN stack applications.
              If you have a project — let’s talk.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your@email.com"
              className="
                inline-block
                mt-8
                px-8
                py-3
                bg-white
                text-black
                rounded-full
                text-xs
                uppercase
                tracking-[0.2em]
                font-medium
              "
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* GRID LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="text-left">
            <h3 className="text-lg font-light uppercase tracking-[0.2em]">
              Developer
            </h3>

            <p className="text-neutral-500 mt-4 text-sm leading-relaxed max-w-sm">
              MERN Stack Developer focused on building fast, scalable and modern web applications.
            </p>
          </div>

          {/* CENTER */}
          <div className="text-left md:text-center">
            <h3 className="text-lg font-light uppercase tracking-[0.2em]">
              Links
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li className="hover:text-white transition cursor-pointer">Home</li>
              <li className="hover:text-white transition cursor-pointer">About</li>
              <li className="hover:text-white transition cursor-pointer">Projects</li>
              <li className="hover:text-white transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="text-left md:text-right">
            <h3 className="text-lg font-light uppercase tracking-[0.2em]">
              Social
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li className="hover:text-white transition cursor-pointer">
                GitHub
              </li>
              <li className="hover:text-white transition cursor-pointer">
                LinkedIn
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Twitter / X
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Email
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-600 gap-3">

          <p>
            © {new Date().getFullYear()} All Rights Reserved
          </p>

          <p>
            Built with MERN Stack
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;