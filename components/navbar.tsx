"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import Container from "./container";

import Link from "next/link";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { XIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const navigation = [
    {
      name: "Home",
      href: `/`,
      active: pathname === "/",
    },
    {
      name: "About us",
      href: `/about`,
      active: pathname === "/about",
    },
    {
      name: "Services",
      href: `/services`,
      active: pathname === "/services",
    },
    {
      name: "Products",
      href: `/products`,
      active: pathname === "/products",
    },
    {
      name: "Teams",
      href: `/teams`,
      active: pathname === "/teams",
    },
    {
      name: "Partners",
      href: `/partners`,
      active: pathname === "/partners",
    },
    {
      name: "Contact",
      href: `/contact`,
      active: pathname === "/contact",
    },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white">
      <nav>
        <Container className="flex justify-between items-center py-3 border-b">
          <Link href="/">
            <Image
              src="/images/asnl-logo.png"
              alt="Kcast logo"
              width={100}
              height={100}
              quality={100}
            />
          </Link>
          <div className="hidden lg:flex gap-x-2 items-center">
            {navigation.map((nav) => (
              <Button
                variant={nav.active ? "secondary" : "ghost"}
                key={nav.name}
                className={nav.active ? "text-primary" : " text-[#0e0129]"}
                asChild
              >
                <Link href={nav.href}>{nav.name}</Link>
              </Button>
            ))}
          </div>
          <div className="lg:flex hidden">
            <div className="lg:flex items-center gap-2">
              <Button asChild>
                <Link className="flex items-center gap-1.5" href="/register">
                  Partners
                </Link>
              </Button>
            </div>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="link" className="lg:hidden">
                <span className="sr-only">Toggle menu</span>

                <AlignJustify className=" h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className=" sm:max-w-md border-none bg-gray-950"
            >
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 "
                >
                  <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                    <XIcon className="h-6 w-6 text-border" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                  <Image
                    src="/images/asnl-logo.png"
                    alt="Kcast logo"
                    width={100}
                    height={100}
                  />
                </Link>

                <div className="w-full pt-6 flex items-center flex-col gap-4">
                  <Button variant="secondary" size="lg" asChild>
                    <Link
                      className="flex items-center gap-1.5 w-full"
                      href="/login"
                    >
                      Login
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </Container>
      </nav>
    </header>
  );
}
