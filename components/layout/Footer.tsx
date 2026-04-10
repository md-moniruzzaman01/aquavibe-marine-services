import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "CONTACT US", href: "/contact-us" },
  { label: "SERVICES", href: "/services" },
];

const ChevronIcon = () => (
  <svg className="w-4 h-4 fill-[#1a3c6e] flex-shrink-0" viewBox="0 0 512 512">
    <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* CTA Banner */}
      <div className="bg-[#004d95] py-6">
        <div className="max-w-[1222px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-5 text-center">
          <h2 className="font-poppins text-[18px] font-semibold text-white">
            Need Marine Support? We’re Available 24/7
          </h2>
          <Link
            href="/contact-us"
            className="bg-[#83b735] text-white font-pt-sans font-bold text-[12px] uppercase px-5 py-2.5 rounded-sm hover:bg-[#6fa02b]"
          >
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1222px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <Link href="/" className="block mb-4  ">
              <Image
                src="/logo sfs.jpg" // replace with your logo
                alt="Sultan Fleet Serve"
                width={200}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              Sultan Fleet Serve is a trusted marine services provider in Bangladesh,
              offering ship supply, repair, underwater cleaning, and emergency
              vessel support across all major seaports.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins text-[15px] font-semibold uppercase mb-3">
              CONTACT US
            </h3>
            <hr className="mb-4" />

            <ul className="space-y-3 text-[13px] text-gray-600">
              <li>
                <b>Address:</b><br />
                Oriyent Building, 3 No. Fakirhat<br />
                Bandar, Chattogram – 4100, Bangladesh
              </li>

              <li>
                <b>Phone:</b><br />
                <Link href="tel:+8801624434052">+8801624434052</Link><br />
                <Link href="tel:+8801974434052">+8801974434052</Link>
              </li>

              <li>
                <b>Email:</b><br />
                <Link href="mailto:sultanfleetserve@gmail.com">
                  sultanfleetserve@gmail.com
                </Link><br />
                <Link href="mailto:smturzo@gmail.com">
                  smturzo@gmail.com
                </Link>
              </li>

              <li>
                <b>Service Areas:</b><br />
                Chattogram Port<br />
                Mongla Port<br />
                Payra Port
              </li>

              <li>
                <b>Availability:</b> 24 Hours / 7 Days
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins text-[15px] font-semibold uppercase mb-3">
              QUICK LINKS
            </h3>
            <hr className="mb-4" />

            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <ChevronIcon />
                  <Link
                    href={link.href}
                    className="text-[13px] text-gray-600 hover:text-[#004d95]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / WhatsApp */}
          <div>

            <div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100083117956862&tabs&width=260&height=130&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=602083018041110"
              width="260"
              height="130"
              className="border-none overflow-hidden block mb-3"
              scrolling="no"
              title="Aquavibe Facebook"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
           
            <h3 className="font-poppins text-[15px] font-semibold uppercase mb-3">
              GET IN TOUCH
            </h3>
            <hr className="mb-4" />

            <p className="text-[13px] text-gray-600 mb-4">
              Contact us via WhatsApp for quick response and instant service coordination.
            </p>

            <Link
              href="https://wa.me/8801624434052"
              target="_blank"
              className="inline-block bg-green-500 text-white px-4 py-2 text-sm rounded hover:bg-green-600"
            >
              WhatsApp Chat
            </Link>
          </div>


           
          </div>
        </div>

        {/* Sister Companies (optional keep/remove) */}
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

      {/* Copyright */}
      <div className="bg-[#333] py-4 text-center">
        <p className="text-[13px] text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            Sultan Fleet Serve
          </span>{" "}
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}



