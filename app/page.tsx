import HeroCarousel from "./Home/partials/HeroSlider";
import ServicesSection from "./Home/partials/ServicesSection";
import AboutModern from "./Home/partials/About";
import Products from "./Home/partials/Products";
import PortInfo from "./Home/partials/PartInfo";
import WhyChooseUs from "./Home/partials/WhyChooseUs";
import ContactSection from "./Home/partials/ContactUs";
import TestimonialSection from "./Home/partials/Testimonial";
import ClientsBanner from "./Home/partials/ClientsBanner";
import CTABanner from "./Home/partials/CTABanner";
import Certifications from "./Home/partials/Certifications";
import AboutSection from "./Home/partials/AboutSection";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sultan Fleet Serve",
    description:
      "Leading ship chandler in Bangladesh supplying marine spare parts, lube oil, bunker, provisions, ship stores and repair services.",
    url: "https://sultanfleetserve.com",
    telephone: "+8801624434052",
    email: "sultanfleetserve@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Sultan Fleet Serve, Oriyent Building, 3 No. Fakirhat Bandar",
      addressLocality: "Chittagong",
      postalCode: "4100",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.273,
      longitude: 91.8321,
    },
    openingHours: "Mo-Su 00:00-24:00",
    areaServed: ["Chittagong", "Mongla", "Payra"],
    serviceType: [
      "Marine Fender Supply",
      "Ship Spare Parts",
      "Marine Lube Oil",
      "Bunker Supply",
      "Ship Stores Supply",
      "Food Provision Supply",
      "Ship Repair Services",
      "Ship Manning and Management",
    ],
    sameAs: [
      "https://www.instagram.com/",
      "https://bd.linkedin.com/company/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Carousel — dark / full-bleed */}
      <HeroCarousel />

      {/* 3. Clients Banner — white, infinite marquee of shipping lines */}
      <ClientsBanner />

      {/* 2. About — dark navy, stats + split layout */}
      <AboutModern />
      {/* <AboutSection /> */}
      {/* 4. Services — white, 12-card grid */}
      <ServicesSection />

      {/* 5. Products — dark navy, supply catalog */}
      <Products />

      {/* 6. Port Info — white, Chittagong / Mongla / Payra */}

      {/* 7. Certifications — white, accreditations & compliance */}
      {/* <Certifications /> */}

      {/* 8. Why Choose Us — dark navy, benefit cards + FAQ */}
      <WhyChooseUs />

      {/* 9. CTA Banner — dramatic full-bleed ship image with contact box */}

      <PortInfo />
      {/* 10. Contact — white, form + info */}
      <ContactSection />

      {/* 11. Testimonials — dark navy, client reviews */}
      <TestimonialSection />
    </>
  );
}
