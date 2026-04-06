import ProductPageTemplate from "@/components/templates/ProductPageTemplate";

export const metadata = {
  title: "Bunker Supply Services | Aquavibe Marine",
  description: "Physical bunker supply of VLSFO, LSMGO, and HFO across Chittagong, Mongla, and Payra ports.",
};

export default function BunkerSupplyPage() {
  return (
    <ProductPageTemplate
      tag="BUNKER SUPPLY"
      title="Physical Bunker Supply"
      subtitle="Reliable, ISO-compliant fuel supply meeting MARPOL Annex VI standards across all Bangladesh major maritime zones."
      imageSrc="https://images.unsplash.com/photo-1542282811-943ef1a17770?auto=format&fit=crop&q=80&w=1200"
      description={`Aquavibe Marine Services provides seamless, competitive, and highly reliable physical bunker supply operations. Pumping the right specification of fuel, on-time, without operational delays is our core commitment.

We guarantee strict adherence to ISO 8217 standards and MARPOL Annex VI regulations for all our fuel deliveries. With our dedicated bunker barges and established local infrastructure, we ensure your vessel receives full quantity and uncompromised quality.`}
      features={[
        "Supply of strictly compliant VLSFO (Very Low Sulphur Fuel Oil)",
        "Premium LSMGO (Low Sulphur Marine Gas Oil)",
        "HFO (Heavy Fuel Oil) supply subject to scrubber requirements",
        "Transparent BDN (Bunker Delivery Note) procedures and sampling",
        "Dedicated pumping barges equipped with calibrated metering systems"
      ]}
    />
  );
}
