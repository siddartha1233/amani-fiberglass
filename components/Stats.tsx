"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    label: "Custom Projects",
  },
  {
    number: "100%",
    label: "Rust Resistant",
  },
  {
    number: "50°C+",
    label: "UAE Heat Ready",
  },
  {
    number: "24/7",
    label: "Commercial Use",
  },
];

export default function Stats() {
  return (
    <section className="relative py-32 px-6">

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-md"
        >

          <div className="grid gap-10 text-center md:grid-cols-4">

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >

                {/* Number */}
                <h2 className="text-5xl font-extrabold md:text-6xl">
                  {stat.number}
                </h2>

                {/* Label */}
                <p className="mt-4 text-lg text-gray-400">
                  {stat.label}
                </p>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}