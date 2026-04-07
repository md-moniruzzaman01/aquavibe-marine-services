import ProductPageTemplate from "@/components/templates/ProductPageTemplate";

export const metadata = {
  title: "Marine Fender Supply Bangladesh | Aquavibe Marine",
  description: "Premium rubber and foam fenders for all vessel types supplied across Chittagong, Mongla & Payra ports.",
};

export default function MarineFenderSupplyPage() {
  return (
    <ProductPageTemplate
      tag="FENDERING"
      title="Marine Fender Supply"
      subtitle="Heavy-duty marine fenders delivered and installed ensuring the safety of your vessels and port infrastructure."
      imageSrc="https://images.unsplash.com/photo-1580974582390-349071fe0e7e?auto=format&fit=crop&q=80&w=1200"
      description={`Aquavibe Marine Services provides an extensive range of high-quality marine fendering solutions suitable for all vessel classes and port facilities in Bangladesh.

Our fenders are designed to absorb extreme kinetic energy and withstand harsh marine conditions, protecting both the ship's hull and the berthing structure. Sourced from globally approved manufacturers, our fendering systems ensure durable and compliant berthing operations.`}
      features={[
        "Pneumatic Rubber Fenders (Yokohama Type) for Ship-to-Ship (STS)",
        "Foam-Filled Fenders for extreme resilience without deflation",
        "Arch Fenders and Cylindrical Fenders for rigid quay wall protection",
        "Fast delivery and emergency installation services at anchorage",
        "D-Fenders and Extruded Rubber profiles for tugboats and workboats"
      ]}
    />
  );
}
