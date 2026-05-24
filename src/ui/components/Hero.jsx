import React from "react";
import { motion } from "motion/react";

const orbitItems = [
  {
    text: "React",
    angle: "0deg",
  },
  {
    text: "Node.js",
    angle: "120deg",
  },
  {
    text: "MongoDB",
    angle: "240deg",
  },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden py-20">

      {/* ───────────────── BACKGROUND GLOW ───────────────── */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[-20%]
            left-[-10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-white/[0.03]
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-20%]
            right-[-10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-white/[0.02]
            blur-[140px]
          "
        />

      </div>

      {/* ───────────────── MAIN CONTAINER ───────────────── */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* ───────────────── LEFT CONTENT ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-start justify-center"
        >

          {/* SMALL LABEL */}
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="
              text-neutral-500
              uppercase
              text-[10px]
              sm:text-xs
              mb-6
            "
          >
            MERN Stack Developer
          </motion.span>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-domine
              text-5xl
              sm:text-6xl
              md:text-7xl
              xl:text-[7rem]
              leading-[0.88]
              font-light
              uppercase
              tracking-[-0.06em]
            "
          >
            Fast. <br />
            Scalable. <br />
            Built To Grow.
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 1,
            }}
            className="
              mt-8
              max-w-xl
              text-neutral-400
              text-sm
              md:text-base
              leading-relaxed
            "
          >
            I build high-performance MERN stack applications focused on
            scalability, clean architecture, and modern user experiences
            for startups and growing businesses.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="flex flex-wrap gap-4 mt-10"
          >

            <motion.a
            href="https://api.whatsapp.com/send?phone=923148659943"
            target="main"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
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
              Contact
            </motion.a>

          </motion.div>

        </motion.div>

        {/* ───────────────── RIGHT VISUAL ───────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex items-center justify-center"
        >

          {/* MAIN ORBIT */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              relative
              w-[320px]
              h-[320px]
              sm:w-[420px]
              sm:h-[420px]
              lg:w-[540px]
              lg:h-[540px]
              rounded-full
            "
          >

            {/* OUTER RING */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                border
                border-white/10
              "
            />

            {/* SECOND RING */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-[12%]
                rounded-full
                border
                border-dashed
                border-white/10
              "
            />

            {/* PULSE RING */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-[18%]
                rounded-full
                border
                border-white/10
              "
            />

            {/* ORBIT ITEMS */}
            {orbitItems.map((item, index) => (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 w-full h-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(${item.angle})`,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.15,
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    px-5
                    py-2
                    border
                    border-white/10
                    rounded-full
                    backdrop-blur-xl
                    bg-white/[0.03]
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[0.3em]
                    text-neutral-300
                    shadow-[0_0_30px_rgba(255,255,255,0.04)]
                  "
                >
                  {item.text}
                </motion.div>
              </div>
            ))}

            {/* CENTER CIRCLE */}
            <div
              className="
                absolute
                inset-[24%]
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                backdrop-blur-md
                bg-white/[0.02]
                shadow-[0_0_80px_rgba(255,255,255,0.03)]
              "
            >

              {/* INNER FLOAT */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-center"
              >

                <motion.h2
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                    font-domine
                    text-5xl
                    md:text-7xl
                    font-light
                    tracking-tight
                  "
                >
                  MERN
                </motion.h2>

                <p
                  className="
                    mt-4
                    text-[10px]
                    md:text-xs
                    uppercase
                    tracking-[0.4em]
                    text-neutral-500
                  "
                >
                  Full Stack Developer
                </p>

              </motion.div>

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;