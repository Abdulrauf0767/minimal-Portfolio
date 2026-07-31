import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    title: "HM Express — Logistics & Reseller Platform",
    desc: "B2B logistics and reseller management platform built to centralize shipments, customers, products, and reseller operations.",
    overview:
      "A production logistics platform designed for a B2B courier and reseller workflow. The system brings customer, shipment, product, reseller, and commission management into one centralized platform, helping the business manage operations more efficiently.",
    features: [
      "Shipment and order management workflow",
      "Courier partner management",
      "Reseller network management",
      "Customer and product management",
      "Centralized admin dashboard",
      "Role-based access and operational controls",
    ],
    challenges: [
      "Managing multiple business roles and permissions",
      "Structuring interconnected customer, shipment, product, and reseller data",
      "Building an operational workflow around real-world courier processes",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    live: "https://thehmexpress.com",
    type: "Production System",
    isLive: true,
  },

  {
    title: "FoodPoint — Restaurant POS & Operations",
    desc: "Restaurant POS system designed to manage orders, menu items, tables, staff, and day-to-day restaurant operations.",
    overview:
      "A restaurant POS system built around real-world restaurant workflows. FoodPoint brings order management, menu management, table reservations, staff management, and operational controls into a centralized desktop application.",
    features: [
      "Restaurant order management",
      "Menu and category management",
      "Table reservation workflow",
      "Staff management and role hierarchy",
      "KOT / docket approval workflow",
      "Admin dashboard for restaurant operations",
    ],
    challenges: [
      "Designing the application around real restaurant workflows",
      "Managing role-based operational permissions",
      "Structuring order and KOT approval processes",
      "Creating a practical interface for fast-paced restaurant environments",
    ],
    tech: ["C#", "WPF", ".NET", "SQL Server", "ADO.NET", "MVVM"],
    type: "Restaurant POS",
    isLive: false,
  },

  {
    title: "Hotel POS — Order Management System",
    desc: "Desktop POS application for managing restaurant orders, menu items, customers, order details, and operational workflows.",
    overview:
      "A WPF-based restaurant and hotel POS application focused on practical order management. The system includes menu management, order processing, customer information, order details, filtering, and responsive administrative interfaces.",
    features: [
      "Menu and category management",
      "Order creation and processing",
      "Customer information management",
      "Order filtering and status management",
      "Order detail and item management",
      "Responsive desktop interface",
    ],
    challenges: [
      "Designing reusable WPF components for different workflows",
      "Managing relational order and order-item data",
      "Implementing filtering and status-based order management",
      "Building a responsive desktop experience across different screen sizes",
    ],
    tech: ["C#", "WPF", ".NET", "SQL Server", "ADO.NET", "MVVM"],
    type: "Desktop Business System",
    isLive: false,
  },

  {
    title: "E-Commerce — Multi-Vendor Platform",
    desc: "Multi-vendor e-commerce platform with product management, seller workflows, cart, orders, and centralized administration.",
    overview:
      "A full-stack e-commerce platform designed around a multi-vendor business model. Sellers can manage products while customers browse products, manage carts, and place orders through a centralized platform.",
    features: [
      "Multi-vendor seller management",
      "Product listing and management",
      "Cart and order management",
      "Admin dashboard",
      "Seller onboarding workflow",
      "Product media management",
    ],
    challenges: [
      "Managing multiple user roles and permissions",
      "Maintaining cart and order state",
      "Structuring product and seller relationships",
      "Handling product media and upload workflows",
    ],
    tech: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Cloudinary"],
    type: "Full Stack System",
    isLive: false,
  },
];

export default function Project() {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className="w-full bg-[#0E0E0E] text-white py-24">

      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-neutral-500 uppercase tracking-[0.35em] text-xs">
          Selected Work
        </p>
        <h2 className="font-domine text-4xl md:text-6xl mt-4 font-light uppercase">
          Business Systems & Case Studies
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