import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Wash Trolley | Fiberglass Car Wash Trolley UAE",
  description:
    "Professional fiberglass car wash trolleys designed for car wash businesses, mobile detailing, and commercial cleaning operations in the UAE.",
  alternates: {
    canonical: "https://amanifiberglass.com/car-wash-trolley/",
  },
  openGraph: {
    title: "Car Wash Trolley | Fiberglass Car Wash Trolley UAE",
    description:
      "Professional fiberglass car wash trolleys for car wash businesses and mobile detailing operations in the UAE.",
    url: "https://amanifiberglass.com/car-wash-trolley/",
    siteName: "Amani Fiberglass",
    images: [
      {
        url: "/images/products/trolley-1.jpeg",
        width: 1200,
        height: 900,
        alt: "Fiberglass car wash trolley",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const features = [
  {
    title: "Fiberglass Construction",
    text: "Durable fiberglass construction designed for demanding professional car wash environments.",
  },
  {
    title: "Rust-Free Design",
    text: "Fiberglass provides excellent resistance to rust and corrosion compared with conventional metal carts.",
  },
  {
    title: "Built for Professional Use",
    text: "Designed around the needs of car wash operators, detailing businesses, and mobile cleaning teams.",
  },
  {
    title: "UAE-Ready",
    text: "Designed for practical use in demanding UAE working conditions.",
  },
];

const applications = [
  "Professional car wash businesses",
  "Mobile car wash services",
  "Auto detailing businesses",
  "Vehicle cleaning operations",
  "Commercial cleaning teams",
  "Car care centers",
];

const faqs = [
  {
    question: "What is a car wash trolley?",
    answer:
      "A car wash trolley is a mobile cleaning station designed to help car wash and detailing operators organize and transport equipment during vehicle cleaning operations.",
  },
  {
    question: "Why choose a fiberglass car wash trolley?",
    answer:
      "Fiberglass offers a strong, lightweight and corrosion-resistant alternative to conventional metal construction, making it suitable for wet working environments.",
  },
  {
    question: "Are your car wash trolleys suitable for professional businesses?",
    answer:
      "Yes. Amani Fiberglass car wash trolleys are designed for professional car wash, mobile detailing and commercial vehicle-cleaning applications.",
  },
  {
    question: "Can Amani Fiberglass make custom products?",
    answer:
      "Yes. Amani Fiberglass also manufactures custom fiberglass products for commercial and industrial applications.",
  },
];

export default function CarWashTrolleyPage() {
  return (
    <main className="bg-black text-white">

      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-lg font-semibold tracking-wide"
          >
            Amani Fiberglass
          </Link>

          <Link
            href="/"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Amani Fiberglass
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Car Wash
              <span className="block text-gray-400">
                Trolley
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
              Professional fiberglass car wash trolleys designed for
              car wash businesses, mobile detailing teams, and commercial
              vehicle cleaning operations.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/971503072795?text=Hi%20I%20am%20interested%20in%20the%20Car%20Wash%20Trolley"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-black transition hover:scale-105"
              >
                Get a Quote
              </a>

              <a
                href="#features"
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center font-semibold backdrop-blur-md transition hover:bg-white/10"
              >
                Explore Trolley
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <Image
              src="/images/products/trolley-1.jpeg"
              alt="Professional fiberglass car wash trolley"
              width={1200}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Professional Equipment
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            A Car Wash Trolley Built for Daily Work
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-400">
            Amani Fiberglass manufactures car wash trolleys for businesses
            that need a practical and durable mobile cleaning solution.
            Fiberglass construction makes the trolley well suited to wet
            working environments while providing resistance to rust and
            corrosion.
          </p>

        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-y border-white/10 bg-white/[0.02] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
              Why Fiberglass
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Designed for Car Wash Professionals
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  {feature.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Product Image / Detail */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/images/products/trolley-4.jpeg"
              alt="Fiberglass detailing and car wash trolley"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
              Applications
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Suitable for Multiple Cleaning Operations
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {applications.map((application) => (
                <div
                  key={application}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-gray-300"
                >
                  {application}
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* Custom Manufacturing */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center md:p-16">

          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Custom Fiberglass Manufacturing
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Need a Custom Car Wash Trolley?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Amani Fiberglass can develop custom fiberglass products for
            specific commercial and industrial requirements.
          </p>

          <a
            href="https://wa.me/971503072795?text=Hi%20I%20would%20like%20to%20discuss%20a%20custom%20fiberglass%20car%20wash%20trolley"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Discuss Your Requirement
          </a>

        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl">

          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Car Wash Trolley Questions
            </h2>
          </div>

          <div className="space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-relaxed text-gray-400">
                  {faq.answer}
                </p>
              </details>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-10 text-center text-black md:p-16">

          <h2 className="text-4xl font-bold md:text-5xl">
            Looking for a Car Wash Trolley?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Contact Amani Fiberglass to discuss your car wash trolley
            requirements.
          </p>

          <a
            href="https://wa.me/971503072795?text=Hi%20I%20am%20interested%20in%20your%20Car%20Wash%20Trolley"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-2xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            WhatsApp Us
          </a>

        </div>
      </section>

    </main>
  );
}