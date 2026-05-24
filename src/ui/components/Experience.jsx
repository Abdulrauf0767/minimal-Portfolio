import React from "react";
import { motion } from "motion/react";

const experiences = [
  {
    role: "Full Stack Developer (Freelance)",
    company: "Self-Employed / Remote Clients",
    duration: "2024 - Present",
    points: [
      "Built and maintained full-stack MERN applications independently",
      "Developed scalable backend systems using Node.js and Express",
      "Designed responsive UI with React and Tailwind CSS",
      "Handled authentication, APIs, and database architecture",
    ],
  },
  {
    role: "Project Developer",
    company: "Personal Projects",
    duration: "2023 - Present",
    points: [
      "Developed multiple production-level web applications",
      "Built TheHM Express with live parcel tracking system",
      "Implemented role-based dashboards and admin systems",
      "Focused on performance, scalability, and clean architecture",
    ],
  },
  {
    role: "Self Learning & Practice",
    company: "MERN Stack Ecosystem",
    duration: "2022 - Present",
    points: [
      "Mastered React, Node.js, Express, MongoDB stack",
      "Practiced real-world project development workflows",
      "Learned API design, authentication, and deployment",
      "Improved problem solving through continuous building",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-[#151515] text-white py-24">

      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-neutral-500 uppercase tracking-[0.35em] text-xs">
          Experience
        </p>

        <h2 className="font-domine text-4xl md:text-6xl mt-4 font-light uppercase">
          My Journey
        </h2>
      </div>

      {/* TIMELINE */}
      <div className="max-w-[1000px] mx-auto px-4 relative">

        {/* LINE */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-white/10" />

        <div className="space-y-16">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`
                relative flex flex-col md:flex-row gap-6 md:gap-12
                ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
              `}
            >

              {/* DOT */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 mt-2" />

              {/* CARD */}
              <div className="bg-[#151515] border border-white/10 rounded-3xl p-6 md:p-8 w-full hover:border-white/20 transition">

                <div className="flex justify-between flex-wrap gap-2">
                  <h3 className="text-xl md:text-2xl font-light uppercase">
                    {exp.role}
                  </h3>

                  <span className="text-xs text-neutral-500 uppercase tracking-widest">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-neutral-400 mt-2 text-sm">
                  {exp.company}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                  {exp.points.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;