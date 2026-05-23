import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    title: "TheHM Express — Logistics Platform",
    desc: "End-to-end courier management system with real-time tracking and role-based operations.",
    overview:
      "A production-grade logistics platform designed to manage parcel lifecycle from booking to delivery. It supports real-time tracking updates, reseller workflows, and admin-level operational control with a structured role system.",
    features: [
      "Real-time parcel tracking with live status updates",
      "Order booking and dispatch workflow",
      "Reseller network management system",
      "Centralized admin control panel",
      "Secure role-based authentication flow",
    ],
    challenges: [
      "Synchronizing live parcel status across multiple users",
      "Designing scalable role-based architecture (Admin / Reseller / User)",
      "Optimizing delivery state transitions in real-time flow",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Socket.io"],
    live: "https://thehmexpress.com",
    type: "Production System",
    isLive: true,
  },

  {
    title: "E-Commerce Dropshipping System",
    desc: "Multi-vendor e-commerce system with seller onboarding and order flow automation.",
    overview:
      "A full-stack marketplace system where sellers manage product listings, users place orders, and administrators control platform activity through a centralized dashboard.",
    features: [
      "Multi-vendor seller system",
      "Cart & order management pipeline",
      "Admin moderation panel",
      "Product lifecycle handling",
    ],
    challenges: [
      "Managing cart state consistency across sessions",
      "Structuring multi-role access logic",
      "Handling product upload and media pipeline",
    ],
    tech: ["MERN Stack", "Redux Toolkit", "Cloudinary"],
    type: "Full Stack System",
    isLive: false,
  },

  {
    title: "Blog Management System",
    desc: "Authentication-based blogging platform with full CRUD operations.",
    overview:
      "A content management system allowing authenticated users to create, edit, and manage blog content with secure backend APIs and structured data handling.",
    features: [
      "Secure authentication flow",
      "Create, edit, delete posts",
      "Comment system support",
    ],
    challenges: [
      "JWT-based session handling",
      "Secure API endpoint protection",
      "Role-safe data operations",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    type: "Backend System",
    isLive: false,
  },

  {
    title: "Admin Analytics Dashboard",
    desc: "Role-based dashboard for managing users, data insights, and system analytics.",
    overview:
      "A structured admin panel designed to monitor system activity, manage users, and visualize key operational data through charts and metrics.",
    features: [
      "Role-based access control",
      "Analytics visualization",
      "User management system",
    ],
    challenges: [
      "Optimizing aggregated data queries",
      "Implementing secure role hierarchy",
      "Rendering dynamic analytics efficiently",
    ],
    tech: ["React", "Tailwind CSS", "Express"],
    type: "Admin System",
    isLive: false,
  },
];

export default function Project() {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full bg-[#0E0E0E] text-white py-24">

      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-neutral-500 uppercase tracking-[0.35em] text-xs">
          Selected Work
        </p>
        <h2 className="font-domine text-4xl md:text-6xl mt-4 font-light uppercase">
          Case Studies & Systems
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className="
              cursor-pointer
              bg-[#151515]
              border border-white/10
              rounded-3xl
              p-6
              relative
              overflow-hidden
              hover:border-white/30
              transition
            "
          >

            <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 blur-2xl transition" />

            <div className="relative z-10">

              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                {p.type}
              </span>

              <h3 className="text-2xl mt-3 font-light uppercase tracking-tight">
                {p.title}
              </h3>

              <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs border border-white/10 rounded-full text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.isLive && (
                <div className="mt-5 text-xs text-green-400 uppercase tracking-widest">
                  ● Production Live System
                </div>
              )}

            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="w-full max-w-3xl bg-[#151515] border border-white/10 rounded-3xl p-8 relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
            >

              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-3xl font-light uppercase">
                {active.title}
              </h2>

              <p className="text-neutral-400 mt-4 leading-relaxed">
                {active.overview}
              </p>

              <div className="mt-6">
                <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Key Features
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                  {active.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Engineering Challenges
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                  {active.challenges.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>

              {active.isLive && (
                <div className="flex gap-4 mt-8">
                  <a
                    href={active.live}
                    target="_blank"
                    className="px-5 py-2 bg-white text-black rounded-full text-xs uppercase"
                  >
                    View Live System
                  </a>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}