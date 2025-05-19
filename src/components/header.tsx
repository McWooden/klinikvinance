'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 w-full">
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/image/logo.png" alt="Venice Clinic" width={130} height={80} className="h-[8rem] w-auto" />
          </Link>
          <nav className="hidden md:flex space-x-10 items-center">
            <Link
              href="/"
              className={`text-xl font-semibold ${
                pathname === '/' ? 'text-[#417f5a]' : 'text-gray-400 hover:text-[#417f5a]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/service"
              className={`text-xl font-semibold ${
                pathname === '/service' ? 'text-[#417f5a]' : 'text-gray-400 hover:text-[#417f5a]'
              }`}
            >
              Services
            </Link>
            <a href="#about-us" className="text-xl font-semibold text-gray-400 hover:text-[#417f5a]">
              About Us
            </a>
            <a href="#how-it-works" className="text-xl font-semibold text-gray-400 hover:text-[#417f5a]">
              How It Works
            </a>
          </nav>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#4E8966] hover:bg-[#417f5a] text-white font-semibold text-xl px-10 py-3 rounded-full transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden mr-7">
            <input type="checkbox" id="menu-toggle" className="peer hidden" />
            <label htmlFor="menu-toggle" className="cursor-pointer z-50 relative">
              <span className="text-3xl">☰</span>
            </label>
            <div className="absolute top-full left-0 bg-white shadow-lg hidden peer-checked:flex flex-col z-40 w-auto max-w-[90%] px-4">
            <ul className="flex flex-col space-y-4 py-6 w-[400px] max-w-full">
                <li>
                  <Link
                    href="/"
                    className={`block font-medium ${pathname === '/' ? 'text-[#417f5a]' : 'hover:text-[#417f5a]'}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className={`block font-medium ${pathname === '/service' ? 'text-[#417f5a]' : 'hover:text-[#417f5a]'}`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <a href="#about-us" className="block font-medium hover:text-[#417f5a]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="block font-medium hover:text-[#417f5a]">
                    How It Works
                  </a>
                </li>
                <li>
                <a
  href="#contact"
  className="bg-[#4E8966] hover:bg-[#417f5a] text-white py-3 px-6 rounded-full font-semibold w-fit self-center"
>
  Contact Us
</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
