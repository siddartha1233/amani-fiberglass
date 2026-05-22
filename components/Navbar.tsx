"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Navbar */}
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
          >

            <Image
              src="/logo/logo.png"
              alt="Amani Fiberglass"
              width={55}
              height={55}
              priority
              className="rounded-full object-cover"
            />

            <div className="hidden sm:block">

              <h1 className="text-xl font-bold tracking-wide text-white">
                Amani Fiberglass
              </h1>

              <p className="text-xs text-gray-400">
                Car Wash Trolley
              </p>

            </div>

          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white">

            <a href="#home" className="hover:text-gray-300 transition">
              Home
            </a>

            <a href="#products" className="hover:text-gray-300 transition">
              Products
            </a>

            <a href="#benefits" className="hover:text-gray-300 transition">
              Benefits
            </a>

            <a href="#about" className="hover:text-gray-300 transition">
              About
            </a>

            <a href="#contact" className="hover:text-gray-300 transition">
              Contact
            </a>

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/971503072795"
              target="_blank"
              className="hidden md:flex rounded-xl bg-white px-5 py-2 font-medium text-black transition hover:scale-105"
            >
              WhatsApp
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-white md:hidden"
            >

              {mobileMenu ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}

            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-black/90 p-6 backdrop-blur-xl md:hidden">

            <nav className="flex flex-col gap-5 text-white">

              <a
                href="#home"
                onClick={() => setMobileMenu(false)}
                className="transition hover:text-gray-300"
              >
                Home
              </a>

              <a
                href="#products"
                onClick={() => setMobileMenu(false)}
                className="transition hover:text-gray-300"
              >
                Products
              </a>

              <a
                href="#benefits"
                onClick={() => setMobileMenu(false)}
                className="transition hover:text-gray-300"
              >
                Benefits
              </a>

              <a
                href="#about"
                onClick={() => setMobileMenu(false)}
                className="transition hover:text-gray-300"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="transition hover:text-gray-300"
              >
                Contact
              </a>

              {/* Mobile WhatsApp */}
              <a
                href="https://wa.me/971503072795"
                target="_blank"
                className="mt-2 rounded-xl bg-white px-5 py-3 text-center font-medium text-black"
              >
                WhatsApp Us
              </a>

            </nav>

          </div>
        )}

      </div>

    </header>
  );
}