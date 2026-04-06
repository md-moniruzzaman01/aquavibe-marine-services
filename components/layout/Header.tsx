"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PRODUCTS = [
  { label: "Marine Fender Supply",               href: "/marine-fender-supply" },
  { label: "Ship Spare Parts",                   href: "/ship-crane-repair-and-crane-spare-parts-supply-services" },
  { label: "Marine Lube Oil",                    href: "/marine-lube-oil" },
  { label: "Physical Bunker And Lubricant Supply", href: "/bunker-supply" },
  { label: "Ship Stores Supply",                 href: "/store-supply" },
  { label: "Food Provisions Supply",             href: "/provision-supply" },
];

const NAV = [
  { label: "HOME",           href: "/" },
  { label: "ABOUT US",       href: "/about-us" },
  { label: "PRODUCTS",       href: "#", children: PRODUCTS },
  { label: "SERVICES",       href: "#", children: [{ label: "Ship Repair Services", href: "/ship-repairing-maintenance" }] },
  { label: "SERVICE PORT",   href: "/service-port" },
  { label: "MEDIA & EVENTS", href: "#" },
  { label: "CONTACT US",     href: "/contact-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop]     = useState<string | null>(null);

  return (
    <header className="w-full">
      {/* ── Logo row ── */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-[1222px] mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Image
              src="https://aquavibemarineservices.com/wp-content/uploads/2024/06/Untitled-design-1-min.png"
              alt="Aquavibe Marine Services"
              width={287} height={80}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>
          <div className="hidden lg:block">
            <Image
              src="https://aquavibemarineservices.com/wp-content/uploads/2024/06/LETTERHEAD-LOGO.png"
              alt="Certifications"
              width={245} height={80}
              className="h-16 w-auto object-contain"
            />
          </div>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#004d95] font-bold text-sm font-pt-sans"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕ Close" : "☰ Menu"}
          </button>
        </div>
      </div>

      {/* ── Nav bar ── */}
      <nav className="bg-[#004d95]" aria-label="Main navigation">
        <div className="max-w-[1222px] mx-auto px-4">
          {/* Desktop */}
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
                  className="flex items-center gap-1 px-[18px] py-5 font-pt-sans font-bold text-[13px] uppercase tracking-wide text-white hover:bg-white/15 transition-colors"
                >
                  {item.label}
                  {item.children && <span className="text-[10px] mt-0.5">▾</span>}
                </Link>
                {item.children && openDrop === item.label && (
                  <div className="absolute top-full left-0 z-50 bg-white rounded-[10px] shadow-lg min-w-[260px] py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2.5 font-pt-sans font-bold text-[12px] uppercase text-gray-700 border-b border-gray-100 last:border-0 hover:bg-gray-50 hover:text-[#004d95] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile */}
          {mobileOpen && (
            <ul className="lg:hidden flex flex-col py-2">
              {NAV.map((item) => (
                <li key={item.label}>
                  <button
                    className="w-full text-left px-4 py-3 font-pt-sans font-bold text-[13px] uppercase text-white hover:bg-white/15 flex justify-between"
                    onClick={() => setOpenDrop(openDrop === item.label ? null : item.label)}
                  >
                    {item.label}
                    {item.children && <span>{openDrop === item.label ? "▲" : "▼"}</span>}
                  </button>
                  {item.children && openDrop === item.label && (
                    <ul className="bg-white/10">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-8 py-2.5 font-pt-sans text-[12px] uppercase text-white/90 hover:text-white"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
