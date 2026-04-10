import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] min-h-[550px] flex items-center">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />

        <div className="relative z-10 max-w-[1222px] mx-auto px-4">
          <Link href="/products" className="text-secondary text-sm uppercase tracking-widest mb-6 inline-block">
            ← Back to Products
          </Link>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {product.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            {product.description}
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-[1222px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 space-y-20">

            {/* BULLET POINTS */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Key Highlights
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {product.bulletPoints?.map((item: string, i: number) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-2xl border hover:shadow-lg transition">
                    <p className="font-semibold text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* BENEFITS */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Key Benefits
              </h2>

              <div className="space-y-4">
                {product.benefits?.map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2 bg-secondary rounded-full" />
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Applications
              </h2>

              <div className="flex flex-wrap gap-3">
                {product.applications?.map((item: string, i: number) => (
                  <span
                    key={i}
                    className="px-5 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* SPECIFICATIONS */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Technical Specifications
              </h2>

              <div className="border rounded-2xl overflow-hidden">
                {product.specifications &&
                  Object.entries(product.specifications).map(([key, value], i) => (
                    <div
                      key={i}
                      className="grid grid-cols-2 px-6 py-4 border-b last:border-none"
                    >
                      <span className="font-semibold text-gray-500 capitalize">
                        {key}
                      </span>
                      <span className="font-bold text-gray-800">{value}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* WHY US */}
            <div className="bg-primary text-white rounded-3xl p-10">
              <h2 className="text-3xl font-bold mb-8">
                Why Choose Us
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {product.whyUs?.map((item: string, i: number) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-2 h-2 mt-2 bg-secondary rounded-full" />
                    <p className="text-gray-200 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* CTA CARD */}
              <div className="bg-primary text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Request a Quote
                </h3>

                <p className="text-gray-300 mb-6">
                  Get pricing, availability, and technical details for {product.title}.
                </p>

                <Link
                  href="/contact-us"
                  className="block text-center bg-secondary py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-orange-600 transition"
                >
                  Send Inquiry
                </Link>
              </div>

              {/* TRUST CARD */}
              <div className="p-6 bg-gray-50 rounded-2xl border">
                <h4 className="font-bold text-primary mb-2">
                  Trusted Supply
                </h4>
                <p className="text-sm text-gray-500">
                  Reliable sourcing, strict quality control, and fast delivery across all major ports in Bangladesh.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= PORT COVERAGE ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1222px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">
              Available Across Bangladesh
            </h2>
            <p className="text-gray-500">
              Serving major maritime hubs with fast delivery.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            {['Chattogram', 'Mongla', 'Payra'].map((port) => (
              <span
                key={port}
                className="px-6 py-3 bg-white border rounded-full font-semibold shadow-sm"
              >
                {port}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}