import { motion } from "motion/react";

const skillData = [
  {
    title: "Business Applications",
    skills: [
      "C#",
      ".NET",
      "WPF",
      "MVVM",
      "Desktop Applications",
    ],
  },
  {
    title: "Database & Data",
    skills: [
      "SQL Server",
      "ADO.NET",
      "SQL Queries",
      "Relational Data",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Redux Toolkit",
    ],
  },
  {
    title: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Cloudinary",
      "Visual Studio",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skill" className="w-full bg-[#0E0E0E] text-white py-24">

      <div className="max-w-[1200px] mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-neutral-500 uppercase tracking-[0.35em] text-xs">
           Technical Expertise
          </p>

          <h2 className="font-domine text-4xl md:text-6xl mt-4 font-light uppercase tracking-[-0.04em]">
            Tools & Technologies
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">

          {skillData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                bg-[#151515]
                border border-white/10
                rounded-3xl
                p-8
                transition-all
                duration-500
                hover:border-white/30
                hover:shadow-[0_0_50px_rgba(255,255,255,0.10)]
                hover:-translate-y-2
                group
                overflow-hidden
              "
            >

              {/* GLOW EFFECT */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-r
                  from-white/10
                  via-transparent
                  to-white/10
                  blur-2xl
                "
              />

              {/* CONTENT */}
              <div className="relative z-10">

                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-2xl md:text-3xl mt-3 font-light uppercase tracking-[0.12em]">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-3 mt-6">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="
                        px-4 py-2
                        bg-[#0E0E0E]
                        border border-white/10
                        rounded-full
                        text-sm
                        text-neutral-300
                        transition
                        group-hover:border-white/30
                        group-hover:text-white
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;