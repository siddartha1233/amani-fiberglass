"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Flame,
  Droplets,
  Feather,
  Wrench,
  Package,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Rust Resistant",
    description:
      "Fiberglass does not rust like metal, making it perfect for long-term outdoor use.",
  },
  {
    icon: Flame,
    title: "Heat Resistant",
    description:
      "Designed to withstand extreme UAE temperatures and harsh environments.",
  },
  {
    icon: Droplets,
    title: "Waterproof",
    description:
      "Perfect for wet environments like car wash and detailing operations.",
  },
  {
    icon: Feather,
    title: "Lightweight",
    description:
      "Easy to move while remaining strong and highly durable.",
  },
  {
    icon: Wrench,
    title: "Custom Made",
    description:
      "Manufactured according to your business requirements and specifications.",
  },
  {
    icon: Package,
    title: "Commercial Grade",
    description:
      "Built for professional industrial and commercial applications.",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-32 px-6">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold md:text-6xl">
            Why Choose Fiberglass?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Premium fiberglass solutions engineered for durability,
            performance, and UAE weather conditions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
              >

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-gray-400">
                  {benefit.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}