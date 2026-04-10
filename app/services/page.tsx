import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/lib/data';

export const metadata = {
  title: "Marine Services | Sultan Fleet Serve",
  description: "Professional marine services including hull cleaning, repair, and offshore support across Bangladesh ports.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-primary pt-32 pb-28 text-center">
        <div className="max-w-[900px] mx-auto px-4">

          <p className="text-secondary uppercase tracking-[0.3em] text-xs mb-4 font-bold">
            Marine Operations Support
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Maritime Services
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Reliable, efficient, and safety-focused marine services designed to support vessel operations and minimize downtime across all major ports.
          </p>
        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-24">
        <div className="max-w-[1222px] mx-auto px-4">

          {/* SECTION HEADER */}
          <div className="mb-16 flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Our Services
              </h2>
              <p className="text-gray-500 max-w-lg">
                End-to-end marine solutions covering maintenance, repair, and operational support.
              </p>
            </div>
          </div>

          {/* LIST */}
          <div className="space-y-16">

            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="grid md:grid-cols-2 gap-10 items-center group"
              >

                {/* IMAGE */}
                <div className="relative h-[280px] rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* BULLETS */}
                  <ul className="space-y-3 mb-6">
                    {service.bulletPoints?.slice(0, 3).map((item: string, i: number) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* LINK */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center font-semibold text-primary group-hover:text-secondary transition"
                  >
                    View Service Details
                    <span className="ml-2 group-hover:translate-x-1 transition">→</span>
                  </Link>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 bg-primary text-center">
        <div className="max-w-[800px] mx-auto px-4">

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Need Immediate Service Support?
          </h2>

          <p className="text-gray-300 mb-10 text-lg">
            Our marine team is available 24/7 to respond to urgent service requests at any port location.
          </p>

          <Link
            href="/contact-us"
            className="inline-block bg-secondary text-white font-bold py-4 px-10 rounded-xl hover:bg-orange-600 transition shadow-lg"
          >
            Request Service
          </Link>

        </div>
      </section>

    </main>
  );
}