"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Updated to match your data objects
const PRODUCTS = [
  { label: "All Products", href: "/products" },
  { label: "Yokohama Pneumatic Fender", href: "/products/yokohama-fender" },
  { label: "Remote Control Grab Bucket", href: "/products/remote-control-grab" },
  { label: "Marine Spare Parts Supply", href: "/products/spare-parts-supply" },
  { label: "Excavator Rental & Supply", href: "/products/excavator-supply" },
];

// Updated to match your data objects
const SERVICES = [
  { label: "All Services", href: "/services" },
  { label: "Marine Boat & Logistics", href: "/services/boat-service" },
  { label: "Underwater Hull Cleaning", href: "/services/hull-cleaning" },
  { label: "Cargo Hold Cleaning", href: "/services/cargo-hold-cleaning" },
  { label: "Grab Repair & Maintenance", href: "/services/grab-repair" },
  { label: "Crane Repair & Maintenance", href: "/services/crane-repair" },
  { label: "Main Engine Repair & Overhaul", href: "/services/main-engine-repair" },
];

const NAV = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "PRODUCTS", href: "/products", children: PRODUCTS },
  {
    label: "SERVICES",
    href: "/services",
    children: SERVICES,
  },
  { label: "SERVICE PORT", href: "/service-port" },
  { label: "CONTACT US", href: "/contact-us" },
];

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  // Prevent scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  // 🔥 Smooth navigation handler (FIXED)
  const handleNavigate = (href: string) => {
    setMobileOpen(false);
    setOpenDrop(null);

    setTimeout(() => {
      router.push(href); // ✅ no reload, smooth
    }, 300); // match animation duration
  };

  return (
    <header className="w-full">
      {/* Logo */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-[1222px] mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo sfs.jpg"
              alt="logo"
              width={287}
              height={80}
              className="h-16 w-auto"
            />
          </Link>
          <div className="hidden lg:block">
            <Image
              src="/LETTERHEAD-LOGO.png"
              alt="Certifications"
              width={245} height={80}
              className="h-16 w-auto object-contain"
            />
          </div>

          <button
            className="lg:hidden text-primary font-bold"
            onClick={() => setMobileOpen(true)}
          >
            ☰ Menu
          </button>
        </div>
      </div>

            {/* ── Desktop Nav ── */}
      <nav className="bg-primary">
        <div className="max-w-[1222px] mx-auto px-4">
          <ul className="hidden lg:flex items-center justify-center">
            {NAV.map((item) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDrop(item.label)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-[18px] py-5 text-[13px] font-bold uppercase text-white hover:bg-white/15"
                >
                  {item.label}
                  {item.children && <span className="text-[10px]">▾</span>}
                </Link>

                {item.children && openDrop === item.label && (
                  <div className="absolute top-full left-0 bg-white rounded shadow-lg min-w-[260px] py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2 text-[12px] font-bold uppercase text-gray-700 hover:bg-gray-100 hover:text-[#004d95]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>


      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 left-0 h-full w-[280px] bg-white transform transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between p-4 border-b">
            <span className="font-bold">Menu</span>
            <button onClick={() => setMobileOpen(false)}>✕</button>
          </div>

          <ul className="py-2">
            {NAV.map((item, index) => (
              <li
                key={item.label}
                className={`transition-all duration-300 ${
                  mobileOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* MAIN CLICK */}
                {!item.children ? (
                  <button
                    onClick={() => handleNavigate(item.href)}
                    className="w-full text-left px-4 py-3 font-bold text-sm uppercase"
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setOpenDrop(
                        openDrop === item.label ? null : item.label
                      )
                    }
                    className="w-full text-left px-4 py-3 font-bold text-sm uppercase flex justify-between"
                  >
                    {item.label}
                    <span>{openDrop === item.label ? "▲" : "▼"}</span>
                  </button>
                )}

                {/* Dropdown */}
                {item.children && (
                  <ul
                    className={`overflow-hidden transition-all duration-300 ${
                      openDrop === item.label
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-gray-100">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <button
                            onClick={() => handleNavigate(child.href)}
                            className="block w-full text-left px-6 py-2 text-xs uppercase"
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}