import ProductPageTemplate from "@/components/templates/ProductPageTemplate";

export const metadata = {
  title: "Food Provisions Supply | Aquavibe Marine",
  description: "Fresh, frozen, and dry food provisions supplied to maritime vessels across Bangladesh ports.",
};

export default function ProvisionSupplyPage() {
  return (
    <ProductPageTemplate
      tag="FOOD & PROVISIONS"
      title="Provision Supply"
      subtitle="High-quality fresh, frozen, and dry food provisions catering to multinational crews."
      imageSrc="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200"
      description={`Crew welfare starts with exceptional food. Aquavibe Marine is highly experienced in sourcing and supplying top-tier food provisions for diverse, multinational crews operating in demanding environments.

All provisions are sourced from HACCP-certified local and international suppliers. From premium cuts of frozen meat to fresh local produce, we manage a rigorous cold-chain logistics process so your food arrives fresh and safe.`}
      features={[
        "Fresh seasonal fruits, vegetables, and dairy products",
        "Frozen meats, poultry, and seafood stored in specialized reefer units",
        "Dry provisions, canned goods, and long-shelf-life staples",
        "Specialized items for multinational crews (Indian, Filipino, European, etc.)",
        "Bonded stores supply including duty-free tobacco and beverages (subject to customs allowance)"
      ]}
    />
  );
}
