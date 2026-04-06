import Image from "next/image";
import HeroCarousel from "./Home/partials/HeroSlider";
import ServicesGrid from "./Home/partials/ServicesGrid";
import ProductsSection from "./Home/partials/ProductsSection";
import ServicesSection from "./Home/partials/ServicesSection";
import AboutModern from "./Home/partials/About";
import Products from "./Home/partials/Products";
import PortInfo from "./Home/partials/PartInfo";
import WhyChooseUs from "./Home/partials/WhyChooseUs";
import ContactSection from "./Home/partials/ContactUs";
import TestimonialSection from "./Home/partials/Testimonial";



// app/page.tsx  (add alongside your existing JSX)
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
      latitude: 22.2730,
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
      <HeroCarousel/>
      <AboutModern/>
      <ServicesSection/>
      <Products/>
      <PortInfo/>
      <WhyChooseUs/>
      <ContactSection/>

      <TestimonialSection/>
      {/* <AboutSection/> */}
      {/* <ServicesGrid/> */}
      {/* <ProductsSection/> */}
      


      
    </>
  );
}

