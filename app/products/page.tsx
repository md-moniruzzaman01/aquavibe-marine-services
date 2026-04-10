import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/data';

export const metadata = {
  title: "Products | Sultan Fleet Serve",
  description: "Premium marine equipment, cargo handling solutions, and spare parts supply across Bangladesh ports.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-primary pt-32 pb-28 overflow-hidden">
        <div className="max-w-[1222px] mx-auto px-4 text-center">
          
          <p className="text-secondary uppercase tracking-[0.3em] text-xs mb-4 font-bold">
            Marine Equipment & Solutions
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Industrial-Grade <br /> Maritime Products
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Reliable equipment and supply solutions designed for port operations, offshore logistics, and heavy-duty marine environments.
          </p>
        </div>

        {/* subtle bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white" />
      </section>


      {/* ================= PRODUCTS ================= */}
      <section className="py-24">
        <div className="max-w-[1222px] mx-auto px-4">

          {/* Section Header */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Our Product Range
              </h2>
              <p className="text-gray-500 max-w-lg">
                Engineered solutions for cargo handling, vessel protection, and industrial supply.
              </p>
            </div>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">

            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group block"
              >
                {/* IMAGE */}
                <div className="relative h-[260px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* BULLETS */}
                  <ul className="space-y-2 mb-4">
                    {product.bulletPoints?.slice(0, 2).map((item: string, i: number) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* LINK */}
                  <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition">
                    View Details
                    <span className="ml-2 group-hover:translate-x-1 transition">→</span>
                  </span>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 bg-primary text-center">
        <div className="max-w-[900px] mx-auto px-4">

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Need Custom Supply or Bulk Order?
          </h2>

          <p className="text-gray-300 mb-10 text-lg">
            Our team is ready to support your vessel or port operation with fast delivery and reliable sourcing.
          </p>

          <Link
            href="/contact-us"
            className="inline-block bg-secondary text-white font-bold py-4 px-10 rounded-xl hover:bg-orange-600 transition shadow-lg"
          >
            Request a Quote
          </Link>

        </div>
      </section>

    </main>
  );
}