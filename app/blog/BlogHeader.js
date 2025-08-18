"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function PageHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Printer Offline", path: "/printeroffline" },
    { label: "Printer Setup", path: "/printersetup" },
    { label: "Scanner Setup", path: "/scannersetup" },
    { label: "Support Home", path: "/supporthome" },
    { label: "Ink Cartridges Issue", path: "/inkissue" },
    { label: "Diagnostics", path: "/diagnostics" },
    { label: "Business Support", path: "/businesssupport" },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Navigation Bar */}
      <nav className="bg-gray-950 border-b border-gray-800 text-white w-full">
        <div className="max-w-[90.33%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <FiMenu />
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex justify-between items-center w-full">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="relative text-sm sm:text-base md:text-lg font-medium whitespace-nowrap px-3 transition-colors duration-200 hover:text-cyan-300"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          role="presentation"
        />
      )}

      {/* Mobile sliding menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="h-16 flex items-center justify-end pr-4 border-b border-gray-800">
          <button
            className="text-white text-3xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col px-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block py-4 text-lg font-medium border-b border-gray-800 last:border-0 hover:text-cyan-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
