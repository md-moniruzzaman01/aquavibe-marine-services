import ProductPageTemplate from "@/components/templates/ProductPageTemplate";

export const metadata = {
  title: "Ship Crane Repair & Spare Parts | Aquavibe Marine",
  description: "Genuine OEM marine crane spare parts and certified vessel repair services in Bangladesh.",
};

export default function ShipCraneRepairsPage() {
  return (
    <ProductPageTemplate
      tag="SPARE PARTS & REPAIR"
      title="Ship Crane Repair & Spare Parts"
      subtitle="Comprehensive repair services, troubleshooting, and global sourcing for genuine marine crane parts and auxiliary machinery."
      imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200"
      description={`Technical downtime hurts port turnaround schedules. Our specialized engineering division handles emergency deck equipment and ship crane repairs, minimizing delays around the clock.

Supported by our global sourcing network, we supply genuine OEM and high-quality replacement parts for deck cranes, main engines, generators, and auxiliary machinery directly to boarded vessels or at anchorage.`}
      features={[
        "Genuine and OEM crane spare parts (Liebherr, MacGregor, TTS, etc.)",
        "Expert troubleshooting of hydraulic and electronic crane systems",
        "Wire rope supply and emergency replacement services",
        "Supply of main engine and auxiliary engine components",
        "24/7 boarding of certified marine engineers for fast repairs",
      ]}
    />
  );
}
