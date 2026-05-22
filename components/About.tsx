"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6"
    >

      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Small Tag */}
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur-md">
            About Amani Fiberglass
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Built For UAE
            <span className="block text-gray-400">
              Commercial Use
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-8 text-lg leading-relaxed text-gray-400">
            Amani Fiberglass specializes in premium fiberglass car wash trolleys,
            detailing carts, and custom fiberglass fabrication designed for
            commercial and industrial environments.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Our products are engineered to withstand extreme UAE weather conditions
            while remaining lightweight, waterproof, durable, and rust-resistant.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="#contact"
              className="rounded-2xl bg-white px-8 py-4 text-black font-semibold transition hover:scale-105"
            >
              Contact Us
            </a>

            <a
              href="#products"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/10"
            >
              View Products
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-blue-500/10 blur-3xl" />

          {/* Video Card */}
          <div className="relative h-[500px] overflow-hidden rounded-[40px] border border-white/10">

            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src="/videos/trolley-video.mp4"
                type="video/mp4"
              />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Text */}
            <div className="absolute bottom-0 z-10 p-8">

              <h3 className="text-3xl font-bold">
                Premium Fiberglass Manufacturing
              </h3>

              <p className="mt-4 text-gray-300">
                Custom-built solutions for professional car wash businesses
                and industrial applications.
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}