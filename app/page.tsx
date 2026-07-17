"use client";

import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import { motion } from "framer-motion";
import Benefits from "@/components/Benefits";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery"; 
import About from "@/components/About";
import Contact from "@/components/Contact";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Navbar />

      {/* Hero Section */}
      <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 sm:px-6">

        {/* Animated Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute top-[-200px] left-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur-md"
          >
            Fiberglass Solutions UAE
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold leading-tight md:text-7xl"
          >
            
            <span className="block text-gray-400">
              Car Wash Trolleys
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl"
          >
            Rust-free, lightweight, waterproof, and built for extreme UAE weather conditions.
            Custom fiberglass manufacturing for professional car wash businesses.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >

            {/* Products Button */}
            <a
              href="#products"
              className="rounded-2xl bg-white px-8 py-4 text-black font-semibold transition hover:scale-105"
            >
              View Products
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/971503072795"
              target="_blank"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/10 hover:scale-105"
            >
              WhatsApp Us
            </a>

          </motion.div>

        </div>
      </section>

      {/* Products Section */}
      <div id="products" className="mt-32">
      <Products />
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="mt-32">
        <Benefits />
      </div>

      {/* Stats Section */}
      <div id="stats" className="mt-32">
        <Stats />
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="mt-32">
        <Gallery />
      </div>

      {/* About Section */}
      <div id="about" className="mt-32">
        <About />
      </div>

      {/* Contact Section */}
      <div id="contact" className="mt-32">
        <Contact />
      </div>

      <WhatsappButton />
    </main>
  );
}



