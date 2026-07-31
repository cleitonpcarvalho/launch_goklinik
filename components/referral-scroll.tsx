"use client";

import { useEffect } from "react";

export function ReferralScroll() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (!params.has("r")) {
      return;
    }

    function scrollToContact() {
      document.getElementById("contato")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (document.readyState === "complete") {
      scrollToContact();
      return;
    }

    window.addEventListener("load", scrollToContact, { once: true });

    return () => window.removeEventListener("load", scrollToContact);
  }, []);

  return null;
}
