import React from "react";
import { motion } from "motion/react";

const contacts = [
  {
    label: "Email",
    value: "yourmail@gmail.com",
    link: "mailto:yourmail@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "View Profile",
    link: "https://linkedin.com",
  },
  {
    label: "GitHub",
    value: "View Projects",
    link: "https://github.com",
  },
  {
    label: "Twitter / X",
    value: "Follow Me",
    link: "https://twitter.com",
  },
];

const Contact = () => {
  return (
    <section className="w-full bg-[#0E0E0E] text-white py-24">

      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-neutral-500 uppercase tracking-[0.35em] text-xs">
          Contact
        </p>

        <h2 className="font-domine text-4xl md:text-6xl mt-4 font-light uppercase">
          Let’s Work Together
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-[1000px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">

        {contacts.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.03,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
            }}
            className="
              relative
              bg-[#151515]
              border border-white/10
              rounded-3xl
              p-8
              overflow-hidden
              group
              transition
            "
          >

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-2xl transition" />

            <div className="relative z-10">

              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                {item.label}
              </p>

              <h3 className="text-2xl md:text-3xl mt-3 font-light uppercase tracking-[-0.02em]">
                {item.value}
              </h3>

              <div className="mt-6 text-xs uppercase tracking-[0.25em] text-neutral-400 group-hover:text-white transition">
                Click to Open →
              </div>

            </div>

          </motion.a>
        ))}

      </div>

      {/* FOOTER NOTE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-20 text-neutral-600 text-sm"
      >
        Available for freelance & full-stack opportunities
      </motion.div>

    </section>
  );
};

export default Contact;