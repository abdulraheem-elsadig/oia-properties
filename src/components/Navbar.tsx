"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ArrowRight, ChevronDown, Heart, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function Navbar() {
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);

  return (
    <div className="border-b">
      {/* navbar top part */}
      <div className="bg-[#01062D] h-16 hidden lg:block">
        <div className="container w-full flex items-center justify-end h-full">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer flex items-center justify-center text-white font-semibold text-sm gap-2 ">
              <Image
                src={activeLanguage.flag}
                width={24}
                height={16}
                alt={activeLanguage + "flag"}
              />
              {activeLanguage.label}
              <ChevronDown className="size-4 text-6xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.map((item) => (
                <DropdownMenuItem
                  key={item.label}
                  onClick={() => setActiveLanguage(item)}
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* navbar main */}
      <div className="container h-14 flex items-center justify-between ">
        {/* logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={60}
            height={60}
            className=""
          />
        </Link>

        {/* desktop links */}
        <ul className=" gap-6 hidden lg:flex">
          {navLinks.map((item) => (
            <li key={item.label} className="flex items-center">
              {item.data ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer uppercase flex items-center justify-center text-gray-500 font-semibold text-sm">
                    {item.label}
                    <ChevronDown className="size-4 text-6xl" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.data.map((item) => (
                      <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/" className="uppercase font-semibold text-sm">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* navbar actions */}
        <div className="space-x-2 flex items-center">
          <Button className="hidden lg:flex">
            Free Consultation <ArrowRight />
          </Button>
          <Button variant="secondary" className="rounded-sm">
            <Heart className="size-5 text-primary" />
          </Button>

          {/* mobile navigation */}
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <MenuIcon className="size-6" />
            </SheetTrigger>
            <SheetContent>
              <ul className="px-8 space-y-6 mt-16 ">
                {navLinks.map((item) => (
                  <li key={item.label} className="flex items-center">
                    {item.data ? (
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="cursor-pointer uppercase text-gray-500 font-semibold text-sm">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent className="flex flex-col px-4 gap-3">
                            {item.data.map((item) => (
                              <Link href="/" key={item}>
                                {item}
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        href="/"
                        className="uppercase font-semibold text-sm"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

const navLinks = [
  { label: "Rent/Buy", href: "/" },
  { label: "Area", data: ["Dubai", "Abu Dhabi", "Sharja"] },
  {
    label: "Project",
    data: ["Project 1", "Project 2", "Project 3"],
  },
  {
    label: "Developer",
    data: ["Developer 1", "Developer 2", "Developer 3"],
  },
  { label: "List Your Property", href: "/" },
];

const languages = [
  {
    label: "English",
    flag: "https://www.worldometers.info/img/flags/uk-flag.gif",
  },

  {
    label: "Arabic",
    flag: "https://www.worldometers.info/img/flags/ae-flag.gif",
  },
];
