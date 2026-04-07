import ProductPageTemplate from "@/components/templates/ProductPageTemplate";

export const metadata = {
  title: "Marine Lube Oil Supply | Aquavibe Marine",
  description: "Authorized distributor of top marine lubricants including engine oil, gear oil, and hydraulic fluids in Bangladesh major ports.",
};

export default function MarineLubeOilPage() {
  return (
    <ProductPageTemplate
      tag="LUBRICANTS"
      title="Marine Lube Oil Supply"
      subtitle="High-grade marine lubricants and specialty oils sourced from globally recognized brands for all vessel requirements."
      imageSrc="https://images.unsplash.com/photo-1635352697223-b1d551cb1c70?auto=format&fit=crop&q=80&w=1200"
      description={`Protecting your vessel's complex machinery requires superior lubrication. As an authorized supplier across Bangladesh, Aquavibe Marine delivers fresh, sealed, and certified marine lube oils exactly when and where you need them.

We stock and distribute a comprehensive range of major brands designed to handle the extreme load and temperatures of modern maritime operations, delivered safely via barge or truck depending on the port configuration.`}
      features={[
        "Supply of leading international marine lubricant brands",
        "Main engine cylinder oils and system oils",
        "High-performance hydraulic, gear, and compressor oils",
        "Environmentally Acceptable Lubricants (EAL) available upon request",
        "Bulk delivery via barge or drum/IBC delivery to deck"
      ]}
    />
  );
}
