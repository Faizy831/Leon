"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Forces an instant jump to the top on every route change. `scroll-behavior:
// smooth` on <html> (used for in-page anchor links) otherwise smooths out
// Next.js's own scroll-reset too, so navigating to a new page can land
// mid-scroll instead of at the top.
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
