"use client";

import Button from "./Button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">

        {/* LEFT - Logo */}
        <div className="text-xl font-bold">
          ODSR Digital
        </div>

        {/* CENTER - NAV LINKS BOX */}
        <ul className="flex gap-8 items-center bg-white px-8 py-3 rounded-lg text-black shadow">

          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button>Services ▾</button>

            {open && (
              <div className="absolute top-8 bg-white shadow-lg p-4 rounded w-48">

                <Link href="/services/web" className="block py-2">
                  Web and App Development
                </Link>

                <Link href="/services/cloud" className="block py-2">
                  Marketing Andlysis with GA4 and Tag Manager
                </Link>

                <Link href="/services/ai" className="block py-2">
                  Hosting and Infrastructure with Azure
                </Link>
                <Link href="/services/web" className="block py-2">
                  Automated Testing with Cypress
                </Link>
                <Link href="/services/web" className="block py-2">
                  AI- Powered Workflows
                </Link>
                <Link href="/services/web" className="block py-2">
                 Umbraco website development
                </Link>
                <Link href="/services/web" className="block py-2">
                  Customer Acqisation journeys
                </Link>

              </div>
            )}
          </li>

          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>

          <li>
            <Link href="/insights">Insights</Link>
          </li>

        </ul>

        {/* RIGHT - BUTTON */}
        <Button text = "Book a call"/>
        

      </div>

    </nav>
  );
}