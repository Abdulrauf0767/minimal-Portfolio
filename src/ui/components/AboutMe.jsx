import React from "react";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <section id="about" className="w-full min-h-screen bg-[#151515] text-white overflow-hidden rounded-md py-20">

      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4">

        {/* ───────────────── LEFT IMAGE ───────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >

          {/* IMAGE FRAME */}
          <div className="relative w-full max-w-[500px] h-[520px] sm:h-[580px] rounded-[32px] border border-white/10 bg-[#151515] overflow-hidden group">

            {/* IMAGE */}
            <motion.img
              src="/images/WhatsApp Image 2026-03-26 at 4.43.29 AM.jpeg"
              alt="Profile"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="w-full h-full object-cover object-center grayscale transition-all duration-700 group-hover:grayscale-0"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent" />

            {/* FLOAT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-2xl p-5"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Based In Pakistan
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-light">
                MERN Stack Developer
              </h3>
            </motion.div>

          </div>

          {/* GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[300px] h-[300px] bg-white/[0.03] rounded-full blur-[120px] -z-10"
          />

        </motion.div>

        {/* ───────────────── RIGHT CONTENT ───────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >

          {/* LABEL */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 uppercase tracking-[0.35em] text-[10px] sm:text-xs mb-4"
          >
            About Me
          </motion.span>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="font-domine text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[0.95] tracking-[-0.05em] font-light uppercase"
          >
            Creating <br />
            Scalable Digital <br />
            Products
          </motion.h2>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl"
          >
            I specialize in building fast, scalable, and modern MERN stack applications focused on performance, clean architecture, and seamless user experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl"
          >
            My focus is helping startups and growing businesses transform ideas into powerful web applications with responsive frontend systems and reliable backend infrastructures.
          </motion.p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">

            {[
              { num: "2+", label: "Years Learning" },
              { num: "10+", label: "Projects Built" },
              { num: "MERN", label: "Full Stack" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-[#151515] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition"
              >
                <h3 className="text-3xl font-light">{item.num}</h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a href="https://api.whatsapp.com/send?phone=923148659943" target="main" className="px-7 py-3 border border-white/10 rounded-full text-xs uppercase tracking-[0.2em] hover:border-white hover:bg-white/5 transition-all duration-300">
              Contact Me
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;