import { motion } from "motion/react";

const experiences = [
  {
    role: "Business Systems Developer",
    company: "Independent Software Development",
    duration: "2026 - Present",
    points: [
      "Building custom software systems around real-world business workflows",
      "Developing restaurant, logistics, order, inventory, and management solutions",
      "Working with C#, .NET, WPF, SQL Server, ADO.NET, and MVVM",
      "Designing practical interfaces focused on usability and operational efficiency",
    ],
  },

  {
    role: "Software Developer",
    company: "HM Express — Logistics & Reseller Platform",
    duration: "2025 - Present",
    points: [
      "Developed a business management platform for courier and reseller operations",
      "Built workflows for customers, shipments, products, resellers, and commissions",
      "Implemented role-based dashboards and centralized operational management",
      "Developed the platform using React, Node.js, Express, and MongoDB",
    ],
  },

  {
    role: "Desktop Application Developer",
    company: "FoodPoint & Hotel POS Systems",
    duration: "2026 - Present",
    points: [
      "Building restaurant and hotel POS systems using C#, WPF, and SQL Server",
      "Developed order, menu, customer, table, and staff management workflows",
      "Implemented MVVM architecture, data binding, commands, and reusable UI components",
      "Designed systems around practical restaurant and hospitality operations",
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
          Building In The Real World
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