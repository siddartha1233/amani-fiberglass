"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-32 px-6"
      >

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
              Contact Us
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Get in touch for custom fiberglass solutions,
              car wash trolleys, and commercial projects.
            </p>

          </motion.div>

          {/* Grid */}
          <div className="grid gap-10 md:grid-cols-2">

            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-md"
            >

              <h3 className="text-3xl font-bold">
                Let’s Build Something Durable
              </h3>

              <p className="mt-6 leading-relaxed text-gray-400">
                Contact Amani Fiberglass for fiberglass
                manufacturing solutions designed for UAE commercial use.
              </p>

              {/* Contact Items */}
              <div className="mt-10 space-y-6">

                {/* Phone */}
                <div className="flex items-start gap-4">

                  <div className="rounded-2xl bg-white/10 p-4">
                    <Phone size={24} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-400">
                      Phone
                    </p>

                    <p className="text-base font-medium sm:text-lg">
                      +971 50 307 2795
                    </p>
                  </div>

                </div>

                {/* Email */}
                <div className="flex items-start gap-4">

                  <div className="rounded-2xl bg-white/10 p-4">
                    <Mail size={24} />
                  </div>

                  <div className="min-w-0">

                    <p className="text-sm text-gray-400">
                      Email
                    </p>

                    <p className="break-all text-base font-medium sm:text-lg">
                      amanifiberglass@gmail.com
                    </p>

                  </div>

                </div>

                {/* Location */}
                <div className="flex items-start gap-4">

                  <div className="rounded-2xl bg-white/10 p-4">
                    <MapPin size={24} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-400">
                      Location
                    </p>

                    <p className="text-base font-medium sm:text-lg">
                      United Arab Emirates
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-md"
            >

              <form
                action="https://formspree.io/f/xjgzrvvj"
                method="POST"
                className="space-y-6"
              >

                {/* Name */}
                <div>

                  <label className="mb-2 block text-sm text-gray-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-white/30"
                  />

                </div>

                {/* Email */}
                <div>

                  <label className="mb-2 block text-sm text-gray-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-white/30"
                  />

                </div>

                {/* Message */}
                <div>

                  <label className="mb-2 block text-sm text-gray-400">
                    Message
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-white/30"
                  />

                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-white py-4 font-semibold text-black transition hover:scale-[1.02]"
                >
                  Send Inquiry
                </button>

              </form>

            </motion.div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold">
              Amani Fiberglass
            </h2>

            <p className="mt-2 text-gray-400">
              Fiberglass solutions for UAE commercial use.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-gray-400">

            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#products" className="hover:text-white transition">
              Products
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

      </footer>
    </>
  );
} 