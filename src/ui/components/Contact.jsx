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
} from "react-icons/fa6";

const contacts = [
  {
    icon: <FaGithub />,
    link: "https://github.com/Abdulrauf0767/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/rauf16476?igsh=cWVoNWRvdzl1aTZj",
  },
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/share/16sLrYFNbt/",
  },
  {
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@abdulraufrauf774",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com/AbdulRaufr19972",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/abdul-rauf-47574a361",
  },

  // WHATSAPP
  // Replace 923001234567 with your number
  // Format: countrycode + number (without + or spaces)
  {
    icon: <FaWhatsapp />,
    link: "https://api.whatsapp.com/send?phone=923148659943",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#0E0E0E] text-white py-24 overflow-hidden">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-neutral-500 uppercase tracking-[0.35em] text-xs">
          Contact
        </p>

        <h2 className="font-domine text-4xl md:text-6xl mt-4 font-light uppercase">
          Let’s Work Together
        </h2>
      </div>

      {/* ICON GRID */}
      <div className="max-w-[850px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        
        {contacts.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: i * 0.08,
            }}
            className="
              relative
              h-[140px]
              bg-[#151515]
              border border-white/10
              rounded-3xl
              flex items-center justify-center
              overflow-hidden
              group
              transition-all
            "
          >
            
            {/* GLOW */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500" />

            {/* ICON */}
            <div
              className="
                relative z-10
                text-4xl md:text-5xl
                text-neutral-300
                group-hover:text-white
                transition-all duration-300
              "
            >
              {item.icon}
            </div>

          </motion.a>
        ))}

      </div>

      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center mt-20 text-neutral-600 text-sm uppercase tracking-[0.2em]"
      >
        Available for freelance & full-stack opportunities
      </motion.div>

    </section>
  );
};

export default Contact;