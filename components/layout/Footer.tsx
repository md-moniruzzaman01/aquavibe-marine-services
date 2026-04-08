import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "HOME",           href: "/" },
  { label: "ABOUT US",       href: "/about-us" },
  { label: "CONTACT US",     href: "/contact-us" },
  { label: "SERVICES",       href: "/services" },
  { label: "MEDIA & EVENTS", href: "#" },
];

const ChevronIcon = () => (
  <svg className="w-4 h-4 fill-[#1a3c6e] flex-shrink-0" viewBox="0 0 512 512">
    <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* ── CTA Banner ── */}
      <div className="bg-[#004d95] py-6">
        <div className="max-w-[1222px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-5 text-center">
          <h2 className="font-poppins text-[18px] font-semibold text-white">
            If You Have Any Query, Feel Free To Contact US
          </h2>
          <Link
            href="/contact-us"
            className="bg-[#83b735] text-white font-pt-sans font-bold text-[12px] uppercase tracking-wide px-5 py-2.5 rounded-sm hover:bg-[#6fa02b] transition-colors whitespace-nowrap"
          >
            CONTACT US
          </Link>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-[1222px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 – Logo & about */}
          <div>
            <Link href="/" className="block mb-4">
              <Image
                src="https://aquavibemarineservices.com/wp-content/uploads/2024/06/Untitled-design-6-min.png"
                alt="Aquavibe Marine Services"
                width={200}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              Aquavibe Marine Services is a Ship Equipment Supply and Rental company located in
              Chittagong.
            </p>
          </div>

          {/* Col 2 – Contact */}
          <div>
            <h3 className="font-poppins text-[15px] font-semibold text-gray-800 uppercase mb-3">
              CONTACT US
            </h3>
            <hr className="border-gray-200 mb-4" />
            <ul className="space-y-3 text-[13px] text-gray-600">
              <li className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 fill-[#004d95] mt-0.5 flex-shrink-0" viewBox="0 0 384 512">
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                </svg>
                <span><b className="text-gray-800">Address:</b> 6th floor, 146/A Simla House, Agrabad Chittagong 4100. Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 fill-[#004d95] flex-shrink-0" viewBox="0 0 320 512">
                  <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"/>
                </svg>
                <Link href="tel:+8801728841299" className="hover:text-[#004d95]">
                  <b className="text-gray-800">Mobile:</b> +8801728841299
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 fill-[#004d95] flex-shrink-0" viewBox="0 0 512 512">
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
                </svg>
                <Link href="tel:+8801521387459" className="hover:text-[#004d95]">
                  <b className="text-gray-800">Mobile:</b> +8801521387459
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 fill-[#004d95] flex-shrink-0" viewBox="0 0 576 512">
                  <path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"/>
                </svg>
                <Link href="mailto:aquavibe2023@gmail.com" className="hover:text-[#004d95]">
                  <b className="text-gray-800">Email:</b> aquavibe2023@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 – Quick Links */}
          <div>
            <h3 className="font-poppins text-[15px] font-semibold text-gray-800 uppercase mb-3">
              QUICK LINKS
            </h3>
            <hr className="border-gray-200 mb-4" />
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <ChevronIcon />
                  <Link
                    href={link.href}
                    className="text-[13px] text-gray-600 hover:text-[#004d95] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Social */}
          <div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fprofile.php%3Fid%3D100089839892179&tabs&width=260&height=130&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=602083018041110"
              width="260"
              height="130"
              className="border-none overflow-hidden block mb-3"
              scrolling="no"
              title="Aquavibe Facebook"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
            <div className="flex gap-3 mt-2">
              <Link href="https://www.instagram.com/aquavibe2023/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://aquavibemarineservices.com/wp-content/uploads/2024/06/instagram-min.png"
                  alt="Instagram"
                  width={40} height={40}
                  className="w-10 h-10 object-contain hover:scale-110 transition-transform"
                />
              </Link>
              <Link href="https://bd.linkedin.com/company/aquavibe-marine-services" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://aquavibemarineservices.com/wp-content/uploads/2024/06/linkedin-1-min.png"
                  alt="LinkedIn"
                  width={40} height={40}
                  className="w-10 h-10 object-contain hover:scale-110 transition-transform"
                />
              </Link>
            </div>
          </div>

        </div>

        {/* ── Sister Companies ── */}
        <div className="mt-12 pt-8 border-t border-[#004d95]/10">
          <h3 className="font-poppins text-[15px] font-semibold text-[#004d95] uppercase mb-6 text-center tracking-wide">
            Our Sister Companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 opacity-90 hover:opacity-100 transition-opacity">
            <Image
              src="/sultan tour and travels .jpg"
              alt="Sultan Tour and Travels"
              width={160}
              height={80}
              className="h-16 w-auto object-contain hover:scale-105 transition-transform"
            />
            <Image
              src="/logo seaking.jpg"
              alt="Sea King"
              width={160}
              height={80}
              className="h-16 w-auto object-contain hover:scale-105 transition-transform"
            />
            <Image
              src="/logo taqwa.jpg"
              alt="Taqwa"
              width={160}
              height={80}
              className="h-16 w-auto object-contain hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="bg-[#333] py-4">
        <div className="max-w-[1222px] mx-auto px-4 text-center">
          <p className="text-[13px] text-gray-400">
            Copyright © 2024{" "}
            <Link href="/" className="text-white font-bold hover:underline">
              Aquavibe Marine Services
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
