"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  profession: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Client Name",
    profession: "Profession",
    image: "/img/testimonial-1.jpg", // Replace with your paths
    quote: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    id: 2,
    name: "Client Name",
    profession: "Profession",
    image: "/img/testimonial-2.jpg",
    quote: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    id: 3,
    name: "Client Name",
    profession: "Profession",
    image: "/img/testimonial-3.jpg",
    quote: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
];

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h6 className="text-cyan-500 uppercase tracking-widest font-semibold mb-2">
            Testimonial
          </h6>
          <h2 className="text-4xl font-bold text-slate-900">Our Clients Say!</h2>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
              >
                <div className="relative bg-white p-8 my-10 shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-sm group">
                  {/* Quote Icon - Using SVG for better control than FontAwesome */}
                  <div className="absolute -top-4 right-8 text-gray-100 group-hover:text-cyan-50 transition-colors">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-end mb-6">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover border-4 border-white shadow-sm"
                      />
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-bold text-slate-800 leading-tight">
                        {item.name}
                      </h5>
                      <p className="text-gray-500 text-sm italic">
                        {item.profession}
                      </p>
                    </div>
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-600 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-cyan-500 transition-colors" />
          <button className="w-4 h-2 rounded-full bg-red-500 transition-colors" />
          <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-cyan-500 transition-colors" />
        </div>
      </div>
    </section>
  );
}