"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    image: "/images/products/trolley-1.jpeg",
    title: "Premium Fiberglass Trolley",
  },
  {
    image: "/images/products/trolley-2.jpeg",
    title: "Custom Storage Design",
  },
  {
    image: "/images/products/trolley-3.jpeg",
    title: "Professional Car Wash Setup",
  },
  {
    image: "/images/products/trolley-4.jpeg",
    title: "Commercial Grade Fiberglass",
  },
  {
    image: "/images/products/trolley-5.jpeg",
    title: "Luxury Detailing Equipment",
  },
  {
    image: "/images/products/trolley-6.jpeg",
    title: "Industrial Fiberglass Solutions",
  },
  {
    image: "/images/products/trolley-7.jpeg",
    title: "Premium Wash Station",
  },
  {
    image: "/images/products/trolley-8.jpeg",
    title: "Professional Detailing Cart",
  },
  {
    image: "/images/products/trolley-9.jpeg",
    title: "Commercial Utility Trolley",
  },
  {
    image: "/images/products/trolley-10.jpeg",
    title: "Heavy Duty Fiberglass Build",
  },
  {
    image: "/images/products/trolley-11.jpeg",
    title: "Custom Car Wash Equipment",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
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
            Our Gallery
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Explore our premium fiberglass car wash trolleys
            and custom commercial solutions.
          </p>

        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">

          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-black ${
                index % 3 === 0
                  ? "h-[300px] sm:h-[400px] md:row-span-2 md:h-[500px]"
                  : "h-[220px] sm:h-[240px]"
              }`}
            >

              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 z-10 p-6">

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}