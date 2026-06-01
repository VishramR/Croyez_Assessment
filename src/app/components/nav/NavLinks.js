"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Canada PR", href: "/services/canada-pr" },
      { label: "Express Entry", href: "/services/express-entry" },
      { label: "PNP Programs", href: "/services/pnp" },
      { label: "Family Sponsorship", href: "/services/family-sponsorship" },
      { label: "Work Permits", href: "/services/work-permits" },
      { label: "PR Consultation", href: "/services/pr-consultation" },
    ],
  },
  { label: "Process", href: "/process" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const ChevronIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export const NavLinks = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  const toggleDropdown = (label) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  return (
    <>
      <ul role="list" className="hidden lg:flex items-center gap-1">
        {navLinks.map((link) =>
          link.children ? (
            <li key={link.label} className="relative group">
              <button
                aria-haspopup="true"
                aria-expanded="false"
                className={`nav-text flex items-center gap-1 px-3 py-2 rounded transition-colors
                  ${
                    isActive(link.href)
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
              >
                {link.label}
                <ChevronIcon className="w-3.5 h-3.5 mt-0.5 transition-transform duration-200 group-hover:rotate-180" />

                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-600 rounded-full" />
                )}
              </button>

              <ul
                role="list"
                className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
              >
                {link.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      aria-current={isActive(child.href) ? "page" : undefined}
                      className={`block px-4 py-2.5 nav-text transition-colors first:rounded-t-lg last:rounded-b-lg
                        ${
                          isActive(child.href)
                            ? "text-red-600 bg-red-50 font-medium"
                            : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                        }`}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={link.label}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`nav-text relative block px-3 py-2 rounded transition-colors
                  ${
                    isActive(link.href)
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-600 rounded-full" />
                )}
              </Link>
            </li>
          ),
        )}
      </ul>

      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        className="lg:hidden flex flex-col justify-start gap-1.5 p-2 rounded hover:bg-gray-100 transition-colors"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center
          ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300
          ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center
          ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300
          ${menuOpen ? "visible" : "invisible"}`}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300
            ${menuOpen ? "opacity-100" : "opacity-0"}`}
        />

        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col
            transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <span className="text-xl font-bold text-red-600">Croyez</span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-1.5 rounded hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul
            role="list"
            className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-1"
          >
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded nav-text transition-colors
                      ${
                        isActive(link.href)
                          ? "text-red-600 font-semibold bg-red-50"
                          : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }`}
                  >
                    {link.label}
                    <ChevronIcon
                      className={`w-4 h-4 transition-transform duration-200
                        ${openDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  <ul
                    role="list"
                    className={`pl-3 flex flex-col gap-0.5 overflow-hidden transition-all duration-200
                      ${openDropdown === link.label ? "max-h-96 mt-1 mb-1" : "max-h-0"}`}
                  >
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          aria-current={
                            isActive(child.href) ? "page" : undefined
                          }
                          className={`block px-3 py-2 rounded nav-text transition-colors
                            ${
                              isActive(child.href)
                                ? "text-red-600 bg-red-50 font-medium"
                                : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                            }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`flex items-center px-3 py-2.5 rounded nav-text transition-colors
                      ${
                        isActive(link.href)
                          ? "text-red-600 font-semibold bg-red-50 border-l-2 border-red-600 pl-4"
                          : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="px-4 py-4 border-t border-gray-100">
            <a
              href="/eligibility"
              className="btn-primary w-full justify-center"
            >
              Free Eligibility Check
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
