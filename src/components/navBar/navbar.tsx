"use client";

import type { JSX } from "react";
import Link from "next/link";
import { useState } from "react";
import { MagnifyingGlassIcon, PhoneIcon } from "@heroicons/react/24/outline";

type DropdownItem = {
  label?: string;
  path?: string;
  img?: string;
  submenu?: DropdownItem[];
};

type NavLink = {
  label?: string;
  path?: string;
  img?: string;
  dropdown?: DropdownItem[];
};

const navLinks: NavLink[] = [
  {
    label: "Home",
    dropdown: [
      { img: "/HomeTab/dark-1.jpg", label: "Home 1", path: "/" },
      { img: "/HomeTab/dark-2.jpg", label: "Home 2", path: "/" },
      { img: "/HomeTab/mega-menu-1.jpg", label: "Home 3", path: "/" },
    ],
  },
  {
    label: "About",
    dropdown: [
      { label: "About Us", path: "/about/aboutUs" },
      { label: "Price", path: "/about/price" },
      {
        label: "Events",
        path: "/about/events",
        submenu: [
          { label: "Events", path: "/about/events/events" },
          { label: "Event Details", path: "/about/events/eventDetails" },
        ],
      },
    ],
  },
  {
    label: "Pages",
    dropdown: [
      { label: "FAQ'S", path: "/pages/faqs" },
      { label: "PRAYER TIME", path: "/pages/prayerTime" },
      { label: "RECORD CLASS", path: "/pages/recoredClass" },
      { label: "REGISTER", path: "/pages/register" },
      { label: "NOT FOUND", path: "/pages/notFound" },
      {
        label: "SCHOLARDS",
        path: "/pages/scholards",
        submenu: [
          { label: "Scholards", path: "/pages/scholards/scholards" },
          { label: "Scholard Details", path: "/pages/scholards/scholardsDetails" },
        ],
      },
    ],
  },
  {
    label: "Service",
    dropdown: [
      { label: "services", path: "/service/service" },
      { label: "Service Details", path: "/service/serviceDetails" },
    ],
  },
  {
    label: "Courses",
    dropdown: [
      { label: "COURSES", path: "/courses/courses" },
      { label: "COURSE DETAILS", path: "/courses/courseDetails" },
    ],
  },
  {
    label: "Blog",
    dropdown: [
      { label: "OUR BLOG", path: "/blog/ourBlog" },
      { label: "BLOG CLASIC", path: "/blog/blogClasic" },
      { label: "BLOG DETAILS", path: "/blog/blogDetails" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

export default function Navbar(): JSX.Element {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-10 py-6 shadow mx-auto relative bg-white md:h-16">
      {/* Logo */}
      <Link href="/">
        <img src="/logo/logo.svg" alt="Al Quraan logo" className="h-10 w-auto" />
      </Link>

      {/* Hamburger - Mobile only */}
      <button
        className="md:hidden ml-28 flex flex-col gap-1"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 text-xl font-bold">
        {navLinks.map((link, index) => {
          const hasDropdown = link.dropdown && link.dropdown.length > 0;
          return (
            <li
              key={`${link.label}-${index}`} 
              className="relative"
              onMouseEnter={() => hasDropdown && link.label && setDropdownOpen(link.label)}
              onMouseLeave={() => {
                setDropdownOpen(null);
                setSubmenuOpen(null);
              }}
            >
              {link.path ? (
                <Link href={link.path} className="hover:text-green-600">
                  {link.label}
                </Link>
              ) : (
                <span className="cursor-pointer hover:text-green-600">{link.label}</span>
              )}

              {hasDropdown && dropdownOpen === link.label && (
                <ul className="absolute top-full left-0 bg-white rounded-md shadow-lg min-w-50 z-50 transition-all duration-300">
                  {link.dropdown!.map((item, idx) => {
                    const hasSubmenu = item.submenu && item.submenu.length > 0;
                    return (
                      <li
                        key={`${item.label}-${idx}`} 
                        className="relative"
                        onMouseEnter={() => hasSubmenu && setSubmenuOpen(item.label!)}
                        onMouseLeave={() => hasSubmenu && setSubmenuOpen(null)}
                      >
                        {item.img ? (
                          <div className="flex flex-col w-fit items-center p-2 hover:bg-gray-100 rounded-lg">
                            <img
                              src={item.img}
                              alt={item.label}
                              className="w-48 h-32 object-cover rounded"
                            />
                            <span className="mt-2 text-sm font-semibold text-gray-700">
                              {item.label}
                            </span>
                          </div>
                        ) : (
                          <Link
                            href={item.path ?? ""}
                            className="block px-4 py-2 hover:bg-green-600 hover:text-white"
                          >
                            {item.label}
                          </Link>
                        )}

                        {/* Submenu */}
                        {hasSubmenu && submenuOpen === item.label && (
                          <ul className="absolute top-0 left-full bg-white rounded-xl shadow-lg min-w-[200px]">
                            {item.submenu!.map((sub, subIdx) => (
                              <li key={`${sub.label}-${subIdx}`}>
                                <Link
                                  href={sub.path ?? ""}
                                  className="block py-2 hover:bg-green-600 hover:text-white"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden z-50">
          <ul className="flex flex-col divide-y">
            {navLinks.map((link, index) => (
              <li key={`${link.label}-mobile-${index}`} className="px-6 py-4">
                <div
                  className="font-bold flex justify-between items-center"
                  onClick={() => {
                    if (!link.label) return;
                    setDropdownOpen(dropdownOpen === link.label ? null : link.label);
                  }}
                >
                  {link.label}
                  {link.dropdown && <span>+</span>}
                </div>

                {link.dropdown && dropdownOpen === link.label && (
                  <ul className="mt-2 ml-4 flex flex-col gap-2">
                    {link.dropdown.map((item, idx) => (
                      <li key={`${item.label}-mobile-${idx}`}>
                        {item.path ? (
                          <Link
                            href={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-gray-700"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="text-gray-700">{item.label}</span>
                        )}

                        {item.submenu && (
                          <ul className="ml-4 mt-1">
                            {item.submenu.map((sub, subIdx) => (
                              <li key={`${sub.label}-mobile-${subIdx}`}>
                                <Link
                                  href={sub.path ?? ""}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1 text-sm text-gray-600"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact & Search */}
      <div className="hidden md:flex items-center gap-4 relative z-50">
        <Link href="/contact">
          <PhoneIcon className="h-5 w-5 cursor-pointer" />
        </Link>
        <button type="button" className="hover:text-green-700">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Quick join button */}
      <Link href="/contact/contact">
        <button className="hidden lg:block ml-5 px-4 py-3 bg-green-800 text-white font-bold rounded-lg hover:bg-black transition">
          Quick join now
        </button>
      </Link>
    </nav>
  );
}
