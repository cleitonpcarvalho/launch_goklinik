"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type ContactScrollLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

export function ContactScrollLink({
  children,
  onClick,
  ...props
}: ContactScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    const contactSection = document.getElementById("contato");

    if (!contactSection) {
      return;
    }

    event.preventDefault();
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.pushState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#contato`,
    );
  }

  return (
    <Link
      data-contact-scroll-link="true"
      href="/#contato"
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
