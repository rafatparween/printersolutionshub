
'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const BlogFooter = () => {
  return (
    <footer className="bg-black text-gray-300 font-mono text-[17px]">
      <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col items-center">

        {/* Top Text - Bold & Centered */}
        <div className="text-center text-[18px] font-semibold leading-relaxed text-gray-300 mb-5 px-2">
          © <span className="text-orange-400">2025</span> 123printersolutionshub. All Rights Reserved. — Not affiliated with HP, Canon, Epson, or any other printer brand.
        </div>

        {/* Centered Links */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-400 text-[17px] mb-6">
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <span className="text-gray-600">|</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span className="text-gray-600">|</span>
          <Link href="/refund" className="hover:text-white transition-colors">Refunds</Link>
          <span className="text-gray-600">|</span>
          <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          <span className="text-gray-600">|</span>
          <Link href="/contacts" className="hover:text-white transition-colors">Contact Us</Link>
        </div>

        {/* Social Icons at the Bottom */}
        <div className="flex justify-center space-x-6 mt-auto">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            <FaYoutube size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default BlogFooter;
