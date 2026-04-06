import ProductPageTemplate from "@/components/templates/ProductPageTemplate";

export const metadata = {
  title: "Ship Stores Supply | Aquavibe Marine Services",
  description: "Comprehensive deck, engine, and cabin store supplies delivered directly to your vessel in Bangladesh.",
};

export default function StoreSupplyPage() {
  return (
    <ProductPageTemplate
      tag="DECK & ENGINE STORES"
      title="Ship Stores Supply"
      subtitle="Complete outfitting of deck, engine room, and cabin consumables delivered reliably to your vessel."
      imageSrc="https://images.unsplash.com/photo-1579450841208-8eec28e08500?auto=format&fit=crop&q=80&w=1200"
      description={`A well-stocked vessel is a safe vessel. Aquavibe Marine provides an exhaustive catalog of marine stores, ensuring that your crew has the right tools, safety equipment, and consumables required for a rigorous voyage.

We leverage our expansive warehouse facilities in Chittagong to maintain stock of critical maritime supplies, strictly adhering to the IMPA and ISSA catalogs for precise order fulfillment.`}
      features={[
        "Deck stores: marine paints, mooring ropes, wire ropes, and lifting gear",
        "Engine stores: hand tools, cutting tools, measuring equipment, valves and pipes",
        "Cabin stores: cleaning materials, bed linen, and galley equipment",
        "Safety & Rescue: SOLAS approved life-saving and fire-fighting appliances",
        "All items cross-referenced with latest IMPA / ISSA standards"
      ]}
    />
  );
}
