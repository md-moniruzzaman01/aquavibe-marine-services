import React from "react";

type Service = {
  title: string;
  image: string;
};

const services: Service[] = [
  { title: "Marine Fender Suppoly", image: "/services/2-min-2.png" },
  { title: "Crane grab rental service", image: "services/2-min-2.png" },
  { title: "Ship reparing & maintenance", image: "services/1-min-2.png" },
  { title: "Bunker Supply", image: "services/7-min.png" },
  { title: "Provision supply", image: "services/4-min.png" },
  { title: "Bond store supply", image: "services/5-min.png" },
  { title: "Store Supply", image: "services/6-min.png" },
  { title: "Cleaning Service", image: "services/8-min.png" },
  { title: "Security serice", image: "services/10-min.png" },
  { title: "Repaing serivces", image: "services/11.png" },
  { title: "Marine Lube oil", image: "services/12.png" },
  {
    title: "Ship Crane Repair & Crane spare parts supply services",
    image: "services/BOND-STORE-SUPPLY.png",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h6 className="text-sky-500 font-semibold uppercase text-sm tracking-widest">
            Our Services
          </h6>
          <h1 className="text-4xl font-bold mt-2">Explore Our Services</h1>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-3 shadow hover:shadow-lg transition duration-300"
            >
              {/* Image */}
              <div className="mb-5 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>

              <div className="mt-3 flex items-center gap-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="font-mono text-[10px] tracking-widest">
                  EXPLORE
                </span>
                <div className="w-4 h-px bg-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
