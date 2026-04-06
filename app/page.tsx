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

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aquavibe Marine Services",
    description:
      "Leading ship chandler in Bangladesh supplying marine spare parts, lube oil, bunker, provisions, ship stores and repair services.",
    url: "https://aquavibemarineservices.com",
    telephone: "+8801728841299",
    email: "aquavibe2023@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6th floor, 146/A Simla House, Agrabad",
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
      "https://www.instagram.com/aquavibe2023/",
      "https://bd.linkedin.com/company/aquavibe-marine-services",
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

      {/* 2. About — dark navy, stats + split layout */}
      <AboutModern />

      {/* 3. Clients Banner — white, infinite marquee of shipping lines */}
      <ClientsBanner />

      {/* 4. Services — white, 12-card grid */}
      <ServicesSection />

      {/* 5. Products — dark navy, supply catalog */}
      <Products />

      {/* 6. Port Info — white, Chittagong / Mongla / Payra */}
      <PortInfo />

      {/* 7. Certifications — white, accreditations & compliance */}
      <Certifications />

      {/* 8. Why Choose Us — dark navy, benefit cards + FAQ */}
      <WhyChooseUs />

      {/* 9. CTA Banner — dramatic full-bleed ship image with contact box */}
      <CTABanner />

      {/* 10. Contact — white, form + info */}
      <ContactSection />

      {/* 11. Testimonials — dark navy, client reviews */}
      <TestimonialSection />
    </>
  );
}
