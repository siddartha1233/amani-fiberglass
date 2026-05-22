"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    title: "Car Wash Trolley",
    description:
      "Professional fiberglass trolley designed for commercial car wash operations.",
    image: "/images/products/trolley-1.jpeg",
  },

  {
    title: "Detailing Cart",
    description:
      "Lightweight and durable detailing solution for premium auto care businesses.",
    image: "/images/products/trolley-4.jpeg",
  },

  {
    title: "Custom Fiberglass",
    description:
      "Custom-made fiberglass products built for industrial and commercial use.",
    image: "/images/products/trolley-9.jpeg",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative px-6 py-32"
    >

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <h2 className="text-4xl font-bold md:text-6xl">
            Our Products
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Premium fiberglass solutions engineered for durability,
            performance, and UAE weather conditions.
          </p>

        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-8 md:grid-cols-3">

          {products.map((product, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
            >

              {/* Product Image */}
              <div className="relative h-72 overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {product.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  {product.description}
                </p>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/971503072795?text=Hi%20I%20am%20interested%20in%20the%20Car%20Wash%20Trolley"
                  target="_blank"
                  className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
                >
                  WhatsApp Inquiry
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}