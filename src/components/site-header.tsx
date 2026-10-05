"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { AccountIcon, BagIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/icons";

const navigation = [
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "Handbags", href: "/handbags" },
  { label: "Shoes", href: "/shoes" },
  { label: "Collections", href: "/collections" },
];

// Pages whose first section is a full-bleed image the header floats over.
const overlayRoutes = new Set(["/"]);

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const overlay = overlayRoutes.has(pathname);
  const transparent = overlay && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors ${
          transparent
            ? "bg-linear-to-b from-scrim to-transparent text-white"
            : "border-b border-border bg-background text-foreground"
        }`}
      >
        <div className="nav-bar">
          <div className="flex items-center">
            {/* btn-icon sets display, so visibility is toggled on a wrapper. */}
            <div className="-ml-2.5 lg:hidden">
              <button
                type="button"
                className="btn-icon"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex gap-7">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="type-label link-quiet">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <Link href="/" className="wordmark" aria-label="Atelier, home">
            Atelier
          </Link>

          <div className="-mr-2.5 flex items-center">
            <Link href="/search" className="btn-icon" aria-label="Search">
              <SearchIcon />
            </Link>
            <div className="hidden sm:block">
              <Link href="/account" className="btn-icon" aria-label="Account">
                <AccountIcon />
              </Link>
            </div>
            <Link href="/cart" className="btn-icon" aria-label="Shopping bag">
              <BagIcon />
            </Link>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="h-[calc(100svh-var(--header-height))] overflow-y-auto bg-background lg:hidden"
          >
            <ul className="container-page divide-y divide-border">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="type-title flex py-5"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/account" className="type-small link flex py-5" onClick={() => setMenuOpen(false)}>
                  Sign in or create an account
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Keeps content below the fixed header on pages without a full-bleed opener. */}
      {!overlay && <div aria-hidden="true" className="h-header shrink-0" />}
    </>
  );
}
